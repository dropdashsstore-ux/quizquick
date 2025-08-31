// components/QuizCard.tsx
import React from "react";

interface QuizCardProps {
  question: string;
  options: string[];
  onSelect: (option: string) => void;
  selectedOption?: string;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  options,
  onSelect,
  selectedOption,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">{question}</h2>
      <div className="grid gap-4">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`w-full text-left px-4 py-2 rounded-lg border transition-colors 
              ${
                selectedOption === option
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
