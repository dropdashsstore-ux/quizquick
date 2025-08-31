// components/Badge.tsx
import React from "react";

interface BadgeProps {
  label: string;
  type?: "success" | "warning" | "info"; // optional types for styling
}

const Badge: React.FC<BadgeProps> = ({ label, type = "info" }) => {
  let bgColor = "bg-blue-500";
  if (type === "success") bgColor = "bg-green-500";
  else if (type === "warning") bgColor = "bg-yellow-500";

  return (
    <span
      className={`${bgColor} text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md cursor-default transform transition-all duration-200 hover:scale-105`}
    >
      {label}
    </span>
  );
};

export default Badge;
