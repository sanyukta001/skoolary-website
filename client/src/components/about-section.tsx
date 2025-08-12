import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: 500, label: "Schools", suffix: "+" },
  { value: 50000, label: "Students", suffix: "+" },
  { value: 2000, label: "Buses", suffix: "+" },
  { value: 25, label: "Cities", suffix: "+" }
];

const timeline = [
  {
    year: "2020",
    title: "Founded",
    description: "Started with a vision to make school transport safer",
    color: "bg-primary-yellow"
  },
  {
    year: "2021",
    title: "First 100 Schools",
    description: "Reached our first milestone of 100 partner schools",
    color: "bg-success-green"
  },
  {
    year: "2024",
    title: "National Expansion",
    description: "Serving 25+ cities across India",
    color: "bg-blue-accent"
  }
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
    <section id="about" className="py-20 bg-dark-gray relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
              Revolutionizing School
              <span className="text-primary-yellow"> Transportation</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Skoolary is India's most trusted school bus tracking solution, serving thousands of families across the country. We believe every child deserves a safe and monitored journey to and from school.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-yellow mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="button-hover bg-primary-yellow text-dark-gray hover:bg-yellow-400 px-8 py-4 rounded-xl shadow-lg transform hover:scale-105"
            >
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="bg-white/5 rounded-3xl p-8 glass-effect">
              <h3 className="text-2xl font-semibold text-white mb-6">Our Journey</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-4 h-4 ${item.color} rounded-full`}></div>
                    <div>
                      <div className="text-white font-semibold">
                        {item.year} - {item.title}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
