// components/QuizTimer.tsx
import React, { useEffect, useState } from "react";

interface QuizTimerProps {
  initialTime: number; // in seconds
  onTimeUp: () => void;
}

const QuizTimer: React.FC<QuizTimerProps> = ({ initialTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  // Calculate progress percentage
  const progress = (timeLeft / initialTime) * 100;

  // Determine bar color
  const barColor =
    timeLeft <= initialTime * 0.2
      ? "bg-red-500 animate-pulse"
      : "bg-blue-500";

  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 mb-4 overflow-hidden">
      <div
        className={`${barColor} h-6 rounded-full text-white text-center font-semibold transition-all duration-500 flex items-center justify-center`}
        style={{ width: `${progress}%` }}
      >
        {formatTime(timeLeft)}
      </div>
    </div>
  );
};

export default QuizTimer;
