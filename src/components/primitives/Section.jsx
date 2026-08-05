import React from "react";
import Reveal from "./Reveal";
import DecoderText from "./DecoderText";
import { cx } from "../../utils/cx";
import styles from "./Section.module.css";

// Casca padrão de seção: container centralizado, cabeçalho opcional
// (eyebrow decodificado + título + intro) e um slot lateral (aside).
export default function Section({
  id,
  eyebrow,
  title,
  intro,
  aside,
  divider = true,
  className,
  children,
}) {
  const hasHeader = eyebrow || title || intro || aside;
  return (
    <section id={id} className={cx(styles.section, divider && styles.divider, className)}>
      <div className={styles.container}>
        {hasHeader && (
          <div className={styles.head}>
            <Reveal className={styles.headMain}>
              {eyebrow && (
                <p className={styles.eyebrow}>
                  <DecoderText text={eyebrow} />
                </p>
              )}
              {title && <h2 className={styles.title}>{title}</h2>}
              {intro && <p className={styles.intro}>{intro}</p>}
            </Reveal>
            {aside && <Reveal delay={120} className={styles.aside}>{aside}</Reveal>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
