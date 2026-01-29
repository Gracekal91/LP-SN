import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const PrivacyPolicy = () => {
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
            <span className="premium-gradient-text">Privacy Policy</span>
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <div className="glass-card p-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly, including name, email, school information, and student data necessary for platform functionality.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information is used to provide and improve our services, communicate with you, and ensure the security of our platform.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your data, including encryption and secure data storage practices.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related inquiries, contact us at privacy@schoolnetwork.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
