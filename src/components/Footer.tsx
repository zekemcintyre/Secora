import { Mail, MapPin } from 'lucide-react';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-sercora-offwhite border-t border-sercora-border pt-[60px] pb-[30px]">
      <div className="max-w-5xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="/logo.png"
                alt="Sercora Social Care Consultancy"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-sercora-text-light font-sans text-[13px] leading-relaxed max-w-sm mb-6">
              High-level consultancy and expert advocacy for Local Authorities and families. Restorative, legally informed, child-centered.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-bold text-sercora-navy tracking-[1px] uppercase text-[12px] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sercora-text hover:text-sercora-gold transition-colors font-sans text-[13px]">Home</a></li>
              <li><a href="#services" className="text-sercora-text hover:text-sercora-gold transition-colors font-sans text-[13px]">Our Services</a></li>
              <li><a href="#about" className="text-sercora-text hover:text-sercora-gold transition-colors font-sans text-[13px]">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="font-sans font-bold text-sercora-navy tracking-[1px] uppercase text-[12px] mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[13px] text-sercora-text font-sans">
                <Mail className="h-4 w-4 text-sercora-gold shrink-0 mt-0.5" />
                <a href="mailto:info@sercora.co.uk" className="hover:text-sercora-gold transition-colors">info@sercora.co.uk</a>
              </li>
              <li className="flex items-start gap-3 text-[13px] text-sercora-text font-sans">
                <MapPin className="h-4 w-4 text-sercora-gold shrink-0 mt-0.5" />
                <span>United Kingdom</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-sercora-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sercora-text-light font-sans text-[12px] text-center md:text-left">
            &copy; {new Date().getFullYear()} Sercora Social Care. All rights reserved.
          </p>
          <div className="flex gap-6 text-[12px]">
            <a href="#" className="text-sercora-text-light hover:text-sercora-navy">Privacy Policy</a>
            <a href="#" className="text-sercora-text-light hover:text-sercora-navy">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
