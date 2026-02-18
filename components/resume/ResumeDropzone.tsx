"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FileText, X } from "lucide-react";

interface Props {
  onFileSelect: (file: File | null) => void;
}

export default function ResumeDropzone({ onFileSelect }: Props) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        setSelectedFile(file);
        onFileSelect(file);
      }
    },
    [onFileSelect]
  );

  const removeFile = () => {
    setSelectedFile(null);
    onFileSelect(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxSize: 5 * 1024 * 1024,
    multiple: false,
  });

  return (
    <div className="w-full">

      {!selectedFile ? (
        <div
          {...getRootProps()}
          className={`cursor-pointer rounded-xl py-10 px-6 text-center border transition
          ${isDragActive ? "border-primary bg-accent/20" : "border-border bg-background"}`}
        >
          <input {...getInputProps()} />

          <FileText className="mx-auto mb-4 h-10 w-10 text-primary" />

          <p className="text-sm font-medium">
            Click or drag PDF file here
          </p>

          <p className="text-xs opacity-60 mt-2">
            PDF only • Max 5MB
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-between rounded-xl border border-border bg-background p-4">

          <div className="flex items-center gap-3 overflow-hidden">
            <FileText className="h-8 w-8 text-primary shrink-0" />

            <div className="text-left truncate">
              <p className="text-sm font-medium truncate">
                {selectedFile.name}
              </p>
              <p className="text-xs opacity-60">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={removeFile}
            className="p-2 rounded-full hover:bg-accent/30 transition"
          >
            <X className="h-4 w-4 text-foreground" />
          </button>
        </div>
      )}

    </div>
  );
}
