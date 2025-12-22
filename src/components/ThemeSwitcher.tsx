import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const baseThemes = [
  { name: "Dark", value: "dark", color: "bg-gray-800" },
  { name: "Light", value: "light", color: "bg-white border border-gray-300" },
  { name: "Love", value: "love", color: "bg-pink-500" },
];

const goonTheme = { name: "Goon", value: "goon", color: "bg-gray-500" };

export const ThemeSwitcher = () => {
  const { theme, setTheme: originalSetTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Goon theme is always locked on page load - requires reactivation each session
  const [goonUnlocked, setGoonUnlocked] = useState(false);
  const goonUnlockedRef = useRef(false); // Use ref for immediate access
  const clickCountRef = useRef(0);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const konamiCodeRef = useRef<string[]>([]);
  const konamiSequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];

  // Wrapped setTheme that protects goon theme
  const setTheme = (newTheme: string) => {
    // If trying to set goon but not unlocked, block it
    if (newTheme === "goon" && !goonUnlockedRef.current) {
      return;
    }
    // If setting goon, ensure refs are set
    if (newTheme === "goon") {
      goonUnlockedRef.current = true;
      setGoonUnlocked(true);
    }
    // Allow the theme change
    originalSetTheme(newTheme);
  };

  useEffect(() => {
    setMounted(true);
    // On mount, if theme is goon but not unlocked, reset it
    if (theme === "goon" && !goonUnlockedRef.current) {
      originalSetTheme("dark");
    }
  }, []);

  // Update themes list based on unlock status - only show goon if unlocked
  const themes = goonUnlocked ? [...baseThemes, goonTheme] : baseThemes;

  useEffect(() => {
    if (mounted && theme) {
      const root = document.documentElement;
      // Remove all theme classes
      root.classList.remove("light", "dark", "theme-love", "theme-goon");
      
      // Add the current theme class
      if (theme === "light") {
        root.classList.add("light");
      } else if (theme === "dark") {
        root.classList.add("dark");
      } else if (theme === "love") {
        root.classList.add("dark", "theme-love");
      } else if (theme === "goon") {
        root.classList.add("theme-goon");
      }
    }
  }, [theme, mounted]);

  // Unlock goon theme (only for current session, not persisted)
  const unlockGoon = () => {
    // Set ref FIRST (synchronous)
    goonUnlockedRef.current = true;
    setGoonUnlocked(true);
    // Now set theme - wrapped setTheme will see ref is true and allow it
    originalSetTheme("goon");
  };

  // Secret activation: Click the palette button 7 times quickly
  const handleButtonClick = () => {
    clickCountRef.current += 1;
    
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    if (clickCountRef.current >= 7) {
      unlockGoon();
      clickCountRef.current = 0;
    } else {
      clickTimeoutRef.current = setTimeout(() => {
        clickCountRef.current = 0;
      }, 2000);
    }
  };

  // Secret activation: Konami code
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      konamiCodeRef.current.push(e.code);
      
      if (konamiCodeRef.current.length > konamiSequence.length) {
        konamiCodeRef.current.shift();
      }

      if (konamiCodeRef.current.length === konamiSequence.length) {
        const matches = konamiCodeRef.current.every(
          (key, index) => key === konamiSequence[index]
        );
        
        if (matches) {
          unlockGoon();
          konamiCodeRef.current = [];
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative">
          <div className="relative rounded-lg border-[0.75px] border-border p-1">
            <GlowingEffect
              spread={30}
              glow={true}
              disabled={false}
              proximity={80}
              inactiveZone={0.2}
              borderWidth={3}
            />
            <Button
              variant="outline"
              size="icon"
              className="relative z-10 rounded-lg border-[0.75px] border-border bg-background"
              onClick={handleButtonClick}
            >
              <Palette className="h-4 w-4" />
              <span className="sr-only">Change theme</span>
            </Button>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-2 [&_*]:!font-sans" align="end" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground px-2 pb-1">
            Colour themes are based on my projects!
          </p>
          <div className="space-y-1">
          {themes.map((themeOption) => (
            <button
              key={themeOption.value}
              onClick={() => {
                // Prevent selecting goon if not unlocked
                if (themeOption.value === "goon" && !goonUnlockedRef.current) {
                  return;
                }
                // Use wrapped setTheme which handles all the protection logic
                setTheme(themeOption.value);
              }}
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-sm text-sm hover:bg-accent hover:text-accent-foreground transition-colors ${
                theme === themeOption.value ? "bg-accent" : ""
              }`}
            >
              <div className={`w-4 h-4 rounded-full ${themeOption.color}`} />
              <span 
                className={themeOption.value === "goon" ? "goon-theme-text" : ""} 
                style={themeOption.value === "goon" ? { fontFamily: '"Comic Sans MS", "Comic Sans", cursive' } : undefined}
              >
                {themeOption.name}
              </span>
              {theme === themeOption.value && (
                <span className="ml-auto">✓</span>
              )}
            </button>
          ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

