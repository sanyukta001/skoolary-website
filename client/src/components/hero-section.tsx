import { Button } from "@/components/ui/button";
import { Play, Download, ChevronDown } from "lucide-react";
import ThreeScene from "./three-scene";

export default function HeroSection() {
  return (
    <section id="home" className="hero-bg min-h-screen flex items-center relative overflow-hidden">
      {/* Three.js Scene */}
      <div className="absolute inset-0 pointer-events-none">
        <ThreeScene />
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-10 text-4xl text-dark-gray animate-float opacity-70">
        🚌
      </div>
      <div className="absolute top-60 right-15 text-4xl text-dark-gray animate-float opacity-70" style={{ animationDelay: "2s" }}>
        🏫
      </div>
      <div className="absolute top-40 right-30 text-4xl text-dark-gray animate-float opacity-70" style={{ animationDelay: "4s" }}>
        📍
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-poppins font-bold text-white mb-6 animate-slide-up">
              Safe Journey,
              <span className="text-dark-gray"> Happy Parents</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Track your child's school bus in real-time with Skoolary's comprehensive solution for parents, drivers, and schools. Peace of mind, one tap away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Button
                size="lg"
                className="button-hover bg-dark-gray text-white hover:bg-gray-800 shadow-lg hover:shadow-xl px-8 py-4 rounded-xl transform hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="button-hover bg-white text-dark-gray hover:bg-gray-50 shadow-lg hover:shadow-xl px-8 py-4 rounded-xl transform hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Interactive Demo Placeholder */}
            <div className="relative w-full h-96 bg-white/10 rounded-3xl glass-effect p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4 mx-auto animate-bounce-slow">
                  <span className="text-6xl">🚌</span>
                </div>
                <p className="text-white font-semibold">Interactive Bus Tracking Demo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
