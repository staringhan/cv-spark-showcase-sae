
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <section id="projects" className="relative bg-background py-20">
      {/* Tech background with pattern */}
      <div className="absolute inset-0 bg-tech-pattern opacity-5 pointer-events-none"></div>
      
      <div className="section-container">
        <div className="max-w-3xl">
          <h2 className="section-title">Projets SAE</h2>
          <p className="section-subtitle">
            Découvrez mes projets réalisés dans le cadre des Situations d'Apprentissage et d'Évaluation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* First project tile */}
          <Card className="animate-on-scroll overflow-hidden glass-card hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-white/10">
            <div className="h-48 bg-gradient-to-br from-secondary/80 to-secondary flex items-center justify-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
              <Code className="h-16 w-16 text-primary/70 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>SAE 53</span>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Cliquez pour éditer la description de votre projet
              </p>
            </CardContent>
          </Card>

          {/* Second project tile */}
          <Card className="animate-on-scroll overflow-hidden glass-card hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-white/10">
            <div className="h-48 bg-gradient-to-br from-secondary/80 to-secondary flex items-center justify-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
              <Server className="h-16 w-16 text-primary/70 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>SAE 24</span>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Cliquez pour éditer la description de votre projet
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
