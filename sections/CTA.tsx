export default function CTA() {
  return (
    <section className="bg-cyan-500 text-slate-950 py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-black leading-tight">
          Sua operação merece tecnologia confiável.
        </h2>

        <p className="text-xl mt-8 max-w-3xl mx-auto">
          Atendimento técnico, automação e soluções modernas
          para empresas e residências em Canindé e região.
        </p>

        <a
          href="https://wa.me/5585992402077"
          target="_blank"
          className="inline-flex mt-12 bg-slate-950 hover:bg-black text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
        >
          Solicitar Atendimento
        </a>
      </div>
    </section>
  );
}