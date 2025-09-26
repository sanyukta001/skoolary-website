import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import busImage from "@/assets/landing_page_1.jpg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${busImage})` }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins font-bold text-white mb-6 leading-measured">
              Make every{" "}
              <br />
              <span className="text-yellow-400">school journey</span>
              <br />
              safer with <span className="text-yellow-400">Skoolary.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed text-justify">
              Empower your school with Skoolary’s advanced<br />
              real-time tracking system. Gain complete<br />
              oversight of your bus fleet, and provide unmatched<br />
              peace of mind for your entire school community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-yellow-400 text-dark-gray hover:bg-yellow-500 shadow-lg px-8 py-4 rounded-xl transform hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5" />
                Request a Demo
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto bg-white text-dark-gray hover:bg-gray-100 shadow-lg px-8 py-4 rounded-xl transform hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* RIGHT CONTENT (Bus + Tablet) */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* <img
              src={tabletImage}
              alt="Skoolary App Preview"
              className="w-4/5 sm:w-3/5 md:w-2/3 lg:w-full max-w-md drop-shadow-xl"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
