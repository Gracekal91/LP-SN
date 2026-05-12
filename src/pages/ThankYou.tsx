import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-xl w-full text-center relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8 animate-bounce-subtle">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          You're on the <span className="text-primary">Waitlist!</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
          Thank you for completing the waitlist. You'll be the first to receive the link once it's done. We're excited to have you with us!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-primary/20 group">
            <Link to="/">
              <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground font-medium">
            Follow our progress on <a href="https://www.linkedin.com/company/the-school-network/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
