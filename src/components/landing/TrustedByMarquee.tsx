import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  School, 
  Library, 
  Landmark, 
  Globe, 
  Trophy,
  Crown,
  Star,
  Target,
  Flame,
  Users,
  Heart,
  TrendingUp
} from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const schools = [
  { name: "Cambridge Academy", icon: GraduationCap, color: "hsl(210 100% 60%)" },
  { name: "Oxford International", icon: BookOpen, color: "hsl(200 100% 55%)" },
  { name: "Greenfield College", icon: Award, color: "hsl(145 70% 50%)" },
  { name: "Sunrise Schools", icon: Globe, color: "hsl(35 100% 55%)" },
  { name: "Victory Academy", icon: Trophy, color: "hsl(45 100% 50%)" },
  { name: "Premier Institute", icon: Crown, color: "hsl(195 80% 55%)" },
  { name: "Harmony Schools", icon: Star, color: "hsl(200 100% 55%)" },
  { name: "Lighthouse Academy", icon: Landmark, color: "hsl(170 70% 45%)" },
  { name: "Pinnacle Education", icon: Target, color: "hsl(15 90% 55%)" },
  { name: "Elite Learning", icon: Library, color: "hsl(220 70% 60%)" },
  { name: "Future Leaders", icon: Flame, color: "hsl(25 100% 55%)" },
  { name: "Scholars Hub", icon: School, color: "hsl(190 80% 50%)" },
];

const stats = [
  { value: "500+", label: "Schools", icon: School },
  { value: "50K+", label: "Parents", icon: Users },
  { value: "100K+", label: "Students", icon: GraduationCap },
  { value: "4.9", label: "Rating", icon: Star },
];

const TrustedByMarquee = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-14 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-56 h-56 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-10 scroll-animate ${isVisible ? 'is-visible' : ''}`}
        >
          <p className="text-primary text-xs font-medium tracking-wider uppercase mb-3">
            Trusted Worldwide
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-4">
            <span className="text-muted-foreground/80">Loved by</span>{" "}
            <span className="premium-gradient-text">Schools & Parents</span>
          </h2>
        </div>

        {/* Statistics */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 scroll-animate ${isVisible ? 'is-visible' : ''}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative rounded-xl card-entrance"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <GlowingEffect
                spread={30}
                glow={true}
                blur={8}
                proximity={80}
                inactiveZone={0.3}
                borderWidth={1}
              />
              <div className="glass-card p-4 text-center relative z-10 group hover:border-primary/30 transition-all duration-300">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={18} className="text-primary" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-0.5 premium-gradient-text">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Marquee */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Marquee track */}
          <div className="flex animate-marquee">
              {[...schools, ...schools].map((school, index) => {
              const IconComponent = school.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 mx-4 flex items-center gap-2 group cursor-default transition-all duration-300"
                >
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${school.color.replace(')', ' / 0.15)')}`,
                    }}
                  >
                    <IconComponent 
                      size={16} 
                      className="transition-all duration-300 grayscale group-hover:grayscale-0"
                      style={{ color: school.color }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground font-medium whitespace-nowrap transition-colors duration-300">
                    {school.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByMarquee;
