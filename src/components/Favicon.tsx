import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Favicon = () => {
  const location = useLocation();

  useEffect(() => {
    // Remove any existing favicon links
    const existingLinks = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]');
    existingLinks.forEach(link => link.remove());

    // Create and add the favicon link
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = "/favicon.png";
    document.head.appendChild(link);

    // Also add shortcut icon for better browser compatibility
    const shortcutLink = document.createElement("link");
    shortcutLink.rel = "shortcut icon";
    shortcutLink.type = "image/png";
    shortcutLink.href = "/favicon.png";
    document.head.appendChild(shortcutLink);

    // Add apple-touch-icon for iOS devices
    const appleLink = document.createElement("link");
    appleLink.rel = "apple-touch-icon";
    appleLink.href = "/favicon.png";
    document.head.appendChild(appleLink);
  }, [location.pathname]);

  return null;
};

