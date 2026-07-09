"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";



// Content Data
const accountingServices = [
  { title: "Bookkeeping and Preparation of Final Accounts and Financials", description: "We handle daily bookkeeping with precision—capturing every financial transaction in line with statutory norms. At period-end, we prepare comprehensive financial statements, including balance sheets, P&L, and cash flow reports. Our services provide clear visibility into your financial health, supporting both compliance and strategic planning." },
  { title: "Payroll Management & PF/ESI Compliance", description: "We manage the complete payroll lifecycle—from salary calculations and payslip generation to PF, ESI, TDS deductions, and regulatory filings. Our streamlined approach ensures timely payouts and strict compliance with labor laws, reducing risk and increasing employee satisfaction." },
  { title: "MIS Preparation & Review", description: "Management Information Systems (MIS) are vital for informed decision-making. We prepare and review periodic MIS reports tailored to your KPIs—covering revenues, expenses, margins, and forecasts. These insights help business leaders monitor performance and pivot strategies with confidence." },
  { title: "Review Compliance with Accounting Standards", description: "Staying compliant with applicable accounting standards (IND AS, AS, or IFRS) is essential for credibility and audit-readiness. We perform detailed reviews to ensure your financials align with the required frameworks, highlighting any gaps and providing corrective actions." },
  { title: "Review of Accounting Systems", description: "We evaluate your existing accounting setup, workflows, and software usage to identify inefficiencies or compliance risks. Our review helps optimize system performance, reduce redundancies, and enhance internal controls—resulting in accurate, audit-ready books." },
  { title: "Design, Implementation & Review of Accounting Manual", description: "An accounting manual standardizes processes across your organization. We design and implement tailored manuals that cover procedures, controls, and reporting protocols. Periodic reviews ensure the manual stays relevant, promoting consistency and transparency in financial practices." },
  { title: "Outsourced Accounting for MNCs", description: "Multinational companies benefit from our specialized outsourced accounting services, which ensure local compliance while aligning with global reporting standards. We manage statutory books, reconciliations, and regulatory filings—enabling MNCs to operate efficiently in the Indian business environment." },
  { title: "Accounting for Direct & Indirect Tax Filings", description: "Accurate accounting is the backbone of timely and correct tax filings. We prepare ledgers and reports that support GST, TDS, income tax, and other filings, ensuring zero discrepancies. This minimizes audit risks and helps businesses claim rightful credits and deductions." }
];

const outsourcingServices = [
  { title: "Bookkeeping and Accounting", description: "We manage day-to-day accounting including data entry, ledger maintenance, and preparation of financial statements. Our services ensure accuracy, transparency, and readiness for audits or investor scrutiny." },
  { title: "Virtual Accounting Services", description: "Our virtual accounting services allow businesses to access expert financial support without maintaining an in-house team. We use secure platforms to offer real-time updates, data accessibility, and cost-effective scalability." },
  { title: "Management Information System (MIS)", description: "We design and deliver custom MIS reports covering key financial and operational metrics. These insights help management monitor performance, improve budgeting, and make informed decisions." },
  { title: "Reconciliation for Bank & Vendor", description: "We offer periodic reconciliation services for bank statements, vendor accounts, and receivables. This ensures error-free books, fraud detection, and alignment with financial records." },
  { title: "Payroll Processing Services", description: "Our payroll services include salary processing, payslip generation, and compliance with PF, ESI, and TDS requirements. We ensure accurate, confidential, and timely payroll operations for businesses of all sizes." },
  { title: "GST / VAT / HST Accounting", description: "We handle bookkeeping and reporting for GST, VAT, and HST as per jurisdictional requirements. Our team ensures that indirect tax entries are accurately accounted for, reconciled, and audit-ready." },
  { title: "Audit and Assurance Services", description: "We provide statutory and internal audit services aligned with Indian and global standards. Our audits enhance credibility, improve internal controls, and meet regulatory requirements." },
  { title: "Tax Return Preparation and Compliance", description: "We assist individuals and businesses in preparing accurate tax returns and ensuring timely filings. Our process minimizes errors, manages deductions, and aligns with local and international tax regulations." },
  { title: "Management and Financial Reporting", description: "We generate detailed management and financial reports to provide visibility into financial health and performance. These reports help stakeholders track growth, identify issues, and take action." },
  { title: "Budgeting and Forecasting", description: "We help businesses build realistic budgets and financial forecasts that align with their goals. Our services enable better cash flow management, cost planning, and strategic investments." },
  { title: "QuickBooks & Cloud Accounting Solutions", description: "We set up and manage cloud-based accounting tools like QuickBooks Desktop/Online, Zoho, and others. Our services include migration, customization, training, and ongoing support for efficient financial management." }
];

