"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import { ShieldAlert } from "lucide-react";

interface Props {
  content: string;
}

export default function HRRecommendationCard({ content }: Props) {
  return (
    <Card className="relative rounded-2xl border shadow-sm overflow-hidden bg-red-50/60">

      {/* Left Accent */}
      <div className="absolute left-0 top-0 h-full w-1 bg-red-500" />

      <CardHeader className="pb-4">

        <div className="flex items-center justify-between">

          <CardTitle className="text-lg font-semibold tracking-wide text-red-700">
            Hiring Risk Assessment
          </CardTitle>

          <span className="text-xs px-3 py-1 rounded-full font-medium bg-red-100 text-red-700">
            Internal Use
          </span>

        </div>

      </CardHeader>

      <CardContent className="space-y-6">

        <div className="flex gap-4 items-start">

          <ShieldAlert
            size={20}
            className="text-red-600 shrink-0 mt-1"
          />

          <p className="text-sm sm:text-base leading-relaxed text-red-900/90">
            {content}
          </p>

        </div>

        <p className="text-xs italic text-red-800/70">
          This section simulates internal recruiter reasoning and highlights
          potential hiring risks, ramp-up cost, and long-term fit concerns.
          Not visible to candidates in traditional screening systems.
        </p>

      </CardContent>
    </Card>
  );
}
