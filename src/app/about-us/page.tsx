import { AboutHero } from "@/components/about/AboutHero";
import { CoreStrengths } from "@/components/about/CoreStrengths";
import { AboutFirm } from "@/components/about/AboutFirm";
import { Foundation } from "@/components/about/Foundation";
import { AboutFinale } from "@/components/about/AboutFinale";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "About Us | SPGK & Associates",
  description: "Learn about SPGK & Associates, our core values, and our commitment to financial excellence.",
};

export default function AboutUsPage() {
  return (
    <main className="bg-[#FFFFFF] min-h-screen text-[#1A1A1A] overflow-hidden selection:bg-[#FF3D3D] selection:text-[#1A1A1A]">
      <Navbar />
      
      {/* Cinematic chapters */}
      <AboutHero />
      <CoreStrengths />
      <AboutFirm />
      <Foundation />
      <AboutFinale />
      
      <Footer />
    </main>
  );
}
