
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Server, Network, Database, ExternalLink } from "lucide-react";

const Projects = () => {
  // Placeholder projects - you should replace these with your actual SAE projects
  const projects = [
    {
      title: "Réseau d'entreprise",
      description: "Conception et mise en place d'un réseau d'entreprise virtuel avec Cisco Packet Tracer, incluant des VLANs, routage inter-VLAN et sécurisation.",
      image: "/placeholder.svg",
      categories: ["réseau", "sécurité"],
      technologies: ["Cisco", "VLAN", "ACLs", "Routing"],
      icon: Network,
    },
    {
      title: "Système de monitoring",
      description: "Développement d'une solution de surveillance de l'infrastructure IT avec Grafana, Prometheus et InfluxDB pour le monitoring en temps réel.",
      image: "/placeholder.svg",
      categories: ["système", "monitoring"],
      technologies: ["Grafana", "Prometheus", "InfluxDB", "Docker"],
      icon: Server,
      link: "#",
    },
    {
      title: "Application de gestion",
      description: "Création d'une application web pour la gestion des ressources informatiques avec authentification et gestion des rôles.",
      image: "/placeholder.svg",
      categories: ["développement", "web"],
      technologies: ["Python", "Flask", "SQLite", "HTML/CSS"],
      icon: Code,
    },
    {
      title: "Virtualisation et conteneurisation",
      description: "Mise en place d'une infrastructure virtualisée avec VMware et Docker pour l'hébergement de services web.",
      image: "/placeholder.svg",
      categories: ["système", "virtualisation"],
      technologies: ["VMware", "Docker", "Linux", "Nginx"],
      icon: Server,
    },
    {
      title: "Base de données distribuée",
      description: "Conception et implémentation d'une solution de base de données distribuée pour une application de gestion d'inventaire.",
      image: "/placeholder.svg",
      categories: ["base de données", "développement"],
      technologies: ["PostgreSQL", "Python", "SQLAlchemy"],
      icon: Database,
    },
  ];

  const categories = ["tous", "réseau", "système", "développement", "sécurité", "base de données", "virtualisation", "web", "monitoring"];
  const [activeCategory, setActiveCategory] = useState("tous");

  const filteredProjects = activeCategory === "tous" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <section id="projects" className="bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">Projets SAE</h2>
        <p className="section-subtitle">
          Découvrez mes projets réalisés dans le cadre des Situations d'Apprentissage et d'Évaluation
        </p>

        <Tabs defaultValue="tous" className="mt-12">
          <div className="flex justify-center">
            <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full data-[state=active]:bg-cv-blue data-[state=active]:text-white"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Card key={index} className="animate-on-scroll overflow-hidden">
                  <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <project.icon className="h-16 w-16 text-gray-400" />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  {project.link && (
                    <CardFooter>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <span>Voir le projet</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
