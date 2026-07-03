import { Hero } from "@/components/Hero";
import { VisionMission } from "@/components/VisionMission";
import { ServicesOverview } from "@/components/ServicesOverview";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Network } from "@/components/Network";
import { Leadership } from "@/components/Leadership";

export default function Home() {
  return (
    <>
      <Hero />
      <VisionMission />
      <ServicesOverview />
      <Features />
      <Network />
      <Leadership />
      <CTA />
    </>
  );
}
