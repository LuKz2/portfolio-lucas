import React from "react";
import { ArrowUpRight } from "lucide-react";
import Section from "./primitives/Section";
import Reveal from "./primitives/Reveal";
import styles from "./Projects.module.css";

const projects = [
  {
    id: "delled",
    name: "Delled",
    category: "Catálogo Digital & Leads",
    status: "Em desenvolvimento",
    description:
      "Site institucional moderno para a Delled. Apresenta produtos e serviços de forma clara e atrativa, com foco em transmitir credibilidade e gerar mais leads qualificados para a empresa.",
    tags: ["React JS", "Tailwind CSS", "Node.js"],
    img: "/projects/delled.jpg",
    url: "https://delledproduct.tecnologia.ws/",
  },
  {
    id: "aer",
    name: "AER Refrigeração",
    category: "Catálogo Interativo",
    description:
      "Plataforma para uma empresa de refrigeração comercial e industrial. Destaca a venda de equipamentos (vitrines e balcões expositores), manutenção preventiva e projetos personalizados para o setor alimentício.",
    tags: ["React JS", "Three.js", "Hospedagem"],
    img: "/projects/aer.jpg",
    url: "https://www.aerrefrigeracao.com.br/",
  },
  {
    id: "yixin",
    name: "Yixin Traduções",
    category: "Editora & Tradução",
    description:
      "Plataforma completa para uma editora independente de literatura chinesa. Reúne serviços de interpretação de conferência, legendagem audiovisual, localização de games e um catálogo interativo de publicações literárias.",
    tags: ["Remix", "Three.js", "Localização"],
    img: "/projects/yixin.jpg",
    url: "https://yixin.com.br/",
  },
  {
    id: "chatbot",
    name: "ChatbotDelled",
    category: "Automação & Chat",
    description:
      "Chatbot inteligente desenvolvido para a Delled. Automatiza o atendimento ao cliente, qualifica leads e responde às dúvidas mais frequentes de forma instantânea, 24 horas por dia.",
    tags: ["Node.js", "React JS", "Automação"],
    img: "/projects/chatbot.jpg",
    url: "https://chatbot-29e6d.web.app/",
  },
  {
    id: "talkaboutit",
    name: "Talk About It",
    category: "Aplicativo Mobile",
    status: "Em desenvolvimento",
    description:
      "Aplicativo mobile em React Native para conectar pessoas através de conversas significativas. Interface intuitiva, performance nativa e uma experiência de uso fluida, publicado na Google Play.",
    tags: ["React Native", "Node.js", "Mobile"],
    img: "/projects/talkaboutit.jpg",
    url: "https://play.google.com/store/apps/details?id=com.talkaboutit&hl=pt",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Repositórios & Open Source",
    description:
      "Meu perfil no GitHub reúne todos os repositórios, contribuições em projetos open source e experimentos com novas tecnologias — do front-end ao back-end e mobile.",
    tags: ["Open Source", "Full Stack", "Code"],
    img: "/projects/github.jpg",
    url: "https://github.com/LuKz2",
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Portfólio"
      title="Projetos que entregam resultado."
      intro="Uma seleção de trabalhos — cada um pensado nos detalhes, na performance e no objetivo real do cliente."
    >
      <div className={styles.list}>
        {projects.map((project, i) => (
          <Reveal key={project.id} className={styles.row}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.media}
              aria-label={`Visitar ${project.name}`}
            >
              <img src={project.img} alt={`Projeto ${project.name}`} loading="lazy" />
            </a>

            <div className={styles.body}>
              <div className={styles.meta}>
                <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.category}>{project.category}</span>
              </div>

              <h3 className={styles.name}>
                {project.name}
                {project.status && <span className={styles.badge}>{project.status}</span>}
              </h3>

              <p className={styles.desc}>{project.description}</p>

              <ul className={styles.tags}>
                {project.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>{tag}</li>
                ))}
              </ul>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Visitar projeto <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
