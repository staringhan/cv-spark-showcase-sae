
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
    <section id="education" className="bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">Formation</h2>
        <p className="section-subtitle">Mon parcours académique et mes certifications</p>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="space-y-10">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item animate-on-scroll">
                <Card>
                  <CardHeader className="bg-blue-50 dark:bg-blue-900/30 p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-4">
                        <div className="bg-cv-blue text-white p-2 rounded-full">
                          <edu.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold">{edu.institution}</CardTitle>
                          <p className="text-gray-600 dark:text-gray-400 mt-1">{edu.degree}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-white text-cv-blue border-cv-blue">
                        {edu.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  {(edu.certifications || edu.details) && (
                    <CardContent className="p-6">
                      {edu.certifications && (
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Certifications</h4>
                          <ul className="space-y-1">
                            {edu.certifications.map((cert, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span>{cert}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {edu.details && (
                        <div>
                          <h4 className="font-semibold mb-2">Détails</h4>
                          <ul className="space-y-1">
                            {edu.details.map((detail, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span>• {detail}</span>
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
