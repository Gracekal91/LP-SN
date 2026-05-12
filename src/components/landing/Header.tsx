import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenDemo: () => void;
  onOpenWaitlist: () => void;
}

const Header = ({ onOpenDemo, onOpenWaitlist }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <nav 
          className="rounded-2xl px-6 py-2 flex items-center justify-between transition-all duration-300 bg-primary shadow-xl shadow-primary/20 border border-white/10"
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 bg-white text-primary">
              <span className="font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block transition-colors duration-300 text-white">
              School Network
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="transition-colors duration-200 text-sm font-bold text-white/80 hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              className="font-bold text-sm text-white hover:bg-white/10"
              onClick={() => scrollToSection("#faq")}
            >
              Contact
            </Button>
            <Button
              className="font-bold rounded-full px-6 transition-all duration-300 hover:-translate-y-0.5 bg-white text-primary hover:bg-white/90 shadow-lg"
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhDi3CYH0OKdQdRq8nvGNUTaSAZnsWNT8lZ59KWah1Ev4Whg/viewform?usp=sharing&ouid=103191188960058496730" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 p-6 rounded-2xl border shadow-2xl animate-fade-in bg-primary text-white border-white/10">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-lg font-bold transition-colors text-left text-white hover:text-white/80"
                >
                  {link.label}
                </button>
              ))}
              <hr className="border-white/10" />
              <Button
                className="w-full font-bold h-14 rounded-full text-lg shadow-lg bg-white text-primary hover:bg-white/90"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhDi3CYH0OKdQdRq8nvGNUTaSAZnsWNT8lZ59KWah1Ev4Whg/viewform?usp=sharing&ouid=103191188960058496730" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
