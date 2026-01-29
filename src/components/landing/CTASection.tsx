import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface CTASectionProps {
  onOpenDemo: () => void;
  onOpenWaitlist: () => void;
}

const CTASection = ({ onOpenDemo, onOpenWaitlist }: CTASectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="cta-gradient py-16 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-accent/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div 
        ref={ref}
        className={`container max-w-3xl mx-auto text-center relative z-10 card-entrance ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-6">
          <Sparkles size={14} className="text-primary" />
          <span className="text-xs text-primary font-medium">Limited Spots Available</span>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-4">
          <span className="text-muted-foreground/80">Ready to Transform</span>{" "}
          <br className="hidden sm:block" />
          <span className="premium-gradient-text">Your School Management?</span>
        </h2>
        <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
          Join forward-thinking schools modernizing their operations and improving parent engagement.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Button
            onClick={onOpenDemo}
            size="lg"
            className="gradient-accent text-primary-foreground font-semibold rounded-xl px-6 py-4 text-base btn-glow group"
          >
            Request a Demo
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={onOpenWaitlist}
            variant="outline"
            size="lg"
            className="border-border/50 bg-secondary/50 text-foreground hover:bg-secondary hover:border-primary/30 rounded-xl px-6 py-4 text-base backdrop-blur-sm"
          >
            Join Early Access
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Personalized onboarding
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Dedicated support
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            No credit card required
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
