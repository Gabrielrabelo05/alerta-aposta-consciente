import { HeroSection } from "@/components/HeroSection";
import { CausesCarousel } from "@/components/CausesCarousel";
import { ConsequencesGrid } from "@/components/ConsequencesGrid";
import { ImpactCharts } from "@/components/ImpactCharts";
import { AddictionCycle } from "@/components/AddictionCycle";
import { PropositionalLogicSection } from "@/components/PropositionalLogicSection";
import { CTASection } from "@/components/CTASection";
import { AlertTriangle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Causas do Vício */}
      <section id="causas" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Por Que as Apostas Viciam?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Entenda os principais gatilhos psicológicos e sociais que transformam apostas ocasionais em vício destrutivo.
            </p>
          </div>
          <CausesCarousel />
        </div>
      </section>

      {/* Consequências */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 px-4">
            <div className="inline-flex items-center gap-2 bg-alert/10 px-4 py-2 rounded-full mb-4">
              <AlertTriangle className="h-5 w-5 text-alert" />
              <span className="text-sm font-semibold text-alert">Impactos Graves</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Consequências do Vício em Apostas
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              O vício em jogos de azar afeta todas as áreas da vida, causando danos profundos e duradouros.
            </p>
          </div>
          <ConsequencesGrid />
        </div>
      </section>

      {/* Gráficos de Impacto */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Dados que Mostram a Gravidade
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Números reveladores sobre o impacto do vício em apostas na população.
            </p>
          </div>
          <ImpactCharts />
        </div>
      </section>

      {/* Ciclo do Vício */}
      <section className="py-20 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Como as Casas de Aposta Te Prendem
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Compreenda o ciclo viciante que começa de forma sutil e termina em perda total de controle.
            </p>
          </div>
          <AddictionCycle />
        </div>
      </section>

      {/* Lógica Proposicional */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 px-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary">Matemática Discreta</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              A Lógica Por Trás do Vício
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Entenda através da lógica proposicional como o vício em apostas se forma e suas consequências inevitáveis.
            </p>
          </div>
          <PropositionalLogicSection />
        </div>
      </section>

      {/* CTA de Ajuda */}
      {/* <CTASection /> */}

      {/* Rodapé */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center space-y-4">
            <p className="text-sm opacity-90">
              <strong>Aviso importante:</strong> Este site tem finalidade educativa e não substitui acompanhamento profissional.
            </p>
            <p className="text-sm opacity-90">
              Se você ou alguém próximo está enfrentando problemas com apostas, procure ajuda especializada.
            </p>
            <div className="pt-6 border-t border-primary-foreground/20">
              <p className="text-xs opacity-75">
                © 2024 Conscientização sobre Vícios em Apostas. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
