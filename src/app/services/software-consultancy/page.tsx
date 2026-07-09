"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, CheckCircle2, Server, Terminal, ShieldCheck, Activity } from "lucide-react";

// FAQS
const faqs = [
  { question: "Why choose SAP over other enterprise software?", answer: "SAP offers a highly scalable and integrated platform with modules tailored for various industries and functions. It supports real-time data processing, compliance, and end-to-end business management." },
  { question: "What is included in the SAP implementation process?", answer: "It includes needs assessment, software configuration, data migration, testing, training, and go-live support. We tailor each step to your specific operational structure." },
  { question: "How long does it take to implement SAP?", answer: "Depending on your organization's size and complexity, implementation can take anywhere from 3 to 12 months. We offer a clear timeline and milestone-based execution plan." },
  { question: "What kind of after-sales services do you offer?", answer: "We provide technical support, issue resolution, module optimization, user training, system health checks, and ongoing upgrades to ensure peak performance." },
  { question: "Can SAP implementation disrupt daily operations?", answer: "Our implementation approach minimizes business disruption. We use a phased rollout and parallel testing to ensure smooth transitions with minimal risk." },
  { question: "Do you provide training for in-house teams?", answer: "We offer comprehensive SAP training sessions tailored for different user levels—from basic operations to admin functionalities—ensuring high user adoption." },
  { question: "Is post-implementation support charged separately?", answer: "We offer flexible after-sales service plans based on your needs, ranging from monthly maintenance contracts to on-demand technical assistance." }
];

