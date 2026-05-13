import { Link } from "react-router-dom";
import { ArrowLeft, Users, Target, Heart, Award } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import sn_logo_blue from "@/assets/sn_logo_blue.png";

const values = [
  { icon: Users, title: "Community First", description: "We believe in building strong connections between schools, parents, and students." },
  { icon: Target, title: "Innovation", description: "Continuously improving our platform to meet the evolving needs of education." },
  { icon: Heart, title: "Accessibility", description: "Making quality education management tools available to schools of all sizes." },
  { icon: Award, title: "Excellence", description: "Committed to delivering the highest quality experience in every interaction." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header onOpenDemo={() => { }} onOpenWaitlist={() => { }} />
      <main className="pt-32 pb-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-normal mb-6 flex items-center gap-3">
            <span className="text-muted-foreground/80">About</span>
            <img src={sn_logo_blue} alt="SN Logo" style={{ borderRadius: '0.6rem' }} className="h-10 w-auto" />
          </h1>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            School Network is a modern platform designed to bridge the gap between schools, parents, and students.
            Our mission is to make school management seamless and communication effortless.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2024, School Network was born from a simple observation: schools need better tools to
              communicate with parents and manage their operations. Our team of educators and technologists came
              together to build a platform that puts simplicity and effectiveness first.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
