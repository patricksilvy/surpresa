import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aprendizado sempre!",
  description: "Aproveite o mês de outubro para mudar sua vida!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
