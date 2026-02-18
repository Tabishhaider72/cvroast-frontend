"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import ResumeDropzone from "@/components/resume/ResumeDropzone";
import { uploadResume } from "@/lib/api";
import { ResumeRoastResponse } from "@/types/resume";
import Image from "next/image";

export default function LandingPage() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setError("Please upload a PDF file.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data: ResumeRoastResponse = await uploadResume(file);

      sessionStorage.setItem("resumeResult", JSON.stringify(data));

      router.push("/dashboard");
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          "Failed to analyze resume."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen px-6 py-16 flex flex-col items-center text-center relative">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Is Your Resume Ready to Impress?
        </h1>

        <p className="text-lg mb-12">
          Get instant ATS analysis and expert feedback on your CV.
        </p>

        <div className="w-full max-w-2xl">
          <ResumeDropzone onFileSelect={setFile} />

          {error && (
            <p className="text-red-500 mt-4">{error}</p>
          )}

          <button
            onClick={handleUpload}
            disabled={loading}
            className="mt-8 bg-cta text-white px-8 py-4 rounded-full text-lg"
          >
            {loading ? "Analyzing..." : "Analyze My Resume"}
          </button>
        </div>

        {/* Decorative Images */}
        <Image
          src="/thinker1.png"
          alt="left illustration"
          width={220}
          height={220}
          className="absolute left-10 bottom-20 hidden lg:block"
        />

        <Image
          src="/thinker2.png"
          alt="right illustration"
          width={220}
          height={220}
          className="absolute right-10 bottom-20 hidden lg:block"
        />
      </main>
    </>
  );
}
