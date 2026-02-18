"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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

  const titleColor =
    variant === "positive"
      ? "text-green-600"
      : variant === "negative"
      ? "text-red-600"
      : "text-primary";

  const bulletColor =
    variant === "positive"
      ? "bg-green-600"
      : variant === "negative"
      ? "bg-red-600"
      : "bg-primary";

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className={`text-lg ${titleColor}`}>
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="space-y-5">
          {items.map((item, index) => (
            <li key={index} className="flex gap-3 items-start">

              <span
                className={`mt-2 w-2 h-2 rounded-full ${bulletColor} shrink-0`}
              />

              <p className="text-sm sm:text-base leading-relaxed opacity-90">
                {item}
              </p>

            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
