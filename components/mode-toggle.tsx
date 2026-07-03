"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun01Icon, Moon02Icon } from "hugeicons-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Évite l'erreur d'hydratation
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full   hover:bg-transparent dark:hover:bg-transparent  transition-colors"
      aria-label="Changer le thème"
    >
      {theme === "light" ? (
        <Moon02Icon size={20} className="text-black hover:text-blue-300" />
      ) : (
        <Sun01Icon size={20} className="text-white hover:text-yellow-300" />
      )}
    </button>
  );
}