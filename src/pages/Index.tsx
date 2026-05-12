import { useState } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import DemoRequestModal from "@/components/landing/DemoRequestModal";
import WaitlistModal from "@/components/landing/WaitlistModal";

const Index = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header onOpenDemo={() => setIsDemoOpen(true)} onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <main>
        <Hero onOpenDemo={() => setIsDemoOpen(true)} onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        <Features />
        <HowItWorks />
        <FAQSection />
        <CTASection onOpenDemo={() => setIsDemoOpen(true)} onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      </main>
      <Footer />
      <DemoRequestModal open={isDemoOpen} onOpenChange={setIsDemoOpen} />
      <WaitlistModal open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </div>
  );
};

export default Index;
