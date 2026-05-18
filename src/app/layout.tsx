import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KDA Oral Care — Профессиональный уход за зубами",
  description:
    "Электрощётки с зарядом до 200 дней, ирригаторы и сменные насадки — полная экосистема гигиены для всей семьи. Производство GMP. Рейтинг 4.9 на маркетплейсах.",
  keywords: "KDA, электрическая зубная щётка, ирригатор, насадки, oral care",
  openGraph: {
    title: "KDA Oral Care — Профессиональный уход за зубами",
    description: "Полная экосистема гигиены. До 200 дней без зарядки. Рейтинг 4.9.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-white">{children}</body>
    </html>
  );
}
