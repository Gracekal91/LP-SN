import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const TermsOfService = () => {
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
            <span className="premium-gradient-text">Terms of Service</span>
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <div className="glass-card p-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing School Network, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Use License</h2>
              <p className="text-muted-foreground leading-relaxed">
                Permission is granted to temporarily use School Network for personal, non-commercial transitory viewing only.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on School Network are provided on an 'as is' basis. We make no warranties, expressed or implied.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
