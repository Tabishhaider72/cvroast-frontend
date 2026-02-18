"use client";

import { useMemo } from "react";
import { ResumeRoastResponse } from "@/types/resume";
import Navbar from "@/components/Navbar";
import ScoreGauge from "@/components/result/ScoreGauge";

export default function DashboardPage() {
  const data: ResumeRoastResponse | null = useMemo(() => {
    if (typeof window === "undefined") return null;

    const stored = sessionStorage.getItem("resumeResult");
    return stored ? JSON.parse(stored) : null;
  }, []);

  if (!data) {
    return (
      <>
        <Navbar />
        <p className="p-10 text-center">No result found.</p>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Your ATS Score: {data.score}
        </h2>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Summary</h3>
          <p>{data.summary}</p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Strengths</h3>
          <ul className="list-disc pl-6">
            {data.strengths.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <ScoreGauge score={data.score} />
    </>
  );
}
