import Image from "next/image";
import {
  Laptop,
  Wifi,
  Cloud,
  Bot,
  Shield,
  Briefcase,
  MessageCircle,
  Printer,
  MapPin,
  Star,
} from "lucide-react";

export default function Home() {
  const services = [
    { name: "Suporte Técnico", icon: Laptop },
    { name: "Notebook", icon: Laptop },
    { name: "Impressoras", icon: Printer },
    { name: "Redes / Wi-Fi", icon: Wifi },
    { name: "Cloud", icon: Cloud },
    { name: "Backup", icon: Shield },
    { name: "Automação Empresarial", icon: Briefcase },
    { name: "IA / Bots WhatsApp", icon: Bot },
  ];

  const plans = [
    {
      name: "Essential",
      desc: "Suporte técnico essencial e manutenção preventiva.",
    },
    {
      name: "Business",
      desc: "Prioridade no atendimento, monitoramento e suporte ampliado.",
    },
    {
      name: "Enterprise",
      desc: "Gestão completa de TI + automação + IA.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="Oficina do Computador | Soluções em Tecnologia"
            width={260}
            height={110}
            priority
            style={{
              width: "auto",
              height: "auto",
              maxHeight: "80px",
            }}
          />

          <nav className="hidden md:flex gap-8 font-medium text-slate-700">
            <a href="#servicos" className="hover:text-blue-700 transition">
              Serviços
            </a>

            <a href="#contratos" className="hover:text-blue-700 transition">
              Contratos
            </a>

            <a href="#automacao" className="hover:text-blue-700 transition">
              Automação IA
            </a>

            <a href="#contato" className="hover:text-blue-700 transition">
              Contato
            </a>
          </nav>

          <a
            href="https://wa.me/5585992402077?text=Olá,%20vim%20através%20do%20site%20e%20gostaria%20de%20atendimento."
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition shadow-lg"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/10 text-sm mb-8">
            Canindé • Região • Fortaleza (agendado) • Atendimento Remoto
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Conectando tecnologia,
            <span className="block text-cyan-300">
              entregando resultados.
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed">
            Soluções completas em TI para residências e empresas com
            atendimento presencial, remoto e contratos corporativos
            sob demanda para operações que não podem parar.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/5585992402077?text=Olá,%20vim%20através%20do%20site%20e%20gostaria%20de%20atendimento."
              target="_blank"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl font-semibold transition shadow-xl"
            >
              <MessageCircle size={22} />
              Falar no WhatsApp
            </a>

            <a
              href="#servicos"
              className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-2xl transition"
            >
              Conhecer serviços
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Nossos Serviços
          </h2>

          <p className="text-center text-slate-600 mb-14">
            Soluções modernas para manter sua operação funcionando.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="rounded-3xl border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-1 transition duration-300"
                >
                  <Icon className="text-blue-700 mb-5" size={34} />
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AUTOMAÇÃO */}
      <section id="automacao" className="bg-slate-100 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Bot size={50} className="mx-auto text-blue-700 mb-6" />

          <h2 className="text-4xl font-bold mb-6">
            Automação & Inteligência Artificial
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Implementamos automações inteligentes para atendimento,
            integração com WhatsApp, bots personalizados e soluções
            digitais que reduzem custos e aumentam produtividade.
          </p>
        </div>
      </section>

      {/* CONTRATOS */}
      <section id="contratos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Contratos Corporativos
          </h2>

          <p className="text-center text-slate-600 mb-14">
            Planos sob medida para empresas que precisam de estabilidade.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-3xl border border-slate-200 p-10 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  {plan.name}
                </h3>

                <p className="text-slate-600">{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTO */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Star size={40} className="mx-auto text-yellow-500 mb-5" />

          <h2 className="text-4xl font-bold mb-8">
            Tecnologia com compromisso
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed">
            "Atendimento humanizado, soluções modernas e suporte técnico
            confiável para residências, profissionais e empresas."
          </p>
        </div>
      </section>

      {/* REGIÃO */}
      <section className="bg-blue-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex gap-4 items-center justify-center text-lg text-center">
          <MapPin />
          Canindé • Região • Fortaleza (agendado) • Atendimento remoto
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-slate-950 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/logo.png"
            alt="Oficina do Computador"
            width={260}
            height={110}
            className="mx-auto mb-6"
            style={{
              width: "auto",
              height: "auto",
              maxHeight: "100px",
            }}
          />

          <p className="text-slate-400 mb-3">
            Oficina do Computador | Soluções em Tecnologia
          </p>

          <p className="text-slate-500">(85) 99240-2077</p>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE */}
      <a
        href="https://wa.me/5585992402077?text=Olá,%20vim%20através%20do%20site%20e%20gostaria%20de%20atendimento."
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-2xl z-50 transition hover:scale-110"
      >
        <MessageCircle size={30} />
      </a>
    </main>
  );
}