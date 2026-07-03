"use client";

import { SiWhatsapp, SiFacebook, SiGmail } from "react-icons/si";

const socialLinks = [
  { name: "Email", value: "elliotmanoa@gmail.com", icon: SiGmail, href: "mailto:elliotmanoa@gmail.com", color: "text-red-500" },
  { name: "WhatsApp", value: "+261 33 34 209 71", icon: SiWhatsapp, href: "https://wa.me/261333420971", color: "text-green-500" },
  { name: "Facebook", value: "Manoa Elliot", icon: SiFacebook, href: "https://facebook.com/votre-profil", color: "text-blue-500" },
];

export default function ContactPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-160px)] px-6 py-12">
      <div className="grid w-full max-w-6xl grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- PARTIE GAUCHE : Texte & Contact --- */}
        <div className="space-y-10">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Travaillons <span className="text-primary">ensemble</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
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
                className="flex items-center gap-5 p-4 rounded-2xl border border-border/50 hover:bg-muted/50 transition-all group"
              >
                <div className={`${link.color} p-2 bg-background rounded-lg border border-border`}>
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

        {/* --- PARTIE DROITE : Illustration --- */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-square">
            {/* Ici tu peux mettre ton illustration SVG */}
            <img 
              src="/team-work-animate.svg" 
              alt="Illustration contact" 
              className="object-contain w-full h-full drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
}