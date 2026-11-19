import { BookOpen, Briefcase, GraduationCap, Scale } from 'lucide-react';
import React from 'react';

const services = [
  {
    title: 'Social Services Involvement Advocacy',
    description: 'Supporting parents involved with children’s services, including the Public Law Outline (PLO) and child protection processes.',
    icon: Scale,
  },
  {
    title: 'Private Law Support',
    description: 'Expert help with family court proceedings, dispute resolution and child arrangements.',
    icon: BookOpen,
  },
  {
    title: 'Consultancy',
    description: 'Auditing, framework development, policy review and compliance advice for Local Authorities and care providers.',
    icon: Briefcase,
  },
  {
    title: 'Training & Best Practice',
    description: 'Specialist workshops, continuing professional development (CPD) and mentoring for social care professionals.',
    icon: GraduationCap,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-[40px] bg-white">
      <div className="max-w-5xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-[20px] border border-sercora-border text-center transition-colors duration-300 hover:border-sercora-gold"
            >
              <div className="w-[40px] h-[40px] mx-auto mb-[15px] bg-sercora-offwhite rounded-full flex items-center justify-center text-sercora-gold">
                <service.icon className="h-5 w-5" />
              </div>
              
              <h3 className="font-sans text-[15px] font-bold text-sercora-navy mb-[10px] uppercase tracking-[0.5px]">
                {service.title}
              </h3>
              
              <p className="font-sans text-[12px] text-sercora-text-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
