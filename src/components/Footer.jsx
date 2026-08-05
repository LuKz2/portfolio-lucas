import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.brand}>
          Lucas<span className={styles.dot}>.</span>Angelo
        </span>
        <p className={styles.copy}>
          © {year} Lucas de Oliveira Angelo. Todos os direitos reservados.
        </p>
        <a
          href="https://wa.me/5511920137384"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contact}
        >
          (11) 92013-7384
        </a>
      </div>
    </footer>
  );
}
