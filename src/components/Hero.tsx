import { ArrowRight } from 'lucide-react';
import React from 'react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden lg:bg-[linear-gradient(90deg,white_60%,#F9F9F9_40%)] min-h-[340px] flex items-center bg-white">
      {/* Background elements hidden to favor the geometric grid approach, keeping them conceptually but restyling container visually */}
      <div className="absolute inset-0 z-0 hidden">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-[#f8f9fa] transform -skew-x-12 translate-x-32 shadow-2xl"></div>
        <img 
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
          alt="Professional consulting"
          className="absolute right-0 top-0 w-1/2 h-full object-cover rounded-l-[40px] opacity-10 shadow-xl"
          referrerPolicy="no-referrer"
        />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-sercora-navy/10 to-transparent rounded-l-[40px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-10 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full py-16 lg:py-0">
        <div className="max-w-[450px]">
          <div className="mb-6">
            <img 
              src="/logo.png" 
              alt="Sercora Social Care Consultancy" 
              className="w-full max-w-[320px] h-auto object-contain"
            />
            <h1 className="sr-only">Sercora Social Care Consultancy</h1>
          </div>
          
          <p className="text-[18px] text-sercora-text-light font-sans leading-relaxed mb-[30px] max-w-[450px]">
            Providing independent, high-level support for Local Authorities and families navigating the complexities of Children’s Social Care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              className="inline-flex justify-center items-center px-[24px] py-[12px] rounded-[2px] bg-sercora-gold text-white font-semibold uppercase tracking-[1px] text-[13px] hover:bg-sercora-gold-hover transition-colors"
            >
              Our Approach
            </a>
          </div>
        </div>

        {/* Hero Visual Layer */}
        <div className="relative h-[340px] w-full flex items-center justify-center mt-10 lg:mt-0">
          <div className="absolute w-[280px] h-[200px] bg-[#D1D8E0] -translate-x-[30px] -translate-y-[20px] border-[8px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-10 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
              alt="Professional consulting overlay"
              className="w-full h-full object-cover opacity-60 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute w-[280px] h-[200px] bg-sercora-navy translate-x-[30px] translate-y-[20px] border-[8px] border-white shadow-[0_15px_40px_rgba(0,0,0,0.15)] z-20 flex items-center justify-center text-white italic font-serif p-5 text-center text-[16px]">
            "Where families find their voice, organisations find their strength, and professionals find their excellence."
          </div>
        </div>
      </div>
    </div>
  );
}
