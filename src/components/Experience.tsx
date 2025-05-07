
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      period: "2023 - en cours",
      company: "EVIDEN",
      title: "Alternant en Ingénierie High Processing Computing (HPC)",
      logo: "/placeholder.svg",
      description: "",
    },
    {
      period: "2022",
      company: "EPNAK (76)",
      title: "Développeur",
      description: "Développeur au sein de l'EPNAK, organisme luttant pour l'insertion des personnes en situation de handicap.",
      logo: "/placeholder.svg",
    },
    {
      period: "2022",
      company: "JINNOV (59)",
      title: "Junior-entreprise de L'INSA HDF",
      description: "Mise en place de réseaux et Systèmes (NAS, VPS)",
      logo: "/placeholder.svg",
    },
    {
      period: "2007 - 2023",
      company: "RETELCOM (972)",
      title: "Entreprise familiale",
      description: "Introduction au monde professionnel",
      logo: "/placeholder.svg",
    },
  ];

  return (
    <section id="experience" className="bg-background">
      <div className="absolute inset-0 bg-tech-pattern opacity-5 pointer-events-none"></div>
      <div className="section-container">
        <div className="max-w-3xl mb-12">
          <h2 className="section-title">Expériences</h2>
          <p className="section-subtitle">
            Mon parcours professionnel et mes expériences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item animate-on-scroll">
                <Card className="glass-card border border-white/10 hover:border-primary/30 transition-all duration-300">
                  <CardHeader className="bg-secondary/80 p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/20 p-2 rounded-lg text-primary">
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold">{exp.company}</CardTitle>
                          <p className="text-gray-400 mt-1">{exp.title}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  {exp.description && (
                    <CardContent className="p-6">
                      <p className="text-gray-300">{exp.description}</p>
                    </CardContent>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
