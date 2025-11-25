import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, MessageSquare, Calendar, CreditCard, GraduationCap, Bell } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Online Admissions",
    description: "Accept student applications online and track admission progress in real-time with automated workflows.",
  },
  {
    icon: MessageSquare,
    title: "Parent-School Messaging",
    description: "Enable seamless communication between parents and school staff through in-app messaging.",
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
    icon: GraduationCap,
    title: "Student Profiles",
    description: "Maintain comprehensive student records, term results, and academic performance tracking.",
  },
  {
    icon: Bell,
    title: "Multi-Channel Announcements",
    description: "Broadcast school announcements via mobile app notifications and SMS for maximum reach.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Comprehensive School Management Features
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything your school needs to operate efficiently, engage parents, and support student success.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4 text-center md:text-left">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto md:mx-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
