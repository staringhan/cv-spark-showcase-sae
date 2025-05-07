
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-cv-dark to-background text-white min-h-screen flex items-center overflow-hidden">
      {/* Tech background pattern */}
      <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
      
      {/* Animation dots */}
      <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-primary animate-pulse-glow"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 rounded-full bg-blue-400 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-blue-500 animate-pulse-glow" style={{animationDelay: '2s'}}></div>
      
      <div className="section-container pt-32 pb-24 sm:pb-32 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col space-y-6 max-w-2xl">
            <div className="flex items-center space-x-3">
              <div className="h-1 w-12 bg-primary"></div>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Alternant Ingénieur HPC</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Jean-Noël <span className="text-primary">Bonvent</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Spécialisé en réseaux, cybersécurité et systèmes informatiques. Passionné par les technologies et les infrastructures de calcul haute performance.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-white">
                <a href="#contact">Me contacter</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <a href="#projects">
                  Voir mes projets
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <a
                href="mailto:jn.bonvent@gmail.com"
                className="p-2 rounded-full border border-white/20 hover:border-primary hover:bg-primary/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/20 hover:border-primary hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/20 hover:border-primary hover:bg-primary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl shadow-primary/20 relative z-10">
              <img 
                src="/lovable-uploads/996496dd-51f9-4897-9da2-f99dde70b346.png" 
                alt="Jean-Noël Bonvent" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decoration elements */}
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-full border-4 border-dashed border-primary/40 -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-400 mb-2">Découvrir</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </div>
  );
};

export default Hero;
