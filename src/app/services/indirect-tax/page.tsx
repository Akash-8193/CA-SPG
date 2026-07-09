"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";



// Content Data
const mainServices = [
  {
    title: "GST Registration, Returns & Advisory",
    description: "We assist businesses with seamless GST registration and timely filing of monthly, quarterly, and annual returns. Our advisory services help interpret and apply GST law correctly, avoiding penalties and optimizing tax credits. Clients benefit from accurate documentation, compliance assurance, and actionable tax-saving insights.",
    span: "lg:col-span-2 lg:row-span-1"
  },
  {
    title: "GST Litigation & Representation",
    description: "Facing scrutiny or disputes under GST? We offer end-to-end litigation support, including drafting replies, attending departmental proceedings, and representing clients.",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    title: "GST Migration and Setup",
    description: "Transitioning to GST from legacy systems like VAT or service tax? We simplify the entire migration process.",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    title: "Statutory Compliances (GST/VAT)",
    description: "Staying compliant with indirect tax laws is non-negotiable. We handle all statutory requirements under GST and legacy VAT systems, including return filings, reconciliations, and audit preparations. Our experts reduce the compliance burden while ensuring 100% regulatory adherence.",
    span: "lg:col-span-1 lg:row-span-2"
  },
  {
    title: "Sales Tax/VAT Consultancy up to Tribunal Level",
    description: "For businesses dealing with legacy VAT and sales tax issues, we provide advisory and representation up to the tribunal level. This includes assessing liabilities, managing disputes, and pursuing appeals. Our experienced professionals offer strategic counsel to close long-standing matters efficiently.",
    span: "lg:col-span-2 lg:row-span-1"
  },
  {
    title: "GST Refund Monitoring",
    description: "Claiming GST refunds? We manage the entire lifecycle of refund applications.",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    title: "Indirect Tax Planning",
    description: "Proper planning can lead to significant savings. We analyze your transactions, supply chain, and operational model to identify tax-efficient strategies under the GST framework. Our tailored solutions help businesses reduce their tax burden while staying fully compliant with laws.",
    span: "lg:col-span-3 lg:row-span-1"
  }
];

const gstServices = [
  { title: "GST Refund Services", description: "We assist in preparing and filing GST refund applications for exports, inverted duty structures, and other eligible scenarios. Our process ensures minimal delays, complete documentation, and accurate compliance with GST provisions." },
  { title: "Compliance", description: "From registration to monthly and annual filings, we manage complete indirect tax compliance including GST, VAT, and other applicable levies. Our services help businesses avoid penalties, stay audit-ready, and maintain a clean compliance record." },
  { title: "GST Departmental Audit", description: "We provide comprehensive support during GST departmental audits — from document preparation and reconciliations to responding to notices and representation. Our team ensures you're prepared, compliant, and well-defended." },
  { title: "Health Check-Up", description: "Our GST health check identifies errors, leakages, and non-compliance risks across returns, ITC claims, and tax payments. It's an essential preventive tool for businesses looking to correct issues proactively and strengthen GST practices." },
  { title: "GST Training", description: "We conduct practical training sessions for finance teams on GST compliance, updates, ITC rules, and return filing. These sessions empower your staff to manage GST independently and reduce dependency on external support." },
  { title: "ITC Maximisation", description: "We help businesses review and restructure procurement, documentation, and return filings to maximize eligible ITC. Our approach ensures no legitimate credit is missed while maintaining strict compliance with GST laws." }
];

const faqs = [
  { question: "Who is required to register under GST?", answer: "Any business with aggregate turnover exceeding the threshold limit (₹20–₹40 lakh depending on state) must register under GST. Voluntary registration is also allowed." },
  { question: "What happens if GST returns are not filed on time?", answer: "Late filing attracts penalties, interest, and can restrict your input credit. Repeated delays can trigger audits or cancellation of registration." },
  { question: "How often do I need to file GST returns?", answer: "Most businesses file GSTR-1 and GSTR-3B monthly. Some under composition scheme or with smaller turnover file quarterly. Annual return (GSTR-9) is filed once a year." },
  { question: "What is GST reconciliation and why is it important?", answer: "It's the process of matching your purchase records with supplier-uploaded data in GSTN. It helps identify missing input credits and avoid future disputes." },
  { question: "Can I claim a refund of GST paid?", answer: "Yes, on exports, inverted duty structure, or excess tax paid. Timely and accurate documentation is critical for smooth refund processing." },
  { question: "What are the risks in GST audits?", answer: "Common issues include ITC mismatch, classification errors, non-compliance with e-invoicing, and procedural lapses. A proactive audit reduces litigation risks." },
  { question: "Why is e-invoicing mandatory for certain businesses?", answer: "To improve transparency and standardization. Currently, it's mandatory for businesses with turnover above ₹5 crore (subject to changes). Non-compliance leads to invalid invoices." }
];

