
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-cv-blue text-white overflow-hidden">
      <div className="section-container pt-32 pb-24 sm:pb-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Jean-Noël Bonvent
            </h1>
            <p className="text-xl md:text-2xl font-medium text-blue-100">
              Alternant Ingénieur HPC
            </p>
            <p className="text-lg md:text-xl text-blue-100">
              Spécialisé en réseaux, cybersécurité et systèmes informatiques
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="bg-white text-cv-blue hover:bg-blue-50">
                <a href="#contact">Me contacter</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                <a href="#projects">Voir mes projets</a>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/lovable-uploads/996496dd-51f9-4897-9da2-f99dde70b346.png" 
                alt="Jean-Noël Bonvent" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-background"></div>
    </div>
  );
};

export default Hero;
