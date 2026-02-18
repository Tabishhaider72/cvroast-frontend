"use client";

interface Props {
  score: number;
}

export default function ScoreGauge({ score }: Props) {
  const radius = 70;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5dfcc"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#1B3022"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
      </svg>

      <div className="absolute text-3xl font-bold">
        {score}
      </div>

      <p className="mt-4 text-sm">ATS Score</p>
    </div>
  );
}
