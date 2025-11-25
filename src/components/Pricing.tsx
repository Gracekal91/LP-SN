import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out EduLearn",
    features: [
      "Up to 30 students",
      "Basic analytics",
      "Core features",
      "Email support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For growing classrooms",
    features: [
      "Unlimited students",
      "Advanced analytics",
      "All features",
      "Priority support",
      "Custom branding",
      "API access",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For institutions and districts",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom integrations",
      "SSO & advanced security",
      "Training & onboarding",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative animate-fade-in ${
                plan.popular 
                  ? "border-primary shadow-xl scale-105" 
                  : "border-border"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {plan.period}
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    {plan.description}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 justify-center md:justify-start text-center md:text-left">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
