"use client";

import { SiWhatsapp, SiFacebook, SiGmail } from "react-icons/si";

const socialLinks = [
  { 
    name: "Email", 
    value: "elliotmanoa@gmail.com", 
    icon: SiGmail, 
    href: "mailto:elliotmanoa@gmail.com", 
    color: "text-red-500" 
  },
  { 
    name: "WhatsApp", 
    value: "+261 33 34 209 71", 
    icon: SiWhatsapp, 
    href: "https://wa.me/261333420971", 
    color: "text-green-500" 
  },
  { 
    name: "Facebook", 
    value: "Manoa Elliot", 
    icon: SiFacebook, 
    href: "https://facebook.com/votre-profil", 
    color: "text-blue-500" 
  },
];

export default function ContactPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-160px)] px-6 py-12">
      <div className="grid w-full max-w-6xl grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* --- PARTIE 1 : Illustration (Affiche en haut sur mobile, à droite sur desktop) --- */}
        <div className="flex justify-center items-center lg:order-2">
          <div className="relative w-full max-w-[280px] md:max-w-md aspect-square">
            <img 
              src="/team-work-animate.svg" 
              alt="Illustration contact" 
              className="object-contain w-full h-full drop-shadow-lg"
            />
          </div>
        </div>

        {/* --- PARTIE 2 : Texte & Contact (Affiche en bas sur mobile, à gauche sur desktop) --- */}
        <div className="space-y-10 lg:order-1">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Travaillons <span className="text-primary">ensemble</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              J'aide les entreprises et les particuliers à donner vie à leurs idées numériques. Discutons de votre projet.
            </p>
          </div>

          {/* Liste de contact */}
          <div className="grid gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-4 rounded-2xl border border-border/50 hover:bg-muted/50 hover:border-primary/20 transition-all group"
              >
                <div className={`${link.color} p-2 bg-background rounded-lg border border-border group-hover:scale-110 transition-transform`}>
                  <link.icon size={24} />
                </div>
                <div>
                  <p className="font-semibold">{link.name}</p>
                  <p className="text-sm text-muted-foreground">{link.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}