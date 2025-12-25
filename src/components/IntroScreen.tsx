import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface IntroScreenProps {
  onComplete: () => void;
}

export const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Show the intro for 2.5 seconds, then start fading
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    // Complete the intro after fade animation (0.5s fade + 2.5s display = 3s total)
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div
        className={cn(
          "flex items-center justify-center w-full h-full transition-opacity duration-500",
          isFading ? "opacity-0" : "opacity-100"
        )}
      >
        <img
          src="/intro-text.png"
          alt="Ethan Gansou"
          className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain"
        />
      </div>
    </div>
  );
};

