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
    <section className="py-24 px-4 relative overflow-hidden bg-primary">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      
      <div 
        ref={ref}
        className={`container max-w-4xl mx-auto text-center relative z-10 card-entrance ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md mb-8 border border-white/20">
          <span className="text-sm text-white font-bold tracking-wide uppercase">💬 School Management Delivered to Every Parent's Phone</span>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
          Your School. Connected. <br className="hidden md:block" />
          Parents Informed. Students Ahead.
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
          Join schools already using School Network to collect fees on time, keep parents in the loop via WhatsApp, and catch struggling students before it's too late. Setup takes less than a day.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-bold h-14 px-10 rounded-full text-lg shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1"
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhDi3CYH0OKdQdRq8nvGNUTaSAZnsWNT8lZ59KWah1Ev4Whg/viewform?usp=sharing&ouid=103191188960058496730" target="_blank" rel="noopener noreferrer">
              Request a Demo
            </a>
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-base text-white font-bold">
          <span className="flex items-center gap-2">
            ✅ Free 30-day trial, no credit card
          </span>
          <span className="flex items-center gap-2">
            ✅ Live support in your language
          </span>
          <span className="flex items-center gap-2">
            ✅ Works for 50 to 5,000 students
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
