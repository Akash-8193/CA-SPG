"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Partners", href: "/partners" },
  { 
    name: "Services", 
    href: "/services",
    dropdown: [
      { name: "Auditing & Assurance", href: "/services/auditing-and-assurance" },
      { name: "Direct Tax", href: "/services/direct-tax" },
      { name: "Indirect Tax", href: "/services/indirect-tax" },
      { name: "Accounting", href: "/services/accounting" },
      { name: "Company Law", href: "/services/company-law" },
      { name: "Financial Services", href: "/services/financial-services" },
      { name: "Capital Advisory", href: "/services/capital-advisory" },
      { name: "IPO Services", href: "/services/ipo-service" },
      { name: "Management Consultancy", href: "/services/management-consultancy" },
      { name: "Due Diligence", href: "/services/due-diligence" },
      { name: "FEMA Advisory", href: "/services/fema-advisory" },
      { name: "ESG", href: "/services/esg" },
      { name: "Infrastructural Project Management", href: "/services/infrastructural-project-management" },
      { name: "Software Consultancy", href: "/services/software-consultancy" },
    ]
  },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        mobileMenuOpen
          ? "bg-[#FFFFFF] py-4" 
          : scrolled 
            ? "bg-[#FFFFFF]/95 backdrop-blur-xl shadow-md py-2.5" 
            : "bg-gradient-to-b from-[#1A1A1A]/80 to-transparent py-4"
      )}
    >
      <div className="relative z-[110] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="group relative z-50 flex items-center">
            <Image 
              src="/images/spgk-logo-header.png" 
              alt="SPGK & Associates Logo" 
              width={300}
              height={100}
              className={cn(
                "h-10 md:h-20 w-auto max-w-[70vw] object-contain transition-all duration-300 md:-my-4",
                (!scrolled && !mobileMenuOpen) && "brightness-0 invert drop-shadow-md"
              )}
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group flex items-center">
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-wide uppercase transition-all duration-300 flex items-center gap-1",
                    link.name === "Contact"
                      ? scrolled 
                        ? "bg-[#1A1A1A] text-white px-5 py-2.5 rounded-[1px] hover:bg-[#FF3D3D] hover:shadow-lg hover:-translate-y-0.5"
                        : "bg-white text-[#1A1A1A] px-5 py-2.5 rounded-[1px] hover:bg-[#FF3D3D] hover:text-white hover:shadow-lg hover:-translate-y-0.5"
                      : cn(scrolled ? "text-[#1A1A1A]" : "text-white/80", "hover:text-[#FF3D3D]")
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />}
                </Link>
                
                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white shadow-xl border border-gray-100 p-6 rounded-sm w-[600px] grid grid-cols-2 gap-x-6 gap-y-3 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="text-sm text-[#1A1A1A]/70 hover:text-[#FF3D3D] hover:translate-x-1 transition-all duration-200 block py-1"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={cn(
              "md:hidden relative z-50 p-2",
              scrolled || mobileMenuOpen ? "text-[#1A1A1A]" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-[#FFFFFF] z-[90] transition-transform duration-500 ease-in-out md:hidden overflow-y-auto",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col w-full min-h-full pt-28 px-6 pb-12 space-y-2">
        {navLinks.map((link) => (
          <div key={link.name} className="flex flex-col w-full border-b border-gray-100 pb-4">
            <div className="flex items-center justify-between w-full">
              {link.dropdown ? (
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="text-left text-[#1A1A1A] text-xl font-serif tracking-widest hover:text-[#FF3D3D] transition-colors"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#1A1A1A] text-xl font-serif tracking-widest hover:text-[#FF3D3D] transition-colors"
                >
                  {link.name}
                </Link>
              )}
              {link.dropdown && (
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-2 text-[#1A1A1A] bg-gray-50 rounded-full hover:bg-gray-100 ml-4"
                >
                  <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", mobileServicesOpen && "rotate-180")} />
                </button>
              )}
            </div>
            
            {/* Mobile Dropdown */}
            {link.dropdown && (
              <div 
                className={cn(
                  "flex flex-col space-y-4 pl-4 border-l-2 border-[#FF3D3D]/20 overflow-hidden transition-all duration-300",
                  mobileServicesOpen ? "max-h-[800px] mt-6 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                {link.dropdown.map((subLink) => (
                  <Link
                    key={subLink.name}
                    href={subLink.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#1A1A1A]/80 text-sm font-sans tracking-wide hover:text-[#FF3D3D] transition-colors"
                  >
                    {subLink.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        </div>
      </div>
    </header>
  );
}
