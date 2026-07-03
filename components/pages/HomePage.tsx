import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-4 md:p-8 lg:p-12">
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-6xl gap-8 lg:gap-16 items-center">
        
        {/* --- COLONNE DE GAUCHE --- */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs md:text-sm font-medium border border-border rounded-full bg-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Disponible pour vos projets
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            Développeur <br />
            <span className="text-primary">Full-Stack</span> <br />
            Web & Mobile
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Je conçois et développe des solutions numériques robustes et intuitives pour donner vie à vos ambitions.
          </p>

          {/* --- BOUTON CV AJOUTÉ ICI --- */}
          <div className="flex gap-4">
            <a 
              href="/cv.pdf" 
              download="CV_RAMIARANARIVO_Manoa_Elliot.pdf"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Télécharger mon CV
            </a>
          </div>

          <div className="pt-2">
            <p className="text-sm md:text-lg text-muted-foreground">
              Par{" "} 
              <Link 
                href="/about" 
                className="font-semibold text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                RAMIARANARIVO Manoa Elliot
              </Link>
            </p>
          </div>
        </div>

        {/* --- COLONNE DE DROITE --- */}
        <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] lg:w-full lg:max-w-md lg:aspect-[4/5] rounded-3xl overflow-hidden bg-muted shadow-2xl shrink-0">
           <Image 
             src="/manoa.jpg" 
             alt="RAMIARANARIVO Manoa Elliot" 
             fill 
             className="object-cover" 
             priority
             sizes="(max-width: 768px) 256px, 400px"
           />
        </div>

      </div>
    </div>
  );
}