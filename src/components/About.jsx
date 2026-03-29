import React from "react";

const stats = [
  { value: "4+", label: "Projetos Ativos" },
  { value: "1", label: "App Publicado" },
  { value: "FIAP", label: "Graduação" },
  { value: "IF", label: "Técnico Federal" },
];

const techs = [
  { name: "React JS", color: "text-blue-400" },
  { name: "React Native", color: "text-cyan-400" },
  { name: "Android", color: "text-green-500" },
  { name: "iOS", color: "text-slate-200" },
  { name: "Three.js (3D)", color: "text-white" },
  { name: "Node.js", color: "text-green-400" },
  { name: "Java", color: "text-red-400" },
  { name: "SQL", color: "text-orange-400" },
  { name: "MongoDB", color: "text-emerald-500" },
  { name: "Tailwind CSS", color: "text-teal-400" },
  { name: "Styled Components", color: "text-pink-400" },
  { name: "GitHub", color: "text-gray-400" },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Lado Esquerdo - Conteúdo */}
          <div>
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">
              Sobre mim
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Código limpo, <br />
              <span className="gradient-text">resultado real</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Sou o <strong>Lucas de Oliveira Angelo</strong>, desenvolvedor Full Stack. Moro em Mairiporã e trabalho aqui na Prefeitura, mas estou sempre focado em criar soluções digitais que realmente funcionam e resolvem problemas.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Minha base vem desde o <strong>Ensino Médio Técnico Federal</strong> e hoje sigo evoluindo na <strong>FIAP</strong>. Tô buscando novos projetos para aplicar o que aprendo na prática, cuidando de tudo — do design à hospedagem e renderização 3D interativa — para entregar soluções modernas que fazem a diferença.
            </p>

            <div className="flex flex-wrap gap-3">
              {techs.map((tech) => (
                <span
                  key={tech.name}
                  className={`glass px-4 py-2 rounded-full text-sm font-medium ${tech.color} border border-white/5 transition-all duration-300 hover:bg-white/5 hover:scale-105`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Lado Direito - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-8 text-center card-hover border border-white/5 animate-pulse-border"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div className="text-5xl font-black gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}