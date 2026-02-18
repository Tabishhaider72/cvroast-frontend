"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-bgPrimary z-50">
      <div className="flex flex-col items-center gap-6">

        {/* Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-24 h-24 border-4 border-accentPrimary border-t-cta rounded-full flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            <Image
              src="/flameicon.png"
              alt="loading"
              width={40}
              height={40}
            />
          </motion.div>
        </motion.div>

        <p className="text-sm font-medium">
          Analyzing your resume...
        </p>
      </div>
    </div>
  );
}
