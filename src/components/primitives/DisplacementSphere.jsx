import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./DisplacementSphere.module.css";

// Esfera 3D (icosaedro) com deslocamento de vértices animado por ruído
// e parallax de mouse. Iluminada com terracota + ciano da paleta.
export default function DisplacementSphere() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch (e) {
      return; // sem WebGL: hero continua legível, canvas fica vazio
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const parent = canvas.parentElement;
    let width = parent.clientWidth;
    let height = parent.clientHeight;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.z = 5.4;

    const RADIUS = 2;
    const geometry = new THREE.IcosahedronGeometry(RADIUS, 4);
    const base = Float32Array.from(geometry.attributes.position.array);
    const vertexCount = geometry.attributes.position.count;

    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#1b1b1f"),
      roughness: 0.42,
      metalness: 0.65,
      flatShading: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const key = new THREE.DirectionalLight(new THREE.Color("#d7a67c"), 3.2); // terracota
    key.position.set(-6, 5, 4);
    const rim = new THREE.DirectionalLight(new THREE.Color("#57cfe0"), 2.4); // ciano
    rim.position.set(6, -4, 2);
    const ambient = new THREE.AmbientLight(0xffffff, 0.14);
    scene.add(key, rim, ambient);

    // Ruído pseudo-3D barato (sem dependência externa).
    const noise = (x, y, z, t) =>
      Math.sin(x * 2.6 + t) * 0.5 +
      Math.cos(y * 3.1 - t * 0.7) * 0.3 +
      Math.sin(z * 3.7 + t * 0.5) * 0.4;

    const pos = geometry.attributes.position;
    const displace = (t) => {
      for (let i = 0; i < vertexCount; i++) {
        const ix = i * 3;
        const bx = base[ix];
        const by = base[ix + 1];
        const bz = base[ix + 2];
        const inv = 1 / Math.hypot(bx, by, bz);
        const nx = bx * inv;
        const ny = by * inv;
        const nz = bz * inv;
        const d = RADIUS + noise(nx, ny, nz, t) * 0.26;
        pos.array[ix] = nx * d;
        pos.array[ix + 1] = ny * d;
        pos.array[ix + 2] = nz * d;
      }
      pos.needsUpdate = true;
      geometry.computeVertexNormals();
    };

    // Parallax de mouse (suavizado).
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    const onPointer = (e) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointer);

    const onResize = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(parent);

    let raf;
    let start = performance.now();
    const render = (now) => {
      const t = (now - start) * 0.0006;
      displace(t);
      current.x += (target.x - current.x) * 0.05;
      current.y += (target.y - current.y) * 0.05;
      mesh.rotation.y = t * 0.5 + current.x * 0.4;
      mesh.rotation.x = Math.sin(t * 0.6) * 0.12 + current.y * 0.3;
      renderer.render(scene, camera);
      if (!reduce) raf = requestAnimationFrame(render);
    };

    if (reduce) {
      displace(0.6);
      renderer.render(scene, camera);
    } else {
      raf = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      ro.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
