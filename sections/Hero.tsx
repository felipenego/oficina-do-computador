export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white min-h-screen flex items-center pt-52 md:pt-36">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.3),transparent_40%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-8">
            Atendimento Presencial • Remoto • Corporativo
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Tecnologia inteligente para empresas e residências que{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.7)]">
              não podem parar.
            </span>
          </h1>

          <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-2xl">
            Suporte técnico, infraestrutura, cloud, automação empresarial
            e soluções com inteligência artificial para negócios modernos.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">
            <a
              href="https://wa.me/5585992402077"
              target="_blank"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(6,182,212,0.4)]"
            >
              Falar com Especialista
            </a>

            <a
              href="#servicos"
              className="border border-white/10 hover:border-cyan-400 px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-white/5"
            >
              Conhecer Serviços
            </a>
          </div>
<div className="flex flex-wrap gap-10 mt-16">
  <div>
    <h3 className="text-4xl font-black text-cyan-400">
      +10 Mil
    </h3>

    <p className="text-slate-400 mt-2">
      Atendimentos realizados
    </p>
  </div>

  <div>
    <h3 className="text-4xl font-black text-cyan-400">
      24/7
    </h3>

    <p className="text-slate-400 mt-2">
      Suporte sob agendamento
    </p>
  </div>

  <div>
    <h3 className="text-4xl font-black text-cyan-400">
      5⭐
    </h3>

    <p className="text-slate-400 mt-2">
      Foco em qualidade
    </p>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}