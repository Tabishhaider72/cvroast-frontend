"use client";

import Link from "next/link";
import { Github, Linkedin, Globe, FileText, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24">

      {/* Personal Branding Card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">

        <div className="bg-card border border-border rounded-3xl shadow-xl p-8 sm:p-12 text-center">

          <h2 className="text-2xl sm:text-3xl font-semibold italic">
            Built with precision, performance, and product thinking.
          </h2>

          <p className="mt-6 text-base sm:text-lg opacity-80 max-w-3xl mx-auto">
            I’m <span className="font-semibold">Syed Tabish Haider</span>, a full-stack
            software developer focused on building scalable, modern web
            applications with clean UI, strong backend architecture,
            and AI-driven capabilities.  
            Projects like CVRoast.ai reflect my passion for
            performance, usability, and real-world impact.
          </p>

          {/* Contact Icons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">

            <a
              href="tel:+918920637836"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <Phone size={18} />
              +91 8920637836
            </a>

            <a
              href="https://syed-tabish.vercel.app"
              target="_blank"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <Globe size={18} />
              Portfolio
            </a>

            <a
              href="https://github.com/Tabishhaider72"
              target="_blank"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sayed-tabish/"
              target="_blank"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href="https://drive.google.com/file/d/1IiJSh5-UbwYnj27bLWjpnNTmF3et6luS/view"
              target="_blank"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <FileText size={18} />
              Resume
            </a>

          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="border-t border-border py-8 text-center text-sm opacity-70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <p>
            © {new Date().getFullYear()} CVRoast.ai — Built & Designed by
            <span className="font-medium"> Syed Tabish Haider</span>
          </p>

          <p className="mt-2">
            Modern Resume Intelligence Platform powered by AI.
          </p>

        </div>
      </div>

    </footer>
  );
}
