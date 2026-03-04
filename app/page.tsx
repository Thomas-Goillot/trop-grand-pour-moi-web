"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ===== Placeholder SVG Icon ===== */
function ImageIcon() {
  return (
    <svg
      className="placeholder-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

/* ===== Placeholder Component ===== */
function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`placeholder-image ${className}`}>
      <ImageIcon />
      <span className="placeholder-text">{label}</span>
    </div>
  );
}

/* ===== Navigation ===== */
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#histoire", label: "L'Histoire" },
    { href: "#collection", label: "Collection" },
    { href: "#proposition", label: "Le Chapeau" },
    { href: "#application", label: "L'App" },
  ];

  return (
    <nav className={`nav-sticky ${scrolled ? "scrolled" : ""}`}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "1.25rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "0.9rem",
            color: scrolled ? "var(--color-brown-title)" : "rgba(255,255,255,0.85)",
            textDecoration: "none",
            transition: "color 0.4s ease",
          }}
        >
          TGPM
        </a>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              style={{
                color: scrolled ? undefined : "rgba(255,255,255,0.7)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ===== Scroll Reveal Hook ===== */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const children = el.querySelectorAll(".reveal");
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ===== HERO ===== */
function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          padding: "0 2rem",
        }}
      >
        <span className="hero-credit">Camille Coadou SM5 DFD</span>
        <h1
          className="hero-title"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)", marginTop: "1rem" }}
        >
          &ldquo;TROP GRAND
        </h1>
        <p
          className="hero-subtitle"
          style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)", marginTop: "-0.5rem" }}
        >
          Pour moi&rdquo;
        </p>
      </div>

      <div className="scroll-cta">
        <span>Découvrir</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}

/* ===== L'HISTOIRE ===== */
function HistoireSection() {
  const ref = useReveal();

  return (
    <section
      className="section-base"
      id="histoire"
      ref={ref}
      style={{ backgroundColor: "var(--color-off-white)" }}
    >
      <div className="reveal">
        <h2 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          L&apos;Histoire
        </h2>
        <p className="section-subtitle" style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}>
          la collection
        </p>
      </div>

      <div className="section-divider reveal reveal-delay-1" style={{ marginBottom: "3rem" }} />

      <p className="histoire-text reveal reveal-delay-2">
        Mon projet de cette année explore la peur de grandir, ce moment où l&apos;on quitte
        l&apos;enfance tout en tentant d&apos;en préserver les repères rassurants en prenant
        exemple de l&apos;entrée dans le monde du travail. La collection, pensée pour l&apos;homme,
        aborde cette transition comme une expérience intime mais universelle. La direction
        artistique combine un imaginaire poétique avec une touche d&apos;absurde, afin de traduire
        l&apos;ambivalence entre désir d&apos;évolution et résistance au changement. Les silhouettes
        jouent sur les contrastes&nbsp;: volumes adoucis mais détails dissonants, lignes épurées
        mais ponctuées d&apos;éléments inattendus. L&apos;absurde devient un langage visuel pour
        représenter les peurs irrationnelles, tandis que la douceur apporte une dimension sensible
        et nostalgique. La palette repose sur des tons froids et pastel, évoquant une atmosphère
        calme, brumeuse, presque onirique. Ces couleurs soulignent l&apos;idée d&apos;un monde en
        suspens, entre lucidité et rêverie. La collection cherche à capter cette sensation fragile
        d&apos;être &ldquo;presque adulte&rdquo;, mais pas encore tout à fait.
      </p>
    </section>
  );
}

