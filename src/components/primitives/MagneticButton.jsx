import React, { useRef } from "react";
import { cx } from "../../utils/cx";
import styles from "./MagneticButton.module.css";

// Botão/âncora que "puxa" levemente na direção do cursor (efeito magnético).
export default function MagneticButton({
  as: Tag = "a",
  className,
  variant = "solid",
  strength = 0.35,
  children,
  ...props
}) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0, 0)";
  };

  return (
    <Tag
      ref={ref}
      className={cx(styles.button, styles[variant], className)}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      {...props}
    >
      <span className={styles.label}>{children}</span>
    </Tag>
  );
}
