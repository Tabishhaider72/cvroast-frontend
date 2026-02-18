"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Breakdown {
  skills: number;
  experience: number;
  keywords: number;
  structure: number;
  impact: number;
}

interface Props {
  breakdown: Breakdown;
}

export default function BreakdownCard({ breakdown }: Props) {
  const items = [
    { label: "Skills", value: breakdown.skills },
    { label: "Experience", value: breakdown.experience },
    { label: "Keywords", value: breakdown.keywords },
    { label: "Structure", value: breakdown.structure },
    { label: "Impact", value: breakdown.impact },
  ];

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">
          Score Breakdown
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">

        {items.map((item) => (
          <div key={item.label}>

            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">
                {item.label}
              </span>
              <span className="opacity-70">
                {item.value}
              </span>
            </div>

            <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-700 ease-out rounded-full"
                style={{ width: `${item.value}%` }}
              />
            </div>

          </div>
        ))}

      </CardContent>
    </Card>
  );
}
