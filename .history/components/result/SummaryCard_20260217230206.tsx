"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Props {
  summary: string;
}

export default function SummaryCard({ summary }: Props) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">
          Summary
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm sm:text-base leading-relaxed opacity-90">
          {summary}
        </p>
      </CardContent>
    </Card>
  );
}
