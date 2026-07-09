"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Navbar } from "@/components/Navbar"; // For local use only if layout doesn't wrap, but we know it does. Wait, I shouldn't import Navbar/Footer if layout has them!

// FAQS
const faqs = [
  { question: "How can management consultancy benefit a growing business?", answer: "Management consultancy provides strategic direction, operational improvements, financial clarity, and governance support that are essential for sustainable growth and market competitiveness." },
  { question: "What's the importance of MIS in decision-making?", answer: "A well-structured MIS delivers real-time insights into business performance, enabling timely and data-driven decisions across functions like sales, finance, and operations." },
  { question: "When should a company consider restructuring?", answer: "Restructuring is ideal during expansions, mergers, financial distress, or to realign with market conditions. It helps improve efficiency, reduce redundancy, and unlock new value." },
  { question: "Do startups need project reports and capital planning?", answer: "Yes. Project reports are critical for funding, and capital planning ensures the right mix of resources for growth without risking over-leverage or investor dilution." },
  { question: "What is the difference between fund flow and cash flow statements?", answer: "Cash flow reflects the actual movement of cash in and out, while fund flow shows changes in financial position by tracking movement of working capital and long-term funds." },
  { question: "Is SEBI compliance necessary for private fundraising?", answer: "Yes, if the fundraising involves certain thresholds or instruments. We help ensure your process aligns with SEBI regulations, avoiding penalties and enabling a smooth capital raise." },
  { question: "How long does it take to prepare for an IPO?", answer: "IPO preparation typically takes several months, including financial audits, compliance checks, prospectus drafting, and approvals. We streamline the process for quicker, compliant execution." }
];

// Timeline Services (9 to 14)
const timelineServices = [
  { title: "Drafting of MOA", description: "We draft Memorandum of Association (MOA) documents that reflect your company's objectives and legal framework, ensuring clarity and regulatory compliance from the outset.", align: "left", bg: "bg-black" },
  { title: "Corporate Planning & Strategy", description: "We partner with your leadership team to craft strategic plans focused on growth, diversification, market expansion, and operational excellence—enabling long-term competitiveness and vision alignment.", align: "right", bg: "bg-[#b90a2a]" },
  { title: "SEBI Compliance for Fundraising", description: "We assist businesses in meeting SEBI (Securities and Exchange Board of India) requirements for fundraising, whether through equity, convertible instruments, or public offers. Our team ensures timely, accurate, and transparent documentation.", align: "left", bg: "bg-[#b90a2a]" },
  { title: "Organizational Structure Consultancy", description: "We help define and optimize your organizational hierarchy and reporting systems, fostering clarity, accountability, and scalability across all departments.", align: "right", bg: "bg-black" },
  { title: "Preparation & Analysis of Prospect for IPO", description: "We support companies preparing for Initial Public Offerings by drafting and analyzing IPO prospectuses, coordinating with stakeholders, and ensuring full regulatory readiness and market clarity.", align: "left", bg: "bg-black" },
  { title: "Business Process Reengineering", description: "Our experts analyze and reengineer core business processes for improved efficiency, quality, and speed. We apply modern frameworks to help eliminate bottlenecks and reduce operational costs.", align: "right", bg: "bg-[#b90a2a]" }
];

