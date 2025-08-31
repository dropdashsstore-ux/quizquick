// components/FileUploader.tsx
import React, { useRef, useState } from "react";

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <div
      className="w-full max-w-md p-6 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 transition"
      onClick={handleClick}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept=".txt,.pdf,.docx"
        onChange={handleFileChange}
      />
      <p className="text-gray-600 mb-2">Drag & drop your notes here</p>
      <button
        type="button"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Or click to upload
      </button>
      <p className="text-sm text-gray-500 mt-2">
        Supported formats: TXT, PDF, DOCX
      </p>

      {fileName && (
        <p className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">
          ✅ Selected: {fileName}
        </p>
      )}
    </div>
  );
};

export default FileUploader;
