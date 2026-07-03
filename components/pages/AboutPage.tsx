"use client";
import { useState } from "react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("web");

  const tabs = [
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "design", label: "Design" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">À propos de moi</h2>
      
      <div className="space-y-12">
        <section>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
            Développeur Full-Stack passionné avec <span className="text-foreground font-semibold">plus de 3 ans d'expérience</span>. 
            Je conçois des solutions numériques performantes, modernes et centrées sur l'utilisateur.
          </p>
        </section>

        {/* Section Expertises avec menu centré */}
        <div className="bg-muted/30 p-6 md:p-8 rounded-3xl border border-border/50">
          
          {/* Menu centré et responsive */}
          <div className="flex justify-center flex-wrap items-center gap-6 md:gap-10 text-lg md:text-2xl font-bold mb-10">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`transition-all duration-300 underline-offset-[12px] decoration-2 ${
                  activeTab === tab.id 
                    ? "underline text-primary scale-105" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Contenu dynamique */}
          <div className="flex flex-col gap-6">
            {activeTab === "web" && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <InfoRow title="Backend" desc="Python, Node.js, Express" />
                <InfoRow title="Frontend" desc="Tailwind CSS, React.js, Next.js, Shadcn" />
                <InfoRow title="Bases de données" desc="MongoDB, PostgreSQL" isLast />
              </div>
            )}
            
            {activeTab === "mobile" && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <InfoRow title="Frameworks" desc="Flutter, React Native" />
                <InfoRow title="Services & BDD" desc="Supabase, Cloudflare, SQLite3" isLast />
              </div>
            )}

            {activeTab === "design" && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <InfoRow title="Outils de création" desc="Adobe Illustrator, Figma, Canva" isLast />
                <p className="text-sm text-muted-foreground italic">
                  Je réalise également le prototypage UI/UX avant le développement pour garantir une expérience utilisateur fluide.
                </p>
              </div>
            )}
          </div>
        </div>

        <section className="border-t border-border pt-8">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Pourquoi travailler avec moi ?</h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            Rigoureux et technophile, je m'implique totalement dans vos projets. Mon objectif est de transformer vos besoins en outils numériques robustes, tout en garantissant une collaboration transparente et efficace.
          </p>
        </section>
      </div>
    </div>
  );
}

// Petit composant helper pour garder le code propre
function InfoRow({ title, desc, isLast }: { title: string, desc: string, isLast?: boolean }) {
  return (
    <div className={`pb-4 ${!isLast ? "border-b border-border/50" : ""}`}>
      <h4 className="font-semibold text-primary mb-1">{title}</h4>
      <p className="text-muted-foreground text-sm md:text-base">{desc}</p>
    </div>
  );
}