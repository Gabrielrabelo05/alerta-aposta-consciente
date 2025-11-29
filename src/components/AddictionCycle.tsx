import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Zap, TrendingUp, TrendingDown, RepeatIcon, AlertTriangle } from "lucide-react";

const cycleSteps = [
  {
    icon: Sparkles,
    title: "1. Curiosidade inicial",
    description: "Influência de amigos, anúncios atrativos ou busca por entretenimento.",
  },
  {
    icon: Zap,
    title: "2. Primeiro ganho",
    description: "Sensação intensa de euforia e a falsa percepção de que 'é fácil ganhar'.",
  },
  {
    icon: TrendingUp,
    title: "3. Aumento das apostas",
    description: "Confiança excessiva leva a apostas com valores cada vez maiores.",
  },
  {
    icon: TrendingDown,
    title: "4. Perdas acumuladas",
    description: "As perdas começam a superar os ganhos, mas a pessoa continua apostando.",
  },
  {
    icon: RepeatIcon,
    title: "5. 'Chasing' - Correr atrás do prejuízo",
    description: "Tentar recuperar perdas dobrando apostas, afundando ainda mais.",
  },
  {
    icon: AlertTriangle,
    title: "6. Perda de controle",
    description: "Dívidas graves, ansiedade crônica, mentiras e isolamento social.",
  },
];

export function AddictionCycle() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="relative">
        {/* Linha conectora vertical para mobile e desktop */}
        <div className="absolute left-[2.25rem] md:left-1/2 top-0 bottom-0 w-0.5 bg-alert/30 -translate-x-1/2" />
        
        <div className="space-y-8">
          {cycleSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`relative flex items-center gap-4 md:gap-8 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Conteúdo do card */}
                <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                  <Card className="border-2 border-border hover:border-alert transition-colors shadow-card inline-block w-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Ícone central */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="rounded-full bg-alert p-4 shadow-alert">
                    <Icon className="h-6 w-6 text-alert-foreground" />
                  </div>
                </div>

                {/* Espaçador para manter o layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
