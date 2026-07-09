"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";



// Content Data
const coreServices = [
  {
    title: "Income Tax Return Filing",
    description: "We simplify ITR filing for all entities, whether you're a salaried individual, HUF, growing startup, or large enterprise. Our experts ensure accuracy, tax-saving insights, and timely submissions, helping you avoid penalties and optimize refunds."
  },
  {
    title: "Preparation at Appeal",
    description: "If your tax case progresses to the appellate level, we prepare strong, data-backed appeals that align with legal precedents and your business objectives. Our goal: to defend your interests and reverse unjust assessments."
  },
  {
    title: "Scrutiny Assessment",
    description: "We manage scrutiny assessments from start to finish, responding to notices, gathering documentation, and communicating with tax officials. Our proactive approach minimizes risk, delays, and unnecessary tax burdens."
  },
  {
    title: "Representation before Income Tax Authorities",
    description: "From responding to tax notices to defending your case in person, we act as your voice before income tax authorities. Our team's experience ensures clarity, professionalism, and favorable resolutions."
  },
  {
    title: "TDS & TCS Filing and Compliances",
    description: "We manage end-to-end Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) compliance, including timely filing of quarterly returns, issuing certificates, and reconciling Form 26AS. Our services are designed to prevent defaults, mismatches, and penalties while ensuring smooth operations in payroll, vendor payments, and contractual obligations. We also assist with TDS scrutiny cases and demand reconciliations."
  },
  {
    title: "PAN/TAN Application",
    description: "Need a new PAN or TAN? We streamline the entire application process, whether for individuals, firms, or foreign entities, ensuring error-free documentation and fast-track approvals."
  }
];

const advancedServices = [
  { title: "Advance Tax Computation", description: "Our tax planning specialists forecast your income and calculate advance tax payments to help avoid interest liabilities and support better cash flow management throughout the year." },
  { title: "Tax Audit under the Income Tax Act", description: "We conduct tax audits that go beyond compliance, focusing on risk reduction, identifying anomalies, and offering financial insights that strengthen your internal controls and decision-making." },
  { title: "Section 10 & 12 Exemption Advisory", description: "For NGOs, charitable trusts, and institutions seeking exemption under Sections 10 or 12, we offer expert advisory and documentation support, helping you maximize benefits while remaining 100% compliant." },
  { title: "Clearance Certificates for Foreign Travel", description: "Certain high-value individuals and professionals traveling abroad are required to obtain tax clearance certificates. We assist in acquiring these from the appropriate Income Tax authorities by preparing the required financial disclosures, tax computation, and addressing any pending dues. Our proactive assistance ensures that your international travel remains unhindered and compliant with Indian tax laws." },
  { title: "Advance Tax Rulings", description: "We guide businesses, especially those with cross-border operations, in obtaining Advance Rulings on tax matters that involve ambiguity or dual interpretations. This service is crucial for avoiding future litigation and ensuring tax certainty. From drafting applications to legal representation before the Authority for Advance Rulings (AAR), we ensure your business gets clarity on tax treatment before entering into complex transactions." },
  { title: "Opinion and Certification under Direct Tax", description: "We provide authoritative tax opinions and issue required certifications for transactions, deductions, exemptions, and reporting. This helps businesses stay legally compliant while mitigating tax risks and uncertainties." }
];

const strategicServices = [
  { title: "Tax Due Diligence", description: "Our due diligence process assesses historical tax compliance, ongoing litigations, and potential red flags in target companies. It's essential for informed decision-making during M&A, fundraising, or restructuring deals." },
  { title: "Tax Comply Health Checkup", description: "We examine your tax filings, TDS, advance tax, and audit processes to ensure accuracy and adherence to the latest laws. This checkup helps you avoid penalties, rectify gaps, and streamline future compliance." },
  { title: "Transfer Pricing Certification", description: "We help businesses with Transfer Pricing documentation and certifications under Indian and international guidelines. Our team ensures that your inter-company transactions withstand scrutiny and align with global standards." },
  { title: "International Taxation", description: "We offer strategic guidance on withholding tax, DTAA applicability, foreign remittances, and cross-border transactions. Our team ensures optimal tax structuring while staying compliant with domestic and global laws." },
  { title: "Employee Expertise Planning with Taxation", description: "We help organizations design efficient employee tax structures, covering perks, ESOPs, bonuses, and expatriate tax planning. The goal is to minimize tax burden while maximizing employee satisfaction and compliance." }
];

const faqs = [
  { question: "What kind of businesses can apply for financial services?", answer: "Both startups and established businesses across sectors like manufacturing, infrastructure, energy, and services can apply. We tailor solutions based on project type, scale, and funding goals." },
  { question: "How long does it take to secure a loan or funding?", answer: "The timeline varies by funding type. Term loans and machine loans may take 2–6 weeks, while equity or VC funding can take several months due to due diligence and negotiation stages." },
  { question: "What documents are needed for applying for working capital or term loans?", answer: "Generally, KYC documents, project report, financial statements, income tax returns, and bank statements are required. We help compile and structure these for optimal impact." },
  { question: "What is the CGTMSE scheme and who can benefit from it?", answer: "CGTMSE is a collateral-free loan guarantee scheme for micro and small enterprises. First-time entrepreneurs and small business owners can benefit from loans up to ₹2 crore without pledging security." },
  { question: "Can you help with both debt and equity funding?", answer: "Yes. We offer comprehensive services that cover all types of funding—debt (loans, OD/CC), equity (VC, private investors), and hybrid instruments like NCDs—depending on your business needs." },
  { question: "Are government grants and subsidies applicable to all industries?", answer: "Many central and state schemes are sector-specific (like textile, MSME, energy, etc.). We help identify suitable schemes based on your business profile and location." },
  { question: "What is the benefit of opting for venture capital funding?", answer: "Venture capital not only brings in large-scale funding but also provides access to mentorship, networking, and scalability support. It's ideal for startups aiming for rapid growth and market penetration." }
];

