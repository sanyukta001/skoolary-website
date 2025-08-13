import { MapPin, Shield, Smartphone, TrendingUp } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Real-time Tracking",
    description: "Track your child's bus location in real-time with GPS precision and live updates.",
    color: "bg-primary-yellow text-dark-gray"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Instant alerts for delays, breakdowns, or route changes to keep you informed.",
    color: "bg-success-green text-white"
  },
  {
    icon: Smartphone,
    title: "Multi-Platform",
    description: "Dedicated apps for parents, drivers, and school administrators.",
    color: "bg-blue-accent text-white"
  },
  {
    icon: TrendingUp,
    title: "Smart Analytics",
    description: "Comprehensive reports and insights for better transportation management.",
    color: "bg-purple-500 text-white"
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-dark-gray mb-6">
            Why Choose <span className="text-gradient">Skoolary?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of school transportation with our comprehensive tracking solution designed for modern families and educational institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-light-gray rounded-2xl p-8 text-center card-hover shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-dark-gray mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
