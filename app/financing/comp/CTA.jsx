// components/FinancingCTAAdvanced.tsx
"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function FinancingCTAAdvanced() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/1 (1).jpg" // replace with your high-quality car image
        alt="Car Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>

      {/* Particles */}
      <Particles
        id="cta-particles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          particles: {
            number: { value: 50 },
            color: { value: "#ff0000" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: { min: 2, max: 5 } },
            move: { enable: true, speed: 1.5, outModes: { default: "out" } },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp">
          Get Pre-Approved Today!
        </h2>
        <p className="text-lg md:text-xl mb-8 animate-fadeInUp delay-200">
          Start your financing journey now and drive away with your dream car.
        </p>
        <a
          href="#apply"
          className="inline-block bg-red-500 text-white font-semibold py-4 px-10 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl animate-bounce"
        >
          Apply Now
        </a>

        {/* Optional stats cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 w-full max-w-2xl animate-fadeInUp delay-400">
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl shadow-lg text-left">
            <h4 className="text-lg font-semibold mb-2">Flexible Plans</h4>
            <p className="text-white text-lg">Tailored financing for every budget.</p>
          </div>
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl shadow-lg text-left">
            <h4 className="text-lg font-semibold mb-2">Fast Approval</h4>
            <p className="text-white text-lg">Get pre-approved in minutes, not days.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
