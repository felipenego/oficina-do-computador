export default function Plans() {
  return (
    <section className="bg-slate-950 text-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-cyan-400 uppercase tracking-widest text-sm font-semibold">
            Contratos Corporativos
          </span>

          <h2 className="text-5xl font-black mt-5">
            Planos de suporte para empresas
          </h2>

          <p className="text-slate-400 text-xl mt-8">
            Soluções flexíveis para empresas que precisam de
            estabilidade, suporte rápido e acompanhamento profissional.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {/* ESSENCIAL */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <h3 className="text-3xl font-black">
              Essencial
            </h3>

            <p className="text-slate-400 mt-4">
              Ideal para pequenas empresas.
            </p>

            <div className="text-5xl font-black text-cyan-400 mt-8">
              Sob Consulta
            </div>

            <div className="space-y-4 mt-10 text-slate-300">
              <p>✔ Suporte remoto</p>
              <p>✔ Atendimento agendado</p>
              <p>✔ Monitoramento básico</p>
              <p>✔ Redes e impressoras</p>
            </div>

            <a
              href="https://wa.me/5585992402077"
              target="_blank"
              className="inline-flex mt-10 w-full justify-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-4 rounded-2xl font-bold transition-all"
            >
              Solicitar Plano
            </a>
          </div>

          {/* BUSINESS */}
          <div className="rounded-3xl border border-cyan-400 bg-cyan-500/10 p-10 backdrop-blur-xl scale-105 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
            <div className="inline-flex mb-6 bg-cyan-400 text-slate-950 px-4 py-2 rounded-full text-sm font-bold">
              MAIS ESCOLHIDO
            </div>

            <h3 className="text-3xl font-black">
              Business
            </h3>

            <p className="text-slate-300 mt-4">
              Estrutura empresarial moderna.
            </p>

            <div className="text-5xl font-black text-cyan-400 mt-8">
              Sob Consulta
            </div>

            <div className="space-y-4 mt-10 text-slate-200">
              <p>✔ Suporte remoto prioritário</p>
              <p>✔ Atendimento presencial</p>
              <p>✔ Backup e infraestrutura</p>
              <p>✔ Consultoria tecnológica</p>
              <p>✔ Atendimento corporativo</p>
            </div>

            <a
              href="https://wa.me/5585992402077"
              target="_blank"
              className="inline-flex mt-10 w-full justify-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-4 rounded-2xl font-bold transition-all"
            >
              Solicitar Plano
            </a>
          </div>

          {/* PREMIUM */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <h3 className="text-3xl font-black">
              Premium IA
            </h3>

            <p className="text-slate-400 mt-4">
              Automação e inteligência empresarial.
            </p>

            <div className="text-5xl font-black text-cyan-400 mt-8">
              Sob Consulta
            </div>

            <div className="space-y-4 mt-10 text-slate-300">
              <p>✔ Automação WhatsApp</p>
              <p>✔ Integração IA</p>
              <p>✔ Fluxos inteligentes</p>
              <p>✔ Consultoria avançada</p>
              <p>✔ Atendimento estratégico</p>
            </div>

            <a
              href="https://wa.me/5585992402077"
              target="_blank"
              className="inline-flex mt-10 w-full justify-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-4 rounded-2xl font-bold transition-all"
            >
              Solicitar Plano
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}