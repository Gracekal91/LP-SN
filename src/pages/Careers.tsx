import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header onOpenDemo={() => {}} onOpenWaitlist={() => {}} />
      <main className="pt-32 pb-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-normal mb-6">
            <span className="premium-gradient-text">Careers</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12">
            Join our team and help shape the future of education technology.
          </p>

          <div className="glass-card p-8 text-center">
            <Briefcase size={48} className="text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">No Open Positions</h2>
            <p className="text-muted-foreground">Check back soon for new opportunities.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
