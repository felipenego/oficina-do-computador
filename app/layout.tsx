import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oficina do Computador | Soluções em Tecnologia",
  description:
    "Suporte técnico, infraestrutura, automação e soluções em tecnologia para empresas e residências em Canindé e região.",

  keywords: [
    "suporte técnico",
    "TI empresarial",
    "informática Canindé",
    "automação com IA",
    "assistência técnica",
    "redes",
    "cloud",
  ],

  openGraph: {
    title: "Oficina do Computador",
    description:
      "Tecnologia inteligente para empresas e residências.",
    url: "https://oficina-do-computador.vercel.app",
    siteName: "Oficina do Computador",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}