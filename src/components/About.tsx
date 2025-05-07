
import { Card, CardContent } from "@/components/ui/card";
import { User, Award, Mail, MapPin, Phone, Linkedin, Car, CheckCircle } from "lucide-react";

const About = () => {
  const qualities = [
    { title: "Patient", description: "J'aborde chaque défi avec patience et persévérance", icon: CheckCircle },
    { title: "Rigoureux", description: "Je m'engage à fournir un travail précis et méthodique", icon: CheckCircle },
    { title: "Passionné", description: "Animé par une passion authentique pour l'informatique", icon: CheckCircle },
    { title: "Autonome", description: "Capable de gérer des projets de façon indépendante", icon: CheckCircle },
  ];

  const personalInfo = [
    { icon: User, text: "21 ans" },
    { icon: MapPin, text: "53 Rue Vestrepain, 31100 Toulouse" },
    { icon: Mail, text: "jn.bonvent@gmail.com" },
    { icon: Phone, text: "+33 786 75 84 76" },
    { icon: Car, text: "Détenteur du permis B (Motorisé)" },
    { icon: Linkedin, text: "LinkedIn", href: "https://linkedin.com" },
  ];

  return (
    <section id="about" className="relative bg-gradient-to-b from-background to-cv-dark">
      <div className="absolute inset-0 bg-tech-pattern opacity-5 pointer-events-none"></div>
      <div className="section-container">
        <div className="max-w-3xl mb-12">
          <h2 className="section-title">À propos de moi</h2>
          <p className="section-subtitle">
            Alternant en Ingénierie High Processing Computing (HPC) avec une passion pour les technologies informatiques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">Savoir être</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {qualities.map((quality, index) => (
                <Card key={index} className="animate-on-scroll glass-card border border-white/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <quality.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{quality.title}</h4>
                        <p className="text-gray-400">{quality.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">Informations personnelles</h3>
            <Card className="glass-card border border-white/10">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {personalInfo.map((info, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full text-primary">
                        <info.icon className="h-5 w-5" />
                      </div>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-primary transition-colors"
                        >
                          {info.text}
                        </a>
                      ) : (
                        <span className="text-gray-300">{info.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">Centre d'intérêt</h3>
              <Card className="glass-card border border-white/10">
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>Sport: Pratique de la calisthénie et du renforcement musculaire</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>Photographie</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>Jeux vidéo (stratégie, multiplayer)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>Lecture (Roman fantastique)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>Veille technologique</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
