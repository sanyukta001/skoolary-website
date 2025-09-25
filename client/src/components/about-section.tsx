import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Users, Shield, Heart } from "lucide-react";

const stats = [
  { value: 500, label: "Schools Partnered", suffix: "+" },
  { value: 50000, label: "Journeys Secured", suffix: "+" },
  { value: 99, label: "Parent Satisfaction", suffix: "%" },
  { value: 25, label: "Cities Served", suffix: "+" }
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-dark-gray relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1576765689472-b5135699a702?auto=format&fit=crop&w=1920&q=80')"
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
              From Daily Challenges to
              <span className="text-primary-yellow"> Trusted Partnerships</span>
            </h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Every school carries the responsibility of ensuring that students travel safely. Parents expect peace of mind, and schools need a reliable way to deliver it.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              That’s why we built Skoolary. A solution designed not in a boardroom, but from real on-ground needs. With real-time bus tracking and instant updates, we help schools strengthen parent trust, simplify coordination, and lead with safety.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary-yellow mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 rounded-2xl p-6 flex items-start gap-4 glass-effect">
              <div className="w-12 h-12 bg-[#fde047]/20 text-primary-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
                <p className="text-gray-300">To empower schools with smart, reliable transport solutions that ensure every student’s safety and strengthen the trust between schools and families.</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 flex items-start gap-4 glass-effect">
              <div className="w-12 h-12 bg-success-green/20 text-success-green rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Our Commitment</h3>
                <p className="text-gray-300">We are dedicated to providing schools with technology that is dependable, simple to use, and designed with student safety at its core.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}