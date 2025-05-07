
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">Projets SAE</h2>
        <p className="section-subtitle">
          Découvrez mes projets réalisés dans le cadre des Situations d'Apprentissage et d'Évaluation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* First empty project tile */}
          <Card className="animate-on-scroll overflow-hidden">
            <div className="h-48 bg-card flex items-center justify-center">
              <Code className="h-16 w-16 text-gray-400" />
            </div>
            <CardHeader>
              <CardTitle>Projet SAE 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Cliquez pour éditer la description de votre projet
              </p>
            </CardContent>
          </Card>

          {/* Second empty project tile */}
          <Card className="animate-on-scroll overflow-hidden">
            <div className="h-48 bg-card flex items-center justify-center">
              <Server className="h-16 w-16 text-gray-400" />
            </div>
            <CardHeader>
              <CardTitle>Projet SAE 2</CardTitle>
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