export default function IndirectTaxPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#F8F9FA] selection:bg-[#FF3D3D] selection:text-white">
      
      
      {/* 1. Hero Section: The Golden Vault */}
      <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-[#0A0A0A]">
        {/* Animated Glowing Orb */}
        <div className="absolute inset-0 z-0 opacity-50 flex items-center justify-center">
          <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#FF3D3D]/20 via-orange-500/10 to-transparent blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="w-3 h-3 rounded-full bg-[#FF3D3D] animate-pulse" />
              <span className="text-white/90 text-lg md:text-xl font-black tracking-widest uppercase">
                Indirect Tax
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              Streamlining Compliance,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3D3D] to-yellow-300">Maximizing Efficiency</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-lg">
              In the ever-evolving landscape of indirect taxation, we navigate complexities related to GST, VAT, and other levies. Ensure full compliance, minimize liabilities, and support your growth.
            </p>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(245,166,35,0.15)] relative">
              <Image 
                unoptimized
                src="/images/indirect-hero.png" 
                alt="Golden Vault Indirect Tax" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Main Services: Apple-Style Bento Grid */}
      <section className="py-32 bg-[#F8F9FA] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-[#1A1A1A] tracking-tight mb-6">
              Comprehensive <br />
              <span className="text-[#FF3D3D]">Indirect Tax</span> Services
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">From registrations to litigation, refunds to advisory, we provide a one-stop solution for all your indirect tax needs.</p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
            {mainServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${service.span}`}
              >
                {/* Decorative background glow on hover */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#FF3D3D]/10 rounded-full blur-3xl group-hover:bg-[#FF3D3D]/20 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="text-4xl font-black text-gray-200 mb-4 group-hover:text-[#FF3D3D]/20 transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className={`font-bold text-[#1A1A1A] mb-4 leading-tight ${service.span.includes('row-span-2') ? 'text-3xl' : 'text-2xl'}`}>
                    {service.title}
                  </h3>
                </div>
                
                <div className="relative z-10">
                  <p className={`text-gray-600 leading-relaxed ${service.span.includes('col-span-1') && !service.span.includes('row-span-2') ? 'line-clamp-3' : ''}`}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. GST Services: Vertical Interactive Tabs */}
      <section className="py-32 bg-[#0A0A0A] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">GST Specialized Services</h2>
            <div className="w-24 h-1 bg-[#FF3D3D]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Tab List */}
            <div className="lg:col-span-5 flex flex-col space-y-2 relative z-10">
              {gstServices.map((service, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className="w-full text-left py-6 px-8 rounded-2xl transition-all duration-300 relative group overflow-hidden"
                  >
                    {/* Active Background */}
                    <div className={`absolute inset-0 bg-white/5 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                    
                    {/* Active Highlight Line */}
                    <div className={`absolute left-0 top-1/4 bottom-1/4 w-1 bg-[#FF3D3D] rounded-r-full transition-transform duration-300 ${isActive ? 'scale-y-100' : 'scale-y-0'}`} />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <h3 className={`text-2xl font-bold transition-colors ${isActive ? 'text-[#FF3D3D]' : 'text-gray-400'}`}>
                        {service.title}
                      </h3>
                      <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isActive ? '-rotate-90 text-[#FF3D3D]' : 'text-white/30 -rotate-90 opacity-0 group-hover:opacity-100'}`} />
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Right: Tab Content Display */}
            <div className="lg:col-span-7 relative h-[500px]">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-1 backdrop-blur-md overflow-hidden">
                <div className="w-full h-full bg-[#111] rounded-[2.4rem] p-12 relative flex flex-col justify-center overflow-hidden">
                  
                  {/* Background graphic */}
                  <div className="absolute inset-0 opacity-20">
                     <Image unoptimized src="/images/indirect-gst.png" alt="GST Services" fill className="object-cover" />
                     <div className="absolute inset-0 bg-[#111]/80" />
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="relative z-10"
                    >
                      <div className="w-20 h-20 rounded-full bg-[#FF3D3D]/20 flex items-center justify-center mb-8 border border-[#FF3D3D]/30">
                        <span className="text-3xl font-black text-[#FF3D3D]">
                          0{activeTab + 1}
                        </span>
                      </div>
                      <h3 className="text-4xl font-bold text-white mb-6">
                        {gstServices[activeTab].title}
                      </h3>
                      <p className="text-xl text-white/70 leading-relaxed">
                        {gstServices[activeTab].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FAQ Section (Unified Design) */}
      <section className="py-24 bg-[#FFF6F6] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Image & Rating Card */}
            <div className="relative w-full">
              <div className="relative w-full h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden shadow-xl border border-gray-200">
                <Image 
                  unoptimized 
                  src="/images/indirect-faq.png" 
                  alt="Tax Professionals" 
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
                Frequently Asked <span className="text-[#FF3D3D]">Questions</span>
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isActive = openFaq === index;
                  return (
                    <motion.div 
                      key={index} 
                      initial={false} 
                      className={`rounded-xl overflow-hidden shadow-sm transition-colors duration-300 ${isActive ? 'bg-[#b90a2a]' : 'bg-white'}`}
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

