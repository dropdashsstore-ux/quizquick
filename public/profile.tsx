// pages/profile.tsx
import React from "react";
import Link from "next/link";

const Profile: React.FC = () => {
  // Dummy data for demonstration
  const user = {
    name: "QuizMaster",
    streak: 7, // days
    quizzesTaken: 12,
    totalScore: 950,
    savedQuizzes: ["Math Basics", "History 101", "Science Quick Quiz"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-6 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-white">
        {/* Header */}
        <h1 className="text-4xl font-extrabold mb-8 text-center drop-shadow">
          👤 {user.name} Profile
        </h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/20 rounded-xl p-6 text-center hover:scale-105 transition transform shadow-md">
            <p className="text-2xl font-bold text-yellow-300">🔥 {user.streak}</p>
            <p className="text-sm text-white/80">Day Streak</p>
          </div>
          <div className="bg-white/20 rounded-xl p-6 text-center hover:scale-105 transition transform shadow-md">
            <p className="text-2xl font-bold text-green-300">📝 {user.quizzesTaken}</p>
            <p className="text-sm text-white/80">Quizzes Taken</p>
          </div>
          <div className="bg-white/20 rounded-xl p-6 text-center hover:scale-105 transition transform shadow-md">
            <p className="text-2xl font-bold text-pink-300">🏆 {user.totalScore}</p>
            <p className="text-sm text-white/80">Total Score</p>
          </div>
        </div>

        {/* Saved Quizzes */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">📚 Saved Quizzes</h2>
          <div className="grid gap-3">
            {user.savedQuizzes.map((quiz, idx) => (
              <div
                key={idx}
                className="bg-white/20 px-4 py-3 rounded-lg shadow hover:bg-white/30 hover:scale-[1.02] transition cursor-pointer"
              >
                {quiz}
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/">
            <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl shadow-md hover:bg-yellow-500 transition">
              Home 🏠
            </button>
          </Link>
          <Link href="/quiz">
            <button className="bg-green-400 text-black font-bold px-6 py-3 rounded-xl shadow-md hover:bg-green-500 transition">
              Take Quiz ✅
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
