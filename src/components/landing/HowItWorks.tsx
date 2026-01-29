import useScrollAnimation from "@/hooks/useScrollAnimation";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const steps = [
  {
    step: "01",
    title: "Onboard Your School",
    description: "Configure your school profile, add staff with role-based permissions, and define grades, classes, calendars, and fee structures.",
  },
  {
    step: "02",
    title: "Manage Students & Parents",
    description: "Import or add students, invite parents to join, and securely link guardians to learners.",
  },
  {
    step: "03",
    title: "Automate School Operations",
    description: "Streamline admissions, communication, payments, and reporting through intelligent automation.",
  },
  {
    step: "04",
    title: "Student & Parent Mobile App",
    description: "Provide learners and guardians with a personalized mobile app for schedules, payments, results, attendance, and instant alerts.",
  },
];

const HowItWorks = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="py-16 px-4 scroll-mt-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 scroll-animate ${headerVisible ? 'is-visible' : ''}`}
        >
          <p className="text-primary text-xs font-medium tracking-wider uppercase mb-3">
            Getting Started
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-4">
            <span className="text-muted-foreground/80">Simple</span>{" "}
            <span className="premium-gradient-text">4-Step Process</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            A professional workflow to transform your school operations.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2"></div>

          <div className="space-y-8">
            {steps.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-6 card-entrance ${stepsVisible ? 'is-visible' : ''} ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                  <div
                    className={`relative rounded-2xl ${
                      index % 2 === 1 ? "md:ml-auto" : "md:mr-auto"
                    } max-w-sm`}
                  >
                    <GlowingEffect
                      spread={50}
                      glow={true}
                      blur={10}
                      proximity={100}
                      inactiveZone={0.3}
                      borderWidth={2}
                    />
                    <div className="glass-card p-5 relative z-10 hover:border-primary/30 transition-all duration-300 group">
                      <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step Badge */}
                <div className="relative z-10">
                  <div className="step-badge animate-pulse-glow w-10 h-10 text-sm">
                    {item.step}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
