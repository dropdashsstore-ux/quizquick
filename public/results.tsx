// pages/results.tsx
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useMemo } from "react";

const Results: React.FC = () => {
  const router = useRouter();
  const { score, total } = router.query;

  const numericScore = Number(score) || 0;
  const numericTotal = Number(total) || 1;
  const percentage = Math.round((numericScore / numericTotal) * 100);

  // Feedback message
  const feedback = useMemo(() => {
    if (percentage === 100) return "🌟 Perfect! You nailed every question!";
    if (percentage >= 80) return "🔥 Great job! You’re a quiz star!";
    if (percentage >= 50) return "👍 Not bad! Keep practicing!";
    return "💪 Don’t give up! Try again and improve!";
  }, [percentage]);

  // Badges (dummy for now)
  const badges = ["🥇 Quiz Master", "📚 Fast Learner", "🎯 Accuracy Pro"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-2xl text-center text-white">
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-4 drop-shadow">
          Your Quiz Results 🎉
        </h1>

        {/* Score */}
        <p className="text-2xl mb-2">
          You scored{" "}
          <span className="font-extrabold text-yellow-300">
            {numericScore}
          </span>{" "}
          out of {numericTotal}
        </p>
        <p className="text-lg text-white/80 mb-6">
          ({percentage}% correct)
        </p>

        {/* Feedback */}
        <p className="text-xl font-medium mb-8">{feedback}</p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {badges.map((badge, idx) => (
            <span
              key={idx}
              className="bg-white/20 px-5 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition transform"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/quiz">
            <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-500 transition">
              Retake Quiz 🔄
            </button>
          </Link>

          <Link href="/">
            <button className="bg-white text-purple-700 font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition">
              Home 🏠
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Results;
