import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cx } from "../utils/cx";
import styles from "./Navbar.module.css";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Serviços", href: "#services" },
  { label: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cx(styles.header, scrolled && styles.scrolled)}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.brand}>
          Lucas<span className={styles.dot}>.</span>Angelo
        </a>

        <nav className={styles.nav}>
          {links.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5511920137384"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          Contratar
        </a>

        <button
          className={styles.burger}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className={styles.mobile}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511920137384"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCta}
          >
            Contratar
          </a>
        </div>
      )}
    </header>
  );
}
