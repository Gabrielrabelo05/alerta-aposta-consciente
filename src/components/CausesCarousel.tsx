import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DollarSign, Users, Gamepad2, Brain } from "lucide-react";

const causes = [
  {
    icon: DollarSign,
    title: "Esperança de dinheiro fácil e rápido",
    description: "A promessa de 'ficar rico rápido' é um gatilho clássico que atrai pessoas vulneráveis. A ilusão de que uma única aposta pode mudar a vida financeira mantém o ciclo viciante.",
  },
  {
    icon: Users,
    title: "Influência social",
    description: "Amigos, influenciadores digitais e grupos de Telegram/WhatsApp normalizam e incentivam o comportamento. A pressão social torna difícil resistir quando 'todo mundo está apostando'.",
  },
  {
    icon: Gamepad2,
    title: "Ilusão de controle",
    description: "O apostador acredita que 'entende o jogo' e pode prever resultados. Na prática, a casa sempre tem vantagem matemática, e o controle é apenas uma ilusão.",
  },
  {
    icon: Brain,
    title: "Vício por dopamina",
    description: "Cada notificação de 'quase ganhou' ou pequeno ganho libera dopamina no cérebro, criando um ciclo de reforço que é extremamente difícil de quebrar.",
  },
];

export function CausesCarousel() {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {causes.map((cause, index) => {
            const Icon = cause.icon;
            return (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-2 border-border hover:border-primary transition-colors shadow-card">
                  <CardContent className="flex flex-col items-start p-6 h-full">
                    <div className="rounded-full bg-primary/10 p-3 mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {cause.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {cause.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-4">
          <CarouselPrevious className="relative left-0 translate-x-0" />
          <CarouselNext className="relative right-0 translate-x-0" />
        </div>
      </Carousel>
    </div>
  );
}
