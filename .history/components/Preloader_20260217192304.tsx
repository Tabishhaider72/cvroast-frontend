"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Navbar from "./Navbar";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">

      {/* Navbar stays visible */}
      <Navbar />

      {/* Content Area */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">

        {/* Minimal Rain Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="rain-line left-1/4" />
          <div className="rain-line left-1/2" />
          <div className="rain-line left-3/4" />
        </div>

        {/* Center Animation */}
        <div className="w-[280px] sm:w-[360px] md:w-[420px]">
          <DotLottieReact
            src="https://lottie.host/0d9fba14-ea12-4257-92dd-bc18b26eee4a/75adwTTZFv.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
}
