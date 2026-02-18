"use client";

import { useMemo } from "react";
import { ResumeRoastResponse } from "@/types/resume";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ScoreGauge from "@/components/result/ScoreGauge";
import BreakdownCard from "@/components/result/BreakdownCard";
import SummaryCard from "@/components/result/SummaryCard";
import InsightList from "@/components/result/InsightList";

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
        <main className="min-h-screen flex items-center justify-center bg-background">
          <p className="text-sm opacity-70">
            No resume analysis found.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">

          {/* Page Header */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl sm:text-4xl font-semibold">
              Resume Analysis Report
            </h1>
            <p className="text-sm sm:text-base opacity-70 max-w-2xl mx-auto">
              A detailed breakdown of your ATS score and performance insights.
            </p>
          </div>

          {/* Top Score Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            <div className="flex justify-center lg:justify-start">
              <ScoreGauge score={data.score} />
            </div>

            <div className="lg:col-span-2">
              <BreakdownCard breakdown={data.breakdown} />
            </div>

          </div>

          {/* Summary */}
          <SummaryCard summary={data.summary} />

          {/* Strengths + Weaknesses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InsightList
              title="Strengths"
              items={data.strengths}
              variant="positive"
            />
            <InsightList
              title="Weaknesses"
              items={data.weaknesses}
              variant="negative"
            />
          </div>

          {/* Suggestions */}
          <InsightList
            title="Suggestions"
            items={data.suggestions}
            variant="neutral"
          />

        </div>
      </main>

      <Footer />
    </>
  );
}
