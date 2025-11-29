import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export function HeroSection() {
  const scrollToContent = () => {
    const element = document.getElementById("causas");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-alert/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-alert/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-alert/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-alert/30">
          <AlertCircle className="h-5 w-5 text-alert-foreground" />
          <span className="text-sm font-semibold text-alert-foreground">Alerta de Saúde Pública</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          O preço oculto das apostas: entenda o vício em casas de aposta e jogos de azar
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Como a ilusão do dinheiro rápido e a dopamina dos apps estão destruindo vidas, famílias e carreiras.
        </p>

        <Button
          size="lg"
          onClick={scrollToContent}
          className="bg-alert hover:bg-alert/90 text-alert-foreground font-bold text-lg px-8 py-6 h-auto shadow-alert transition-all hover:scale-105"
        >
          Entenda como esse vício funciona
        </Button>

        {/* Decorative warning stripes */}
        <div className="mt-16 flex justify-center gap-2">
          <div className="h-2 w-16 bg-alert rounded-full" />
          <div className="h-2 w-16 bg-danger rounded-full" />
          <div className="h-2 w-16 bg-alert rounded-full" />
        </div>
      </div>
    </section>
  );
}
