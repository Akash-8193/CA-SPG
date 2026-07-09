import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#FFFFFF] text-[#1A1A1A]/70 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Useful Links & Follow Us */}
          <div className="space-y-10">
            <div>
              <h3 className="font-serif text-xl text-[#1A1A1A] mb-6 tracking-wide">Useful link</h3>
              <ul className="space-y-4 text-sm">
                <li><Link href="/" className="hover:text-[#FF3D3D] transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#FF3D3D] transition-colors">About Us</Link></li>
                <li><Link href="/partners" className="hover:text-[#FF3D3D] transition-colors">Partners Associates</Link></li>
                <li><Link href="/contact" className="hover:text-[#FF3D3D] transition-colors">Contact US</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-xl text-[#1A1A1A] mb-6 tracking-wide">Follow Us</h3>
              <div className="flex items-center space-x-4">
                <a href="#" className="w-9 h-9 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center hover:bg-[#FF3D3D] hover:border-[#FF3D3D] hover:text-[#1A1A1A] transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center hover:bg-[#FF3D3D] hover:border-[#FF3D3D] hover:text-[#1A1A1A] transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center hover:bg-[#FF3D3D] hover:border-[#FF3D3D] hover:text-[#1A1A1A] transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Our Services (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-xl text-[#1A1A1A] mb-6 tracking-wide">Our Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              {/* Column 1 */}
              <ul className="space-y-4 text-sm">
                <li><Link href="/services/auditing-assurance" className="hover:text-[#FF3D3D] transition-colors">Auditing And Assurance</Link></li>
                <li><Link href="/services/direct-tax" className="hover:text-[#FF3D3D] transition-colors">Direct Tax</Link></li>
                <li><Link href="/services/indirect-tax" className="hover:text-[#FF3D3D] transition-colors">Indirect Tax</Link></li>
                <li><Link href="/services/accounting" className="hover:text-[#FF3D3D] transition-colors">Accounting</Link></li>
                <li><Link href="/services/company-law" className="hover:text-[#FF3D3D] transition-colors">Company Law Matter Corporate Law Compliance</Link></li>
              </ul>
              {/* Column 2 */}
              <ul className="space-y-4 text-sm">
                <li><Link href="/services/financial-services" className="hover:text-[#FF3D3D] transition-colors">Financial Services</Link></li>
                <li><Link href="/services/infrastructural" className="hover:text-[#FF3D3D] transition-colors">Infrastructural Project Management</Link></li>
                <li><Link href="/services/management-consultancy" className="hover:text-[#FF3D3D] transition-colors">Management Consultancy</Link></li>
                <li><Link href="/services/ipo-services" className="hover:text-[#FF3D3D] transition-colors">IPO Service</Link></li>
                <li><Link href="/services/software-consultancy" className="hover:text-[#FF3D3D] transition-colors">Software Consultancy</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl text-[#1A1A1A] mb-6 tracking-wide">Contact Info</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-center space-x-4 group">
                <Mail className="w-5 h-5 text-[#FF3D3D] shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@casprakashgupta.com" className="hover:text-[#FF3D3D] transition-colors">info@casprakashgupta.com</a>
              </li>
              <li className="flex items-center space-x-4 group">
                <Mail className="w-5 h-5 text-[#FF3D3D] shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:ca.sprakashgupta@gmail.com" className="hover:text-[#FF3D3D] transition-colors">ca.sprakashgupta@gmail.com</a>
              </li>
              <li className="flex items-center space-x-4 group">
                <Phone className="w-5 h-5 text-[#FF3D3D] shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 9873508629</span>
              </li>
              <li className="flex items-center space-x-4 group">
                <MapPin className="w-5 h-5 text-[#FF3D3D] shrink-0 group-hover:scale-110 transition-transform" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-[#1A1A1A]/20 mt-16 pt-8 text-center text-xs text-[#1A1A1A]/70 bg-[#FFFFFF] p-4 text-[#1A1A1A] rounded-sm flex items-center justify-center font-medium">
          <p>Copyright © 2025 CA Satya Prakash Gupta. All rights reserved. Designed By Sprint Digitech.</p>
        </div>
      </div>
    </footer>
  );
}
