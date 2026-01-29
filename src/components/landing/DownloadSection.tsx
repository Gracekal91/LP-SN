import { Smartphone, QrCode } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const DownloadSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div 
          ref={ref}
          className={`relative rounded-2xl card-entrance ${isVisible ? 'is-visible' : ''}`}
        >
          <GlowingEffect
            spread={80}
            glow={true}
            blur={15}
            proximity={150}
            inactiveZone={0.2}
            borderWidth={2}
          />
          <div className="glass-card p-6 md:p-10 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <p className="text-primary text-xs font-medium tracking-wider uppercase mb-3">
                  Mobile App
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-4">
                  <span className="text-muted-foreground/80">Download</span>{" "}
                  <span className="premium-gradient-text">School Network</span>
                </h2>
                <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
                  Get instant access to everything your school needs. Parents can track admissions, communicate with teachers, view timetables, and manage payments — all from their mobile device.
                </p>
                
                {/* App Store Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  {/* Apple App Store */}
                  <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfhDi3CYH0OKdQdRq8nvGNUTaSAZnsWNT8lZ59KWah1Ev4Whg/viewform?usp=sharing&ouid=103191188960058496730" target="_blank"
                    className="group flex items-center gap-2 px-4 py-3 rounded-xl bg-secondary/50 border border-border/30 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-foreground" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-[9px] text-muted-foreground uppercase tracking-wide">Download on the</p>
                      <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">App Store</p>
                    </div>
                  </a>
                  
                  {/* Google Play */}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfhDi3CYH0OKdQdRq8nvGNUTaSAZnsWNT8lZ59KWah1Ev4Whg/viewform?usp=sharing&ouid=103191188960058496730" target="_blank"
                    className="group flex items-center gap-2 px-4 py-3 rounded-xl bg-secondary/50 border border-border/30 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                      <path fill="#4285F4" d="M3 20.5v-17c0-.83.52-1.28 1.3-.74l11.4 6.57c.98.57.98 1.49 0 2.06L4.3 17.96c-.78.54-1.3.09-1.3-.74z"/>
                      <path fill="#34A853" d="M14.5 12L4 3.5v17l10.5-8.5z" opacity="0.5"/>
                      <path fill="#FBBC04" d="M14.5 12l6.2-3.57c.98-.57.98-1.49 0-2.06L15.2 3 4 12l10.5 0z" opacity="0.7"/>
                      <path fill="#EA4335" d="M14.5 12l6.2 3.57c.98.57.98 1.49 0 2.06L15.2 21 4 12h10.5z" opacity="0.8"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-[9px] text-muted-foreground uppercase tracking-wide">Get it on</p>
                      <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Google Play</p>
                    </div>
                  </a>
                </div>

                {/* QR Code hint */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <QrCode size={14} className="text-primary" />
                  <span>Scan QR code to download instantly</span>
                </div>
              </div>

              {/* Visual */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* Phone Stack */}
                  <div className="phone-mockup w-36 absolute -left-6 top-6 opacity-50 scale-90">
                    <div className="phone-screen aspect-[9/19.5] p-2">
                      <div className="h-full rounded-2xl bg-gradient-to-b from-primary/20 to-transparent"></div>
                    </div>
                  </div>
                  <div className="phone-mockup w-44 relative z-10 animate-float-premium">
                    <div className="phone-screen aspect-[9/19.5] p-3 flex flex-col items-center justify-center">
                      <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-3 shadow-lg">
                        <span className="text-primary-foreground font-bold text-lg">S</span>
                      </div>
                      <p className="text-foreground font-semibold text-xs mb-0.5">School Network</p>
                      <p className="text-muted-foreground text-[10px]">Version 2.0</p>
                      <div className="mt-4 w-full px-2">
                        <div className="h-1 bg-muted rounded-full overflow-hidden">
                          <div className="w-2/3 h-full gradient-accent rounded-full relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                          </div>
                        </div>
                        <p className="text-[9px] text-muted-foreground text-center mt-1">Installing...</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* QR Code */}
                  <div className="absolute -right-3 bottom-6 glass-card p-2 rounded-lg hidden lg:block">
                    <div className="w-14 h-14 bg-foreground rounded-md flex items-center justify-center">
                      <QrCode size={40} className="text-background" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
