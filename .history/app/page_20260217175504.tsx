"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios, { AxiosError } from "axios";

import Navbar from "@/components/Navbar";
import ResumeDropzone from "@/components/resume/ResumeDropzone";
import Preloader from "@/components/Preloader";
import { uploadResume } from "@/lib/api";
import { ResumeRoastResponse } from "@/types/resume";

interface ApiErrorResponse {
  message: string;
}

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
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError<ApiErrorResponse>;
        setError(
          axiosError.response?.data?.message ||
            "Failed to analyze resume."
        );
      } else {
        setError("Unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Preloader />}
      <Navbar />

      <main className="relative min-h-screen overflow-hidden">

        {/* Background Layer */}
        <div className="absolute inset-0 bg-bgPrimary" />

        {/* Decorative Golden Blob */}
        <Image
          src="/golden-water.png"
          alt="background"
          fill
          className="object-cover opacity-40"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-28 text-center">

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Is Your Resume Ready to Impress?
          </h1>

          <p className="text-lg md:text-xl mb-16 text-textPrimary/80">
            Get instant ATS analysis and expert feedback on your CV.
          </p>

          {/* Content Row */}
          <div className="relative flex items-center justify-center">

            {/* Left Illustration */}
            <div className="hidden lg:block absolute -left-16 bottom-0">
              <Image
                src="/thinker1.png"
                alt="left illustration"
                width={300}
                height={300}
              />
            </div>

            {/* Upload Card */}
            <div className="bg-white rounded-3xl shadow-xl p-12 w-full max-w-xl relative border border-[#e5dfcc]">

              <div className="border-2 border-dashed border-accentPrimary rounded-2xl p-10">

                <h3 className="text-2xl font-semibold mb-4">
                  Upload Your Resume (PDF)
                </h3>

                <p className="text-sm text-textPrimary/70 mb-8">
                  Drag & drop your file here or click to browse
                </p>

                <ResumeDropzone onFileSelect={setFile} />

                <p className="text-xs mt-6 text-textPrimary/60">
                  Max file size: 5MB • PDF format only
                </p>
              </div>

              {error && (
                <p className="text-red-500 text-sm mt-4">{error}</p>
              )}

              <button
                onClick={handleUpload}
                disabled={loading}
                className="mt-10 w-full bg-cta text-white py-4 rounded-full text-lg font-medium hover:opacity-90 transition disabled:opacity-60"
              >
                Analyze My Resume
              </button>
            </div>

            {/* Right Illustration */}
            <div className="hidden lg:block absolute -right-16 bottom-0">
              <Image
                src="/thinker2.png"
                alt="right illustration"
                width={300}
                height={300}
              />
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
