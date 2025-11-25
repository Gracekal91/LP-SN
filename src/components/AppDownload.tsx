import { Button } from "@/components/ui/button";
import { Download, Apple, Smartphone } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup.jpg";

const AppDownload = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground">
              Download the School Network App
            </h2>
            <p className="text-lg text-muted-foreground">
              Get instant access to everything your school needs. Parents can track admissions, communicate with teachers, view timetables, and manage payments—all from their mobile device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="group">
                <Apple className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              <Button size="lg" variant="secondary" className="group">
                <Smartphone className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center md:justify-start">
              <Download className="h-4 w-4" />
              <span>Available for free on iOS and Android</span>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src={phoneMockup} 
              alt="School Network mobile app interface on smartphone" 
              className="w-full max-w-md rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
