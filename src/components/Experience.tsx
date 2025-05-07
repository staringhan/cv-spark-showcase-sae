
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <section id="experience" className="bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">Expériences</h2>
        <p className="section-subtitle">Mon parcours professionnel et mes expériences</p>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item animate-on-scroll">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-blue-50 dark:bg-blue-900/30 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-bold">{exp.company}</CardTitle>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">{exp.title}</p>
                      </div>
                      <Badge variant="outline" className="bg-white text-cv-blue border-cv-blue">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  {exp.description && (
                    <CardContent className="p-6">
                      <p>{exp.description}</p>
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
