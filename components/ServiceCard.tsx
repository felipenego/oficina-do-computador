interface Props {
  title: string;
  description: string;
}

export default function ServiceCard({
  title,
  description,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:border-cyan-400/40 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-cyan-500/5"></div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4">
          {title}
        </h3>

        <p className="text-slate-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}