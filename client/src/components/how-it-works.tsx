import { Download, UserPlus, MapPinned } from "lucide-react";
import { SiApple, SiGoogleplay } from "react-icons/si";
import { Check } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Download,
    title: "Register Your School",
    description: "Sign up on the Skoolary portal with just a few details. Our team will reach out to help your school get set up quickly and smoothly.",
    color: "bg-primary-yellow text-dark-gray",
    features: ["Secure data encryption", "Multiple children support", "Emergency contacts"]
  },
  {
    number: 2,
    icon: UserPlus,
    title: "Add Students & Routes",
    description: "Easily link students to their assigned buses and routes. All information is managed securely and privately, giving you full control over transportation data.",
    color: "bg-success-green text-white",
    features: ["Quick setup process", "Route assignment", "Privacy protection"]
  },
  {
    number: 3,
    icon: MapPinned,
    title: "Monitor in Real-Time",
    description: "Keep track of every bus journey with live updates and notifications for pickups, drop-offs, delays, or any emergencies—helping staff stay proactive and parents reassured.",
    color: "bg-blue-accent text-white",
    features: ["Live notifications", "Real-time updates", "Emergency alerts"]
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-dark-gray mb-6">
            How <span className="text-gradient">Skoolary</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, secure, and seamless - Skoolary makes it easy for schools to track and manage every bus journey while keeping parents informed and reassured.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-dark-gray rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-dark-gray mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {step.description}
                </p>

                {index === 0 && (
                  <div className="flex justify-center space-x-4 mb-6">
                    <div className="bg-dark-gray rounded-lg px-4 py-2 flex items-center space-x-2">
                      <SiApple className="text-white" />
                      <span className="text-white text-sm">App Store</span>
                    </div>
                    <div className="bg-dark-gray rounded-lg px-4 py-2 flex items-center space-x-2">
                      <SiGoogleplay className="text-white" />
                      <span className="text-white text-sm">Play Store</span>
                    </div>
                  </div>
                )}

                {index === 1 && (
                  <div className="text-left space-y-2 mb-6">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-success-green" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {index === 2 && (
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-success-green rounded-full"></div>
                        <span className="text-sm text-gray-600">Bus arrived at school</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-primary-yellow rounded-full"></div>
                        <span className="text-sm text-gray-600">En route to your stop</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
