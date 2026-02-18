"use client";

import Image from "next/image";
import { Github, Linkedin, Globe, FileText, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24">

      {/* Personal Branding Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">

        <div className="bg-card border border-border rounded-3xl shadow-lg p-6 sm:p-8 text-center">

          {/* Profile Image */}
          <div className="flex justify-center mb-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-border shadow-md">
              <Image
                src="/image.png"
                alt="Syed Tabish Haider"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-xl sm:text-2xl font-semibold italic">
            Built with precision, performance & product thinking.
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base opacity-80 max-w-2xl mx-auto">
            I’m <span className="font-semibold">Syed Tabish Haider</span>, a full-stack
            software developer building scalable web applications with
            modern UI systems, clean backend architecture, and AI-driven solutions.
            CVRoast.ai reflects my focus on performance, usability, and impact.
          </p>

          {/* Contact Links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs sm:text-sm">

            <a
              href="tel:+918920637836"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <Phone size={16} />
              +91 8920637836
            </a>

            <a
              href="https://syed-tabish.vercel.app"
              target="_blank"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <Globe size={16} />
              Portfolio
            </a>

            <a
              href="https://github.com/Tabishhaider72"
              target="_blank"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <Github size={16} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sayed-tabish/"
              target="_blank"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>

            <a
              href="https://drive.google.com/file/d/1IiJSh5-UbwYnj27bLWjpnNTmF3et6luS/view"
              target="_blank"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <FileText size={16} />
              Resume
            </a>

          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-border py-6 text-center text-xs sm:text-sm opacity-70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <p>
            © {new Date().getFullYear()} CVRoast.ai — Built by
            <span className="font-medium"> Syed Tabish Haider</span>
          </p>

          <p className="mt-1">
            Modern Resume Intelligence Platform powered by AI.
          </p>

        </div>
      </div>

    </footer>
  );
}
