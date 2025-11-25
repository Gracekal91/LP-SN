import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Ready to Transform Your School Management?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Join forward-thinking schools that are modernizing their operations and improving parent engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="group"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Join Early Access
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/80 pt-4">
            Limited spots available • Personalized onboarding • Dedicated support
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
