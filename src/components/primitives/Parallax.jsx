import React, { useEffect, useRef } from "react";

// Move o elemento em velocidade diferente da rolagem (profundidade).
// speed positivo → sobe mais devagar que o scroll. Desliga em movimento reduzido.
export default function Parallax({ children, speed = 0.15, className, as: Tag = "div" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    let raf = null;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // -1 (abaixo da viewport) .. 0 (centralizado) .. 1 (acima)
      const center = rect.top + rect.height / 2;
      const progress = (center - vh / 2) / (vh / 2 + rect.height / 2);
      el.style.transform = `translate3d(0, ${(-progress * speed * 100).toFixed(2)}px, 0)`;
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
  }, [speed]);

  return (
    <Tag ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </Tag>
  );
}
