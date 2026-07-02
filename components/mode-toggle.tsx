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
      className="p-2 rounded-full bg-gray-100 dark:bg-black shadow hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors"
      aria-label="Changer le thème"
    >
      {theme === "light" ? (
        <Moon02Icon size={20} className="text-black" />
      ) : (
        <Sun01Icon size={20} className="text-white" />
      )}
    </button>
  );
}