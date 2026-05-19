export default function Automation() {
  return (
    <section
      id="automacao"
      className="bg-slate-900 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <span className="text-cyan-400 uppercase tracking-widest text-sm font-semibold">
            Automação & Inteligência Artificial
          </span>

          <h2 className="text-5xl font-black mt-5 leading-tight">
            Tecnologia inteligente para negócios modernos
          </h2>

          <p className="text-slate-300 text-xl mt-8 leading-relaxed">
            Desenvolvemos soluções com automação e IA para
            otimizar atendimento, processos internos e comunicação
            empresarial através do WhatsApp e integrações modernas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-4">
              Bots WhatsApp
            </h3>

            <p className="text-slate-300">
              Atendimento automatizado com inteligência artificial
              para empresas e negócios locais.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-4">
              Fluxos Inteligentes
            </h3>

            <p className="text-slate-300">
              Automação de tarefas e integração de processos
              utilizando plataformas modernas.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-4">
              IA Empresarial
            </h3>

            <p className="text-slate-300">
              Soluções tecnológicas com inteligência artificial
              aplicadas ao crescimento operacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}