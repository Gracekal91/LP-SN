import { useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const testimonials = [
  {
    quote: "This platform has reduced our administrative workload by 70%. Admissions tracking and parent communication are now effortless.",
    author: "Dr. Patricia Owusu",
    role: "School Administrator",
    avatar: "PO",
    rating: 5,
    school: "Cambridge Academy",
  },
  {
    quote: "I love being able to track my daughter's progress, pay fees, and communicate with teachers all in one app.",
    author: "James Mensah",
    role: "Parent",
    avatar: "JM",
    rating: 5,
    school: "Greenfield College",
  },
  {
    quote: "The automated announcements and payment reminders have improved our parent engagement significantly.",
    author: "Mrs. Adelaide Boateng",
    role: "Head Teacher",
    avatar: "AB",
    rating: 5,
    school: "Sunrise Schools",
  },
  {
    quote: "Managing multiple campuses has never been easier. The unified dashboard gives us complete visibility.",
    author: "Dr. Kwame Asante",
    role: "Director of Education",
    avatar: "KA",
    rating: 5,
    school: "Elite Schools Group",
  },
  {
    quote: "Our fee collection improved by 40% after implementing this system. Parents love the convenience.",
    author: "Mrs. Ama Darko",
    role: "Finance Manager",
    avatar: "AD",
    rating: 5,
    school: "Heritage International",
  },
];

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-12 md:py-16 px-4 scroll-mt-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-48 md:w-72 h-48 md:h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-40 md:w-64 h-40 md:h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-8 md:mb-12 scroll-animate ${headerVisible ? 'is-visible' : ''}`}
        >
          <p className="text-primary text-xs font-medium tracking-wider uppercase mb-2 md:mb-3">
            Testimonials
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-3 md:mb-4 px-2">
            <span className="text-muted-foreground/80">What Our</span>{" "}
            <span className="premium-gradient-text">Users Say</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
            See what educators and parents are saying about School Network.
          </p>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className={`absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full glass-card hover:bg-primary/20 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 ${
              !canScrollLeft ? 'opacity-30 pointer-events-none' : ''
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          <button
            onClick={scrollRight}
            className={`absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full glass-card hover:bg-primary/20 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 ${
              !canScrollRight ? 'opacity-30 pointer-events-none' : ''
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 px-8 md:px-12 snap-x snap-mandatory scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] snap-center"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative h-full rounded-2xl md:rounded-3xl group">
                  <GlowingEffect
                    spread={80}
                    glow={true}
                    blur={15}
                    proximity={150}
                    inactiveZone={0.2}
                    borderWidth={2}
                  />
                  <div className="glass-card p-4 md:p-6 h-full relative z-10 hover:border-primary/30 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl">
                    {/* Quote Icon */}
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4 md:mb-5">
                      <Quote size={16} className="text-primary md:w-5 md:h-5" />
                    </div>
                    
                    {/* Stars */}
                    <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} size={14} className="fill-primary text-primary md:w-4 md:h-4" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-sm md:text-base lg:text-lg text-foreground font-medium leading-relaxed mb-4 md:mb-6 line-clamp-4">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-2 md:gap-3 mt-auto">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full gradient-accent flex items-center justify-center shadow-lg flex-shrink-0">
                        <span className="text-primary-foreground font-semibold text-xs md:text-sm">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground text-xs md:text-sm truncate">{testimonial.author}</p>
                        <p className="text-[10px] md:text-xs text-muted-foreground truncate">{testimonial.role}</p>
                        <p className="text-[10px] md:text-xs text-primary truncate">{testimonial.school}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays for scroll indication */}
          <div className="absolute left-0 top-0 bottom-4 w-8 md:w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-4 w-8 md:w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>

        {/* Scroll Indicator Dots (Mobile) */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-muted-foreground/30"
            />
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;