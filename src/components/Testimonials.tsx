import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Dr. Patricia Owusu",
    role: "School Administrator",
    content: "This platform has reduced our administrative workload by 70%. Admissions tracking and parent communication are now effortless.",
    rating: 5,
    initials: "PO",
  },
  {
    name: "James Mensah",
    role: "Parent",
    content: "I love being able to track my daughter's progress, pay fees, and communicate with teachers all in one app. It's incredibly convenient.",
    rating: 5,
    initials: "JM",
  },
  {
    name: "Mrs. Adelaide Boateng",
    role: "Head Teacher",
    content: "The automated announcements and payment reminders have improved our parent engagement significantly. Highly recommended!",
    rating: 5,
    initials: "AB",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Trusted by Schools & Parents
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we're helping schools operate efficiently and parents stay connected.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border animate-fade-in hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4 text-center md:text-left">
                <div className="flex gap-1 justify-center md:justify-start">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3 pt-4 justify-center md:justify-start">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
