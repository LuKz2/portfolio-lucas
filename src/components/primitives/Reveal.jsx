import React from "react";
import { useInView } from "../../hooks/useInView";
import { cx } from "../../utils/cx";
import styles from "./Reveal.module.css";

// Revela o conteúdo com fade + slide sutil ao entrar na viewport.
export default function Reveal({ children, delay = 0, className, as: Tag = "div", style, ...rest }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  return (
    <Tag
      ref={ref}
      className={cx(styles.reveal, inView && styles.visible, className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
