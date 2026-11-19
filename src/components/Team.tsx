import React from 'react';

export default function Team() {
  return (
    <section id="team" className="py-[80px] bg-sercora-offwhite border-y border-sercora-border">
      <div className="max-w-5xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-center">
          
          {/* Text Content */}
          <div>
            <div className="mb-[20px]">
              <h2 className="font-serif text-[32px] font-normal text-sercora-navy mb-[10px]">
                Our Team
              </h2>
              <div className="w-[60px] h-[3px] bg-sercora-gold"></div>
            </div>
            
            <p className="font-sans text-[14px] text-sercora-text-light leading-relaxed mb-[20px]">
              At Sercora Social Care, we know that social care is rarely straightforward. That's why our team brings together wide-ranging experience across family court proceedings, Local Authority processes and child protection, so that every family and every organisation we work with gets the full picture, not just part of it.
            </p>
            
            <p className="font-sans text-[14px] text-sercora-text-light leading-relaxed mb-[20px]">
              Our experienced social workers work closely together on every case. That means when you come to us, you benefit from a team that talks to each other, challenges each other, and works towards the same goal: the best possible outcome for the children and families involved.
            </p>
            
            <p className="font-sans text-[14px] text-sercora-text-light leading-relaxed">
              Whether we are supporting a parent through care proceedings or helping an organisation improve its practice, we approach every situation the same way: thoroughly, honestly and with clear professional guidance you can actually understand and act on.
            </p>
          </div>
          
          {/* Visual / Image */}
          <div className="relative mt-8 lg:mt-0">
            {/* Geometric background offset */}
            <div className="absolute -bottom-[20px] -right-[20px] w-full h-full bg-white border border-sercora-border z-0"></div>
            
            {/* Main Image */}
            <div className="relative z-10 border-[8px] border-white shadow-[0_15px_40px_rgba(0,0,0,0.1)] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80" 
                alt="Members of the Sercora team working together around a table" 
                className="w-full h-auto object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
