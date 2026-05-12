import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onOpenDemo: () => void;
  onOpenWaitlist: () => void;
}

const Header = ({ onOpenDemo, onOpenWaitlist }: HeaderProps) => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  const currentLanguage = languages.find(lang => lang.code === (i18n.language?.split('-')[0] || 'en')) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.features'), href: "#features" },
    { label: t('nav.howItWorks'), href: "#how-it-works" },
    { label: t('nav.faq'), href: "#faq" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
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
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`flex items-center gap-2 font-bold px-3 ${isScrolled ? 'text-white hover:bg-white/10' : 'text-foreground'}`}
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden lg:inline">{currentLanguage.name}</span>
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40 rounded-xl">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    className="flex items-center justify-between font-medium cursor-pointer"
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <span>{lang.name}</span>
                    <span className="text-lg">{lang.flag}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              className="font-bold text-sm text-white hover:bg-white/10"
              onClick={() => scrollToSection("#faq")}
            >
              {t('nav.contact')}
            </Button>
            <Button
              className="font-bold rounded-full px-6 transition-all duration-300 hover:-translate-y-0.5 bg-white text-primary hover:bg-white/90 shadow-lg"
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhDi3CYH0OKdQdRq8nvGNUTaSAZnsWNT8lZ59KWah1Ev4Whg/viewform?usp=sharing&ouid=103191188960058496730" target="_blank" rel="noopener noreferrer">
                {t('nav.getStarted')}
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
              
              {/* Mobile Language Switcher */}
              <div className="grid grid-cols-3 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex flex-col items-center justify-center py-2 rounded-xl border transition-all ${
                      i18n.language?.startsWith(lang.code)
                        ? "bg-white text-primary border-white"
                        : "bg-white/10 text-white border-white/20"
                    }`}
                  >
                    <span className="text-xl mb-1">{lang.flag}</span>
                    <span className="text-xs font-bold">{lang.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>

              <hr className="border-white/10" />
              <Button
                className="w-full font-bold h-14 rounded-full text-lg shadow-lg bg-white text-primary hover:bg-white/90"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhDi3CYH0OKdQdRq8nvGNUTaSAZnsWNT8lZ59KWah1Ev4Whg/viewform?usp=sharing&ouid=103191188960058496730" target="_blank" rel="noopener noreferrer">
                  {t('nav.getStarted')}
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