export default function DirectTaxPage() {
  const [activeHoverId, setActiveHoverId] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#FF3D3D] selection:text-white">
      
      
      {/* 1. Hero Section: Fluid Glassmorphism */}
      <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
        {/* Animated Fluid Mesh Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-[#050505]" />
          <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[0%] -left-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-[#FF3D3D]/20 to-orange-500/20 blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2.5rem] p-10 lg:p-20 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF3D3D] via-purple-500 to-blue-500" />
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold tracking-wider uppercase border border-white/10">
                Direct Tax
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                Navigating Complexity,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3D3D] to-orange-400">Maximizing Compliance</span>
              </h1>
              <p className="text-xl text-white/60 leading-relaxed">
                We help individuals, firms, companies, and trusts navigate the complexities of India's direct tax regime with absolute clarity. From return filing to appeals, our experts ensure you're compliant, audit-ready, and financially efficient.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Core Services: Apple-style Sticky Scroll */}
      <section className="relative py-24 bg-white border-t-4 border-[#FF3D3D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative items-start">
            
            {/* Sticky Left Visual */}
            <div className="hidden lg:block lg:col-span-5 sticky top-32">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative bg-gray-50">
                <Image 
                  unoptimized 
                  src="/images/direct-tax-hero.png" 
                  alt="Tax Services" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-10">
                  <h3 className="text-4xl font-bold text-white mb-2">Core Tax Compliances</h3>
                  <p className="text-white/80">Flawless execution from filing to representation.</p>
                </div>
              </div>
            </div>

            {/* Scrolling Right Content */}
            <div className="lg:col-span-7 flex flex-col space-y-16">
              <div className="lg:hidden mb-8">
                <h2 className="text-4xl font-bold text-[#1A1A1A]">Core Tax Compliances</h2>
              </div>
              
              {coreServices.map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#FAFAFA] border border-gray-200 p-8 lg:p-12 rounded-3xl shadow-sm hover:shadow-xl hover:border-[#FF3D3D]/30 transition-all duration-300 group"
                >
                  <div className="text-6xl font-black text-gray-200 mb-6 group-hover:text-[#FF3D3D]/10 transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-lg text-[#1A1A1A]/70 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Advanced Compliances: Hover-Reveal List */}
      <section className="py-32 bg-[#111111] border-t border-white/10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Advanced Tax Solutions</h2>
            <div className="w-24 h-1 bg-[#FF3D3D]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
            
            {/* Interactive List */}
            <div className="flex flex-col space-y-2">
              {advancedServices.map((service, idx) => (
                <div 
                  key={idx} 
                  onMouseEnter={() => setActiveHoverId(idx)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  className="group relative border-b border-white/10 py-6 cursor-pointer"
                >
                  {/* Highlight Bar */}
                  <div className={`absolute left-0 top-0 h-full w-1 bg-[#FF3D3D] transition-all duration-300 ${activeHoverId === idx ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`} />
                  
                  <div className="pl-6 flex items-center justify-between">
                    <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${activeHoverId === idx ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                      {service.title}
                    </h3>
                    <ArrowRight className={`w-6 h-6 transition-all duration-300 ${activeHoverId === idx ? 'text-[#FF3D3D] translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                  </div>
                  
                  {/* Description reveals on hover inline for mobile, but also handles state for desktop image */}
                  <AnimatePresence>
                    {activeHoverId === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-6 pt-4 overflow-hidden"
                      >
                        <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop Sticky Image Container */}
            <div className="hidden lg:flex items-center justify-center sticky top-40 h-[600px]">
              <div className="relative w-full max-w-[500px] aspect-square rounded-full border border-white/10 bg-white/5 overflow-hidden backdrop-blur-md shadow-[0_0_50px_rgba(255,61,61,0.1)] flex items-center justify-center p-4">
                 {/* Rotating Dashed Border */}
                 <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-spin-slow" style={{ animationDuration: '20s' }} />
                 
                 <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image 
                      unoptimized 
                      src="/images/direct-tax-hover.png" 
                      alt="Advanced Tax Services" 
                      fill 
                      className={`object-cover transition-transform duration-1000 ${activeHoverId !== null ? 'scale-110 blur-0' : 'scale-100 blur-[2px] grayscale'}`}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* 4. Strategic Tax Consulting (Items 7-11) */}
      <section className="py-24 bg-[#FAFAFA] border-t border-gray-200 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4">Strategic Tax Consulting</h2>
            <div className="w-20 h-1 bg-[#FF3D3D] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicServices.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 lg:p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-6 flex-shrink-0">
                  <span className="text-[#FF3D3D] font-bold text-xl">0{idx + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{service.title}</h3>
                <p className="text-[#1A1A1A]/70 leading-relaxed mt-auto">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ Section (Unified Design) */}
      <section className="py-24 bg-[#FFF6F6] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Image & Rating Card */}
            <div className="relative w-full">
              <div className="relative w-full h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden shadow-xl border border-gray-200">
                <Image 
                  unoptimized 
                  src="/images/faq-directtax.png" 
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
