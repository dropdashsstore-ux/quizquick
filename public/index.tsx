import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleGenerateQuiz = () => {
    if (!file) {
      alert("Please upload your notes first! 📄");
      return;
    }

    // Here you can upload the file to your backend or AI service
    // For now, we just navigate to the quiz page
    router.push("/quiz");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4">
      <h1 className="text-5xl font-bold mb-6">QuizQuick ⚡</h1>
      <p className="mb-6 text-center max-w-xl">
        Upload your notes and get a custom quiz instantly! Perfect for students
        who want to study smarter, not harder. 📚
      </p>

      <input
        type="file"
        accept=".txt,.pdf,.docx"
        onChange={handleFileChange}
        className="mb-4 p-2 rounded text-black"
      />

      <button
        onClick={handleGenerateQuiz}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition duration-300"
      >
        Generate Quiz 🚀
      </button>

      {file && <p className="mt-4">Uploaded: {file.name} ✅</p>}
    </div>
  );
}
