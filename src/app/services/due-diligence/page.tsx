"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function DueDiligencePage() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#b90a2a] selection:text-white font-sans overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative h-[100vh] flex flex-col justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image 
            unoptimized
            src="/images/dd_hero_1783618496301.png" 
            alt="Due Diligence Services" 
            fill 
            className="object-cover object-center scale-105 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-[#b90a2a]/20 border border-[#b90a2a]/50 mb-8 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-[#b90a2a]" />
              <span className="text-[#b90a2a] text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                Expert Analysis
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white tracking-tight leading-[1.05] mb-8">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b90a2a] to-[#ff4d4d]">Due Diligence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl font-light">
              We uncover inconsistencies, hidden liabilities, and the true financial position of the target entity — enabling informed investment or acquisition decisions.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
           <span className="text-white/60 text-xs tracking-widest uppercase mb-4">Discover</span>
           <div className="w-[1px] h-16 bg-gradient-to-b from-[#b90a2a] to-transparent animate-pulse" />
        </div>
      </section>

      {/* 2. Section 1: Financial & Tax DD (Ultra Clean Circular Layout) */}
      <section className="py-12 lg:py-16 bg-white relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Financial DD */}
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
               {/* Image Side */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 flex justify-center relative"
               >
                  <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex items-center justify-center">
                     {/* Dashed Ring */}
                     <div className="absolute inset-0 rounded-full border-[1px] border-dashed border-gray-300" />
                     {/* Accents on Ring */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#b90a2a]" />
                     <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#80c3a6]" />
                     <div className="absolute bottom-10 left-10 w-3 h-3 rounded-full bg-gray-400" />
                     
                     {/* Circular Image */}
                     <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden shadow-2xl">
                        <Image unoptimized src="/images/dd_financial_1783618507090.png" alt="Financial DD" fill className="object-cover" />
                     </div>
                  </div>
               </motion.div>

               {/* Content Side */}
               <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
               >
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">
                     <span className="text-6xl md:text-7xl text-[#b90a2a]">F</span>inancial Due Diligence
                  </h2>
                  <p className="text-gray-600 text-[18px] leading-[1.8]">
                     We conduct a thorough review of financial statements, key ratios, working capital cycles, and revenue recognition policies. This helps uncover inconsistencies, hidden liabilities, and the true financial position of the target entity — enabling informed investment or acquisition decisions.
                  </p>
               </motion.div>
            </div>

            {/* Tax DD (Reversed) */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
               {/* Image Side */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 flex justify-center relative"
               >
                  <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex items-center justify-center">
                     {/* Dashed Ring */}
                     <div className="absolute inset-0 rounded-full border-[1px] border-dashed border-gray-300" />
                     {/* Accents on Ring */}
                     <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-[#b90a2a]" />
                     <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#80c3a6]" />
                     <div className="absolute bottom-4 left-1/2 w-3 h-3 rounded-full bg-gray-400" />
                     
                     {/* Circular Image */}
                     <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden shadow-2xl">
                        {/* Placeholder image from screenshot style, we'll use one of our AI images */}
                        <Image unoptimized src="/images/dd_compliance_1783618540795.png" alt="Tax DD" fill className="object-cover" />
                     </div>
                  </div>
               </motion.div>

               {/* Content Side */}
               <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
               >
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">
                     <span className="text-6xl md:text-7xl text-[#b90a2a]">T</span>ax Due Diligence
                  </h2>
                  <p className="text-gray-600 text-[18px] leading-[1.8]">
                     Our team assesses the target's tax compliance history, pending assessments, undisclosed liabilities, and aggressive tax positions. This diligence ensures there are no tax surprises post-transaction and helps structure the deal tax-efficiently.
                  </p>
               </motion.div>
            </div>

         </div>
      </section>

      {/* 3. Section 2: Legal, Compliance, Commercial (Strict 3-Column Screenshot Style) */}
      <section className="py-12 lg:py-16 bg-[#FCFCFC] border-y border-gray-100 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               
               {/* Legal DD */}
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#FFFCF5] rounded-xl overflow-hidden shadow-md flex flex-col"
               >
                  <div className="relative h-64 w-full">
                     <Image unoptimized src="/images/dd_legal_1783618518553.png" alt="Legal" fill className="object-cover" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col items-center text-center">
                     <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                        Legal Due Diligence
                     </h3>
                     <p className="text-gray-600 text-[16px] leading-relaxed">
                        We examine contracts, litigations, licenses, intellectual property rights, and corporate structures. This process identifies legal risks, regulatory exposures, or ownership gaps that could impact deal value or operational continuity.
                     </p>
                  </div>
               </motion.div>

               {/* Compliance DD */}
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className="bg-[#F4F9FF] rounded-xl overflow-hidden shadow-md flex flex-col"
               >
                  <div className="relative h-64 w-full">
                     {/* Using the hero image or another for variety since we used compliance image for tax above */}
                     <Image unoptimized src="/images/dd_commercial_1783618550397.png" alt="Compliance" fill className="object-cover" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col items-center text-center">
                     <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                        Compliance Due Diligence
                     </h3>
                     <p className="text-gray-600 text-[16px] leading-relaxed">
                        We evaluate the company's adherence to statutory laws under tax, labor, corporate, and industry-specific regulations. This ensures a clean compliance track record or highlights areas requiring rectification before investment.
                     </p>
                  </div>
               </motion.div>

               {/* Commercial DD */}
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.2 }}
                  className="bg-[#FCFBF7] rounded-xl overflow-hidden shadow-md flex flex-col"
               >
                  <div className="relative h-64 w-full">
                     <Image unoptimized src="/images/dd_buysell_1783618560179.png" alt="Commercial" fill className="object-cover" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col items-center text-center">
                     <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                        Commercial Due Diligence
                     </h3>
                     <p className="text-gray-600 text-[16px] leading-relaxed">
                        Our review focuses on market share, customer base, pricing strategies, supplier relationships, and scalability. It assesses the business model's viability and long-term sustainability in competitive markets.
                     </p>
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

      {/* 4. Section 3: Vendor & Buy-side/Sell-side (Clean Block Layout) */}
      <section className="py-12 lg:py-16 bg-white relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Vendor DD Block */}
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
               {/* Content Side */}
               <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
               >
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">
                     <span className="text-6xl md:text-7xl text-[#b90a2a]">V</span>endor Due Diligence
                  </h2>
                  <p className="text-gray-600 text-[18px] leading-[1.8]">
                     We help sellers proactively identify potential red flags before the buyer does. This enhances transparency, boosts buyer confidence, and supports better valuation during divestment or stake dilution.
                  </p>
               </motion.div>
               
               {/* Image Side - Circle layout from screenshot 3 */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 flex justify-center relative"
               >
                  <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex items-center justify-center">
                     {/* Dashed Ring */}
                     <div className="absolute inset-0 rounded-full border-[1px] border-dashed border-gray-300" />
                     {/* Accents on Ring */}
                     <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#b90a2a]" />
                     <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#80c3a6]" />
                     
                     {/* Circular Image */}
                     <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden shadow-xl">
                        <Image unoptimized src="/images/dd_hero_1783618496301.png" alt="Vendor DD" fill className="object-cover" />
                     </div>
                  </div>
               </motion.div>
            </div>

            {/* Buy-side / Sell-side DD Block */}
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
               {/* Image Side - Square Layout from screenshot 4 */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]"
               >
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
                     <Image unoptimized src="/images/dd_buysell_1783618560179.png" alt="Buy-side Sell-side" fill className="object-cover" />
                  </div>
               </motion.div>
               
               {/* Content Side */}
               <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
               >
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                     <span className="text-6xl md:text-7xl text-[#b90a2a]">B</span>uy-side / Sell-side<br/>Due Diligence
                  </h2>
                  <p className="text-gray-600 text-[18px] leading-[1.8]">
                     Whether you're acquiring or selling, we tailor our diligence process to your role. For buyers, we validate investment worthiness; for sellers, we ensure your house is in order before going to market.
                  </p>
               </motion.div>
            </div>

         </div>
      </section>

    </main>
  );
}
