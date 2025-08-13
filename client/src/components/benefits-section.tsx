import { Users, School, Clock, Shield, Bell, Smartphone, TrendingUp, Handshake, FileText, Settings } from "lucide-react";

const parentBenefits = [
  { icon: Clock, title: "Save Time", description: "No more waiting at bus stops", color: "text-primary-yellow" },
  { icon: Shield, title: "Peace of Mind", description: "Know your child is safe", color: "text-success-green" },
  { icon: Bell, title: "Stay Informed", description: "Real-time notifications", color: "text-blue-accent" },
  { icon: Smartphone, title: "Easy Access", description: "Simple mobile interface", color: "text-purple-500" }
];

const schoolBenefits = [
  { icon: TrendingUp, title: "Better Management", description: "Optimize routes & resources", color: "text-primary-yellow" },
  { icon: Handshake, title: "Parent Satisfaction", description: "Improved communication", color: "text-success-green" },
  { icon: FileText, title: "Easy Reporting", description: "Automated documentation", color: "text-blue-accent" },
  { icon: Settings, title: "Cost Efficiency", description: "Reduce operational costs", color: "text-purple-500" }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 lg:py-20 bg-dark-gray relative">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
            Benefits for <span className="text-primary-yellow">Everyone</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how Skoolary creates value for parents, schools, and transportation providers through innovative technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Parents */}
          <div className="bg-white/10 rounded-3xl p-8 glass-effect">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-yellow rounded-xl flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-dark-gray" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Parents</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {parentBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 ${benefit.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                      <Icon className={`h-6 w-6 ${benefit.color}`} />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* For Schools */}
          <div className="bg-white/10 rounded-3xl p-8 glass-effect">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-success-green rounded-xl flex items-center justify-center mr-4">
                <School className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Schools</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {schoolBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 ${benefit.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                      <Icon className={`h-6 w-6 ${benefit.color}`} />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
