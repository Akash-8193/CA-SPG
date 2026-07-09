"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, ArrowRight, ShieldAlert, FileSearch, Building2, Gavel } from "lucide-react";

export default function FemaAdvisoryPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <main className="min-h-screen bg-white selection:bg-[#b90a2a] selection:text-white font-sans overflow-hidden">
      
      {/* 1. Hero Section (Premium Dark Finance) */}
      <section className="relative h-[100vh] flex flex-col justify-center overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 z-0">
          <Image 
            unoptimized
            src="/images/fema_hero_1783619289203.png" 
            alt="FEMA Advisory" 
            fill 
            className="object-cover object-center scale-105 opacity-50"
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
              <Globe className="w-4 h-4 text-[#b90a2a]" />
              <span className="text-[#b90a2a] text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                Cross-Border Compliance
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold text-white tracking-tight leading-[1.05] mb-8">
              FEMA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b90a2a] to-[#ff4d4d]">Advisory</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl font-light">
              Navigating the complexities of the Foreign Exchange Management Act. We ensure your cross-border transactions are structured, compliant, and penalty-free.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
           <span className="text-white/60 text-xs tracking-widest uppercase mb-4">Explore</span>
           <div className="w-[1px] h-16 bg-gradient-to-b from-[#b90a2a] to-transparent animate-pulse" />
        </div>
      </section>

      {/* 2. FDI Compliances ("Awwwards Magazine" Layout) */}
      <section ref={containerRef} className="py-16 lg:py-10 lg:py-16 bg-white relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
               
               {/* Massive Typography Left */}
               <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-[45%] z-10"
               >
                  <h2 className="text-6xl md:text-[5.5rem] font-black text-[#1A1A1A] leading-[0.9] tracking-tighter mb-8 uppercase">
                     FDI<br/>
                     <span className="text-[#b90a2a]">Compliance</span>
                  </h2>
                  <div className="w-20 h-1 bg-[#1A1A1A] mb-8" />
                  <p className="text-gray-600 text-xl md:text-2xl leading-relaxed font-light mb-8">
                     We help businesses manage end-to-end FDI compliances including reporting under FEMA, allotment of shares, filing with RBI, and annual return submissions.
                  </p>
                  <p className="text-[#1A1A1A] font-medium text-lg border-l-4 border-[#b90a2a] pl-6 py-2">
                     Our advisory ensures transactions stay transparent, timely, and penalty-free.
                  </p>
                  
                  {/* Decorative Stats to fill empty space */}
                  <div className="mt-12 pt-12 border-t border-gray-100 flex items-center space-x-12 lg:space-x-16">
                     <div>
                        <div className="text-4xl md:text-5xl font-black text-[#b90a2a] mb-2 tracking-tighter">100%</div>
                        <div className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Compliant</div>
                     </div>
                     <div>
                        <div className="text-4xl md:text-5xl font-black text-[#b90a2a] mb-2 tracking-tighter">RBI</div>
                        <div className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Approved</div>
                     </div>
                  </div>
               </motion.div>

               {/* Parallax Image Right */}
               <div className="w-full lg:w-[55%] h-[500px] lg:h-[700px] relative overflow-hidden rounded-[2rem] shadow-2xl">
                  <motion.div style={{ y: parallaxY }} className="absolute inset-[-10%] w-[120%] h-[120%]">
                     <Image 
                        unoptimized
                        src="/images/fema_fdi_1783619326538.png"
                        alt="FDI Compliances"
                        fill
                        className="object-cover"
                     />
                  </motion.div>
                  {/* Elegant inner shadow */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]" />
               </div>
            </div>
         </div>
      </section>

      {/* 3. ODI & ECB Advisory ("Floating Avatar" Layout) */}
      <section className="py-16 lg:py-12 lg:py-16 bg-[#FCFCFC] border-y border-gray-100 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col lg:flex-row items-center">
               
               {/* Left: Floating 3D Avatar (No Background) */}
               <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-[40%] h-[350px] lg:h-[400px] relative -mt-10 lg:-ml-12 z-20"
               >
                  <Image 
                     unoptimized
                     src="/images/fema_avatar_1_1783619298669.png"
                     alt="Corporate Consultant"
                     fill
                     className="object-contain object-bottom drop-shadow-[0_30px_30px_rgba(0,0,0,0.15)]"
                  />
               </motion.div>

               {/* Right: Content */}
               <div className="w-full lg:w-[60%] p-12 lg:p-20 z-10">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
                     <span className="w-2 h-2 rounded-full bg-[#b90a2a]" />
                     <span className="text-[#1A1A1A] text-xs font-bold tracking-widest uppercase">Outbound Investment</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                     ODI & ECB <span className="text-[#b90a2a]">Advisory</span>
                  </h2>
                  <p className="text-gray-600 text-lg md:text-xl leading-[1.9] mb-8 font-light">
                     We assist Indian companies in making outbound investments and raising external commercial borrowings. From structuring to RBI approval to ongoing compliance, we handle the technicalities so you can focus on growth.
                  </p>
                  <div className="flex items-center space-x-4 text-[#1A1A1A] font-bold">
                     <span className="w-12 h-[2px] bg-[#b90a2a]" />
                     <span>Structured for Growth</span>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 4. RBI Approvals ("Clean Bento Grid") */}
      <section className="py-16 lg:py-10 lg:py-16 bg-white relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               
               {/* Left Main Block */}
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-7 bg-[#FCFBF7] p-12 lg:p-16 rounded-[2.5rem] border border-gray-100 flex flex-col justify-center"
               >
                  <Building2 className="w-12 h-12 text-[#b90a2a] mb-8" />
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                     RBI Approvals & <span className="text-[#b90a2a]">LSFs</span>
                  </h2>
                  <p className="text-gray-600 text-[18px] leading-[1.9] font-medium">
                     Our experts help obtain RBI approvals for special transactions, late filings, or FEMA regularizations. We also manage the calculation and closure of Late Submission Fees (LSFs) to help you stay fully compliant.
                  </p>
               </motion.div>

               {/* Right Image Block */}
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className="lg:col-span-5 h-[400px] lg:h-auto rounded-[2.5rem] overflow-hidden relative shadow-lg"
               >
                  <Image 
                     unoptimized
                     src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
                     alt="RBI Approvals"
                     fill
                     className="object-cover"
                  />
               </motion.div>

            </div>
         </div>
      </section>

      {/* 5. FEMA Audit & Repatriation ("Sticky Scroll") */}
      <section className="py-16 lg:py-10 lg:py-16 bg-[#F9F9F9] border-y border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
               
               {/* Left Sticky Title */}
               <div className="w-full lg:w-1/3">
                  <div className="sticky top-32">
                     <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6 leading-tight">
                        Audits &<br/>
                        <span className="text-[#b90a2a]">Remittance</span>
                     </h2>
                     <p className="text-gray-500 text-lg mb-12">
                        Ensuring your records are flawless and cross-border transfers are seamless and tax-efficient.
                     </p>
                     
                     {/* Decorative Elements to fill empty space */}
                     <div className="flex flex-col space-y-8">
                        <div className="w-full h-[1px] bg-gray-200 relative overflow-hidden">
                           <div className="absolute top-0 left-0 h-full w-1/3 bg-[#b90a2a] animate-[spin_3s_ease-in-out_infinite]" />
                           <motion.div 
                             animate={{ x: ["-100%", "300%"] }}
                             transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                             className="absolute top-0 left-0 h-full w-1/3 bg-[#b90a2a]"
                           />
                        </div>
                        <div className="text-[80px] md:text-[100px] xl:text-[130px] font-black text-gray-200 leading-[0.8] tracking-tighter -ml-2 select-none uppercase">
                           Fema<br/>Audit
                        </div>
                        <div className="hidden md:flex items-center space-x-4 pt-4">
                           <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
                              <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                           </div>
                           <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Scroll to explore</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Scrolling Content */}
               <div className="w-full lg:w-2/3 space-y-8">
                  {/* Audit Card */}
                  <motion.div 
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="bg-white p-10 lg:p-12 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center"
                  >
                     <div className="w-full md:w-[40%] h-48 relative rounded-xl overflow-hidden shrink-0">
                        <Image unoptimized src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" alt="FEMA Audit" fill className="object-cover" />
                     </div>
                     <div>
                        <FileSearch className="w-8 h-8 text-[#b90a2a] mb-4" />
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">FEMA Audit & Certification</h3>
                        <p className="text-gray-600 leading-relaxed text-[15px]">
                           We conduct independent audits of foreign transactions, capital account compliances, and statutory filings. Our reports and certifications are aligned with FEMA norms and accepted by banks and regulators.
                        </p>
                     </div>
                  </motion.div>

                  {/* Repatriation Card */}
                  <motion.div 
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }} transition={{ delay: 0.1 }}
                     className="bg-[#FCFCFC] p-10 lg:p-12 rounded-[2rem] shadow-sm border border-gray-100"
                  >
                     <div className="w-12 h-12 bg-[#b90a2a]/10 rounded-full flex items-center justify-center mb-6">
                        <ArrowRight className="w-6 h-6 text-[#b90a2a]" />
                     </div>
                     <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Repatriation and Remittance Advisory</h3>
                     <p className="text-gray-600 leading-[1.8] text-[16px] md:text-[17px]">
                        Whether you're bringing in or sending money abroad, we help ensure your transactions are structured, compliant, and tax-efficient. This includes dividend repatriation, NRI transactions, and cross-border transfers.
                     </p>
                  </motion.div>
               </div>

            </div>
         </div>
      </section>

      {/* 6. Litigation & Representation ("Avatar Presenter 2") */}
      <section className="py-16 lg:py-10 lg:py-16 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:flex-row items-center">
               
               {/* Left: Content */}
               <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-[60%] lg:pr-20 z-10"
               >
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#b90a2a]/5 rounded-full mb-8 border border-[#b90a2a]/10">
                     <ShieldAlert className="w-4 h-4 text-[#b90a2a]" />
                     <span className="text-[#b90a2a] text-xs font-bold tracking-widest uppercase">Legal Representation</span>
                  </div>
                  <h2 className="text-4xl md:text-[3.5rem] font-bold text-[#1A1A1A] mb-8 leading-tight">
                     FEMA Litigation &<br/>Representation
                  </h2>
                  <p className="text-gray-600 text-lg md:text-xl leading-[1.9] mb-8 font-light">
                     We represent clients in proceedings before the Directorate of Enforcement and RBI for alleged FEMA violations. Our services include drafting replies, attending hearings, and ensuring fair legal outcomes.
                  </p>
                  <button className="px-8 py-4 bg-[#1A1A1A] text-white font-bold tracking-widest text-sm uppercase rounded-full hover:bg-[#b90a2a] transition-colors shadow-xl">
                     Get Legal Support
                  </button>
               </motion.div>

               {/* Right: Avatar No Background */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-[40%] h-[400px] lg:h-[450px] relative z-0 mt-10 lg:mt-0"
               >
                  {/* A clean circular backdrop for the avatar */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-[#F9F9F9] rounded-full -z-10" />
                  
                  <Image 
                     unoptimized
                     src="/images/fema_avatar_2_1783619307371.png"
                     alt="FEMA Lawyer Avatar"
                     fill
                     className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                  />
               </motion.div>

            </div>
         </div>
      </section>

    </main>
  );
}
