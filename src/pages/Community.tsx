import { Link } from "react-router-dom";
import { ArrowLeft, Users } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const Community = () => {
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
            <span className="premium-gradient-text">Community</span>
          </h1>
          
          <div className="glass-card p-8 text-center">
            <Users size={48} className="text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">Join Our Community</h2>
            <p className="text-muted-foreground">Community forums coming soon!</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
