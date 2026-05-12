import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useTranslation } from "react-i18next";

const FAQSection = () => {
  const { t } = useTranslation();
  
  // Get FAQs from translations. We use an array of indices to map through them.
  // This is safer than returnObjects in some TS configurations.
  const faqIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section id="faq" className="py-24 px-4 relative bg-background">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            {t('faq.badge')}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            {t('faq.headline')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('faq.subheading')}
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqIndices.map((index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border/50 rounded-2xl px-6 transition-all duration-200 hover:border-primary/30"
            >
              <AccordionTrigger className="text-left text-lg font-bold hover:no-underline py-6">
                {t(`faq.items.${index}.question`)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {t(`faq.items.${index}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-8 rounded-3xl bg-secondary/50 border border-border/50">
          <p className="text-muted-foreground font-medium mb-4">
            {t('faq.cta.text')}
          </p>
          <Button
            variant="outline"
            className="rounded-full px-8 h-12 font-bold border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            {t('faq.cta.button')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
