"use client";

import { useEffect, useState } from "react";
import { ResumeRoastResponse } from "@/types/resume";
import Navbar from "@/components/Navbar";

export default function DashboardPage() {
  const [data, setData] = useState<ResumeRoastResponse | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("resumeResult");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) {
    return <p className="p-10">No result found.</p>;
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
    </>
  );
}
