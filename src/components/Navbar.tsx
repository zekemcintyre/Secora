import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-sercora-border">
      <div className="max-w-5xl mx-auto px-10">
        <div className="flex justify-between h-20 items-center">
          {/* Brand name */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="flex flex-col">
              <span className="font-serif text-[24px] font-bold tracking-[2px] text-sercora-navy leading-none">
                Sercora Social Care
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-[30px]">
            <a href="/" className="font-sans text-[14px] font-medium text-sercora-navy hover:text-sercora-gold uppercase transition-colors">Home</a>
            <a href="/#services" className="font-sans text-[14px] font-medium text-sercora-navy hover:text-sercora-gold uppercase transition-colors">Services</a>
            <a href="/#team" className="font-sans text-[14px] font-medium text-sercora-navy hover:text-sercora-gold uppercase transition-colors">Our Experts</a>
            <a href="/#about" className="font-sans text-[14px] font-medium text-sercora-navy hover:text-sercora-gold uppercase transition-colors">About Us</a>
            <a href="/#contact" className="px-[24px] py-[12px] rounded-[2px] bg-sercora-gold hover:bg-sercora-gold-hover text-white font-semibold text-[13px] uppercase tracking-[1px] transition-colors">
              Get in touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="text-sercora-navy hover:text-sercora-gold focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-50 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-sercora-navy hover:bg-gray-50">Home</a>
            <a href="/#services" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-sercora-navy hover:bg-gray-50">Services</a>
            <a href="/#team" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-sercora-navy hover:bg-gray-50">Our Experts</a>
            <a href="/#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-sercora-navy hover:bg-gray-50">About Us</a>
            <div className="pt-4">
              <a href="/#contact" onClick={() => setIsOpen(false)} className="block w-full text-center px-6 py-3 rounded-full bg-sercora-gold text-white font-medium text-base shadow-md">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
