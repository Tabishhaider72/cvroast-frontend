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

  const radius = 85;
  const stroke = 14;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (animatedScore / 100) * circumference;

  const scoreLabel =
    score >= 75
      ? "Competitive"
      : score >= 65
      ? "Developing"
      : "At Risk";

  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardContent className="flex flex-col items-center py-10">

        <div className="relative flex items-center justify-center">

          <svg height={radius * 2} width={radius * 2}>

            <circle
              stroke="var(--border)"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />

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

          <div className="absolute flex flex-col items-center">
            <span className="text-4xl font-semibold">
              {animatedScore}
            </span>
            <span className="text-xs opacity-60">
              / 100
            </span>
          </div>
        </div>

        <p className="mt-6 text-xs tracking-wider opacity-70">
          ATS COMPETITIVENESS
        </p>

        <span className="mt-2 text-sm font-medium">
          {scoreLabel}
        </span>

      </CardContent>
    </Card>
  );
}
