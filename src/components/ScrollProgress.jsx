import React, { useEffect, useRef } from "react";
import styles from "./ScrollProgress.module.css";

// Barra fina no topo que reflete o quanto a página foi rolada.
export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let raf;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
      raf = null;
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div className={styles.track} aria-hidden="true"><div ref={barRef} className={styles.bar} /></div>;
}
