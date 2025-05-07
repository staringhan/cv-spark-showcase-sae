
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Network, Server, Code, Database, Wifi, FileText, 
  Monitor, ShieldCheck, Settings, Smartphone 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "RÉSEAUX",
      icon: Network,
      skills: [
        "Analyse réseau (Wireshark, Nmap)",
        "Switch et routeurs Cisco et Cumulus",
        "Design et architecture réseau",
        "Câblage et installation réseau",
        "Dépannage d'équipements",
      ],
    },
    {
      category: "TÉLÉCOMMUNICATIONS",
      icon: Wifi,
      skills: [
        "IPBX",
        "Fibre optique",
      ],
    },
    {
      category: "INFORMATIQUE",
      icon: Server,
      skills: [
        "Cybersécurité",
        "Windows server 2019 /22",
        "Systèmes Linux (Debian, RHEL)",
        "Virtualisation (VMware, WSL, ESXI)",
        "Bases de données (SQL, influxdb, prométhéus, oracle, Postgresql)",
        "Visualisation de data (grafana)",
      ],
    },
    {
      category: "DÉVELOPPEMENT",
      icon: Code,
      skills: [
        "Bash", "C", "python", "HTML", "CSS",
      ],
    },
    {
      category: "BUREAUTIQUE",
      icon: FileText,
      skills: [
        "Utilisation de CRM (Monday)",
        "Suite Office",
        "Slack",
      ],
    },
    {
      category: "LANGUES",
      icon: Monitor,
      skills: [
        "Anglais : Courant dans la langue + vocabulaire technique (C1 TOEIC)",
        "Créole : Langue maternelle",
      ],
    },
  ];

  return (
    <section id="skills" className="bg-background">
      <div className="absolute inset-0 bg-tech-pattern opacity-5 pointer-events-none"></div>
      <div className="section-container">
        <div className="max-w-3xl mb-12">
          <h2 className="section-title">Compétences</h2>
          <p className="section-subtitle">
            Mes expertises techniques et savoir-faire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="animate-on-scroll glass-card border border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="bg-secondary/80 p-4 flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-lg text-primary">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{category.category}</h3>
              </div>
              <CardContent className="p-5">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="bg-secondary/50 text-gray-300 border-white/10 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
