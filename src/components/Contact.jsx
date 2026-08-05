import React, { useState } from "react";
import { MessageCircle, Linkedin, Zap, Globe, ArrowUpRight } from "lucide-react";
import Reveal from "./primitives/Reveal";
import DecoderText from "./primitives/DecoderText";
import MagneticButton from "./primitives/MagneticButton";
import Parallax from "./primitives/Parallax";
import styles from "./Contact.module.css";

const contacts = [
  {
    Icon: MessageCircle,
    title: "WhatsApp",
    sub: "(11) 92013-7384",
    href: "https://wa.me/5511920137384",
  },
  {
    Icon: Linkedin,
    title: "LinkedIn",
    sub: "Conectar profissionalmente",
    href: "https://www.linkedin.com/in/lucas-oliveira-angelo-64a9531b7/",
  },
  { Icon: Zap, title: "Resposta rápida", sub: "Em até 24 horas" },
  { Icon: Globe, title: "Atendimento", sub: "Brasil — Remoto" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Olá Lucas! Me chamo ${form.name} (${form.email}).\n\n${form.message}`;
    window.open(
      `https://wa.me/5511920137384?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <Reveal className={styles.left}>
          <p className={styles.eyebrow}>
            <DecoderText text="Contato" />
          </p>
          <h2 className={styles.title}>
            Vamos criar algo
            <br />
            <span className={styles.accent}>incrível juntos?</span>
          </h2>
          <p className={styles.text}>
            Tem um projeto em mente? Me conta a ideia e vamos transformar em
            realidade. Respondo em até 24 horas.
          </p>

          <div className={styles.cards}>
            {contacts.map(({ Icon, title, sub, href }) => {
              const inner = (
                <>
                  <Icon size={22} strokeWidth={1.5} className={styles.cardIcon} />
                  <div className={styles.cardTitle}>
                    {title}
                    {href && <ArrowUpRight size={14} className={styles.cardArrow} />}
                  </div>
                  <div className={styles.cardSub}>{sub}</div>
                </>
              );
              return href ? (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  {inner}
                </a>
              ) : (
                <div key={title} className={styles.card}>
                  {inner}
                </div>
              );
            })}
          </div>
        </Reveal>

        <Parallax speed={0.1}>
        <Reveal delay={140} className={styles.formWrap}>
          <h3 className={styles.formTitle}>Mande uma mensagem</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.field}>
              <span className={styles.label}>Seu nome</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="João Silva"
                className={styles.input}
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Seu e-mail</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="joao@empresa.com"
                className={styles.input}
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Conte seu projeto</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Preciso de um site para minha empresa..."
                className={styles.textarea}
              />
            </label>
            <MagneticButton as="button" type="submit" variant="solid" className={styles.submit}>
              Enviar pelo WhatsApp <ArrowUpRight size={17} />
            </MagneticButton>
          </form>
        </Reveal>
        </Parallax>
      </div>
    </section>
  );
}
