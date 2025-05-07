
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cv-dark border-t border-white/10">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Jean-Noël <span className="text-primary">Bonvent</span>
            </h3>
            <p className="text-gray-400 mt-2">Alternant Ingénieur HPC</p>
          </div>

          <div className="flex items-center gap-4">
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

        <hr className="border-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Jean-Noël Bonvent. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#about" className="text-sm text-gray-400 hover:text-primary transition-colors">
              À propos
            </a>
            <a href="#projects" className="text-sm text-gray-400 hover:text-primary transition-colors">
              Projets
            </a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
