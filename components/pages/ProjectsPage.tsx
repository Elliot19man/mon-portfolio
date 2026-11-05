"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { title: "Portfolio v1", desc: "Mon premier portfolio en Next.js", category: "Web", image: "/images/image1.png" },
  { title: "E-commerce - Bazary", desc: "Boutique en ligne full-stack avec React, Fast API et MongoDB", category: "Web", image: "/images/image2.png" },
  { title: "Dashboard - FBB Manager", desc: "Tableau de bord analytique.", category: "Design", image: "/images/image3.png" },
  { title: "ISRAS", desc: "Application mobile pour la gestion des activités fiscale entre contribuables et fournisseurs", category: "Mobile", image: "/images/DGI.png", screenshots: ["/images/login_isras.png", "/images/dashboard_isras.png", "/images/Demarche_isras.png"] },
  
];

const categories = ["Tous", "Web", "Mobile", "Design"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6"
          >
            Mes Réalisations
          </motion.h2>

          {/* Modern Underline Menu */}
          <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  activeCategory === cat ? "text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="pill"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Grid Section */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative bg-card/50 border border-white/10 backdrop-blur-md rounded-[2rem] p-4 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between"
              >
                
                {/* --- 1. DESIGN MOBILE (Style Play Store) --- */}
                {project.category === "Mobile" ? (
                  <div className="flex flex-col h-full">
                    {/* En-tête style Play Store : Icône à gauche, Nom + Tag à droite */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-md">
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold tracking-tight truncate">{project.title}</h3>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full shrink-0">
                            {project.category}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-xs line-clamp-2 mt-1">
                          {project.desc}
                        </p>
                      </div>
                    </div>

                    {/* En dessous : Différentes pages / Captures d'écran */}
                    {project.screenshots && (
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Aperçus de l'app</p>
                        <div className="grid grid-cols-3 gap-2">
                          {project.screenshots.map((shot, sIdx) => (
                            <div key={sIdx} className="relative aspect-[9/16] rounded-xl overflow-hidden border border-white/10 bg-black/20">
                              <Image 
                                src={shot} 
                                alt={`Capture ${sIdx + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <button className="w-full py-3 rounded-2xl bg-white text-black font-bold text-sm hover:bg-primary hover:text-white transition-all transform active:scale-95 mt-auto">
                      Voir le projet
                    </button>
                  </div>

                ) : /* --- 2. DESIGN & ILLUSTRATION (En colonne : Logo à gauche, Description à droite) --- */
                project.category === "Design" ? (
                  <div className="flex flex-col h-full justify-between">
                    <div className="flex gap-4 items-center mb-6">
                      {/* Logo / Illustration à gauche */}
                      <div className="relative w-32 h-32 shrink-0 overflow-hidden rounded-2xl border border-white/10">
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {/* Description à droite */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full shrink-0">
                            {project.category}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                          {project.desc}
                        </p>
                      </div>
                    </div>

                    <button className="w-full py-3 rounded-2xl bg-white text-black font-bold text-sm hover:bg-primary hover:text-white transition-all transform active:scale-95">
                      Voir le projet
                    </button>
                  </div>

                ) : (
                  
                  /* --- 3. WEB (Votre design original intact) --- */
                  <>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                        {project.desc}
                      </p>
                      
                      <button className="w-full py-4 rounded-2xl bg-white text-black font-bold text-sm hover:bg-primary hover:text-white transition-all transform active:scale-95">
                        Voir le projet
                      </button>
                    </div>
                  </>
                )}

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}