import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, MousePointer2 } from "lucide-react";
import DashboardMockup from "./DashboardMockup";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  onOpenDemo: () => void;
  onOpenWaitlist: () => void;
}

const Hero = ({ onOpenDemo, onOpenWaitlist }: HeroProps) => {
  const navigate = useNavigate();

  return (
    <section className="hero-gradient-light min-h-[100svh] pt-20 md:pt-24 pb-8 px-4 overflow-visible relative flex flex-col">
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 dot-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10 flex-1 flex flex-col">
        {/* Centered Content Stack */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div 
            className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-secondary/50 border border-border/30 backdrop-blur-sm mb-4 mt-2 md:mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="text-xs md:text-sm text-muted-foreground">Trusted by Schools</span>
            <div className="w-px h-3 md:h-4 bg-border/50" />
            <div className="flex items-center gap-0.5 md:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-yellow-400 text-yellow-400 md:w-[14px] md:h-[14px]" />
              ))}
            </div>
            <span className="text-xs md:text-sm font-medium text-foreground">500+ Reviews</span>
          </div>

          {/* Main Headline */}
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.15] mb-4 md:mb-5 animate-fade-in-up tracking-tight px-2"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-muted-foreground/80">The Modern Platform</span>{" "}
            <br className="hidden sm:block" />
            <span className="text-muted-foreground/80">Connecting</span>{" "}
            <span className="premium-gradient-text">Schools, Parents</span>
            <br className="hidden sm:block" />
            <span className="premium-gradient-text">& Students</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in-up px-2"
            style={{ animationDelay: '0.3s' }}
          >
            Streamline admissions, enhance communication, automate payments, and deliver insightful reports — all in one powerful mobile app.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 md:mb-12 animate-fade-in-up px-4"
            style={{ animationDelay: '0.4s' }}
          >
            <Button
              // onClick={() => {
              //   onOpenDemo();
              //   navigate('/contact');
              // }}

              size="lg"
              className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 font-semibold rounded-xl px-6 py-4 text-base group"
            >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhDi3CYH0OKdQdRq8nvGNUTaSAZnsWNT8lZ59KWah1Ev4Whg/viewform?usp=sharing&ouid=103191188960058496730" target="_blank">
                    Request a Demo
                </a>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/*<Button*/}
            {/*  onClick={() => {*/}
            {/*    onOpenWaitlist();*/}
            {/*    navigate('/documentation');*/}
            {/*  }}*/}
            {/*  variant="outline"*/}
            {/*  size="lg"*/}
            {/*  className="w-full sm:w-auto border-border/50 bg-secondary/30 text-foreground hover:bg-secondary/50 rounded-xl px-6 py-4 text-base backdrop-blur-sm"*/}
            {/*>*/}
            {/*  <Play size={16} className="mr-2" />*/}
            {/*  Watch Video*/}
            {/*</Button>*/}
          </div>
        </div>

        {/* Floating Accent Pills */}
        <div className="hidden lg:block">
          {/* Left Pill - Admissions */}
          <div className="absolute left-8 xl:left-16 top-1/3 floating-pill animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <div className="bg-gradient-to-r from-primary/90 to-accent/90 text-primary-foreground px-4 py-2 rounded-lg font-medium text-sm shadow-lg">
                Admissions
              </div>
              <MousePointer2 
                size={24} 
                className="absolute -bottom-6 -right-4 text-foreground fill-foreground rotate-[20deg]" 
              />
            </div>
          </div>

          {/* Right Pill - Payments */}
          <div className="absolute right-8 xl:right-16 top-1/2 floating-pill animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="bg-gradient-to-r from-accent/90 to-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium text-sm shadow-lg">
                Payments
              </div>
              <MousePointer2 
                size={24} 
                className="absolute -bottom-6 -left-4 text-foreground fill-foreground rotate-[-20deg] scale-x-[-1]" 
              />
            </div>
          </div>

          {/* Additional Pill - Reports */}
          <div className="absolute left-12 xl:left-24 top-2/3 floating-pill-delayed animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="relative">
              <div className="bg-secondary/80 border border-border/30 text-foreground px-4 py-2 rounded-lg font-medium text-sm shadow-lg backdrop-blur-sm">
                Reports
              </div>
            </div>
          </div>

          {/* Additional Pill - Communication */}
          <div className="absolute right-12 xl:right-24 top-1/3 floating-pill-delayed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              <div className="bg-secondary/80 border border-border/30 text-foreground px-4 py-2 rounded-lg font-medium text-sm shadow-lg backdrop-blur-sm">
                Communication
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div 
          className="animate-fade-in-up perspective-1000 mt-4 md:mt-8"
          style={{ animationDelay: '0.5s' }}
        >
          {/* Mobile: Show dashboard with rounded corners */}
          <div className="block md:hidden w-full">
            <div className="transform hover:scale-[1.02] transition-transform duration-500 rounded-[15px] overflow-hidden shadow-2xl">
              <DashboardMockup />
            </div>
          </div>
          
          {/* Desktop: Normal display */}
          <div className="hidden md:block transform hover:scale-[1.02] transition-transform duration-500">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;