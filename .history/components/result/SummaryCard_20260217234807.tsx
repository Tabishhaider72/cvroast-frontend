"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Props {
  summary: string;
  candidateName?: string;
}

export default function SummaryCard({ summary, candidateName }: Props) {
  return (
    <Card className="rounded-2xl border shadow-sm relative overflow-hidden">

      {/* Left Accent Strip */}
      <div className="absolute left-0 top-0 h-full w-1 bg-primary" />

      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold tracking-wide">
          Executive Evaluation
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">

        <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
          {summary}
        </p>

        {/* Professional Note */}
        <p className="text-xs italic text-muted-foreground">
          This evaluation is generated using structured market benchmarking,
          hiring trend analysis, and simulated recruiter decision frameworks.
          Insights are intended to reflect realistic screening behavior in
          competitive engineering roles.
        </p>

      </CardContent>
    </Card>
  );
}
