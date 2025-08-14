import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { submitToGoogleSheets } from "@/lib/google-sheets";

interface FormData {
  name: string;
  email: string;
  phone: string;
  school: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    school: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await submitToGoogleSheets(formData);
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        school: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call us",
      value: "+91-9876543210",
      color: "bg-primary-yellow"
    },
    {
      icon: Mail,
      title: "Email us",
      value: "hello@skoolary.in",
      color: "bg-success-green"
    },
    {
      icon: MapPin,
      title: "Visit us",
      value: "Bangalore, Karnataka, India",
      color: "bg-blue-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-dark-gray mb-6">
              Ready to Get <span className="text-gradient">Started?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of schools and parents who trust Skoolary for safe and reliable school transportation tracking.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-dark-gray">{info.title}</div>
                      <div className="text-gray-600">{info.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-light-gray rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-dark-gray mb-6">Get a Free Demo</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-dark-gray mb-2">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="rounded-xl border-gray-200 focus:border-primary-yellow focus:ring-primary-yellow/20"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-dark-gray mb-2">
                    Phone *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                    required
                    className="rounded-xl border-gray-200 focus:border-primary-yellow focus:ring-primary-yellow/20"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-dark-gray mb-2">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="rounded-xl border-gray-200 focus:border-primary-yellow focus:ring-primary-yellow/20"
                />
              </div>

              <div>
                <Label htmlFor="school" className="text-sm font-medium text-dark-gray mb-2">
                  School/Organization
                </Label>
                <Input
                  id="school"
                  name="school"
                  type="text"
                  value={formData.school}
                  onChange={handleInputChange}
                  placeholder="School or organization name"
                  className="rounded-xl border-gray-200 focus:border-primary-yellow focus:ring-primary-yellow/20"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium text-dark-gray mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="rounded-xl border-gray-200 focus:border-primary-yellow focus:ring-primary-yellow/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="button-hover w-full bg-primary-yellow text-dark-gray hover:bg-yellow-400 py-4 rounded-xl font-semibold shadow-lg transform hover:scale-105"
              >
                <Send className="mr-2 h-5 w-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                We'll get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
