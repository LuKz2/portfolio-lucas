import React, { useEffect, useRef } from "react";
import { useInView } from "../../hooks/useInView";
import { cx } from "../../utils/cx";
import styles from "./DecoderText.module.css";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&/<>=+*".split("");
const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Revela o texto "decodificando" cada caractere a partir de glifos aleatórios.
export default function DecoderText({ text, className, as: Tag = "span", delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const outputRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const el = outputRef.current;
    const chars = text.split("");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      el.textContent = text;
      return;
    }

    // Estado de cada caractere: quantos frames faltam para "travar".
    let frame = 0;
    const startFrame = Math.round(delay / 16);
    const settleAt = chars.map((_, i) => startFrame + 6 + i * 2 + Math.round(Math.random() * 6));
    let raf;

    const tick = () => {
      const html = chars
        .map((ch, i) => {
          if (ch === " ") return " ";
          if (frame >= settleAt[i]) return ch;
          if (frame < startFrame) return "";
          return `<span class="${styles.ghost}">${rand(GLYPHS)}</span>`;
        })
        .join("");
      el.innerHTML = html;

      if (frame < settleAt[settleAt.length - 1]) {
        frame += 1;
        raf = requestAnimationFrame(tick);
      } else {
        el.textContent = text;
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, text, delay]);

  return (
    <Tag ref={ref} className={cx(styles.root, className)} aria-label={text}>
      <span ref={outputRef} className={styles.output} aria-hidden="true">
        {text}
      </span>
    </Tag>
  );
}
