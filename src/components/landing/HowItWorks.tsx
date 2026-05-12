import useScrollAnimation from "@/hooks/useScrollAnimation";

const steps = [
  {
    step: "01",
    title: "Onboard Your School",
    description: "Set up your school profile, add staff, classes and grade structures in minutes.",
  },
  {
    step: "02",
    title: "Import Students",
    description: "Upload your student list and instantly link each learner to their parent via WhatsApp.",
  },
  {
    step: "03",
    title: "Automate Operations",
    description: "Fee invoices, absence alerts, exam reminders and reports run automatically — no manual work.",
  },
  {
    step: "04",
    title: "Launch Mobile App",
    description: "Parents and students go live on WhatsApp and the app — everything accessible in one tap.",
  },
];

const HowItWorks = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="py-24 px-4 scroll-mt-24 relative bg-background">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
            Getting Started
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-foreground">
            A Simple <span className="text-primary">4-Step Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforming your school's digital infrastructure is easier than you think.
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
