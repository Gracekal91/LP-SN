import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-border transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">SN</span>
            </div>
            <span className="text-2xl font-bold text-primary">School Network</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, '#features')}
              className="text-foreground hover:text-primary transition-all duration-300"
            >
              Features
            </a>
            <a 
              href="#how-it-works"
              onClick={(e) => scrollToSection(e, '#how-it-works')}
              className="text-foreground hover:text-primary transition-all duration-300"
            >
              How It Works
            </a>
            <a 
              href="#testimonials"
              onClick={(e) => scrollToSection(e, '#testimonials')}
              className="text-foreground hover:text-primary transition-all duration-300"
            >
              Testimonials
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a 
              href="#features"
              onClick={(e) => scrollToSection(e, '#features')}
              className="block py-2 text-foreground hover:text-primary transition-all duration-300"
            >
              Features
            </a>
            <a 
              href="#how-it-works"
              onClick={(e) => scrollToSection(e, '#how-it-works')}
              className="block py-2 text-foreground hover:text-primary transition-all duration-300"
            >
              How It Works
            </a>
            <a 
              href="#testimonials"
              onClick={(e) => scrollToSection(e, '#testimonials')}
              className="block py-2 text-foreground hover:text-primary transition-all duration-300"
            >
              Testimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
