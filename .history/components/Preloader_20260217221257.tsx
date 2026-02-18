"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Navbar from "./Navbar";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">

        {/* Minimal Rain Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="rain-line left-[20%]" />
          <div className="rain-line left-[45%]" />
          <div className="rain-line left-[70%]" />
        </div>

        {/* Center Animation */}
        <div className="w-[260px] sm:w-[340px] md:w-[420px]">
          <DotLottieReact
            src="https://lottie.host/0d9fba14-ea12-4257-92dd-bc18b26eee4a/75adwTTZFv.lottie"
            loop
            autoplay
          />
        </div>
      </div>

      {/* Internal Styles */}
      <style jsx>{`
        .rain-line {
          position: absolute;
          bottom: -20%;
          width: 2px;
          height: 140%;
          background: linear-gradient(
            to top,
            transparent,
            var(--accent),
            var(--primary),
            transparent
          );
          opacity: 0.12;
          animation: rainRise 6s linear infinite;
        }

        @keyframes rainRise {
          0% {
            transform: translateY(20%);
          }
          100% {
            transform: translateY(-20%);
          }
        }
      `}</style>

    </div>
  );
}
