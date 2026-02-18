"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import {
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

interface Props {
  title: string;
  items: string[];
  variant?: "positive" | "negative" | "neutral";
}

export default function InsightList({
  title,
  items,
  variant = "neutral",
}: Props) {
  const config = {
    positive: {
      icon: CheckCircle2,
      badge: "Strength Signal",
      accent: "bg-green-500",
      tint: "bg-green-50",
      iconColor: "text-green-600",
      badgeColor: "bg-green-100 text-green-700",
    },
    negative: {
      icon: AlertTriangle,
      badge: "Risk Indicator",
      accent: "bg-red-500",
      tint: "bg-red-50",
      iconColor: "text-red-600",
      badgeColor: "bg-red-100 text-red-700",
    },
    neutral: {
      icon: Lightbulb,
      badge: "Improvement Plan",
      accent: "bg-primary",
      tint: "bg-muted",
      iconColor: "text-primary",
      badgeColor: "bg-muted text-foreground",
    },
  };

  const { icon: Icon, badge, accent, tint, iconColor, badgeColor } =
    config[variant];

  return (
    <Card className="relative rounded-2xl border shadow-sm overflow-hidden">

      {/* Accent Line */}
      <div className={`absolute left-0 top-0 h-full w-1 ${accent}`} />

      <CardHeader className="pb-4">

        <div className="flex justify-between items-center">

          <CardTitle className="text-lg font-semibold tracking-wide">
            {title}
          </CardTitle>

          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${badgeColor}`}
          >
            {badge}
          </span>

        </div>

      </CardHeader>

      <CardContent className="space-y-6">

        {items.map((item, index) => (
          <div
            key={index}
            className={`flex gap-4 p-4 rounded-xl transition hover:shadow-sm ${tint}`}
          >

            <Icon
              size={18}
              className={`mt-1 shrink-0 ${iconColor}`}
            />

            <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
              {item}
            </p>

          </div>
        ))}

      </CardContent>
    </Card>
  );
}
