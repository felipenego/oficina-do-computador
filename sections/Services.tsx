import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <section
      id="servicos"
      className="bg-slate-950 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-cyan-400 font-semibold uppercase tracking-widest text-sm">
            Soluções em Tecnologia
          </span>

          <h2 className="text-5xl font-black mt-4">
            Serviços profissionais para empresas e residências
          </h2>

          <p className="text-slate-400 text-lg mt-6">
            Estrutura moderna de suporte técnico, cloud,
            automação e infraestrutura para manter sua
            operação funcionando com segurança e desempenho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <ServiceCard
            title="Suporte Empresarial"
            description="Atendimento técnico especializado para empresas, com foco em estabilidade, continuidade operacional e suporte rápido."
          />

          <ServiceCard
            title="Atendimento Remoto"
            description="Resolução ágil de problemas remotamente, reduzindo tempo de parada e acelerando o suporte técnico."
          />

          <ServiceCard
            title="Redes & Infraestrutura"
            description="Configuração de redes, Wi-Fi corporativo, roteadores, impressoras e estrutura tecnológica."
          />

          <ServiceCard
            title="Cloud & Backup"
            description="Soluções em nuvem, backup seguro e proteção de dados para empresas e usuários residenciais."
          />

          <ServiceCard
            title="Automação com IA"
            description="Automação empresarial integrada ao WhatsApp com inteligência artificial e otimização de processos."
          />

          <ServiceCard
            title="Contratos Corporativos"
            description="Planos recorrentes de suporte técnico e acompanhamento especializado para empresas."
          />
        </div>
      </div>
    </section>
  );
}