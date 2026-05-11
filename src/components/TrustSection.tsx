import { CheckCircle2, Heart, Shield, Star, Users } from 'lucide-react';
import React from 'react';

const values = [
  {
    title: 'Child-Centered',
    description: 'We prioritise the safety, well-being, and voice of the child inside every procedure.',
    icon: Heart,
  },
  {
    title: 'Integrity',
    description: 'Transparent, legally sound, and accountable practices across all our services.',
    icon: Shield,
  },
  {
    title: 'Clarity',
    description: 'Simplifying complex statutory processes into clear, actionable pathways.',
    icon: CheckCircle2,
  },
];

export default function TrustSection() {
  return (
    <section id="about" className="bg-white">
      {/* Values Trust Bar - Adapting original values into the trust-bar aesthetic */}
      <div className="min-h-[108px] bg-sercora-navy text-white flex flex-col lg:flex-row items-center justify-center lg:justify-around px-10 py-8 lg:py-0 border-b border-sercora-border">
        <div className="flex flex-col md:flex-row items-center justify-center gap-[20px] md:gap-[40px] w-full">
          {values.map((value, idx) => (
            <div key={idx} className="flex items-center gap-[15px]">
              <div className="text-sercora-gold flex items-center justify-center">
                <value.icon className="h-[24px] w-[24px]" />
              </div>
              <div className="flex flex-col text-left max-w-[200px]">
                <b className="font-sans text-[14px] uppercase tracking-[1px] leading-tight block">{value.title}</b>
                <span className="font-sans text-[12px] opacity-70 leading-snug">{value.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
