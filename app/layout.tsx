import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const playfair = localFont({
  src: [
    { path: "../fonts/PlayfairDisplay-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/PlayfairDisplay-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/PlayfairDisplay-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../fonts/PlayfairDisplay-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-playfair",
});

const plexMono = localFont({
  src: [
    { path: "../fonts/IBMPlexMono-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/IBMPlexMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/IBMPlexMono-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/IBMPlexMono-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/IBMPlexMono-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-plex-mono",
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
  icons: {
    icon: "/logo.png",
  },
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
      <body className={`${playfair.variable} ${plexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
