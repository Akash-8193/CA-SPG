"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Financial Advice",
    description: "Achieve tax efficiency and enjoy legal protection in all financial matters. Our guidance ensures you're never alone in managing your money.",
    img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Audit",
    description: '"Dummy" can refer to several things, including a model or imitation of something, a person who is not real or active, or a stupid person.',
    img: "https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Tax",
    description: "Learn how to get the most out of the tax system for both Corporate and Non-Corporate and individual income. We simplify complex tax laws.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Risk Management",
    description: "Stay informed and receive expert advice on meeting specific regulatory requirements relevant to your industry and business operations.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
  }
];

export function Features() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="h-screen w-full bg-[#FFFFFF] flex flex-col md:flex-row overflow-hidden relative">

      {/* Absolute Pinned Heading */}
      <div className="absolute top-8 left-6 md:top-16 md:left-12 z-20 pointer-events-none">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white drop-shadow-md">
          <span className="text-[#FF3D3D] text-4xl md:text-5xl lg:text-6xl">W</span>hat We Do
        </h2>
      </div>

      {features.map((feature, idx) => (
        <div
          key={idx}
          onMouseEnter={() => setActiveIdx(idx)}
          className={cn(
            "relative cursor-pointer transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden flex items-end",
            activeIdx === idx ? "flex-[5] md:flex-[4]" : "flex-[1]"
          )}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 bg-[#1A1A1A]">
            <Image unoptimized
              src={feature.img}
              alt={feature.title}
              fill
              className="object-cover transition-transform duration-1000 ease-out scale-110"
              style={{
                transform: activeIdx === idx ? "scale(1)" : "scale(1.1)",
                opacity: activeIdx === idx ? 0.8 : 0.4
              }}
            />
            {/* Dark gradient instead of white for clear, rich images */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-4 md:p-12 w-full text-white">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">

              <div className="flex gap-6 items-end">
                <span className="font-serif text-white/80 text-4xl hidden md:block drop-shadow-sm">0{idx + 1}</span>
                <div>
                  <h3 className={cn(
                    "font-serif text-2xl md:text-5xl text-white transition-all duration-700 whitespace-nowrap drop-shadow-md truncate md:overflow-visible",
                    activeIdx !== idx && "md:[writing-mode:vertical-rl] md:rotate-180 md:-translate-y-8"
                  )}>
                    {feature.title}
                  </h3>

                  <div className={cn(
                    "overflow-hidden transition-all duration-700",
                    activeIdx === idx ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                  )}>
                    <p className="text-white/70 font-light max-w-md drop-shadow-md">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Border separator */}
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-[#1A1A1A]/10 hidden md:block" />
          <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-[#1A1A1A]/10 md:hidden" />
        </div>
      ))}

    </section>
  );
}
