import { Card, CardContent } from "@/components/ui/card";
import { Wallet, TrendingDown, Users, Briefcase } from "lucide-react";

const consequences = [
  {
    icon: Wallet,
    title: "Impacto financeiro",
    description: "Dívidas acumuladas, uso descontrolado do limite do cartão de crédito, empréstimos com juros altos e perda de economias. A situação financeira deteriora rapidamente.",
    highlight: "dívidas",
  },
  {
    icon: TrendingDown,
    title: "Fenômeno do 'chasing'",
    description: "A pessoa perde uma aposta, mas acredita que se dobrar a próxima vai recuperar tudo e 'sair no zero a zero' – o que geralmente aprofunda as perdas exponencialmente.",
    highlight: "perda",
  },
  {
    icon: Users,
    title: "Erosão familiar e social",
    description: "Conflitos constantes, mentiras para esconder o problema, isolamento social progressivo e perda total de confiança por parte de familiares e amigos.",
    highlight: "conflito",
  },
  {
    icon: Briefcase,
    title: "Impacto profissional",
    description: "Queda significativa de produtividade, distração constante durante o expediente, faltas frequentes e alto risco de demissão por baixo desempenho.",
    highlight: "produtividade",
  },
];

export function ConsequencesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 lg:px-16">
      {consequences.map((consequence, index) => {
        const Icon = consequence.icon;
        return (
          <Card
            key={index}
            className="border-2 border-border hover:border-alert hover:shadow-alert transition-all duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-alert/10 p-3 flex-shrink-0">
                  <Icon className="h-7 w-7 text-alert" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {consequence.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {consequence.description.split(consequence.highlight).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="font-semibold text-alert">
                            {consequence.highlight}
                          </span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
