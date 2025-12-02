import { Button } from "@/components/ui/button";
import { AlertCircle, TrendingDown, Users, CreditCard } from "lucide-react";
import heroImage from "@/assets/hero-betting-concern.jpg";

export function HeroSection() {
  const scrollToContent = () => {
    const element = document.getElementById("causas");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-danger/40 z-10" />
        <img 
          src={heroImage} 
          alt="Pessoa preocupada com apostas"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-alert/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-danger/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-alert/30 backdrop-blur-sm px-3 sm:px-5 py-2 sm:py-3 rounded-full border-2 border-alert animate-fade-in">
              <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-alert-foreground" />
              <span className="text-sm sm:text-base font-bold text-alert-foreground">ALERTA DE SAÚDE PÚBLICA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-primary-foreground leading-[1.1] animate-fade-in" style={{ animationDelay: '0.2s' }}>
              O preço oculto das{" "}
              <span className="text-alert drop-shadow-[0_0_30px_rgba(255,87,51,0.5)]">apostas</span>
            </h1>

            <div className="space-y-3 sm:space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground font-semibold leading-relaxed">
                Como a ilusão do dinheiro rápido e a dopamina dos apps estão destruindo vidas, famílias e carreiras.
              </p>
              
              <p className="text-base sm:text-lg text-primary-foreground/90 leading-relaxed">
                Milhões de brasileiros estão presos em um ciclo vicioso que começa com a promessa de ganhos fáceis e termina em dívidas, conflitos familiares e perda total de controle.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="bg-background/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-alert/30 flex sm:block items-center gap-3">
                <TrendingDown className="h-6 w-6 sm:h-8 sm:w-8 text-alert sm:mb-2" />
                <div className="flex sm:block items-baseline gap-2">
                  <p className="text-xl sm:text-2xl font-bold text-primary-foreground">67%</p>
                  <p className="text-xs text-primary-foreground/80">perdem mais do que ganham</p>
                </div>
              </div>
              <div className="bg-background/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-alert/30 flex sm:block items-center gap-3">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-alert sm:mb-2" />
                <div className="flex sm:block items-baseline gap-2">
                  <p className="text-xl sm:text-2xl font-bold text-primary-foreground">3x</p>
                  <p className="text-xs text-primary-foreground/80">mais conflitos familiares</p>
                </div>
              </div>
              <div className="bg-background/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-alert/30 flex sm:block items-center gap-3">
                <CreditCard className="h-6 w-6 sm:h-8 sm:w-8 text-alert sm:mb-2" />
                <div className="flex sm:block items-baseline gap-2">
                  <p className="text-xl sm:text-2xl font-bold text-primary-foreground">R$ 30k</p>
                  <p className="text-xs text-primary-foreground/80">dívida média acumulada</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              onClick={scrollToContent}
              className="bg-alert hover:bg-alert/90 text-alert-foreground font-bold text-base sm:text-xl px-6 sm:px-10 py-5 sm:py-7 h-auto shadow-[0_0_30px_rgba(255,87,51,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,87,51,0.6)] animate-fade-in w-full sm:w-auto"
              style={{ animationDelay: '0.8s' }}
            >
              Entenda como esse vício funciona
            </Button>
          </div>

          {/* Right side - Image with overlay stats */}
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-alert/30">
              <img 
                src={heroImage} 
                alt="Impacto das apostas na vida real"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
              
              {/* Overlay warning */}
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                <div className="bg-danger/90 backdrop-blur-md px-6 py-4 rounded-lg border-2 border-danger">
                  <p className="text-white font-bold text-lg mb-2">⚠️ REALIDADE CHOCANTE</p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    O que começa como "diversão" pode rapidamente se transformar em um problema sério de saúde mental e financeira.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative warning stripes */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="h-3 w-20 bg-alert rounded-full shadow-lg" />
              <div className="h-3 w-20 bg-danger rounded-full shadow-lg" />
              <div className="h-3 w-20 bg-alert rounded-full shadow-lg" />
            </div>
          </div>
        </div>

        {/* Mobile image */}
        <div className="lg:hidden mt-8 sm:mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-alert/30">
            <img 
              src={heroImage} 
              alt="Impacto das apostas na vida real"
              className="w-full h-[200px] sm:h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
