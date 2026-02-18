"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Navbar from "./Navbar";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">

      {/* Navbar */}
      <Navbar />

      {/* Center Content */}
      <div className="flex-1 flex items-center justify-center px-4">

        <div className="flex flex-col items-center text-center">

          {/* Lottie Animation (Centered) */}
          <div className="w-[240px] sm:w-[320px] md:w-[420px]">
            <DotLottieReact
              src="https://lottie.host/0d9fba14-ea12-4257-92dd-bc18b26eee4a/75adwTTZFv.lottie"
              loop
              autoplay
            />
          </div>

          {/* Loading Text */}
          <h2 className="mt-6 text-2xl sm:text-3xl font-semibold">
            Roasting Your Resume...
          </h2>

          <p className="mt-2 text-sm sm:text-base opacity-70 max-w-md">
            Our AI is analyzing structure, keywords, and impact.
            Sit tight — this won’t take long.
          </p>

        </div>
      </div>
    </div>
  );
}