/* ===== COLLECTION ===== */
function CollectionSection() {
  const ref = useReveal();

  const silhouettes = [
    "/collection1.png",
    "/collection2.png",
    "/collection1.png",
    "/collection1.png",
    "/collection1.png",
    "/collection1.png",
    "/collection1.png",
    "/collection1.png",
  ];

  return (
    <section
      className="section-base"
      id="collection"
      ref={ref}
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="reveal">
        <h2 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Collection
        </h2>
        <p className="section-subtitle" style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}>
          les silhouettes
        </p>
      </div>

      <div className="section-divider reveal reveal-delay-1" style={{ marginBottom: "3rem" }} />

      <div className="collection-grid">
        {silhouettes.map((name, i) => (
          <div key={i} className={`collection-card reveal reveal-delay-${(i % 4) + 1}`}>
            <Image src={name} alt="Collection image" width={150} height={250} style={{ width: "100%", height: "100%" }} />
            <div className="collection-label">
              <span>Look {i + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===== PROPOSITION (CHAPEAU) ===== */
function PropositionSection() {
  const ref = useReveal();

  return (
    <section
      className="section-base"
      id="proposition"
      ref={ref}
      style={{ backgroundColor: "var(--color-off-white)" }}
    >
      <div className="reveal">
        <h2 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Proposition
        </h2>
        <p className="section-subtitle" style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}>
          le chapeau connecté
        </p>
      </div>

      <div className="section-divider reveal reveal-delay-1" style={{ marginBottom: "2.5rem" }} />

      <p className="proposition-text reveal reveal-delay-2">
        Comme autre proposition si réalisable, un chapeau qui pourrait détecter une situation de
        stress, de surmenage grâce à peut être des capteurs au niveau des tempes (à réfléchir sur
        l&apos;endroit des capteurs) et qui lancerait une alerte sur le téléphone ou une légère
        vibration.
      </p>

      <div className="proposition-grid">
        <div className="proposition-card reveal reveal-delay-1">
          <Placeholder label="Photo chapeau" />
        </div>
        <div className="proposition-card reveal reveal-delay-2">
          <Placeholder label="Bateaux en papier" />
        </div>
        <div className="proposition-card reveal reveal-delay-3">
          <Placeholder label="Sketch chapeau" />
        </div>
      </div>
    </section>
  );
}

/* ===== APPLICATION ===== */
function ApplicationSection() {
  const ref = useReveal();

  return (
    <section
      className="section-base"
      id="application"
      ref={ref}
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="reveal">
        <h2 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          L&apos;Application
        </h2>
        <p className="section-subtitle" style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}>
          l&apos;expérience connectée
        </p>
      </div>

      <div className="section-divider reveal reveal-delay-1" style={{ marginBottom: "3rem" }} />

      <div className="app-showcase reveal reveal-delay-2">
        <div className="app-phone-frame">
          <Image src="/app_home.png" alt="Screenshot app" width={300} height={490} className="rounded-2xl " />
        </div>

        <div className="app-description">
          <h3 style={{ fontSize: "1.5rem" }}>Un compagnon au quotidien</h3>
          <p>
            L&apos;application mobile associée au chapeau connecté permet de suivre en temps réel
            les données captées par les capteurs. Elle offre une interface sobre et intuitive,
            fidèle à l&apos;univers visuel de la collection.
          </p>

          <div className="app-features">
            <div className="app-feature">
              <div className="app-feature-dot" />
              <span>Suivi du niveau de stress en temps réel</span>
            </div>
            <div className="app-feature">
              <div className="app-feature-dot" />
              <span>Alertes personnalisables</span>
            </div>
            <div className="app-feature">
              <div className="app-feature-dot" />
              <span>Historique et tendances</span>
            </div>
            <div className="app-feature">
              <div className="app-feature-dot" />
              <span>Interface inspirée de l&apos;univers &ldquo;Trop Grand&rdquo;</span>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          justifyContent: "center",
          marginTop: "3rem",
          flexWrap: "wrap",
        }}
        className="reveal reveal-delay-3"
      >
        <div className="app-phone-frame" style={{ width: 180, height: 360 }}>
          <Image src="/app_analyse1.png" alt="Screenshot app" width={300} height={490} />
        </div>
        <div className="app-phone-frame" style={{ width: 180, height: 360 }}>
          <Image src="/app_onboarding1.png" alt="Screenshot app" width={300} height={490} />
        </div>
        <div className="app-phone-frame" style={{ width: 180, height: 360 }}>
          <Image src="/app_connect.png" alt="Screenshot app" width={300} height={490} />
        </div>
      </div>
    </section>
  );
}

/* ===== FOOTER ===== */
function Footer() {
  return (
    <footer className="footer">
      <p
        style={{
          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "1.1rem",
          marginBottom: "0.75rem",
          color: "rgba(255,255,255,0.85)",
        }}
      >
        &ldquo;Trop Grand Pour Moi&rdquo;
      </p>
      <p
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          marginBottom: "0.5rem",
        }}
      >
        Collection par Camille Coadou — SM5 DFD
      </p>
      <p style={{ fontSize: "0.65rem", opacity: 0.5, marginTop: "1.5rem" }}>
        © {new Date().getFullYear()} Tous droits réservés
      </p>
    </footer>
  );
}

/* ===== PAGE PRINCIPALE ===== */
export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <HistoireSection />
      <CollectionSection />
      <PropositionSection />
      <ApplicationSection />
      <Footer />
    </>
  );
}
