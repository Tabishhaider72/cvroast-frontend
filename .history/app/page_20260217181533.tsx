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

        {/* Large Left Illustration */}
        <div className="hidden lg:block absolute left-0 bottom-0 z-0">
          <Image
            src="/thinker1.png"
            alt="left illustration"
            width={480}
            height={480}
            className="object-contain"
          />
        </div>

        {/* Large Right Illustration */}
        <div className="hidden lg:block absolute right-0 bottom-0 z-0">
          <Image
            src="/thinker2.png"
            alt="right illustration"
            width={680}
            className="object-contain"
          />
        </div>

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl">
            Is Your Resume Ready to Impress?
          </h1>

          <p className="text-lg md:text-xl mb-16 opacity-80 max-w-2xl">
            Get instant ATS analysis and expert feedback on your CV.
          </p>

          {/* Upload Card Wrapper */}
          <div className="relative">

            {/* Background Golden Shape Behind Card */}
            <div className="absolute inset-0 flex justify-center -z-10">
              <Image
                src="/golden-water.png"
                alt="background"
                width={800}
                height={500}
                className="object-contain opacity-60"
              />
            </div>

            {/* Upload Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-14 w-[640px] max-w-[95vw] border border-border">

              <div className="border-2 border-dashed border-accent rounded-2xl p-10">

                <h3 className="text-2xl font-semibold mb-4">
                  Upload Your Resume (PDF)
                </h3>

                <p className="text-sm opacity-70 mb-8">
                  Drag & drop your file here or click to browse
                </p>

                <ResumeDropzone onFileSelect={setFile} />

                <p className="text-xs mt-6 opacity-60">
                  Max file size: 5MB • PDF format only
                </p>
              </div>

              {error && (
                <p className="text-red-500 text-sm mt-4">{error}</p>
              )}

              <button
                onClick={handleUpload}
                disabled={loading}
                className="mt-10 w-full bg-primary text-primary-foreground py-4 rounded-full text-lg font-medium hover:opacity-90 transition disabled:opacity-60"
              >
                Analyze My Resume
              </button>
            </div>

          </div>

        </div>
      </main>
    </>
  );
}
