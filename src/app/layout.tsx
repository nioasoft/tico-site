import type { Metadata } from "next";
import { Assistant, Montserrat } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { MobileNav } from "./components/MobileNav";

// Hebrew primary font for RTL content
const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

// English accent font for the tagline
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TICO | ייעוץ אסטרטגי ופיננסי",
  description:
    "TICO – משרד ייעוץ אסטרטגי-פיננסי. פתרון בעיות מורכבות, גישור עסקי ו-Win-Win.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${assistant.variable} ${montserrat.variable} antialiased bg-background text-foreground text-right`}
      >
        <header className="border-b border-foreground/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] md:shadow-none">
          <div className="container">
            <div className="mx-auto max-w-4xl flex items-center justify-between h-20">
              <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent" aria-hidden></div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-xl font-extrabold tracking-tight text-foreground">TICO</span>
                <span className="tagline-en text-[10px] uppercase text-foreground/70">DARE TO THINK. COMMIT TO DELIVER</span>
              </div>
              </div>
              <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
                <Link href="/" className="hover:text-foreground transition font-semibold">בית</Link>
                <Link href="/about" className="hover:text-foreground transition font-semibold">הראש של תיקו</Link>
                <Link href="/services" className="hover:text-foreground transition font-semibold">הכלים שלנו</Link>
                <Link href="/contact" className="hover:text-foreground transition font-semibold">צור קשר</Link>
              </nav>
              <MobileNav />
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-foreground/10">
          <div className="container py-10">
            <div className="mx-auto max-w-4xl rounded-2xl border border-foreground/10 bg-white p-8 sm:p-10 text-sm text-foreground/80">
              <div className="grid items-start gap-8 text-center md:text-right md:grid-cols-3">
                <div className="space-y-2">
                  <div className="font-display text-foreground font-extrabold text-lg">TICO</div>
                  <div className="tagline-en text-[10px] uppercase text-foreground/60">DARE TO THINK. COMMIT TO DELIVER</div>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">פרטי התקשרות</div>
                  <div>שדרות רוטשילד 3, מגדל אלרוב קומה ראשונה, תל אביב</div>
                  <div>טלפון: 03-5666170</div>
                  <div>דוא&quot;ל: <a className="underline hover:text-foreground" href="mailto:tico@franco.co.il">tico@franco.co.il</a></div>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-foreground">קישורים</div>
                  <nav className="flex flex-col gap-1">
                    <Link href="/" className="hover:text-foreground transition font-semibold">בית</Link>
                    <Link href="/about" className="hover:text-foreground transition font-semibold">הראש של תיקו</Link>
                    <Link href="/services" className="hover:text-foreground transition font-semibold">הכלים שלנו</Link>
                    <Link href="/contact" className="hover:text-foreground transition font-semibold">צור קשר</Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
