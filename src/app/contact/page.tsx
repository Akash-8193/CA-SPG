"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#F9F9F9] selection:bg-[#b90a2a] selection:text-white font-sans overflow-hidden">
      
      {/* 1. Hero Section (Standard 100vh Layout) */}
      <section className="relative h-[100vh] flex flex-col justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image 
            unoptimized
            src="/images/dd_hero_1783618496301.png" 
            alt="Contact Us" 
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
              <Mail className="w-4 h-4 text-[#b90a2a]" />
              <span className="text-[#b90a2a] text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                We're Here to Help
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white tracking-tight leading-[1.05] mb-8">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b90a2a] to-[#ff4d4d]">Touch</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light">
              Whether you need expert advice, want to schedule a consultation, or have a quick query, reach out and our team will get back to you promptly.
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-gray-400 text-xs tracking-[0.2em] uppercase mb-4">Scroll Down</span>
          <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }} transition={{ duration: 2, ease: "linear", repeat: Infinity }}
              className="w-full h-1/2 bg-[#b90a2a]"
            />
          </div>
        </motion.div>
      </section>

      {/* 2. Form & Details Split Layout */}
      <section className="py-16 lg:py-24 relative z-20 -mt-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
               
               {/* Left: Contact Form */}
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-[60%] bg-white p-8 lg:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100"
               >
                  <h2 className="text-3xl font-bold text-[#1A1A1A] mb-2">Send a Message</h2>
                  <p className="text-gray-500 mb-8">Fill out the form below and we will get back to you shortly.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Your Name</label>
                           <input 
                              type="text" 
                              required
                              className="w-full bg-[#F9F9F9] border border-gray-200 rounded-xl px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b90a2a]/20 focus:border-[#b90a2a] transition-all"
                              placeholder="John Doe"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Email Address</label>
                           <input 
                              type="email" 
                              required
                              className="w-full bg-[#F9F9F9] border border-gray-200 rounded-xl px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b90a2a]/20 focus:border-[#b90a2a] transition-all"
                              placeholder="john@example.com"
                           />
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Phone Number</label>
                           <input 
                              type="tel" 
                              className="w-full bg-[#F9F9F9] border border-gray-200 rounded-xl px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b90a2a]/20 focus:border-[#b90a2a] transition-all"
                              placeholder="+91 9876543210"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Subject</label>
                           <input 
                              type="text" 
                              required
                              className="w-full bg-[#F9F9F9] border border-gray-200 rounded-xl px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b90a2a]/20 focus:border-[#b90a2a] transition-all"
                              placeholder="How can we help?"
                           />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Message</label>
                        <textarea 
                           required
                           rows={5}
                           className="w-full bg-[#F9F9F9] border border-gray-200 rounded-xl px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b90a2a]/20 focus:border-[#b90a2a] transition-all resize-none"
                           placeholder="Write your message here..."
                        />
                     </div>

                     <button 
                        type="submit"
                        disabled={formStatus !== "idle"}
                        className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center transition-all ${
                           formStatus === "success" 
                           ? "bg-green-500 text-white" 
                           : "bg-[#b90a2a] text-white hover:bg-[#9a0822] shadow-lg hover:shadow-[#b90a2a]/30"
                        }`}
                     >
                        {formStatus === "idle" && (
                           <>Send Message <Send className="ml-2 w-4 h-4" /></>
                        )}
                        {formStatus === "submitting" && "Sending..."}
                        {formStatus === "success" && (
                           <>Message Sent! <CheckCircle2 className="ml-2 w-4 h-4" /></>
                        )}
                     </button>
                  </form>
               </motion.div>

               {/* Right: Contact Details */}
               <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-[40%] flex flex-col justify-center space-y-6 pt-10 lg:pt-0"
               >
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#b90a2a]/30 transition-all group flex items-start space-x-6">
                     <div className="w-14 h-14 bg-[#F9F9F9] group-hover:bg-[#b90a2a] rounded-full flex items-center justify-center shrink-0 transition-colors">
                        <MapPin className="w-6 h-6 text-[#b90a2a] group-hover:text-white transition-colors" />
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-[#1A1A1A] mb-2">Our Office</h4>
                        <p className="text-gray-600 leading-relaxed">Indrapuram,<br/>Ghaziabad</p>
                     </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#b90a2a]/30 transition-all group flex items-start space-x-6">
                     <div className="w-14 h-14 bg-[#F9F9F9] group-hover:bg-[#b90a2a] rounded-full flex items-center justify-center shrink-0 transition-colors">
                        <Phone className="w-6 h-6 text-[#b90a2a] group-hover:text-white transition-colors" />
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-[#1A1A1A] mb-2">Call Us</h4>
                        <p className="text-gray-600 leading-relaxed">+91 9873508629</p>
                     </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#b90a2a]/30 transition-all group flex items-start space-x-6">
                     <div className="w-14 h-14 bg-[#F9F9F9] group-hover:bg-[#b90a2a] rounded-full flex items-center justify-center shrink-0 transition-colors">
                        <Mail className="w-6 h-6 text-[#b90a2a] group-hover:text-white transition-colors" />
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-[#1A1A1A] mb-2">Email Us</h4>
                        <p className="text-gray-600 leading-relaxed break-all">ca.sprakashgupta@gmail.com</p>
                        <p className="text-gray-600 leading-relaxed break-all mt-1">info@casprakashgupta.com</p>
                     </div>
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

      {/* 3. Embedded Google Map */}
      <section className="py-12 bg-[#F9F9F9]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
               <h2 className="text-3xl font-bold text-[#1A1A1A] mb-2">Find Us on the Map</h2>
               <div className="w-12 h-1 bg-[#b90a2a] mx-auto" />
            </div>
            
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="w-full h-[500px] rounded-3xl overflow-hidden shadow-xl border border-gray-200 relative"
            >
               {/* Note: Using a general embed for Indirapuram, Ghaziabad as requested in content */}
               <iframe 
                  src="https://maps.google.com/maps?q=Indirapuram,%20Ghaziabad&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
               />
            </motion.div>
         </div>
      </section>

    </main>
  );
}
