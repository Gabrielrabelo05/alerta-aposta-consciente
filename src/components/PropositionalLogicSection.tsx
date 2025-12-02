import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GitBranch, Lightbulb } from "lucide-react";

export function PropositionalLogicSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16">
      {/* Card 1: Proposições */}
      <Card className="border-2 border-primary/30 bg-card hover:border-primary hover:shadow-card transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-primary">Elementos Lógicos do Vício</h3>
          </div>
          
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground mb-3">Proposições:</p>
            
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm space-y-2">
              <p><span className="text-primary font-bold">E</span>: Exposição às apostas</p>
              <p><span className="text-primary font-bold">I</span>: Influência social</p>
              <p><span className="text-primary font-bold">C</span>: Ilusão de controle</p>
              <p><span className="text-alert font-bold">V</span>: Vício em apostas</p>
              <div className="border-t border-border pt-2 mt-2">
                <p><span className="text-danger font-bold">D</span>: Dívidas</p>
                <p><span className="text-danger font-bold">F</span>: Dano Familiar</p>
                <p><span className="text-danger font-bold">P</span>: Problemas Profissionais</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Card 2: A Lógica do Vício */}
      <Card className="border-2 border-alert/30 bg-card hover:border-alert hover:shadow-card transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex items-center justify-center rounded-full bg-alert/10 p-3">
              <GitBranch className="h-6 w-6 text-alert" />
            </div>
            <h3 className="text-lg font-bold text-alert">O Ciclo Lógico</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-4 text-center">
              <p className="font-mono text-lg font-bold text-primary mb-2">
                (E ∧ I ∧ C) → V
              </p>
              <p className="font-mono text-lg font-bold text-danger">
                V → (D ∧ F ∧ P)
              </p>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              "Se há <span className="text-primary font-semibold">exposição</span>, 
              <span className="text-primary font-semibold"> influência</span> e 
              <span className="text-primary font-semibold"> ilusão de controle</span>, 
              o <span className="text-alert font-semibold">vício</span> surge e leva a 
              <span className="text-danger font-semibold"> dívidas</span>, 
              <span className="text-danger font-semibold"> danos familiares</span> e 
              <span className="text-danger font-semibold"> problemas profissionais</span>."
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Card 3: Conclusão Lógica */}
      <Card className="border-2 border-danger/30 bg-card hover:border-danger hover:shadow-card transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex items-center justify-center rounded-full bg-danger/10 p-3">
              <Lightbulb className="h-6 w-6 text-danger" />
            </div>
            <h3 className="text-lg font-bold text-danger">A Necessidade de Agir</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-danger/5 border-2 border-danger/20 rounded-lg p-4">
              <p className="text-sm font-medium text-foreground leading-relaxed mb-3">
                "Se não queremos as consequências 
                <span className="font-mono font-bold text-danger"> D, F, P</span>, 
                precisamos intervir nas causas 
                <span className="font-mono font-bold text-primary"> E, I, C</span>."
              </p>
            </div>
            
            <div className="bg-alert/10 rounded-lg p-4 border-l-4 border-alert">
              <p className="text-sm font-semibold text-foreground">
                "A prevenção não é apenas uma escolha — é uma <span className="text-alert">necessidade lógica</span>."
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
