import React, { Suspense, lazy } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import DecoderText from "./primitives/DecoderText";
import MagneticButton from "./primitives/MagneticButton";
import Parallax from "./primitives/Parallax";
import styles from "./Hero.module.css";

// three.js só carrega depois do conteúdo (chunk separado)
const DisplacementSphere = lazy(() => import("./primitives/DisplacementSphere"));

const stack = ["React", "React Native", "Node.js", "Three.js", "Tailwind", "SQL"];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <Parallax className={styles.sphere} speed={0.22}>
        <Suspense fallback={null}>
          <DisplacementSphere />
        </Suspense>
      </Parallax>

      <div className={styles.content}>
        <p className={styles.eyebrow}>
          <DecoderText text="Desenvolvedor Full Stack" />
        </p>

        <h1 className={styles.title}>
          Transformo ideias em{" "}
          <span className={styles.accent}>produtos digitais</span> que funcionam.
        </h1>

        <p className={styles.intro}>
          Sou o Lucas — construo sites, aplicativos e sistemas modernos, rápidos e
          focados em resultado. Do design à hospedagem e renderização 3D interativa.
        </p>

        <div className={styles.stack}>
          {stack.map((item) => (
            <span key={item} className={styles.chip}>
              {item}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          <MagneticButton href="#projects" variant="solid">
            Ver projetos <ArrowDown size={17} />
          </MagneticButton>
          <MagneticButton
            href="https://wa.me/5511920137384"
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
          >
            Falar no WhatsApp <ArrowUpRight size={17} />
          </MagneticButton>
        </div>

        <p className={styles.status}>
          <span className={styles.blink} />
          <DecoderText text="disponível para novos projetos" delay={600} />
        </p>
      </div>

      <a href="#about" className={styles.scroll} aria-label="Rolar para baixo">
        <span>scroll</span>
        <ArrowDown size={16} strokeWidth={1.5} />
      </a>
    </section>
  );
}
