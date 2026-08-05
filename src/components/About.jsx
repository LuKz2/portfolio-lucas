import React from "react";
import Reveal from "./primitives/Reveal";
import DecoderText from "./primitives/DecoderText";
import Parallax from "./primitives/Parallax";
import styles from "./About.module.css";

const stats = [
  { value: "4+", label: "Projetos ativos" },
  { value: "1", label: "App publicado" },
  { value: "FIAP", label: "Graduação" },
  { value: "IF", label: "Técnico Federal" },
];

const techs = [
  "React JS", "React Native", "Android", "iOS", "Three.js", "Node.js",
  "Java", "SQL", "MongoDB", "Tailwind CSS", "Styled Components", "GitHub",
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <Reveal className={styles.left}>
          <p className={styles.eyebrow}>
            <DecoderText text="Sobre mim" />
          </p>
          <h2 className={styles.title}>
            Código limpo,
            <br />
            <span className={styles.accent}>resultado real.</span>
          </h2>
          <p className={styles.text}>
            Sou o <span className={styles.strong}>Lucas de Oliveira Angelo</span>,
            desenvolvedor Full Stack. Moro em Mairiporã e trabalho na Prefeitura,
            mas estou sempre focado em criar soluções digitais que realmente
            funcionam e resolvem problemas.
          </p>
          <p className={styles.text}>
            Minha base vem do{" "}
            <span className={styles.strong}>Ensino Médio Técnico Federal</span> e
            hoje sigo evoluindo na <span className={styles.strong}>FIAP</span>. Cuido
            de tudo — do design à hospedagem e renderização 3D interativa — para
            entregar soluções modernas de ponta a ponta.
          </p>

          <ul className={styles.techs}>
            {techs.map((tech) => (
              <li key={tech} className={styles.tech}>
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>

        <Parallax speed={0.12}>
          <Reveal delay={140} className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </Parallax>
      </div>
    </section>
  );
}
