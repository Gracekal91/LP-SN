import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does School Network improve parent-teacher communication?",
    answer: "School Network provides instant messaging, automated notifications, and a centralized hub for all school communications. Parents receive real-time updates about their child's activities, grades, and school events directly on their mobile devices.",
  },
  {
    question: "Is my school's data secure?",
    answer: "Absolutely. We use bank-level encryption, comply with GDPR and FERPA regulations, and store all data on secure, SOC 2 certified servers. Your school's data is never shared with third parties.",
  },
  {
    question: "Can I switch plans or cancel anytime?",
    answer: "Yes! You can upgrade, downgrade, or cancel your plan at any time. There are no long-term contracts. If you cancel, you'll retain access until the end of your billing period.",
  },
  {
    question: "How long does it take to set up School Network?",
    answer: "Most schools are up and running within 24 hours. Our onboarding team helps you import student data, set up classes, and train your staff. Enterprise customers receive dedicated implementation support.",
  },
  {
    question: "Does School Network integrate with existing school systems?",
    answer: "Yes, we integrate with popular SIS platforms, Google Classroom, Microsoft Teams, and many other educational tools. Our API also allows custom integrations for Enterprise customers.",
  },
  {
    question: "Is there a mobile app for parents and teachers?",
    answer: "Yes! School Network offers native iOS and Android apps for both parents and teachers. The apps include push notifications, messaging, event calendars, and grade tracking.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "Free and Starter plans include email support. Pro plans get priority support with faster response times. Enterprise customers receive 24/7 phone support and a dedicated account manager.",
  },
  {
    question: "Can I try School Network before committing?",
    answer: "Absolutely! We offer a 14-day free trial on all paid plans with full access to features. No credit card required to start. Our Free plan is also available forever for small schools.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="premium-gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Everything you need to know about School Network
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl px-5 data-[state=open]:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <p className="text-center text-muted-foreground text-sm mt-10">
          Still have questions?{" "}
          <a href="/contact" className="text-primary hover:underline">
            Contact our team
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
