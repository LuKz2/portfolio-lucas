import React from "react";

const services = [
  {
    icon: "🌐",
    title: "Sites Institucionais",
    description:
      "Sites modernos e profissionais que transmitem credibilidade e convertem visitantes em clientes. Responsivos, rápidos e otimizados para o Google.",
    features: ["Design moderno", "Responsivo (mobile)", "SEO otimizado", "Entrega rápida"],
    color: "#6C63FF",
  },
  {
    icon: "📱",
    title: "Aplicativos Mobile",
    description:
      "Apps nativos para iOS e Android com React Native. Experiência fluida, performance nativa e design que encanta os usuários.",
    features: ["iOS & Android", "React Native", "Interface intuitiva", "Alta performance"],
    color: "#00D4AA",
  },
  {
    icon: "⚙️",
    title: "Sistemas & Automações",
    description:
      "Desenvolvimento de sistemas web, APIs, chatbots e automações para otimizar processos e aumentar a produtividade do seu negócio.",
    features: ["Node.js", "APIs REST", "Chatbots", "Integração WhatsApp"],
    color: "#F59E0B",
  },
  {
    icon: "🚀",
    title: "Hospedagem & Deploy",
    description:
      "Coloco seu site no ar com segurança, velocidade e disponibilidade. Cuidando de domínio, SSL e toda infraestrutura necessária.",
    features: ["Domínio & SSL", "Deploy seguro", "Alta disponibilidade", "Suporte contínuo"],
    color: "#EF4444",
  },
  {
    icon: "🎨",
    title: "Landing Pages",
    description:
      "Páginas de alta conversão para campanhas, lançamentos e captação de leads. Focadas em transformar visitantes em clientes.",
    features: ["Alta conversão", "Integração com anúncios", "A/B testing", "Métricas claras"],
    color: "#8B5CF6",
  },
  {
    icon: "🔧",
    title: "Manutenção & Suporte",
    description:
      "Manutenção contínua, atualizações e suporte para garantir que seu site ou app funcione sempre perfeitamente.",
    features: ["Suporte ágil", "Atualizações", "Monitoramento", "Correções rápidas"],
    color: "#10B981",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">
            O que eu faço
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Serviços que{" "}
            <span className="gradient-text">fazem a diferença</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Do conceito ao lançamento, ofereço soluções completas para levar sua presença digital ao próximo nível.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass rounded-3xl p-8 card-hover border border-white/5 group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${service.color}20` }}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-gray-400">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: service.color }}
                    />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}