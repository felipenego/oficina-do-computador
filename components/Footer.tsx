export default function Footer() {
  return (
    <footer
      id="contato"
      className="bg-black text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-black">
              Oficina do Computador
            </h3>

            <p className="text-slate-400 mt-5 leading-relaxed">
              Soluções modernas em tecnologia, suporte técnico,
              automação e infraestrutura para empresas e residências.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5">
              Atendimento
            </h4>

            <div className="space-y-3 text-slate-400">
              <p>Canindé/CE</p>
              <p>Região sob agendamento</p>
              <p>Fortaleza corporativo</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5">
              Contato
            </h4>

            <div className="space-y-3 text-slate-400">
              <p>(85) 99240-2077</p>

              <a
                href="https://wa.me/5585992402077"
                target="_blank"
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                WhatsApp Comercial
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 text-slate-500 text-sm">
          © 2026 Oficina do Computador | Soluções em Tecnologia
          • Desenvolvido para performance, automação e crescimento empresarial.
        </div>
      </div>
    </footer>
  );
}