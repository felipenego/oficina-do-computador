export default function Corporate() {
  return (
    <section
      id="corporativo"
      className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-cyan-400 uppercase tracking-widest text-sm font-semibold">
              Contratos Corporativos
            </span>

            <h2 className="text-5xl font-black mt-5 leading-tight">
              Sua empresa não pode parar.
            </h2>

            <p className="text-slate-300 text-lg mt-8 leading-relaxed">
              A Oficina do Computador oferece suporte técnico
              especializado para empresas que precisam de
              estabilidade, rapidez e acompanhamento profissional
              em sua infraestrutura tecnológica.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2"></div>

                <p className="text-slate-300">
                  Atendimento remoto e presencial
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2"></div>

                <p className="text-slate-300">
                  Suporte sob agendamento empresarial
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2"></div>

                <p className="text-slate-300">
                  Redes, cloud, backup e infraestrutura
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2"></div>

                <p className="text-slate-300">
                  Atendimento em Canindé e região
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/5585992402077"
              target="_blank"
              className="inline-flex mt-12 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(6,182,212,0.4)]"
            >
              Solicitar Proposta
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10">
              <h3 className="text-3xl font-black text-white mb-8">
                Atendimento Regional
              </h3>

              <div className="space-y-6">
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-300">
                    Canindé/CE
                  </span>

                  <span className="text-cyan-400">
                    Sede principal
                  </span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-300">
                    Caridade/CE
                  </span>

                  <span className="text-cyan-400">
                    Agendado
                  </span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-300">
                    Paramoti/CE
                  </span>

                  <span className="text-cyan-400">
                    Agendado
                  </span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-300">
                    Itatira/CE
                  </span>

                  <span className="text-cyan-400">
                    Agendado
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-300">
                    Fortaleza/CE
                  </span>

                  <span className="text-cyan-400">
                    Corporativo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}