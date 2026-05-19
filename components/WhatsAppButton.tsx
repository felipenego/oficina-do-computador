export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5585992402077"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-7 py-4 rounded-full shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-110 font-bold flex items-center gap-3">
        <span className="text-lg">💬</span>

        <span>Falar no WhatsApp</span>
      </div>
    </a>
  );
}