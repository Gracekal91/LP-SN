import useScrollAnimation from "@/hooks/useScrollAnimation";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import studentsClassroom from "@/assets/students-classroom.jpg";
import teamHandshake from "@/assets/team-handshake.jpg";
import colleaguesDiscussion from "@/assets/colleagues-discussion.jpg";
import familyLearning from "@/assets/family-learning.jpg";

const features = [
  {
    image: studentsClassroom,
    title: "Empower Student Learning",
    description: "Interactive platforms for students to collaborate, access resources, and excel in their academic journey.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    image: teamHandshake,
    title: "Seamless Parent Communication",
    description: "Real-time updates and direct messaging with teachers to stay informed about your child's progress.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    image: colleaguesDiscussion,
    title: "Unified Staff Management",
    description: "Streamlined administration tools for teachers and staff to coordinate effectively.",
    gradient: "from-orange-500/20 to-rose-500/20",
  },
  {
    image: familyLearning,
    title: "Family-Centered Education",
    description: "Keep families involved in their child's educational journey with comprehensive insights.",
    gradient: "from-sky-500/20 to-blue-500/20",
  },
];

const PremiumFeatures = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 scroll-animate ${headerVisible ? 'is-visible' : ''}`}
        >
          <p className="text-primary text-xs font-medium tracking-wider uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-4">
            <span className="text-muted-foreground/80">Built for Modern</span>{" "}
            <span className="premium-gradient-text">Education</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Experience the future of school management with our comprehensive platform designed for everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 gap-4 lg:gap-6"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden group card-entrance ${gridVisible ? 'is-visible' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <GlowingEffect
                spread={60}
                glow={true}
                blur={12}
                proximity={120}
                inactiveZone={0.2}
                borderWidth={2}
              />
              <div className="relative z-10 glass-card overflow-hidden h-full">
                {/* Image Container */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} to-transparent opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
