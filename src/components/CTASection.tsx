import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Users, Heart } from "lucide-react";

export function CTASection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-20 bg-gradient-to-br from-primary/5 to-alert/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          E se você já sente que perdeu o controle?
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
          Reconhecer o problema é o primeiro e mais importante passo. Você não está sozinho, e há caminhos para a recuperação.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="border-2 border-border hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-primary mb-2">Converse com Pessoas Próximas</h3>
              <p className="text-sm text-muted-foreground">
                Compartilhe suas dificuldades com família e amigos. O apoio social é fundamental.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-primary mb-2">Busque Ajuda Profissional</h3>
              <p className="text-sm text-muted-foreground">
                Psicólogos e psiquiatras especializados podem oferecer tratamento adequado.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-primary mb-2">Participe de Grupos de Apoio</h3>
              <p className="text-sm text-muted-foreground">
                Comunidades como Jogadores Anônimos oferecem suporte contínuo e compreensão.
              </p>
            </CardContent>
          </Card>
        </div>

        <Button
          size="lg"
          className="bg-alert hover:bg-alert/90 text-alert-foreground font-bold text-lg px-8 py-6 h-auto shadow-alert"
        >
          Quero entender como buscar ajuda
        </Button>

        <p className="mt-8 text-sm text-muted-foreground italic">
          Lembre-se: recuperar o controle da sua vida é possível. O primeiro passo é reconhecer que precisa de ajuda.
        </p>
      </div>
    </section>
  );
}
