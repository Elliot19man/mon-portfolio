"use client";

import Image from "next/image";

// Ton tableau de projets
const projects = [
  { title: "Portfolio v1", desc: "Mon premier portfolio en Next.js", image: "/images/image1.png" },
  { title: "E-commerce - Bazary", desc: "Boutique en ligne full-stack avec React.js, Fast API et Mongodb", image: "/images/image2.png" },
  { title: "Dashboard - FBB Manager", desc: "Tableau de bord analytique.", image: "/images/image3.png" },
  { title: "App Météo - Meteoko", desc: "Application utilisant une API.", image: "/images/image4.png" },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-[calc(100vh-90px)] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Titre de section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Mes Projets</h2>
          <p className="text-lg text-muted-foreground">
            Découvrez une sélection de mes réalisations les plus marquantes.
          </p>
        </div>
        
        {/* Grille Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-muted/30 border border-border/50 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Image avec ratio 16/9 */}
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Contenu */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">
                  {project.desc}
                </p>
                <button className="w-full py-3 rounded-xl bg-background border border-border font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                  Voir le projet
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}