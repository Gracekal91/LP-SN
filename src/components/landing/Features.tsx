import { UserPlus, MessageSquare, Calendar, CreditCard, Users, Megaphone } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: UserPlus,
    title: "Online Admissions",
    description: "Parents apply from their phone in minutes,  no queues, no paperwork, no lost forms.",
  },
  {
    icon: MessageSquare,
    title: "Parent–School Messaging",
    description: "Message parents instantly via WhatsApp, no app download required, no message goes unread.",
  },
  {
    icon: Calendar,
    title: "Timetables & Materials",
    description: "Share academic calendars, class schedules, and learning materials directly with students and parents.",
  },
  {
    icon: CreditCard,
    title: "Fees & Payments",
    description: "Manage invoices, send payment reminders, and track fee collection with automated notifications.",
  },
  {
    icon: Users,
    title: "AI Student Coach",
    description: "Your AI coach spots struggling students immediately, not at the end of term when it's too late.",
  },
  {
    icon: Megaphone,
    title: "Multi-Channel Announcements",
    description: "One click sends urgent announcements to every parent via WhatsApp, SMS and app - simultaneously.",
  },
];

const Features = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="features" className="py-24 px-4 scroll-mt-24 relative bg-secondary/30">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
            Powerful Modules
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Comprehensive <span className="text-primary">School Management</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From fee payments to AI-powered student coaching — School Network keeps parents informed, schools organised, and students ahead. All through WhatsApp.
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
