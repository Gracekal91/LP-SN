import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import DashboardMockup from "./DashboardMockup";
import { useTranslation } from "react-i18next";

interface HeroProps {
  onOpenDemo: () => void;
  onOpenWaitlist: () => void;
}

const Hero = ({ onOpenDemo, onOpenWaitlist }: HeroProps) => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90svh] pt-32 pb-20 px-4 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold mb-8 animate-fade-in uppercase tracking-wider">
          {t('hero.badge')}
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 max-w-5xl mx-auto leading-[1.1] animate-fade-in-up">
          {t('hero.headline')}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-medium" style={{ animationDelay: '0.1s' }}>
          {t('hero.subheading')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button
            size="lg"
            className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 group"
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhDi3CYH0OKdQdRq8nvGNUTaSAZnsWNT8lZ59KWah1Ev4Whg/viewform?usp=sharing&ouid=103191188960058496730" target="_blank" rel="noopener noreferrer">
              {t('nav.requestDemo')}
            </a>
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full border-border/50 hover:bg-secondary/50 transition-all duration-300"
            onClick={() => {
              const element = document.getElementById('features');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('hero.exploreFeatures')}
          </Button>
        </div>

        {/* Visual Mockup Container */}
        <div 
          className="relative max-w-6xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          {/* Decorative Glow */}
          <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-[3rem] -z-10 opacity-50" />
          
          <div className="rounded-2xl border border-border/20 bg-card p-2 md:p-4 shadow-2xl backdrop-blur-sm">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;