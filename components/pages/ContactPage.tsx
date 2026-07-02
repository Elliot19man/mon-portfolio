import { Button } from "@/components/ui/button";
// Importation des logos officiels
import { SiWhatsapp, SiFacebook, SiGmail } from "react-icons/si";

const socialLinks = [
  { name: "Email", value: "elliotmanoa@gmail.com", icon: SiGmail, href: "mailto:elliotmanoa@gmail.com", color: "hover:text-red-500" },
  { name: "WhatsApp", value: "+261 33 34 209 71", icon: SiWhatsapp, href: "https://wa.me/261333420971", color: "hover:text-green-500" },
  { name: "Facebook", value: "Manoa Elliot", icon: SiFacebook, href: "https://facebook.com/votre-profil", color: "hover:text-blue-500" },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-6">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2 items-center">
        
        <div className="space-y-6">
          <h1 className="text-5xl font-bold font-heading leading-tight">
            N'hesitez pas à me contacter
          </h1>
          <p className="text-xl text-muted-foreground font-content">
            Vous avez un projet en tête ? Contactez-moi directement via mes réseaux sociaux ou par email.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group"
            >
              {/* Le logo officiel change de couleur au survol */}
              <div className={`transition-colors duration-300 ${link.color}`}>
                <link.icon size={32} />
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
  );
}