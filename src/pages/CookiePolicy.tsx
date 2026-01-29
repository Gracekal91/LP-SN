import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const CookiePolicy = () => {
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
            <span className="premium-gradient-text">Cookie Policy</span>
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <div className="glass-card p-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files stored on your device when you visit our website. They help us improve your experience.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies to remember your preferences, understand how you use our platform, and improve our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                You can control cookies through your browser settings. Note that disabling cookies may affect platform functionality.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
