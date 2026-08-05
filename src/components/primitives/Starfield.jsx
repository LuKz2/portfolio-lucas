import React, { useEffect, useRef } from "react";
import styles from "./Starfield.module.css";

// Campo de estrelas fixo atrás da página inteira. Ao rolar rápido, as estrelas
// viram traços (efeito de "hipervelocidade"). Abstrato e na paleta quente.
export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let stars = [];

    const build = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(Math.round((w * h) / 6500), 220);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 0.7 + 0.3, // profundidade: 0.3..1
        tw: Math.random() * Math.PI * 2, // fase do brilho
        warm: Math.random() < 0.18, // algumas terracota
      }));
    };
    build();
    window.addEventListener("resize", build);

    let vel = 0;
    let last = window.scrollY;
    let time = 0;
    let raf;

    const frame = () => {
      time += 0.016;
      const cur = window.scrollY;
      const delta = cur - last;
      last = cur;
      vel = reduce ? 0 : vel * 0.82 + delta * 0.18;

      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        // deriva vertical proporcional à velocidade de scroll
        if (!reduce) {
          s.y -= vel * s.z * 0.9 + s.z * 0.04;
          if (s.y < 0) s.y += h;
          else if (s.y > h) s.y -= h;
        }

        const twinkle = 0.7 + Math.sin(time * 1.5 + s.tw) * 0.3;
        const alpha = s.z * 0.5 * twinkle;
        const streak = Math.min(Math.abs(vel) * s.z * 0.8, 42);
        const color = s.warm ? "215,166,124" : "255,246,238";

        if (streak < 1.2) {
          ctx.fillStyle = `rgba(${color},${alpha})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.z * 1.1, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const dir = Math.sign(vel);
          ctx.strokeStyle = `rgba(${color},${alpha})`;
          ctx.lineWidth = s.z * 1.1;
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x, s.y + streak * dir);
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