export default function SoftwareConsultancyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white selection:bg-[#b90a2a] selection:text-white font-sans overflow-hidden">
      
      {/* 1. Hero Section: Tech Terminal Look but strict brand colors */}
      <section className="relative h-[100vh] flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            unoptimized
            src="/images/software_hero_1783617561682.png" 
            alt="Software Consultancy & SAP" 
            fill 
            className="object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          />
          {/* Dark overlay for Hero ONLY */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            {/* Tech Badge */}
            <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-md bg-[#b90a2a]/20 border border-[#b90a2a]/50 mb-8 backdrop-blur-md">
              <Terminal className="w-4 h-4 text-white" />
              <span className="text-white text-sm md:text-base font-bold tracking-[0.2em] uppercase font-mono">
                Software Consultancy
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white tracking-tight leading-[1.05] mb-8">
              Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b90a2a] to-[#ff4d4d]">Business Transformation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl font-light">
              Through Smart Software Solutions. We offer end-to-end support from installation to post-implementation service, ensuring systems go live smoothly and serve your business efficiently.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
           <span className="text-gray-400 text-xs tracking-widest uppercase mb-4 font-mono">Scroll to initialize</span>
           <div className="w-[1px] h-16 bg-gradient-to-b from-[#b90a2a] to-transparent animate-pulse" />
        </div>
      </section>

      {/* 2. Section 1: SAP Installation ("Floating Tech Screen" Layout - LIGHT THEME) */}
      <section className="py-24 lg:py-40 relative bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
               
               {/* Left: Floating Tech Screen Image */}
               <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 relative"
               >
                  <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-gray-200 shadow-[0_30px_60px_rgba(0,0,0,0.1)] bg-white">
                     <Image 
                        unoptimized
                        src="/images/sap_installation_1783617576392.png"
                        alt="SAP Installation"
                        fill
                        className="object-cover"
                     />
                     {/* Glass Overlay Elements */}
                     <div className="absolute top-6 left-6 right-6 h-12 bg-white/70 backdrop-blur-md rounded-xl border border-white flex items-center px-4 space-x-2 shadow-sm">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <div className="ml-4 h-2 w-32 bg-gray-200 rounded-full" />
                     </div>
                     <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-xl border border-gray-100 shadow-xl p-4 rounded-2xl flex items-center space-x-4">
                        <Server className="w-8 h-8 text-[#b90a2a]" />
                        <div>
                           <p className="text-gray-900 text-sm font-bold">System Online</p>
                           <p className="text-[#b90a2a] text-xs font-mono font-bold">Status: 100%</p>
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* Right: Floating Glass Panels */}
               <div className="w-full lg:w-1/2 relative">
                  <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-[2px] h-[80%] bg-gradient-to-b from-transparent via-[#b90a2a] to-transparent hidden lg:block opacity-30" />
                  
                  <motion.div 
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="bg-white border border-gray-100 shadow-2xl p-10 md:p-12 rounded-[2.5rem] relative"
                  >
                     {/* Tech corner accents */}
                     <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#b90a2a] rounded-tl-[2.5rem]" />
                     <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#b90a2a] rounded-br-[2.5rem]" />

                     <div className="w-16 h-16 rounded-2xl bg-[#b90a2a]/10 flex items-center justify-center mb-8">
                        <Activity className="w-8 h-8 text-[#b90a2a]" />
                     </div>
                     <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">SAP Installation & <br/>Implementation</h2>
                     <p className="text-gray-600 text-lg leading-[1.9] mb-8">
                        We specialize in the seamless installation and implementation of SAP systems tailored to your industry and operational needs. From requirement analysis and module selection to deployment and testing, we ensure that your SAP solution aligns with your business goals.
                     </p>

                     <div className="bg-[#F9F9F9] border border-gray-200 p-6 rounded-2xl space-y-4">
                        <div className="flex items-center text-gray-700 font-medium">
                           <div className="w-2 h-2 rounded-full bg-[#b90a2a] mr-4 shadow-[0_0_10px_rgba(185,10,42,0.5)]" />
                           Reduces Downtime
                        </div>
                        <div className="flex items-center text-gray-700 font-medium">
                           <div className="w-2 h-2 rounded-full bg-[#b90a2a] mr-4 shadow-[0_0_10px_rgba(185,10,42,0.5)]" />
                           Enhances Data Integration
                        </div>
                        <div className="flex items-center text-gray-700 font-medium">
                           <div className="w-2 h-2 rounded-full bg-[#b90a2a] mr-4 shadow-[0_0_10px_rgba(185,10,42,0.5)]" />
                           Increases Operational Efficiency
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* 3. Section 2: After Sales Service ("Animated Data Flow" Layout - LIGHT THEME) */}
      <section className="py-24 lg:py-40 relative bg-[#F9F9F9] border-t border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-0">
               
               {/* Left: Content Panels */}
               <div className="w-full lg:w-1/2 relative z-20">
                  <motion.div 
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="bg-white border border-gray-100 p-10 md:p-14 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.08)]"
                  >
                     <div className="w-16 h-16 rounded-full bg-[#b90a2a]/10 flex items-center justify-center mb-8 border border-[#b90a2a]/20">
                        <ShieldCheck className="w-8 h-8 text-[#b90a2a]" />
                     </div>
                     <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">After Sales <span className="text-[#b90a2a]">Service</span></h2>
                     <p className="text-gray-600 text-[17px] leading-[1.9] mb-8 font-medium">
                        Our commitment doesn't end at implementation. We provide dedicated after-sales support including performance monitoring, troubleshooting, user training, updates, and process optimization.
                     </p>
                     
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 border border-gray-200 p-4 rounded-2xl">
                           <p className="text-[#1A1A1A] font-bold mb-1 text-xl">24/7</p>
                           <p className="text-gray-500 text-xs uppercase tracking-wider font-bold">Monitoring</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 p-4 rounded-2xl">
                           <p className="text-[#1A1A1A] font-bold mb-1 text-xl">100%</p>
                           <p className="text-gray-500 text-xs uppercase tracking-wider font-bold">Adaptivity</p>
                        </div>
                     </div>
                  </motion.div>
               </div>

               {/* Middle: SVG Data Flow Line (Hidden on mobile) */}
               <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-48 h-24 z-10">
                  <svg width="100%" height="100%" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M 0,50 C 50,50 50,20 100,20 C 150,20 150,80 200,80" stroke="#E5E7EB" strokeWidth="2" fill="none" />
                     <path d="M 0,50 C 50,50 50,20 100,20 C 150,20 150,80 200,80" stroke="#b90a2a" strokeWidth="3" fill="none" strokeDasharray="10 20" className="animate-[dash_2s_linear_infinite]" />
                  </svg>
                  <style jsx>{`
                     @keyframes dash {
                        to { stroke-dashoffset: -30; }
                     }
                  `}</style>
               </div>

               {/* Right: AI Tech Image */}
               <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 lg:pl-16 relative z-0"
               >
                  <div className="relative w-full aspect-video lg:aspect-[4/3] rounded-[3rem] overflow-hidden border border-gray-200 shadow-xl">
                     <Image 
                        unoptimized
                        src="/images/after_sales_1783617587064.png"
                        alt="After Sales Tech Support"
                        fill
                        className="object-cover"
                     />
                     {/* Light brand overlay */}
                     <div className="absolute inset-0 bg-[#b90a2a]/5 mix-blend-multiply" />
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

      {/* 4. Section 3: FAQ (Unified Brand Colors) */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#b90a2a]/10 mb-6">
               <span className="text-[#b90a2a] text-sm font-bold tracking-widest uppercase">System Queries</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#111] tracking-tight">
              Frequently Asked <span className="text-[#b90a2a]">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isActive = openFaq === index;
              return (
                <motion.div 
                  key={index} 
                  initial={false} 
                  className={`rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${isActive ? 'bg-[#b90a2a]' : 'bg-white border border-gray-200 hover:border-gray-300'}`}
                >
                  <button 
                    onClick={() => setOpenFaq(isActive ? null : index)} 
                    className={`w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors ${isActive ? 'text-white' : 'text-[#111]'}`}
                  >
                    <span className="font-bold text-[17px] pr-8 leading-snug">
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full ${isActive ? 'bg-white/20' : 'bg-gray-100'}`}>
                      {isActive ? (
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" /></svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                        <div className="p-6 pt-0 text-white/90 text-[16px] leading-relaxed mt-2 border-t border-white/20">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}
