"use client";
import { useState } from "react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <h2 className="text-4xl font-bold mb-8">À propos de moi</h2>
      
      <div className="space-y-12">
        <section>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Développeur Full-Stack passionné avec <span className="text-foreground font-semibold">plus de 3 ans d'expérience</span>. 
            Je conçois des solutions numériques performantes, modernes et centrées sur l'utilisateur.
          </p>
        </section>

        {/* Section Expertises verticale */}
        <div className="bg-muted/30 p-8 rounded-3xl border border-border/50">
          <div className="flex items-center gap-4 text-2xl font-bold mb-8">
            <button 
              onClick={() => setActiveTab("web")}
              className={`transition-all duration-300 underline-offset-[12px] decoration-2 ${
                activeTab === "web" ? "underline text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Développement Web
            </button>
            <span className="text-border text-2xl font-light">|</span>
            <button 
              onClick={() => setActiveTab("mobile")}
              className={`transition-all duration-300 underline-offset-[12px] decoration-2 ${
                activeTab === "mobile" ? "underline text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Développement Mobile
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {activeTab === "web" ? (
              <>
                <div className="border-b border-border/50 pb-4">
                  <h4 className="font-semibold text-primary mb-1">Backend</h4>
                  <p className="text-muted-foreground text-sm">Python, Node.js, Express</p>
                </div>
                <div className="border-b border-border/50 pb-4">
                  <h4 className="font-semibold text-primary mb-1">Frontend</h4>
                  <p className="text-muted-foreground text-sm">Tailwind CSS, React.js, Next.js, Shadcn</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Bases de données</h4>
                  <p className="text-muted-foreground text-sm">MongoDB, PostgreSQL</p>
                </div>
              </>
            ) : (
              <>
                <div className="border-b border-border/50 pb-4">
                  <h4 className="font-semibold text-primary mb-1">Frameworks</h4>
                  <p className="text-muted-foreground text-sm">Flutter, React Native</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Services & BDD</h4>
                  <p className="text-muted-foreground text-sm">Supabase, Cloudflare, SQLite3</p>
                </div>
              </>
            )}
          </div>
        </div>

        <section className="border-t border-border pt-8">
          <h3 className="text-xl font-semibold mb-4">Pourquoi travailler avec moi ?</h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Rigoureux et technophile, je m'implique totalement dans vos projets. Mon objectif est de transformer vos besoins en outils numériques robustes, tout en garantissant une collaboration transparente et efficace.
          </p>
        </section>
      </div>
    </div>
  );
}