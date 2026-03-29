import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xl font-bold gradient-text">Lucas Angelo</div>

        <p className="text-gray-600 text-sm text-center">
          © {year} Lucas de Oliveira Angelo. Todos os direitos reservados.
        </p>

        <a
          href="https://wa.me/5511920137384"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
        >
          (11) 92013-7384
        </a>
      </div>
    </footer>
  );
}