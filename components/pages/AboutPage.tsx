"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeCircleIcon, GlobalIcon, AndroidIcon, ColorsIcon } from "hugeicons-react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("web");

  const stats = [
    { label: "Années d'expérience", value: "3+" },
    { label: "Projets réalisés", value: "15+" },
    { label: "Clients satisfaits", value: "10+" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
      {/* HEADER SECTION */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">À propos de moi</h2>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Développeur Full-Stack passionné. Je transforme des idées complexes en expériences numériques élégantes, performantes et accessibles.
        </p>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 rounded-3xl bg-primary/5 border border-primary/10 text-center">
            <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* SKILLS SECTION */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold">Expertises techniques</h3>
        
        <div className="flex p-1 bg-muted/50 rounded-2xl w-full md:w-fit gap-1">
          {["web", "mobile", "design"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 md:px-8 py-3 rounded-xl font-medium capitalize transition-all ${
                activeTab === tab ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-background border border-border p-8 rounded-3xl shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {activeTab === "web" && (
                <>
                  <SkillCard icon={GlobalIcon} title="Frontend" techs="React, Next.js, Tailwind, Shadcn" />
                  <SkillCard icon={CodeCircleIcon} title="Backend" techs="Node.js, Express, Python" />
                </>
              )}
              {activeTab === "mobile" && (
                <>
                  <SkillCard icon={AndroidIcon} title="Frameworks" techs="Flutter, React Native" />
                  <SkillCard icon={AndroidIcon} title="Cloud & BDD" techs="Supabase, SQLite, Firebase" />
                </>
              )}
              {activeTab === "design" && (
                <SkillCard icon={ColorsIcon} title="UI/UX Design" techs="Figma, Illustrator, Prototypage" />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ icon: Icon, title, techs }: { icon: any, title: string, techs: string }) {
  return (
    <div className="flex gap-4 p-4 border rounded-2xl">
      <div className="p-3 bg-primary/10 rounded-xl h-fit">
        <Icon size={24} className="text-primary" />
      </div>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-muted-foreground">{techs}</p>
      </div>
    </div>
  );
}