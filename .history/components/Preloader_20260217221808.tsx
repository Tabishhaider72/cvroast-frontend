"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Navbar from "./Navbar";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">

      {/* Navbar */}
      <Navbar />

      {/* Content Area */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">

        {/* Animated Rain */}
        <div className="absolute inset-0 pointer-events-none rain-container">
          <div className="rain-line line-1" />
          <div className="rain-line line-2" />
          <div className="rain-line line-3" />
          <div className="rain-line line-4" />
          <div className="rain-line line-5" />
        </div>

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center text-center">

          <div className="w-[240px] sm:w-[320px] md:w-[420px]">
            <DotLottieReact
              src="https://lottie.host/0d9fba14-ea12-4257-92dd-bc18b26eee4a/75adwTTZFv.lottie"
              loop
              autoplay
            />
          </div>

          <h2 className="mt-6 text-2xl sm:text-3xl font-semibold">
            Roasting Your Resume...
          </h2>

          <p className="mt-2 text-sm opacity-70 max-w-md">
            Our AI is analyzing structure, keywords, and impact.
            This will only take a moment.
          </p>
        </div>
      </div>

      {/* Internal Pure CSS */}
      <style jsx>{`
        .rain-container {
          overflow: hidden;
        }

        .rain-line {
          position: absolute;
          bottom: -150%;
          width: 3px;
          height: 200%;
          opacity: 0.18;
          animation: rise linear infinite;
        }

        /* Individual positions + colors + speed */

        .line-1 {
          left: 15%;
          background: linear-gradient(
            to top,
            transparent,
            var(--primary),
            transparent
          );
          animation-duration: 5s;
          animation-delay: 0s;
        }

        .line-2 {
          left: 35%;
          background: linear-gradient(
            to top,
            transparent,
            var(--accent),
            transparent
          );
          animation-duration: 6s;
          animation-delay: 1s;
        }

        .line-3 {
          left: 55%;
          background: linear-gradient(
            to top,
            transparent,
            var(--ring),
            transparent
          );
          animation-duration: 4.5s;
          animation-delay: 0.5s;
        }

        .line-4 {
          left: 75%;
          background: linear-gradient(
            to top,
            transparent,
            var(--primary),
            transparent
          );
          animation-duration: 7s;
          animation-delay: 2s;
        }

        .line-5 {
          left: 90%;
          background: linear-gradient(
            to top,
            transparent,
            var(--accent),
            transparent
          );
          animation-duration: 5.5s;
          animation-delay: 1.5s;
        }

        @keyframes rise {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-200%);
          }
        }
      `}</style>
    </div>
  );
}
