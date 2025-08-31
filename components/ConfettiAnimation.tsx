// components/ConfettiAnimation.tsx
import { useEffect } from "react";
import runConfetti from "../animations/confetti.js";

const ConfettiAnimation = () => {
  useEffect(() => {
    runConfetti(); // call the animation function once on mount
  }, []);

  return <div id="confetti-container"></div>; // container for animation
};

export default ConfettiAnimation;
