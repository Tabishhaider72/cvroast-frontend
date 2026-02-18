"use client";

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
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5dfcc] w-full">
      <h3 className="text-lg font-semibold mb-4">
        Score Breakdown
      </h3>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-sm mb-1">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>

            <div className="w-full bg-[#f1ead8] h-2 rounded-full">
              <div
                className="bg-cta h-2 rounded-full"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
