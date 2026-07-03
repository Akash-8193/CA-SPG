import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-deep-navy text-white/80 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand & Socials */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif font-bold text-3xl tracking-widest text-white">SPGK</h2>
              <p className="text-sm tracking-[0.2em] uppercase text-luxury-gold mt-1">& Associates</p>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-white/60">
              Transforming complexity into clarity and financial challenges into opportunities.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold hover:text-deep-navy transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold hover:text-deep-navy transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold hover:text-deep-navy transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-white mb-6 tracking-wide">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-luxury-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-luxury-gold transition-colors">About Us</Link></li>
              <li><Link href="/partners" className="hover:text-luxury-gold transition-colors">Partners & Associates</Link></li>
              <li><Link href="/contact" className="hover:text-luxury-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg text-white mb-6 tracking-wide">Core Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services/auditing-assurance" className="hover:text-luxury-gold transition-colors">Auditing & Assurance</Link></li>
              <li><Link href="/services/direct-tax" className="hover:text-luxury-gold transition-colors">Direct Tax</Link></li>
              <li><Link href="/services/indirect-tax" className="hover:text-luxury-gold transition-colors">Indirect Tax</Link></li>
              <li><Link href="/services/company-law" className="hover:text-luxury-gold transition-colors">Company Law Matters</Link></li>
              <li><Link href="/services/financial-services" className="hover:text-luxury-gold transition-colors">Financial Services</Link></li>
              <li><Link href="/services" className="hover:text-luxury-gold transition-colors italic">View All Services →</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg text-white mb-6 tracking-wide">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <span>Indrapuram, Ghaziabad<br/>New Delhi NCR, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold shrink-0" />
                <span>+91 9873508629</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:info@casprakashgupta.com" className="hover:text-luxury-gold transition-colors">info@casprakashgupta.com</a>
                  <a href="mailto:ca.sprakashgupta@gmail.com" className="hover:text-luxury-gold transition-colors">ca.sprakashgupta@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} SPGK & ASSOCIATES. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
