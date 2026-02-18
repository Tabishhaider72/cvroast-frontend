"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/flameicon.png"
            alt="CVRoast Logo"
            width={100}
            height={100}
            className="object-contain"
            priority
          />
          <span className="text-lg sm:text-xl font-semibold tracking-tight">
            CVRoast.ai
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          <Link
            href="#"
            className="hover:text-primary transition"
          >
            Home
          </Link>

          <Link
            href="#"
            className="hover:text-primary transition"
          >
            About
          </Link>

          <Link
            href="#"
            className="hover:text-primary transition"
          >
            Contact
          </Link>

          <button className="ml-4 px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition">
            Sign In
          </button>

        </nav>

      </div>
    </header>
  );
}
