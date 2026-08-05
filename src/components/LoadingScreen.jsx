import React, { useEffect, useState } from "react";
import { cx } from "../utils/cx";
import styles from "./LoadingScreen.module.css";

const KEY = "introSeen";

// Tela de abertura: conta 0→100 revelando a marca, depois desliza para cima.
// Toca uma vez por sessão (sessionStorage) e respeita movimento reduzido.
export default function LoadingScreen() {
  const [skip] = useState(() => {
    try {
      return sessionStorage.getItem(KEY) === "1";
    } catch {
      return false;
    }
  });
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [removed, setRemoved] = useState(skip);

  useEffect(() => {
    if (skip) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 500 : 1500;
    window.__lenis?.stop();
    document.body.style.overflow = "hidden";

    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      // desacelera no fim
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setLeaving(true);
        try {
          sessionStorage.setItem(KEY, "1");
        } catch {}
        setTimeout(() => {
          document.body.style.overflow = "";
          window.__lenis?.start();
          window.scrollTo(0, 0);
          setRemoved(true);
        }, 750);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
      window.__lenis?.start();
    };
  }, [skip]);

  if (removed) return null;

  return (
    <div className={cx(styles.screen, leaving && styles.leaving)}>
      <div className={styles.inner}>
        <span className={styles.brand}>
          Lucas<span className={styles.dot}>.</span>Angelo
        </span>
        <span className={styles.role}>Desenvolvedor Full Stack</span>
      </div>

      <div className={styles.progress}>
        <div className={styles.progressBar} style={{ transform: `scaleX(${count / 100})` }} />
      </div>
      <span className={styles.count}>{String(count).padStart(3, "0")}</span>
    </div>
  );
}
