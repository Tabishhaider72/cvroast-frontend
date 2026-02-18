"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  onFileSelect: (file: File) => void;
}

export default function ResumeDropzone({ onFileSelect }: Props) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxSize: 5 * 1024 * 1024,
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-accentPrimary rounded-2xl p-10 text-center cursor-pointer bg-white"
    >
      <input {...getInputProps()} />

      <p className="font-semibold text-lg mb-2">
        Upload Your Resume (PDF)
      </p>

      <p className="text-sm text-gray-600 mb-6">
        Drag & drop your file here or click to browse
      </p>

      <button
        type="button"
        className="bg-cta text-white px-6 py-3 rounded-full"
      >
        Browse File
      </button>

      <p className="text-xs mt-4 text-gray-500">
        Max file size: 5MB • PDF format only
      </p>
    </div>
  );
}
