"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import Aurora from "./Aurora";

function getTailwindHexColor(twClass: string): string | null {
  if (typeof window === "undefined") return null;

  const temp = document.createElement("div");
  // Ensure the element is completely unstyled and invisible outside of the requested text color
  temp.className = `${twClass} !bg-transparent !border-none !hidden`; 
  temp.style.display = "none";
  document.body.appendChild(temp);

  const comp = getComputedStyle(temp);
  const color = comp.color;
  
  document.body.removeChild(temp);

  const match = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (match) {
    const r = parseInt(match[1]).toString(16).padStart(2, "0");
    const g = parseInt(match[2]).toString(16).padStart(2, "0");
    const b = parseInt(match[3]).toString(16).padStart(2, "0");
    // Ensure 6-character hex so ogl's Color parser doesn't break
    return `#${r}${g}${b}`;
  }
  return null;
}

export default function ThemedAurora() {
  const { theme } = useTheme();
  const [colors, setColors] = useState<string[]>(["#3A29FF", "#7cff67", "#00d4ff"]);

  useEffect(() => {
    // Small delay to ensure DaisyUI theme classes have reapplied to the DOM before computing
    const timer = setTimeout(() => {
      const primary = getTailwindHexColor("text-primary");
      const secondary = getTailwindHexColor("text-secondary");
      const accent = getTailwindHexColor("text-accent");

      if (primary && secondary && accent) {
        setColors([primary, accent, secondary]);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <Aurora
      colorStops={colors}
      amplitude={1.0}
      blend={0.5}
      speed={0.4}
    />
  );
}
