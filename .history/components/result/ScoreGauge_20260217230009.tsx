"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface Props {
  score: number;
}

export default function ScoreGauge({ score }: Props) {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedScore(score);
    }, 200);
    return () => clearTimeout(timeout);
  }, [score]);

  const radius = 80;
  const stroke = 12;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (animatedScore / 100) * circumference;

  return (
    <Card className="rounded-2xl shadow-sm w-full max-w-xs">
      <CardContent className="flex flex-col items-center py-8">

        <div className="relative flex items-center justify-center">

          <svg height={radius * 2} width={radius * 2}>

            {/* Background Circle */}
            <circle
              stroke="var(--border)"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />

            {/* Progress Circle */}
            <circle
              stroke="var(--primary)"
              fill="transparent"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={`${circumference} ${circumference}`}
              style={{
                strokeDashoffset,
                transition: "stroke-dashoffset 1s ease",
              }}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              transform={`rotate(-90 ${radius} ${radius})`}
            />
          </svg>

          {/* Center Score */}
          <div className="absolute text-4xl font-semibold">
            {animatedScore}
          </div>

        </div>

        <p className="mt-4 text-sm opacity-70 tracking-wide">
          ATS SCORE
        </p>

      </CardContent>
    </Card>
  );
}
