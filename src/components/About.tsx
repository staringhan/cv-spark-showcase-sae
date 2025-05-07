
import { Card, CardContent } from "@/components/ui/card";
import { User, Award, Mail, MapPin, Phone, Linkedin, Car } from "lucide-react";

const About = () => {
  const qualities = [
    { title: "Patient", description: "J'aborde chaque défi avec patience et persévérance" },
    { title: "Rigoureux", description: "Je m'engage à fournir un travail précis et méthodique" },
    { title: "Passionné", description: "Animé par une passion authentique pour l'informatique" },
    { title: "Autonome", description: "Capable de gérer des projets de façon indépendante" },
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
    <section id="about" className="bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">À propos de moi</h2>
        <p className="section-subtitle">
          Alternant en Ingénierie High Processing Computing (HPC) avec une passion pour les technologies informatiques
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-cv-blue">Savoir être</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {qualities.map((quality, index) => (
                <Card key={index} className="animate-on-scroll">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-2">{quality.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{quality.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-cv-blue">Informations personnelles</h3>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {personalInfo.map((info, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-full text-cv-blue">
                        <info.icon className="h-5 w-5" />
                      </div>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-cv-blue"
                        >
                          {info.text}
                        </a>
                      ) : (
                        <span className="text-gray-700 dark:text-gray-300">{info.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-cv-blue">Centre d'intérêt</h3>
              <ul className="mt-4 space-y-2 list-disc pl-5">
                <li>Sport: Pratique de la calisthénie et du renforcement musculaire</li>
                <li>Photographie</li>
                <li>Jeux vidéo (stratégie, multiplayer)</li>
                <li>Lecture (Roman fantastique)</li>
                <li>Veille technologique</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
