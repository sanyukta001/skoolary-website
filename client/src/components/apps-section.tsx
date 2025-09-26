import { Heart, Car, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const apps = [
  {
    title: "School Portal",
    description: "A comprehensive dashboard for administrators to manage the fleet, organize routes, monitor all activities.",
    icon: School,
    gradient: "from-primary-yellow to-yellow-400",
    textColor: "text-black",
    buttonStyle: "bg-white text-black hover:bg-gray-50",
    features: ["Fleet management", "Analytics dashboard", "Parent communication", "Report generation"]
  },
  {
    title: "Parent App",
    description: "Stay connected with your child's journey. Receive real-time updates, notifications, and peace of mind every day.",
    icon: Heart,
    gradient: "from-blue-accent to-blue-500",
    textColor: "text-black",
    buttonStyle: "bg-white text-black hover:bg-gray-50",
    features: ["Live bus location", "ETA notifications", "Emergency alerts", "Trip history"]
  },
  {
    title: "Driver App",
    description: "A simple, streamlined interface for drivers to manage routes, mark attendance, report incidents, and navigate efficiently.",
    icon: Car,
    gradient: "from-primary-yellow to-yellow-400",
    textColor: "text-black",
    buttonStyle: "bg-white text-black hover:bg-gray-50",
    features: ["Route optimization", "Student attendance", "Incident reporting", "Navigation assistance"]
  },

];

export default function AppsSection() {
  return (
    <section id="apps" className="py-16 lg:py-20" style={{ background: 'linear-gradient(to right, #55A5DA, #E3C370)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
            One Portal Two Apps, <span className="text-yellow-400">One Solution</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Designed for every stakeholder in school transportation, including school administrators, parents, and drivers, the platform brings safety, control, and peace of mind together in one place.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {apps.map((app, index) => {
            const Icon = app.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${app.gradient} rounded-3xl p-8 text-center shadow-xl card-hover`}
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className={`h-8 w-8 ${app.gradient.includes('yellow') ? 'text-primary-yellow' : app.gradient.includes('green') ? 'text-success-green' : 'text-blue-accent'}`} />
                </div>

                <h3 className={`text-2xl font-bold ${app.textColor} mb-4`}>
                  {app.title}
                </h3>
                <p className={`${app.textColor} mb-6`}>
                  {app.description}
                </p>

                <div className="space-y-3 mb-8">
                  {app.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className={`h-5 w-5 ${app.textColor}`} />
                      <span className={`${app.textColor}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className={`button-hover ${app.buttonStyle} w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105`}>
                  {app.title === "Parent App" ? "Download for Parents" : 
                   app.title === "Driver App" ? "Download for Drivers" : "Admin Dashboard"}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
