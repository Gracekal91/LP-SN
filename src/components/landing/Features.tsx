import { UserPlus, MessageSquare, Calendar, CreditCard, Users, Megaphone } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const features = [
  {
    icon: UserPlus,
    title: "Online Admissions",
    description: "Accept student applications online and track admission progress in real time with automated workflows.",
  },
  {
    icon: MessageSquare,
    title: "Parent–School Messaging",
    description: "Enable seamless communication between parents and school staff through secure in-app messaging.",
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
    title: "Student Profiles",
    description: "Maintain comprehensive student records, term results, and academic performance tracking.",
  },
  {
    icon: Megaphone,
    title: "Multi-Channel Announcements",
    description: "Broadcast school announcements via mobile app notifications and SMS for maximum reach.",
  },
];

const Features = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="features" className="py-16 px-4 scroll-mt-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 scroll-animate ${headerVisible ? 'is-visible' : ''}`}
        >
          <p className="text-primary text-xs font-medium tracking-wider uppercase mb-3">
            Core Features
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-4">
            <span className="text-muted-foreground/80">Comprehensive School</span>{" "}
            <span className="premium-gradient-text">Management</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Everything your school needs to operate efficiently, engage parents, and support student success.
          </p>
        </div>

        {/* Features Grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative rounded-2xl card-entrance ${gridVisible ? 'is-visible' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <GlowingEffect
                spread={50}
                glow={true}
                blur={10}
                proximity={100}
                inactiveZone={0.3}
                borderWidth={2}
              />
              <div className="feature-card h-full group relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
