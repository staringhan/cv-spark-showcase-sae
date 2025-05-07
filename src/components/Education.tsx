
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { School, Award, CheckCircle } from "lucide-react";

const Education = () => {
  const education = [
    {
      period: "2025 (en cours)",
      institution: "YNOV TOULOUSE (31)",
      degree: "Expert en cloud, sécurité, infrastructure",
      icon: School,
    },
    {
      period: "2022 - 2025",
      institution: "IUT de BLAGNAC (31)",
      degree: "Bachelor universitaire de Technologie",
      icon: School,
      certifications: [
        "Certification Cisco CCNA 1 : Introduction aux réseaux",
        "Bases en cybersécurité (ANSSI)",
        "Certification Cysco cyber essentials",
        "Certification Cisco Switching, routing and wireless essentials",
        "Stormshield CSNA",
      ],
    },
    {
      period: "2021 - 2022",
      institution: "INSA Haut De France (59)",
      degree: "Classe préparatoire orientée informatique et physique",
      icon: School,
    },
    {
      period: "2022",
      institution: "Lycée Général et Technologique Frantz Fanon (972)",
      degree: "Baccalauréat Général, Mention Très bien",
      icon: Award,
      details: [
        "Cambridge English certification",
        "Options Mathématique et Science de l'informatique et du numérique",
      ],
    },
  ];

  return (
    <section id="education" className="bg-cv-dark">
      <div className="absolute inset-0 bg-tech-pattern opacity-5 pointer-events-none"></div>
      <div className="section-container">
        <div className="max-w-3xl mb-12">
          <h2 className="section-title">Formation</h2>
          <p className="section-subtitle">
            Mon parcours académique et mes certifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item animate-on-scroll">
                <Card className="glass-card border border-white/10 hover:border-primary/30 transition-all duration-300">
                  <CardHeader className="bg-secondary/80 p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/20 p-2 rounded-lg text-primary">
                          <edu.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold">{edu.institution}</CardTitle>
                          <p className="text-gray-400 mt-1">{edu.degree}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        {edu.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  {(edu.certifications || edu.details) && (
                    <CardContent className="p-6">
                      {edu.certifications && (
                        <div className="mb-4">
                          <h4 className="font-semibold mb-3 text-gray-200">Certifications</h4>
                          <ul className="space-y-2">
                            {edu.certifications.map((cert, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-primary" />
                                <span className="text-gray-300">{cert}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {edu.details && (
                        <div>
                          <h4 className="font-semibold mb-3 text-gray-200">Détails</h4>
                          <ul className="space-y-2">
                            {edu.details.map((detail, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                <span className="text-gray-300">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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

export default Education;