const faqs = [
  { question: "Why is outsourced accounting beneficial for businesses?", answer: "Outsourcing ensures accuracy, saves time, and provides expert oversight while reducing overhead costs. It also helps businesses scale operations without investing in full-time resources." },
  { question: "What financial reports are included in your final accounts preparation?", answer: "We prepare a complete set of financials including balance sheet, profit & loss account, cash flow statement, and accompanying schedules, ensuring full statutory compliance." },
  { question: "Can you help ensure our accounting aligns with Indian and international standards?", answer: "We review and align your financial reporting with applicable standards such as IND AS, AS, or IFRS depending on your business type and jurisdictional requirements." },
  { question: "What's included in your payroll management service?", answer: "Our payroll service covers salary computation, payslip generation, statutory deductions (PF, ESI, TDS), compliance filings, and employee query handling." },
  { question: "How often are MIS reports prepared?", answer: "MIS reports can be prepared monthly, quarterly, or as per your needs. We customize formats to highlight KPIs relevant to your operations and strategic goals." },
  { question: "What is an accounting manual and why do I need one?", answer: "An accounting manual outlines standardized procedures for all accounting tasks. It ensures consistency, helps onboard new staff, and supports better internal control." },
  { question: "Do you provide support during audits or assessments?", answer: "Absolutely. Our well-maintained books and system reviews make audit preparation smooth. We also assist in responding to auditor queries and compiling required documentation." }
];

export default function AccountingPage() {
  const [activeHoverId, setActiveHoverId] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#F8F9FA] selection:bg-[#FF3D3D] selection:text-white">
      
      
      {/* 1. Hero Section: Corporate Silver */}
      <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-white">
        {/* Clean Geometric Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-100 via-white to-white" />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border-[40px] border-gray-50/50" />
          <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full border-[20px] border-[#FF3D3D]/5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gray-50 border border-gray-200">
              <span className="w-3 h-3 rounded-full bg-[#FF3D3D] animate-pulse" />
              <span className="text-[#1A1A1A] text-lg font-black tracking-widest uppercase">
                Accounting
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#1A1A1A] tracking-tight leading-[1.1]">
              Financial Clarity,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3D3D] to-[#b90a2a]">Smart Decisions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg font-medium">
              A solid accounting foundation is critical for financial transparency. From bookkeeping to strategic reporting, our scalable services bring precision and actionable insight to your table.
            </p>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative bg-white border border-gray-100">
              <Image 
                unoptimized
                src="/images/accounting-hero.png" 
                alt="Accounting Dashboard" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Accuracy</p>
                <p className="text-2xl font-black text-[#1A1A1A]">100%</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Accounting Services: Hover-Expand Grid */}
      <section className="py-32 bg-[#F8F9FA] relative border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-[#1A1A1A] tracking-tight mb-6">
                Core Accounting <br />
                <span className="text-[#FF3D3D]">Solutions</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#FF3D3D] rounded-full" />
            </div>
            <p className="text-xl text-gray-500 max-w-md">Streamlined financial operations, regulatory compliance, and strategic reporting for your leadership team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accountingServices.map((service, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveHoverId(idx)}
                onMouseLeave={() => setActiveHoverId(null)}
                className={`bg-white rounded-3xl p-8 border transition-all duration-500 cursor-pointer overflow-hidden relative ${activeHoverId === idx ? 'border-[#FF3D3D] shadow-2xl scale-[1.02]' : 'border-gray-200 shadow-sm'}`}
              >
                {/* Red top border highlight */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-[#FF3D3D] transition-transform duration-500 origin-left ${activeHoverId === idx ? 'scale-x-100' : 'scale-x-0'}`} />
                
                <div className="flex items-start justify-between mb-6">
                  <div className={`text-4xl font-black transition-colors duration-500 ${activeHoverId === idx ? 'text-[#FF3D3D]' : 'text-gray-200'}`}>
                    0{idx + 1}
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 ${activeHoverId === idx ? 'bg-[#FF3D3D] text-white' : 'bg-gray-50 text-gray-400'}`}>
                    <ArrowRight className={`w-5 h-5 transition-transform duration-500 ${activeHoverId === idx ? '-rotate-45' : 'rotate-0'}`} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#1A1A1A] leading-tight mb-2">
                  {service.title}
                </h3>
                
                <AnimatePresence>
                  {activeHoverId === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <p className="text-gray-600 mt-6 leading-relaxed pt-6 border-t border-gray-100">
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Accounts Outsourcing: Dark Masonry Stack */}
      <section className="py-32 bg-[#0A0A0A] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Accounts Outsourcing</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Scalable virtual accounting services ensuring accuracy, transparency, and readiness for audits.</p>
          </div>

          {/* CSS Columns for Masonry Effect */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {outsourcingServices.map((service, idx) => (
              <div 
                key={idx}
                className="break-inside-avoid bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-[#FF3D3D]/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(255,61,61,0.1)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF3D3D]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-1.5 h-8 bg-[#FF3D3D] rounded-full" />
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FF3D3D] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FAQ Section (Unified Design) */}
      <section className="py-12 lg:py-16 bg-[#FFF6F6] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Image & Rating Card */}
            <div className="relative w-full">
              <div className="relative w-full h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden shadow-xl border border-gray-200">
                <Image 
                  unoptimized 
                  src="/images/accounting-faq.png" 
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
