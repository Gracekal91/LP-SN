import { UserPlus, MessageSquare, Calendar, CreditCard, Users, Megaphone } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  const features = [
    {
      icon: UserPlus,
      title: t('features.items.admissions.title'),
      description: t('features.items.admissions.description'),
    },
    {
      icon: MessageSquare,
      title: t('features.items.messaging.title'),
      description: t('features.items.messaging.description'),
    },
    {
      icon: Calendar,
      title: t('features.items.timetables.title'),
      description: t('features.items.timetables.description'),
    },
    {
      icon: CreditCard,
      title: t('features.items.payments.title'),
      description: t('features.items.payments.description'),
    },
    {
      icon: Users,
      title: t('features.items.aiCoach.title'),
      description: t('features.items.aiCoach.description'),
    },
    {
      icon: Megaphone,
      title: t('features.items.announcements.title'),
      description: t('features.items.announcements.description'),
    },
  ];

  return (
    <section id="features" className="py-24 px-4 scroll-mt-24 relative bg-secondary/30">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
            {t('features.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            {t('features.headline')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('features.subheading')}
          </p>
        </div>

        {/* Features Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-card p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group card-entrance ${gridVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <feature.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
