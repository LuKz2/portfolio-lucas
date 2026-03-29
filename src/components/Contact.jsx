import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = `Olá Lucas! Me chamo ${form.name} (${form.email}).\n\n${form.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5511920137384?text=${encoded}`, "_blank");
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">
              Contato
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Vamos criar algo <span className="gradient-text">incrível juntos?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Tem um projeto em mente? Me conta a ideia e vamos transformar em realidade. Respondo em até 24 horas.
            </p>

            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5511920137384"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass p-5 rounded-2xl border border-white/5 hover:border-green-500/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-xl">
                  📱
                </div>
                <div>
                  <div className="text-white font-semibold">WhatsApp</div>
                  <div className="text-gray-400 text-sm">(11) 92013-7384</div>
                </div>
                <span className="ml-auto text-gray-600 group-hover:text-green-500 transition-colors">→</span>
              </a>

              {/* LinkedIn - ADICIONADO AQUI */}
              <a
                href="https://www.linkedin.com/in/lucas-oliveira-angelo-64a9531b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass p-5 rounded-2xl border border-white/5 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-xl text-blue-400">
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">LinkedIn</div>
                  <div className="text-gray-400 text-sm">Conectar profissionalmente</div>
                </div>
                <span className="ml-auto text-gray-600 group-hover:text-blue-500 transition-colors">→</span>
              </a>

              {/* Info Cards */}
              <div className="flex items-center gap-4 glass p-5 rounded-2xl border border-white/5">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-xl">
                  ⚡
                </div>
                <div>
                  <div className="text-white font-semibold">Resposta Rápida</div>
                  <div className="text-gray-400 text-sm">Em até 24 horas</div>
                </div>
              </div>

              <div className="flex items-center gap-4 glass p-5 rounded-2xl border border-white/5">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-xl">
                  🌍
                </div>
                <div>
                  <div className="text-white font-semibold">Atendimento</div>
                  <div className="text-gray-400 text-sm">Brasil — Remoto</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="glass rounded-3xl p-8 border border-white/5">
            <h3 className="text-xl font-bold text-white mb-6">Mande uma mensagem</h3>
            <form onSubmit={handleWhatsApp} className="space-y-5">
              <div>
                <label className="text-sm text-gray-400 font-medium mb-2 block">Seu nome</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="João Silva"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary/60 transition-colors duration-300 text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 font-medium mb-2 block">Seu e-mail</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="joao@empresa.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary/60 transition-colors duration-300 text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 font-medium mb-2 block">Conte seu projeto</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Preciso de um site para minha empresa..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary/60 transition-colors duration-300 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-bg text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-[1.02] animate-glow"
              >
                Enviar pelo WhatsApp 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}