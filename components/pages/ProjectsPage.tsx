"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { title: "Portfolio v1", desc: "Mon premier portfolio en Next.js", category: "Web", image: "/images/image1.png" },
  { title: "E-commerce - Bazary", desc: "Boutique en ligne full-stack avec React, Fast API et MongoDB", category: "Web", image: "/images/image2.png" },
  { title: "Dashboard - FBB Manager", desc: "Tableau de bord analytique.", category: "Design", image: "/images/image3.png" },
  { title: "App Météo - Meteoko", desc: "Application mobile utilisant une API.", category: "Mobile", image: "/images/image4.png" },
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
                  activeCategory === cat ? "text-black" : "text-muted-foreground hover:text-foreground"
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
                className="group relative bg-card/50 border border-white/10 backdrop-blur-md rounded-[2rem] p-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay subtil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}