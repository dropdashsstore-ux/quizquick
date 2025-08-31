// pages/quiz.tsx
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface Question {
  question: string;
  options: string[];
  correct: string;
}

const sampleQuestions: Question[] = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: "4",
  },
  {
    question: "Which language runs in the browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript",
  },
];

const Quiz = () => {
  const router = useRouter();
  const [questions] = useState<Question[]>(sampleQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);

  // timer effect
  useEffect(() => {
    if (time <= 0) {
      handleNext();
      return;
    }
    const timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  // handle next question
  const handleNext = () => {
    if (selectedOption === questions[currentIndex].correct) {
      setScore((prev) => prev + 1);
    }
    setSelectedOption("");
    setTime(30);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      router.push(`/results?score=${score + (selectedOption === questions[currentIndex].correct ? 1 : 0)}&total=${questions.length}`);
    }
  };

  // progress bar width
  const progress = ((time / 30) * 100).toFixed(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            Question {currentIndex + 1} / {questions.length}
          </h2>
          <span className="font-medium text-gray-600">Score: {score}</span>
        </div>

        {/* Question */}
        <p className="text-lg font-medium mb-6">
          {questions[currentIndex].question}
        </p>

        {/* Options */}
        <div className="grid gap-4">
          {questions[currentIndex].options.map((option) => {
            const isSelected = selectedOption === option;
            return (
              <button
                key={option}
                onClick={() => setSelectedOption(option)}
                className={`p-3 rounded-xl border text-left w-full transition-all
                  ${isSelected ? "bg-indigo-500 text-white border-indigo-600" : "bg-gray-50 hover:bg-gray-100 border-gray-200"}
                `}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Timer + Next */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 font-medium">⏱ {time}s left</span>
            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className={`px-5 py-2 rounded-xl font-semibold transition-all 
                ${selectedOption 
                  ? "bg-green-500 text-white hover:bg-green-600" 
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"}
              `}
            >
              {currentIndex + 1 === questions.length ? "Finish" : "Next"}
            </button>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-500 h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
