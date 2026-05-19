"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-36 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Oficina do Computador"
            width={420}
            height={160}
            priority
            style={{
              width: "auto",
              height: "auto",
              maxHeight: "130px",
            }}
          />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
          <a href="#servicos" className="hover:text-cyan-400 transition">
            Serviços
          </a>

          <a href="#corporativo" className="hover:text-cyan-400 transition">
            Corporativo
          </a>

          <a href="#automacao" className="hover:text-cyan-400 transition">
            Automação IA
          </a>

          <a href="#contato" className="hover:text-cyan-400 transition">
            Contato
          </a>
        </nav>

        <a
          href="https://wa.me/5585992402077"
          target="_blank"
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all duration-300 hover:scale-105"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}