import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface IntroScreenProps {
  onComplete: () => void;
}

export const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const { theme, resolvedTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  // Check if theme is light mode
  useEffect(() => {
    const checkLightMode = () => {
      const htmlElement = document.documentElement;
      const hasLightClass = htmlElement.classList.contains("light");
      // Also check resolvedTheme as fallback
      const isLight = hasLightClass || resolvedTheme === "light";
      setIsLightMode(isLight);
    };

    // Check immediately on mount
    checkLightMode();
    
    // Use MutationObserver to watch for class changes on html element
    const observer = new MutationObserver(checkLightMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, [theme, resolvedTheme]);

  useEffect(() => {
    // Show the intro for 1.5 seconds, then start fading
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1500);

    // Complete the intro after fade animation (0.3s fade + 1.5s display = 1.8s total)
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 1800);

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
          "flex flex-col items-center justify-center w-full h-full transition-opacity duration-300",
          isFading ? "opacity-0" : "opacity-100"
        )}
      >
        <div className="flex flex-col items-center">
          <img
            src="/intro-text.png"
            alt="Ethan Gansou"
            className={cn(
              "max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain",
              isLightMode && "invert"
            )}
          />
          <p className="text-sm text-muted-foreground/70 -mt-24">
            setting things up... desktop recommended!
          </p>
        </div>
      </div>
    </div>
  );
};

