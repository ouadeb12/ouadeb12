import { useState, useEffect } from "react";
import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import COSOComponents from "@/components/COSOComponents";
import COSOCharts from "@/components/COSOCharts";
import KPISection from "@/components/KPISection";
import TimelineBudget from "@/components/TimelineBudget";
import GovernanceSection from "@/components/GovernanceSection";
import ResourcesSection from "@/components/ResourcesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import { ArrowUp } from "lucide-react";

const Index = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navSections = [
    { id: "accueil", label: "Accueil" },
    { id: "composants", label: "Composants COSO" },
    { id: "metriques", label: "Métriques & KPI" },
    { id: "timeline", label: "Timeline" },
    { id: "gouvernance", label: "Gouvernance" },
    { id: "ressources", label: "Ressources" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <StickyNav navSections={navSections} />
      
      <section id="accueil">
        <HeroSection />
      </section>

      <section id="composants" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Les 5 Composants COSO
          </h2>
          <COSOComponents />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Analyse & Visualisations
          </h2>
          <COSOCharts />
        </div>
      </section>

      <section id="metriques" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <KPISection />
        </div>
      </section>

      <section id="timeline" className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Calendrier & Budget
          </h2>
          <TimelineBudget />
        </div>
      </section>

      <section id="gouvernance" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <GovernanceSection />
        </div>
      </section>

      <section id="ressources" className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Ressources & Documentation
          </h2>
          <ResourcesSection />
        </div>
      </section>

      <section id="faq" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Questions Fréquemment Posées
          </h2>
          <FAQSection />
        </div>
      </section>

      <section id="contact" className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <ContactSection />
        </div>
      </section>

      <footer className="border-t bg-card px-6 py-12 text-center text-sm text-muted-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">À Propos</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Équipe
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Légal</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Conditions d'utilisation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Politique de confidentialité
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Suivez-nous</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-6 border-border" />
          <p className="text-xs">
            COSO Contrôle Interne — Burkina Faso © 2026 · Référentiel PIFC / Normes IIA
          </p>
        </div>
      </footer>

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition z-50"
          aria-label="Retour vers le haut"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Index;