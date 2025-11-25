import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center sm:text-left">
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SN</span>
              </div>
              <h3 className="text-xl font-bold">School Network</h3>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Connecting schools, parents, and students through modern technology and seamless communication.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-primary transition-all duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-primary transition-all duration-300">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-all duration-300">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-all duration-300">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/80">
          <p>&copy; {new Date().getFullYear()} School Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
