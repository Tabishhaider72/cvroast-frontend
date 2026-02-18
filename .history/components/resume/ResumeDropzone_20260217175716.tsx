"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  onFileSelect: (file: File) => void;
}

export default function ResumeDropzone({ onFileSelect }: Props) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        onFileSelect(file);
      }
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxSize: 5 * 1024 * 1024,
  });

  return (
    <div
      {...getRootProps()}
      className="cursor-pointer bg-bgPrimary rounded-xl py-12 text-center border border-[#e5dfcc]"
    >
      <input {...getInputProps()} />
      <p className="text-sm font-medium">
        Click or drag PDF file here
      </p>
    </div>
  );
}
