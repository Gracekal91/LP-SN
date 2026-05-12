import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.1 });

  const steps = [
    {
      step: "01",
      title: t('howItWorks.steps.onboard.title'),
      description: t('howItWorks.steps.onboard.description'),
    },
    {
      step: "02",
      title: t('howItWorks.steps.import.title'),
      description: t('howItWorks.steps.import.description'),
    },
    {
      step: "03",
      title: t('howItWorks.steps.automate.title'),
      description: t('howItWorks.steps.automate.description'),
    },
    {
      step: "04",
      title: t('howItWorks.steps.launch.title'),
      description: t('howItWorks.steps.launch.description'),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 scroll-mt-24 relative bg-background">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
            {t('howItWorks.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-foreground">
            {t('howItWorks.headline')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('howItWorks.subheading')}
          </p>
        </div>

        {/* Steps Grid */}
        <div 
          ref={stepsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-24 right-24 h-0.5 bg-border -z-0" />

          {steps.map((item, index) => (
            <div
              key={index}
              className={`relative z-10 flex flex-col items-center text-center card-entrance ${stepsVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-black mb-8 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
