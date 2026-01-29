import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface DemoRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoRequestModal = ({ open, onOpenChange }: DemoRequestModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    schoolName: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission - replace with actual API call when Cloud is enabled
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Demo Request Submitted!",
      description: "We'll be in touch within 24 hours to schedule your demo.",
    });
    
    setFormData({ name: "", email: "", schoolName: "", phone: "", message: "" });
    setIsSubmitting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-border/50 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">Request a Demo</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill out the form below and we'll schedule a personalized demo for your school.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="bg-input border-border/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+1 234 567 890" className="bg-input border-border/50" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@school.edu" className="bg-input border-border/50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="schoolName">School Name *</Label>
            <Input id="schoolName" required value={formData.schoolName} onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })} placeholder="Greenwood Academy" className="bg-input border-border/50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your school's needs..." className="bg-input border-border/50 min-h-[80px]" />
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full gradient-accent text-primary-foreground font-semibold rounded-xl py-5">
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoRequestModal;
