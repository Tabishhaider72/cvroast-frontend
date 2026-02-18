"use client";

import { useMemo } from "react";
import { ResumeRoastResponse } from "@/types/resume";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ScoreGauge from "@/components/result/ScoreGauge";
import BreakdownCard from "@/components/result/BreakdownCard";
import SummaryCard from "@/components/result/SummaryCard";
import InsightList from "@/components/result/InsightList";
import HRRecommendationCard from "@/components/result/HRRecommendationCard";


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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-semibold">
              Resume Evaluation Report
            </h1>
            <p className="text-sm opacity-70 mt-2">
              Analytical breakdown of technical credibility, hiring risk, and market positioning.
            </p>
          </div>

          {/* Recruiter Simulation Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* LEFT PANEL — Sticky Evaluation */}
            <aside className="lg:col-span-1 space-y-6 lg:sticky lg:top-24 h-fit">

              <ScoreGauge score={data.score} />

              <BreakdownCard breakdown={data.breakdown} />

            </aside>

            {/* RIGHT PANEL — Analysis Stream */}
            <section className="lg:col-span-3 space-y-12">

              <SummaryCard
                summary={data.summary}
                candidateName={data.candidateName}
              />

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
              {/* HR Risk Block */}
              <div className="bg-red-50 border border-red-800 rounded-2xl p-8">
                <HRRecommendationCard content={data.hrRecommendation} />
              </div>

              <InsightList
                title="Strategic Improvement Plan"
                items={data.suggestions}
                variant="neutral"
              />
              

            </section>

          </div>
        </div>
      </main>

      <Footer />  
    </>
  );
}
