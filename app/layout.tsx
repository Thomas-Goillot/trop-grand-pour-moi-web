import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Trop Grand Pour Moi — Collection par Camille Coadou",
  description:
    "Découvrez la collection 'Trop Grand Pour Moi' par Camille Coadou SM5 DFD. Une exploration poétique de la peur de grandir, mêlant mode masculine, absurde et douceur nostalgique.",
  keywords: [
    "Trop Grand Pour Moi",
    "Camille Coadou",
    "collection mode",
    "fashion",
    "chapeau connecté",
  ],
  openGraph: {
    title: "Trop Grand Pour Moi — Camille Coadou",
    description:
      "Collection homme explorant la transition vers l'âge adulte à travers un imaginaire poétique et absurde.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
