import React, { useState } from "react";

const projects = [
    {
        id: 1,
        name: "Delled",
        category: "Catálogo Digital & Leads",
        description:
            "Site moderno e profissional para a Delled (atualmente em desenvolvimento). O projeto tem como foco apresentar os produtos e serviços da empresa de forma clara e atrativa, com o objetivo de gerar mais leads e credibilidade no mercado.",
        status: "Em desenvolvimento",
        tags: ["React JS", "Tailwind CSS", "Node.js", "Em desenvolvimento"],
        color: "from-yellow-500/20 to-orange-500/20",
        accent: "#F59E0B",
        icon: "💡",
        type: "site",
        url: "https://delledproduct.tecnologia.ws/",
    },
    {
        id: 2,
        name: "AER Refrigeração",
        category: "Catálogo Interativo 3D",
        description:
            "Plataforma digital completa para a AER Refrigeração, destacando serviços de instalação e manutenção de ar-condicionado, com formulário de orçamento e integração com WhatsApp.",
        tags: ["React JS", "Tailwind CSS", "Hospedagem"],
        color: "from-blue-500/20 to-cyan-500/20",
        accent: "#3B82F6",
        icon: "❄️",
        type: "site",
        url: "https://www.aerrefrigeracao.com.br/",
    },
    {
        id: 3,
        name: "ChatbotDelled",
        category: "Automação & Chat",
        description:
            "Solução de chatbot inteligente desenvolvida para a Delled, automatizando o atendimento ao cliente, qualificando leads e respondendo dúvidas frequentes de forma instantânea.",
        tags: ["Node.js", "React JS", "Automação"],
        color: "from-purple-500/20 to-pink-500/20",
        accent: "#8B5CF6",
        icon: "🤖",
        type: "site",
        url: "https://chatbot-29e6d.web.app/",
    },
    {
        id: 5,
        name: "Meu GitHub",
        category: "Repositórios",
        description:
            "Confira meu perfil completo no GitHub! Lá você encontrará todos os meus repositórios, contribuições em projetos open source e experimentos com novas tecnologias.",
        tags: ["Open Source", "Code", "Full Stack"],
        color: "from-gray-800/40 to-black/40",
        accent: "#ffffff",
        icon: "📂",
        type: "site",
        url: "https://github.com/LuKz2",
    },
    {
        id: 4,
        name: "Talk About It",
        category: "Aplicativo Mobile",
        description:
            "Aplicativo mobile desenvolvido em React Native para conectar pessoas através de conversas significativas. Interface intuitiva, performance nativa e experiência de usuário fluida.",
        tags: ["React Native", "Node.js", "Mobile"],
        color: "from-green-500/20 to-teal-500/20",
        accent: "#10B981",
        icon: "💬",
        type: "app",
        featured: true,
        url: "https://play.google.com/store/apps/details?id=com.talkaboutit&hl=pt",
    },
];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filtered =
        activeFilter === "all"
            ? projects
            : projects.filter((p) => p.type === activeFilter);

    const handleProjectClick = (url) => {
        if (url) {
            window.open(url, "_blank");
        }
    };

    return (
        <section id="projects" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">
                        Portfólio
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                        Projetos que <span className="gradient-text">entregam resultado</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Cada projeto é desenvolvido com atenção aos detalhes, performance e foco total no objetivo do cliente.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex justify-center gap-3 mb-12">
                    {[
                        { key: "all", label: "Todos" },
                        { key: "site", label: "Sites" },
                        { key: "app", label: "Apps" },
                    ].map((f) => (
                        <button
                            key={f.key}
                            onClick={() => setActiveFilter(f.key)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                                activeFilter === f.key
                                    ? "gradient-bg text-white shadow-lg shadow-primary/30"
                                    : "glass text-gray-400 hover:text-white border border-white/10"
                            }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {filtered.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => handleProjectClick(project.url)}
                            className={`glass rounded-3xl overflow-hidden card-hover border border-white/5 cursor-pointer flex flex-col ${
                                project.featured ? "md:col-span-2" : ""
                            }`}
                        >
                            {/* Visual area */}
                            <div className={`bg-gradient-to-br ${project.color} h-56 flex items-center justify-center relative overflow-hidden`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div
                                        className="w-40 h-40 rounded-full blur-3xl opacity-40"
                                        style={{ backgroundColor: project.accent }}
                                    />
                                </div>
                                <div className="relative z-10 text-center">
                                    <div className="text-7xl mb-4">{project.icon}</div>
                                    <div
                                        className="glass px-4 py-1.5 rounded-full text-xs font-semibold"
                                        style={{ color: project.accent }}
                                    >
                                        {project.category}
                                    </div>
                                </div>

                                {project.featured && (
                                    <div className="absolute top-4 right-4 gradient-bg px-3 py-1 rounded-full text-xs font-bold text-white">
                                        ★ Destaque
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {project.name}
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-3 py-1 rounded-full border"
                                            style={{
                                                color: project.accent,
                                                borderColor: `${project.accent}40`,
                                                backgroundColor: `${project.accent}10`,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link Condicional */}
                                <div className="mt-auto">
                                    {project.id === 5 ? (
                                        <span 
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-all duration-300 hover:text-white hover:gap-4"
                                        >
                                            Ver todos os repositórios <span>→</span>
                                        </span>
                                    ) : (
                                        <a
                                            href="https://wa.me/5511920137384"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-4 z-20 relative"
                                            style={{ color: project.accent }}
                                        >
                                            Quero algo assim <span>→</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}