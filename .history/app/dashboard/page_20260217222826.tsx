"use client";

import { useMemo } from "react";
import { ResumeRoastResponse } from "@/types/resume";
import Navbar from "@/components/Navbar";
import ScoreGauge from "@/components/result/ScoreGauge";
import BreakdownCard from "@/components/result/BreakdownCard";
import Footer from "@/components/Footer";

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

      <div className="p-10 max-w-6xl mx-auto space-y-10">

        {/* Score Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <ScoreGauge score={data.score} />
          <BreakdownCard breakdown={data.breakdown} />
        </div>

        {/* Summary */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Summary
          </h3>
          <p>{data.summary}</p>
        </div>

        {/* Strengths */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Strengths
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {data.strengths.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
      <Footer />

    </>
  );
}
