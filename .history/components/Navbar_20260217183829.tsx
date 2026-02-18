"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center border-b border-[#e5dfcc]">
      <div className="flex items-center gap-3">
        <Image
          src="/flameicon.png"
          alt="logo"
          width={100}
          height={100}
        />
        <span className="text-xl font-semibold">CVRoast.ai</span>
      </div>

      <div className="hidden md:flex gap-8 items-center text-sm">
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
        <button className="px-5 py-2 border border-textPrimary rounded-full text-sm">
          Sign In
        </button>
      </div>
    </nav>
  );
}
