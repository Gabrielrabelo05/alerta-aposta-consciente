import { Card, CardContent } from "@/components/ui/card";
import { Scale, Heart, Smartphone, HandHeart } from "lucide-react";

const facts = [
  {
    icon: Scale,
    text: "A casa sempre tem vantagem: as odds são calculadas para que, no longo prazo, você perca.",
  },
  {
    icon: Heart,
    text: "O vício não é falta de força de vontade: é um problema de saúde que afeta o cérebro.",
  },
  {
    icon: Smartphone,
    text: "Aplicativos de aposta usam cores, sons e notificações para manter você jogando.",
  },
  {
    icon: HandHeart,
    text: "Pedir ajuda não é sinal de fraqueza, é o primeiro passo para retomar o controle.",
  },
];

export function QuickFactsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-8 lg:px-16">
      {facts.map((fact, index) => {
        const Icon = fact.icon;
        return (
          <Card
            key={index}
            className="border-2 border-primary/20 hover:border-primary hover:shadow-card transition-all duration-300"
          >
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-4">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm leading-relaxed text-foreground font-medium">
                {fact.text}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