export default function ManagementConsultancyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white selection:bg-[#b90a2a] selection:text-white">
      
      {/* 1. Hero Section: Dark / Full Width Homepage Style */}
      <section className="relative h-[100vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            unoptimized
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
            alt="Management Consultancy" 
            fill 
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl space-y-8"
          >
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-[#1A1A1A]/60 border border-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FF3D3D] animate-pulse" />
              <span className="text-white text-sm md:text-base font-black tracking-[0.2em] uppercase">
                Consultancy
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-serif text-white tracking-tight leading-[1.05]">
              Strategic <br />
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">Guidance</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-2xl">
              From organizational structuring and policy formulation to capital planning, project reports, and IPO preparation, we deliver practical solutions backed by deep industry insights.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
           <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center animate-bounce text-white hover:bg-white hover:text-black transition-all cursor-pointer backdrop-blur-md bg-black/50">
              <ArrowDown className="w-6 h-6" />
           </div>
        </div>
      </section>

      {/* 2. Component A: Circular Image Left, Text Right (Screenshot 1) */}
      <section className="py-24 bg-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
               
               {/* Left: Circular Image with Accent Arcs & Dots */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="w-full lg:w-1/2 relative flex justify-center lg:justify-start"
               >
                  <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                     {/* Decorative Outer Arc (Top Left) */}
                     <div className="absolute -inset-6 border-[1px] border-gray-300 rounded-full border-b-transparent border-r-transparent border-l-transparent border-t-gray-300 transform -rotate-45" />
                     {/* Decorative Outer Arc (Bottom Right) */}
                     <div className="absolute -inset-6 border-[1px] border-gray-300 rounded-full border-t-transparent border-l-transparent border-r-transparent border-b-gray-300 transform -rotate-45" />

                     {/* Red Dot Top */}
                     <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#e86c60] rounded-full z-10" />
                     {/* Green/Teal Dot Right */}
                     <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-3 h-3 bg-[#76c3a6] rounded-full z-10" />
                     {/* Gray Dot Bottom Left */}
                     <div className="absolute bottom-12 -left-2 w-4 h-4 bg-gray-400 rounded-full z-10" />

                     <div className="w-full h-full rounded-full overflow-hidden relative shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
                        <Image 
                          unoptimized
                          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                          alt="Corporate Advisory"
                          fill
                          className="object-cover"
                        />
                     </div>
                  </div>
               </motion.div>

               {/* Right: Text with Huge Red First Letter */}
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="w-full lg:w-1/2"
               >
                  <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6 leading-tight flex items-baseline">
                     <span className="text-6xl md:text-[5rem] font-extrabold text-[#b90a2a] mr-1">C</span>
                     orporate and Non-Corporate Advisory
                  </h2>
                  <p className="text-[17px] text-gray-600 leading-[1.8] font-medium">
                     We offer tailored advisory solutions to businesses of all sizes and types, <span className="text-[#3b5998]">including proprietorships, partnerships, and corporations</span>. Our guidance spans operational, financial, and regulatory areas to help you navigate challenges and tap into opportunities with confidence.
                  </p>
               </motion.div>

            </div>
         </div>
      </section>

      {/* 3. Component B: 3-Column Image Cards Grid (Screenshot 2 & 3) */}
      <section className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
               
               {/* Card 1 */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col group">
                  <div className="h-64 relative rounded-t-3xl overflow-hidden">
                     <Image unoptimized src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="MIS" fill className="object-cover transform group-hover:scale-105 transition-duration-500" />
                  </div>
                  <div className="bg-[#FCFBF7] rounded-b-3xl p-8 flex-grow shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-t-0 border-[#f0ede6]">
                     <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 text-center leading-tight">Preparation of MIS & Review with Solution</h3>
                     <p className="text-gray-600 text-center text-[15px] leading-relaxed">Our team designs and implements Management Information Systems (MIS) that provide real-time data for informed decision-making. We also conduct regular reviews and suggest actionable solutions to improve performance and control across departments.</p>
                  </div>
               </motion.div>

               {/* Card 2 */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col group">
                  <div className="h-64 relative rounded-t-3xl overflow-hidden">
                     <Image unoptimized src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800" alt="SOP" fill className="object-cover transform group-hover:scale-105 transition-duration-500" />
                  </div>
                  <div className="bg-[#FCFBF7] rounded-b-3xl p-8 flex-grow shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-t-0 border-[#f0ede6]">
                     <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 text-center leading-tight">Preparation of SOP & Corporate Policies</h3>
                     <p className="text-gray-600 text-center text-[15px] leading-relaxed">We assist in developing Standard Operating Procedures (SOPs) and internal policies that promote consistency, efficiency, and compliance within your organization. Clear documentation ensures alignment between teams and fosters operational discipline.</p>
                  </div>
               </motion.div>

               {/* Card 3 */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col group">
                  <div className="h-64 relative rounded-t-3xl overflow-hidden">
                     <Image unoptimized src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800" alt="Restructuring" fill className="object-cover transform group-hover:scale-105 transition-duration-500" />
                  </div>
                  <div className="bg-[#FCFBF7] rounded-b-3xl p-8 flex-grow shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-t-0 border-[#f0ede6]">
                     <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 text-center leading-tight">Business Restructuring (Amalgamation, Merger)</h3>
                     <p className="text-gray-600 text-center text-[15px] leading-relaxed">We guide businesses through restructuring processes such as mergers, amalgamations, or demergers—ensuring smooth legal, financial, and strategic transitions that align with your growth or consolidation goals.</p>
                  </div>
               </motion.div>

               {/* Card 4 */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col group mt-4">
                  <div className="h-64 relative rounded-t-3xl overflow-hidden">
                     <Image unoptimized src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" alt="Fund Flow" fill className="object-cover transform group-hover:scale-105 transition-duration-500" />
                  </div>
                  <div className="bg-[#FCFBF7] rounded-b-3xl p-8 flex-grow shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-t-0 border-[#f0ede6]">
                     <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 text-center leading-tight">Preparation and Review of Fund Flow & Cash Flow Forecasts</h3>
                     <p className="text-gray-600 text-center text-[15px] leading-relaxed">We prepare detailed fund flow and cash flow forecasts to help you manage liquidity, optimize financial operations, and make proactive funding decisions. Our periodic reviews enhance predictability.</p>
                  </div>
               </motion.div>

               {/* Card 5 */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col group mt-4">
                  <div className="h-64 relative rounded-t-3xl overflow-hidden">
                     <Image unoptimized src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800" alt="Project Report" fill className="object-cover transform group-hover:scale-105 transition-duration-500" />
                  </div>
                  <div className="bg-[#FCFBF7] rounded-b-3xl p-8 flex-grow shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-t-0 border-[#f0ede6]">
                     <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 text-center leading-tight">Assessment & Preparation of Project Report</h3>
                     <p className="text-gray-600 text-center text-[15px] leading-relaxed">We prepare robust project reports for new ventures or expansions, including market research, financial projections, SWOT analysis, and funding needs. These reports are essential for investor presentations.</p>
                  </div>
               </motion.div>

               {/* Card 6 */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col group mt-4">
                  <div className="h-64 relative rounded-t-3xl overflow-hidden">
                     <Image unoptimized src="https://images.unsplash.com/photo-1579621970588-a3f5ce599d6d?auto=format&fit=crop&q=80&w=800" alt="Working Capital" fill className="object-cover transform group-hover:scale-105 transition-duration-500" />
                  </div>
                  <div className="bg-[#FCFBF7] rounded-b-3xl p-8 flex-grow shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-t-0 border-[#f0ede6]">
                     <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 text-center leading-tight">Working Capital Requirement</h3>
                     <p className="text-gray-600 text-center text-[15px] leading-relaxed">We assess your working capital needs and recommend funding options and cash management techniques. Our insights help ensure sufficient liquidity while avoiding idle capital, leading to greater financial efficiency.</p>
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

      {/* 4. Component A (Reversed): Circular Image Left, Text Right (Screenshot 4) */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
               
               {/* Left: Circular Image with Dotted Border */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="w-full lg:w-1/2 relative flex justify-center lg:justify-start"
               >
                  <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-dashed border-gray-300 p-4">
                     {/* Red Dot Top */}
                     <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#e86c60] rounded-full" />
                     {/* Green/Teal Dot Right */}
                     <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-[#76c3a6] rounded-full" />
                     {/* Gray Dot Bottom Left */}
                     <div className="absolute bottom-12 left-6 w-4 h-4 bg-gray-400 rounded-full" />

                     <div className="w-full h-full rounded-full overflow-hidden relative shadow-2xl">
                        <Image 
                          unoptimized
                          src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800"
                          alt="Capital Structure"
                          fill
                          className="object-cover"
                        />
                     </div>
                  </div>
               </motion.div>

               {/* Right: Text with Huge Red First Letter */}
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="w-full lg:w-1/2"
               >
                  <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6 leading-tight flex items-baseline">
                     <span className="text-6xl md:text-7xl font-extrabold text-[#b90a2a] mr-1">C</span>
                     apital Structure Planning
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed font-medium">
                     Our consultancy offers expert advice on designing a balanced capital structure, <span className="text-[#3b5998]">combining equity, debt, and internal accruals</span> to optimize cost of capital, risk exposure, and investor appeal.
                  </p>
               </motion.div>

            </div>
         </div>
      </section>

      {/* 5. Component C: Timeline Section (Screenshot 5 - Exact Match) */}
      <section className="py-24 bg-white relative overflow-hidden">
         {/* Subtle background diagonal shapes matching screenshot */}
         <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ background: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }} />

         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* The TWO Parallel Center Lines */}
            <div className="absolute left-[calc(50%-12px)] top-0 bottom-0 w-[2px] bg-black hidden md:block" />
            <div className="absolute left-[calc(50%+12px)] top-0 bottom-0 w-[2px] bg-blue-100 hidden md:block" />

            <div className="space-y-12 md:space-y-16">
               {timelineServices.map((service, idx) => {
                  const isLeft = service.align === "left";
                  const isBlackBg = service.bg === "bg-black";
                  
                  // Dot logic based on screenshot: Box Black -> Dot Red. Box Red -> Dot Black.
                  const dotColor = isBlackBg ? "bg-[#b90a2a]" : "bg-black";
                  // Position logic: Left boxes attach to left (black) line. Right boxes attach to right (blue-100) line.
                  const dotPositionClass = isLeft ? "left-[calc(50%-12px)]" : "left-[calc(50%+12px)]";

                  return (
                     <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                        
                        {/* Square Timeline Dot */}
                        <div className={`hidden md:block absolute ${dotPositionClass} transform -translate-x-1/2 w-4 h-4 ${dotColor} z-10`} />

                        {/* Content Box */}
                        <motion.div 
                          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className={`w-full md:w-[42%] p-8 md:p-10 rounded-xl relative z-20 ${service.bg} shadow-[0_15px_40px_rgba(0,0,0,0.15)] ${isLeft ? 'md:text-right text-left' : 'text-left'}`}
                        >
                           <h3 className="text-[22px] font-bold text-white mb-4 leading-snug">{service.title}</h3>
                           <p className="text-white/90 text-[15px] font-medium leading-[1.8]">{service.description}</p>
                        </motion.div>

                     </div>
                  );
               })}
            </div>

         </div>
      </section>

      {/* 6. FAQ Section (Unified Light Design) */}
      <section className="py-24 bg-[#FFF6F6] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Image & Rating Card */}
            <div className="relative w-full">
              <div className="relative w-full h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden shadow-xl border border-gray-200">
                <Image 
                  unoptimized 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" 
                  alt="Consultants" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              {/* Overlapping Rating Card */}
              <div className="absolute -bottom-6 -left-6 lg:bottom-12 lg:-left-12 bg-[#b90a2a] text-white p-6 rounded-2xl shadow-2xl w-56 transform transition-transform hover:-translate-y-2">
                <div className="flex -space-x-3 mb-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#b90a2a] bg-gray-300 overflow-hidden relative">
                      <Image unoptimized src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User Avatar" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span className="text-3xl font-black">4.9/5</span>
                </div>
                <p className="text-sm text-white/90 font-medium">Based on 2500+ reviews</p>
              </div>
            </div>

            {/* Right Column: FAQs */}
            <div className="flex flex-col space-y-4 pt-12 lg:pt-0">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] mb-6 tracking-tight">
                Frequently Asked <span className="text-[#b90a2a]">Questions</span>
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isActive = openFaq === index;
                  return (
                    <motion.div 
                      key={index} 
                      initial={false} 
                      className={`rounded-xl overflow-hidden shadow-sm transition-colors duration-300 ${isActive ? 'bg-[#b90a2a]' : 'bg-white border border-gray-200'}`}
                    >
                      <button 
                        onClick={() => setOpenFaq(isActive ? null : index)} 
                        className={`w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors ${isActive ? 'text-white' : 'text-[#1A1A1A] hover:bg-gray-50'}`}
                      >
                        <span className="font-bold text-[17px] pr-8 uppercase tracking-wide">
                          {index + 1}. {faq.question}
                        </span>
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                          {isActive ? (
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                          ) : (
                            <svg className="w-6 h-6 text-[#1A1A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
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

          </div>
        </div>
      </section>

    </main>
  );
}
