"use client";
import { useState } from "react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("web");

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

        {/* Section Expertises responsive */}
        <div className="bg-muted/30 p-6 md:p-8 rounded-3xl border border-border/50">
          {/* Menu : Passage en flex-wrap sur très petit écran si besoin */}
          <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xl md:text-2xl font-bold mb-8">
            <button 
              onClick={() => setActiveTab("web")}
              className={`transition-all duration-300 underline-offset-[12px] decoration-2 ${
                activeTab === "web" ? "underline text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Web
            </button>
            <span className="text-border text-2xl font-light">|</span>
            <button 
              onClick={() => setActiveTab("mobile")}
              className={`transition-all duration-300 underline-offset-[12px] decoration-2 ${
                activeTab === "mobile" ? "underline text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Mobile
            </button>
          </div>

          {/* Liste des outils : Ajustement des marges */}
          <div className="flex flex-col gap-6">
            {activeTab === "web" ? (
              <div className="space-y-6">
                <div className="border-b border-border/50 pb-4">
                  <h4 className="font-semibold text-primary mb-1">Backend</h4>
                  <p className="text-muted-foreground text-sm md:text-base">Python, Node.js, Express</p>
                </div>
                <div className="border-b border-border/50 pb-4">
                  <h4 className="font-semibold text-primary mb-1">Frontend</h4>
                  <p className="text-muted-foreground text-sm md:text-base">Tailwind CSS, React.js, Next.js, Shadcn</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Bases de données</h4>
                  <p className="text-muted-foreground text-sm md:text-base">MongoDB, PostgreSQL</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="border-b border-border/50 pb-4">
                  <h4 className="font-semibold text-primary mb-1">Frameworks</h4>
                  <p className="text-muted-foreground text-sm md:text-base">Flutter, React Native</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Services & BDD</h4>
                  <p className="text-muted-foreground text-sm md:text-base">Supabase, Cloudflare, SQLite3</p>
                </div>
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