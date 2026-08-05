import React from "react";
import { Globe, Smartphone, Cog, Server, LayoutTemplate, Wrench } from "lucide-react";
import Section from "./primitives/Section";
import Reveal from "./primitives/Reveal";
import styles from "./Services.module.css";

const services = [
  {
    Icon: Globe,
    title: "Sites Institucionais",
    description:
      "Sites modernos e profissionais que transmitem credibilidade e convertem visitantes em clientes. Responsivos, rápidos e otimizados para o Google.",
    features: ["Design moderno", "Responsivo (mobile)", "SEO otimizado", "Entrega rápida"],
  },
  {
    Icon: Smartphone,
    title: "Aplicativos Mobile",
    description:
      "Apps nativos para iOS e Android com React Native. Experiência fluida, performance nativa e design que encanta os usuários.",
    features: ["iOS & Android", "React Native", "Interface intuitiva", "Alta performance"],
  },
  {
    Icon: Cog,
    title: "Sistemas & Automações",
    description:
      "Sistemas web, APIs, chatbots e automações para otimizar processos e aumentar a produtividade do seu negócio.",
    features: ["Node.js", "APIs REST", "Chatbots", "Integração WhatsApp"],
  },
  {
    Icon: Server,
    title: "Hospedagem & Deploy",
    description:
      "Coloco seu site no ar com segurança, velocidade e disponibilidade — cuidando de domínio, SSL e toda a infraestrutura.",
    features: ["Domínio & SSL", "Deploy seguro", "Alta disponibilidade", "Suporte contínuo"],
  },
  {
    Icon: LayoutTemplate,
    title: "Landing Pages",
    description:
      "Páginas de alta conversão para campanhas, lançamentos e captação de leads. Focadas em transformar visitantes em clientes.",
    features: ["Alta conversão", "Integração com anúncios", "A/B testing", "Métricas claras"],
  },
  {
    Icon: Wrench,
    title: "Manutenção & Suporte",
    description:
      "Manutenção contínua, atualizações e suporte para garantir que seu site ou app funcione sempre perfeitamente.",
    features: ["Suporte ágil", "Atualizações", "Monitoramento", "Correções rápidas"],
  },
];

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="O que eu faço"
      title="Serviços de ponta a ponta."
      intro="Do conceito ao lançamento, ofereço soluções completas para levar sua presença digital ao próximo nível."
    >
      <div className={styles.grid}>
        {services.map((service, i) => (
          <Reveal key={service.title} delay={(i % 3) * 80} className={styles.card}>
            <service.Icon size={26} strokeWidth={1.5} className={styles.icon} />
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.desc}>{service.description}</p>
            <ul className={styles.features}>
              {service.features.map((feat) => (
                <li key={feat} className={styles.feature}>
                  {feat}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
