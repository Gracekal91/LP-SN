const steps = [
  {
    number: "01",
    title: "Onboard Your School",
    description: "Enable schools to set up their digital environment quickly by configuring the school profile, adding staff with role-based permissions, and defining grades, classes, calendars, and fee structures.",
  },
  {
    number: "02",
    title: "Manage Students & Parents",
    description: "Allow schools to import or add students, invite parents to join, and securely link guardians to learners so they can access schedules, results, announcements, and school information.",
  },
  {
    number: "03",
    title: "Automate School Operations",
    description: "Streamline admissions, communication, payments, and reporting through intelligent automation, reducing administrative workload and ensuring accuracy across daily processes.",
  },
  {
    number: "04",
    title: "Student & Parent Mobile App",
    description: "Provide learners and guardians with a mobile app that serves as their personal assistant, offering personalised dashboards for schedules, payments, admission progress, results, attendance, and instant school alerts.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/50 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A professional 4-step workflow to transform your school operations.
          </p>
        </div>
        
        <div className="grid gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-card border border-border rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                {/* Number badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                
                {/* Connecting line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-4 top-full h-8 w-0.5 bg-gradient-to-b from-primary to-transparent -translate-x-1/2" />
                )}
                
                {/* Content */}
                <div className="pl-8 md:pl-12 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-tr-2xl pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
