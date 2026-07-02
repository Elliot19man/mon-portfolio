"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const projects = [
  { title: "Portfolio v1", desc: "Mon premier portfolio en React.", image: "/images/image1.png" },
  { title: "E-commerce", desc: "Boutique en ligne full-stack.", image: "/images/image2.png" },
  { title: "Dashboard", desc: "Tableau de bord analytique.", image: "/images/image3.png" },
  { title: "App Météo", desc: "Application utilisant une API.", image: "/images/image4.png" },
];

export default function ProjectsPage() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  React.useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-6">
      {/* Grille divisée en deux : Texte à gauche, Carrousel à droite */}
      <div className="grid w-full max-w-6xl grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Partie Gauche : Détails du projet */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold font-heading leading-tight">
            {projects[current].title}
          </h2>
          <p className="text-xl text-muted-foreground font-content">
            {projects[current].desc}
          </p>
          <Button size="lg" className="w-full sm:w-64 h-12 text-lg font-semibold">
            Voir le projet
          </Button>
        </div>

        {/* Partie Droite : Carrousel (Format panoramique plus compact) */}
        <div className="w-full">
          <Carousel 
            setApi={setApi} 
            className="w-full"
            plugins={[plugin.current]}
            opts={{ loop: true }}
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden border-0 shadow-none">
                    {/* Ratio [21/9] avec une taille plus contenue */}
                    <CardContent className="relative flex aspect-[21/9] items-center justify-center p-0 bg-muted">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        priority={index === 0}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Navigation ajustée */}
            <CarouselPrevious className="left-[-20px]" />
            <CarouselNext className="right-[-20px]" />
          </Carousel>
        </div>

      </div>
    </div>
  );
}