import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";
import heroImage from "@/assets/hero_area_img.png";

const ThreeScene = React.lazy(() => import("./three-scene"));

export default function HeroSection() {
  return (
    <section id="home" className="hero-bg min-h-screen relative overflow-hidden pt-24 md:pt-28 lg:pt-32 pb-16 lg:pb-20">
      {/* Three.js Scene */}
      <div className="absolute inset-0 pointer-events-none">
        <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
          <ThreeScene />
        </Suspense>
      </div>

      {/* Floating Icons */}
      <div className="hidden md:block absolute top-20 left-10 text-4xl text-dark-gray animate-float opacity-70">
        🚌
      </div>
      <div className="hidden md:block absolute top-60 right-15 text-4xl text-dark-gray animate-float opacity-70" style={{ animationDelay: "2s" }}>
        🏫
      </div>
      <div className="hidden md:block absolute top-40 right-30 text-4xl text-dark-gray animate-float opacity-70" style={{ animationDelay: "4s" }}>
        📍
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-white mb-6 animate-slide-up">
              Safe Journey,<br className="hidden sm:block" />
              <span className="text-dark-gray"> Happy Parents</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Track your child's school bus in real-time with Skoolary's comprehensive solution for parents, drivers, and schools. Peace of mind, one tap away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up w-full sm:w-auto" style={{ animationDelay: "0.4s" }}>
              <Button
                size="lg"
                className="w-full sm:w-auto button-hover bg-dark-gray text-white hover:bg-gray-800 shadow-lg hover:shadow-xl px-8 py-4 rounded-xl transform hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto button-hover bg-white text-dark-gray hover:bg-gray-50 shadow-lg hover:shadow-xl px-8 py-4 rounded-xl transform hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Parent App
              </Button>
            </div>
          </div>

          <div className="relative lg:mt-0">
            <img 
              src={heroImage} 
              alt="Skoolary App Preview" 
              className="w-full max-w-lg mx-auto rounded-lg"
            />
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
