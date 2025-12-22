import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap' 
});

const merriweather = Merriweather({ 
  weight: ["300", "400", "700"], 
  subsets: ["latin"], 
  variable: "--font-merriweather",
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Pan Akompaniator | Profesjonalne Podkłady i Kursy",
  description: "Platforma edukacyjna i sklep z profesjonalnymi podkładami fortepianowymi dla wokalistów. Navy + Gold + Red Premium Experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans bg-slate-50 text-slate-900 antialiased">
        <ShopProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <CookieBanner />
          </div>
        </ShopProvider>
      </body>
    </html>
  );
}