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
              From a Parent's Worry to a
              <span className="text-primary-yellow"> Nation's Trust</span>
            </h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              It all started with a simple, universal feeling: the moment your child's school bus turns the corner, you want to know they are safe. We are parents, just like you, who transformed that daily concern into a mission.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Skoolary was born not in a boardroom, but from a desire to connect families with their children's journey. Today, we are India's most trusted school bus tracking solution, dedicated to providing the peace of mind every parent deserves.
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
              <div className="w-12 h-12 bg-primary-yellow/20 text-primary-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
                <p className="text-gray-300">To provide every parent with the peace of mind that comes from knowing their child is safe, every step of the way.</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 flex items-start gap-4 glass-effect">
              <div className="w-12 h-12 bg-success-green/20 text-success-green rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Our Commitment</h3>
                <p className="text-gray-300">We are relentlessly committed to building technology that is reliable, easy to use, and above all, keeps the safety of your child at its core.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}