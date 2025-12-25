import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const WebRing = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const websiteUrl = "https://ethanyang.dev";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine if we should use dark mode
  // Love and goon themes should also use dark mode widget
  const isDark = theme === "dark" || theme === "love" || theme === "goon";
  const isLight = theme === "light";

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div
      className="inline-flex items-center gap-4"
      style={{
        padding: "12px 20px",
      }}
    >
      <a
        href={`https://WebRing.skule.ca/#${websiteUrl}?nav=prev`}
        className={`text-xl transition-opacity duration-200 hover:opacity-60 ${isLight ? "text-black" : "text-white"}`}
        style={{ textDecoration: "none" }}
      >
        ←
      </a>
      <a
        href={`https://WebRing.skule.ca/#${websiteUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity duration-200 hover:opacity-60"
      >
        <img
          src={`https://WebRing.skule.ca/img/icon${isDark ? "-dark" : ""}.svg`}
          alt="SKULE WebRing"
          style={{ width: "32px", height: "32px" }}
          draggable={false}
        />
      </a>
      <a
        href={`https://WebRing.skule.ca/#${websiteUrl}?nav=next`}
        className={`text-xl transition-opacity duration-200 hover:opacity-60 ${isLight ? "text-black" : "text-white"}`}
        style={{ textDecoration: "none" }}
      >
        →
      </a>
    </div>
  );
};

