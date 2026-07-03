"use client";

import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home01Icon,
  User03Icon,
  Folder03Icon,
  Mail01Icon,
} from "hugeicons-react";

import HomePage from "../components/pages/HomePage";
import AboutPage from "../components/pages/AboutPage";
import ProjectsPage from "../components/pages/ProjectsPage";
import ContactPage from "../components/pages/ContactPage";

export default function Layout() {
  const [active, setActive] = useState("Accueil");

  const items = [
    { title: "Accueil", icon: Home01Icon, component: <HomePage /> },
    { title: "À propos", icon: User03Icon, component: <AboutPage /> },
    { title: "Projets", icon: Folder03Icon, component: <ProjectsPage /> },
    { title: "Contact", icon: Mail01Icon, component: <ContactPage /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      
      {/* --- NAVBAR MOBILE (Logo + Theme) --- */}
      <nav className="md:hidden fixed top-0 left-0 w-full h-14 border-b border-border bg-background/95 backdrop-blur z-50 flex items-center justify-between px-4">
        <img src="/logo/manoa.svg" alt="Logo" className="h-6 w-auto dark:invert" />
        <ModeToggle />
      </nav>

      {/* --- NAVBAR DESKTOP (Fixée en haut) --- */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full border-b border-border bg-background/95 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-14 px-6 w-full">
          <img src="/logo/manoa.svg" alt="Logo" className="h-6 w-auto dark:invert" />
          
          <div className="flex gap-1 h-full">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.title;
              return (
                <button
                  key={item.title}
                  onClick={() => setActive(item.title)}
                  className={`relative flex items-center gap-2 px-4 transition-colors duration-300 ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon size={20} strokeWidth={isActive ? 2 : 1.5} />
                  <span className="font-medium text-sm">{item.title}</span>
                  {isActive && (
                    <motion.span 
                      layoutId="underline" 
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-foreground" 
                    />
                  )}
                </button>
              );
            })}
          </div>
          
          <ModeToggle />
        </div>
      </nav>

      {/* --- DOCK MOBILE (Fixé en bas) --- */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full border-t border-border bg-background/95 backdrop-blur z-[100] pb-[env(safe-area-inset-bottom)]">
        <div className="flex justify-around items-center h-16">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.title;
            return (
              <button
                key={item.title}
                onClick={() => setActive(item.title)}
                className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-all duration-300 ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon size={22} strokeWidth={isActive ? 2.5 : 1.5} />
                <span className="text-[10px] font-semibold tracking-wide">{item.title}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* --- CONTENU PRINCIPAL --- */}
      {/* pt-14 (mobile) et pt-24 (desktop) pour ne pas passer sous les navbars fixes */}
      <main className="flex-1 w-full max-w-6xl mx-auto p-4 md:p-8 pt-20 md:pt-28 pb-24 md:pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {items.find((i) => i.title === active)?.component}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}