import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Playfair_Display,Raleway } from "next/font/google"; // Exemple avec Montserrat et Playfair
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"; // Votre nouveau provider

// Configuration des polices
const bodyFont = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const headingFont = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const contentFont = Raleway({ subsets: ["latin"], variable: "--font-raleway" });


export const metadata: Metadata = {
  title: "Manoa Elliot | Portfolio",
  description: "Portfolio de Manoa Elliot",
  icons: {
    icon: "/logo/manoa-icon.svg", // ou "/mon-logo.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={cn(
  "min-h-screen bg-background text-foreground antialiased",
  bodyFont.variable,
  headingFont.variable,
  contentFont.variable
)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}