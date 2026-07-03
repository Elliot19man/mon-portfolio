"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown03Icon } from "hugeicons-react"; // Import de l'icône pour le CV

export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-4 md:p-8 lg:p-12 font-sans">
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-6xl gap-12 lg:gap-20 items-center">
        
        {/* --- COLONNE DE GAUCHE --- */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 text-xs md:text-sm font-medium border border-border rounded-full bg-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Disponible pour vos projets
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
          >
            Développeur <br />
            <span className="text-primary">Full-Stack</span> <br />
            Web & Mobile
          </motion.h1>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Je conçois et développe des solutions numériques robustes et intuitives pour donner vie à vos ambitions.
          </p>

          {/* --- Par [Nom] --- */}
          <div className="text-sm md:text-lg text-muted-foreground">
            Par{" "} 
            <Link 
              href="/about" 
              className="font-semibold text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              RAMIARANARIVO Manoa Elliot
            </Link>
          </div>

          {/* --- BOUTON CV AVEC ICÔNE --- */}
          <div className="flex gap-4">
            <a 
              href="/cv.pdf" 
              download
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              <ArrowDown03Icon size={20} />
              Télécharger mon CV
            </a>
          </div>
        </div>

        {/* --- COLONNE DE DROITE (Photo en forme de Blob) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-72 h-72 md:w-[400px] md:h-[400px] shrink-0"
        >
          {/* Forme arrière décorative */}
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-pulse"></div>
          
          <div className="relative w-full h-full rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] overflow-hidden  shadow-2xl">
             <Image 
               src="/manoa.jpg" 
               alt="RAMIARANARIVO Manoa Elliot" 
               fill 
               className="object-cover scale-110" 
               priority
             />
          </div>
        </motion.div>

      </div>
    </div>
  );
}