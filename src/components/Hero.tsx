import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section 
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 min-h-[600px] md:min-h-[700px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            The Modern Platform Connecting Schools, Parents & Students
          </h1>
          <p className="text-lg md:text-xl text-white">
            Streamline admissions, enhance communication, automate payments, and deliver insightful reports—all in one powerful mobile app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="group">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="secondary" className="group">
              Join the Waiting List
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
