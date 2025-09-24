import { Heart, Car, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import parentNotificationMockup from "@assets/generated_images/Bus_tracking_notification_mockup_c8727275.png";
import distanceTrackingMockup from "@assets/generated_images/Bus_distance_tracking_app_7d12d762.png";

const apps = [
  {
    title: "School Portal",
    description: "A comprehensive dashboard for administrators to manage the fleet, organize routes, monitor all activities, and stay on top of school transportation effortless",
    icon: School,
    gradient: "from-blue-accent to-blue-500",
    textColor: "text-white",
    buttonStyle: "bg-white text-blue-accent hover:bg-gray-50",
    features: ["Fleet management", "Analytics dashboard", "Parent communication", "Report generation"]
  },
  {
    title: "Parent App",
    description: "Stay connected with your child's journey. Receive real-time updates, notifications, and peace of mind every day.",
    icon: Heart,
    gradient: "from-primary-yellow to-yellow-400",
    textColor: "text-dark-gray",
    buttonStyle: "bg-dark-gray text-white hover:bg-gray-800",
    features: ["Live bus location", "ETA notifications", "Emergency alerts", "Trip history"]
  },
  {
    title: "Driver App",
    description: "A simple, streamlined interface for drivers to manage routes, mark attendance, report incidents, and navigate efficiently.",
    icon: Car,
    gradient: "from-success-green to-green-400",
    textColor: "text-white",
    buttonStyle: "bg-white text-success-green hover:bg-gray-50",
    features: ["Route optimization", "Student attendance", "Incident reporting", "Navigation assistance"]
  },

];

export default function AppsSection() {
  return (
    <section id="apps" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-dark-gray mb-6">
            One Portal Two Apps, <span className="text-gradient">One Solution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

        {/* Parent App Mockup Showcase */}
        <div className="mt-20 bg-gradient-to-br from-primary-blue to-light-blue rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-poppins font-bold text-white mb-4">
              See Parent App in Action
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Keep families reassured with real-time notifications that show exactly where buses are and provide timely updates on every student’s journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={parentNotificationMockup} 
                  alt="Parent App Notification - Bus arriving in 5 minutes"
                  className="w-64 h-auto rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                />
                <div className="absolute -bottom-4 -left-4 bg-primary-yellow text-dark-gray px-4 py-2 rounded-lg text-sm font-semibold">
                  Live Notifications
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={distanceTrackingMockup} 
                  alt="Parent App Distance Tracking - Bus location and ETA"
                  className="w-64 h-auto rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                />
                <div className="absolute -bottom-4 -right-4 bg-white text-primary-blue px-4 py-2 rounded-lg text-sm font-semibold">
                  Real-time Tracking
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-12">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Bus Arrival Alerts</h4>
              <p className="text-white/80">Get notified when the bus is 5-10 minutes away from your stop</p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Distance Tracking</h4>
              <p className="text-white/80">See exact distance and estimated arrival time in real-time</p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Safety Updates</h4>
              <p className="text-white/80">Receive instant notifications when your child boards or leaves the bus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
