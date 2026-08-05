import React, { useEffect, useRef, useState } from "react";
import { cx } from "../utils/cx";
import styles from "./CustomCursor.module.css";

const INTERACTIVE = "a, button, input, textarea, label, [data-cursor]";

// Cursor: um triângulo terracota que aponta na direção do movimento
// + um anel com inércia que cresce sobre elementos interativos.
// Só em ponteiro fino; respeita movimento reduzido.
export default function CustomCursor() {
  const ringRef = useRef(null);
  const arrowRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { ...target };
    let prev = { ...target };
    let angle = 0; // graus, apex do triângulo
    let targetAngle = 0;

    const onMove = (e) => {
      const dx = e.clientX - prev.x;
      const dy = e.clientY - prev.y;
      prev = { x: e.clientX, y: e.clientY };
      target.x = e.clientX;
      target.y = e.clientY;
      // atualiza a direção só com movimento relevante (evita tremer parado)
      if (Math.hypot(dx, dy) > 2.5) {
        targetAngle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
      }
      setVisible(true);
      setHovering(!!e.target.closest(INTERACTIVE));
    };
    const onLeave = () => setVisible(false);

    let raf;
    const loop = () => {
      const ease = reduce ? 1 : 0.18;
      ring.x += (target.x - ring.x) * ease;
      ring.y += (target.y - ring.y) * ease;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      // rotação suave, tratando a volta de 360°
      const d = ((targetAngle - angle + 540) % 360) - 180;
      angle += d * (reduce ? 1 : 0.25);
      if (arrowRef.current) {
        arrowRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) rotate(${angle}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("pointermove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className={cx(styles.ring, hovering && styles.ringHover, visible && styles.visible)}
        aria-hidden="true"
      />
      <div
        ref={arrowRef}
        className={cx(styles.arrow, hovering && styles.arrowHover, visible && styles.visible)}
        aria-hidden="true"
      />
    </>
  );
}
