import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do parents receive updates about their child?",
    answer: "Parents get instant WhatsApp notifications for everything — absences, exam results, fee invoices, school announcements, and progress reports. No app download needed. One tap on the WhatsApp message opens their full parent portal where they can view timetables, pay fees, and track their child's performance in real time.",
  },
  {
    question: "Is my school's data secure?",
    answer: "All school and student data is encrypted and stored securely in the cloud. Only authorised staff can access student records. Parents can only see their own child's information. We are fully compliant with POPIA (South Africa's data protection law) and no data is ever shared with third parties.",
  },
  {
    question: "What happens if a parent doesn't have WhatsApp?",
    answer: "Over 95% of parents use WhatsApp daily. For those who don't, School Network also sends SMS notifications and supports in-app messaging. No parent gets left behind.",
  },
  {
    question: "How long does it take to set up School Network?",
    answer: "Most schools are fully live within one day. Your admin uploads the student list, links parents via phone number, and your school is ready to send its first WhatsApp notification. Our onboarding team guides you through every step — no IT experience required.",
  },
  {
    question: "Does School Network replace SA-SAMS?",
    answer: "No — School Network works alongside SA-SAMS. SA-SAMS handles government reporting and compliance. School Network handles everything else: parent communication, fee collection, student progress tracking, AI coaching, and daily school operations. They complement each other perfectly.",
  },
  {
    question: "Is there a mobile app for parents and teachers?",
    answer: "Yes. Parents and students access everything through the School Network app or directly via WhatsApp — whichever they prefer. School admins and teachers use a full web dashboard to manage students, finances, timetables, and communications from any device.",
  },
  {
    question: "What does the AI student coach actually do?",
    answer: "The AI coach monitors each student's performance continuously — not just at the end of term. The moment a student starts falling below their expected level in any subject, the AI sends them a personalised alert with specific topics to revise and resources to catch up. Parents are also notified. It's like having a personal academic advisor for every single learner.",
  },
  {
    question: "Can I try School Network before committing?",
    answer: "Yes — we offer a free 30-day trial for your school with no credit card required. You get full access to every feature including the parent WhatsApp notifications, fee management, and student AI coaching. If you love it, you choose a plan. If not, there's no obligation.",
  },
  {
    question: "How much does School Network cost?",
    answer: "Pricing is per learner per month — making it affordable whether your school has 50 or 5,000 students. Setup is a once-off fee. Contact us for a custom quote based on your school size, or see our pricing page for standard rates.",
  },
  {
    question: "Is School Network built for South African schools specifically?",
    answer: "Yes. School Network is built in South Africa, for South African schools. It supports SA-SAMS compliance, Rand-based fee payments, local payment gateways, and WhatsApp-first communication because that's how parents actually communicate. We're expanding across Africa — but SA schools are our home.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-4 relative bg-background">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            Support Center
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about School Network and how it can help your institution.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border/50 rounded-2xl px-6 transition-all duration-200 hover:border-primary/30"
            >
              <AccordionTrigger className="text-left text-lg font-bold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-8 rounded-3xl bg-secondary/50 border border-border/50">
          <p className="text-muted-foreground font-medium mb-4">
            Still have questions? We're here to help.
          </p>
          <Button
            variant="outline"
            className="rounded-full px-8 h-12 font-bold border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            Contact Support Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
