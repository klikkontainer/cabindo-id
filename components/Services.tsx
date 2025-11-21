import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-cabindo-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-cabindo-primary font-bold tracking-wider uppercase text-sm mb-2 block">Layanan Kami</span>
            <h2 className="text-4xl md:text-5xl font-bold text-cabindo-secondary leading-tight">
              Solusi Modular Terintegrasi
            </h2>
          </div>
          <p className="text-gray-600 max-w-md text-lg leading-relaxed">
             Dari kantor lapangan hingga bangunan permanen, kami menyediakan solusi ruang yang efisien dan berkualitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
                key={index} 
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
            >
              {/* Hover Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cabindo-primary to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-cabindo-secondary transition-colors duration-500">
                    <service.icon className="w-8 h-8 text-cabindo-secondary group-hover:text-white transition-colors duration-500" />
                </div>
                <span className="text-5xl font-bold text-gray-100 group-hover:text-gray-50 transition-colors select-none">
                    0{index + 1}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-cabindo-secondary mb-4 group-hover:text-cabindo-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center text-sm font-bold text-cabindo-secondary group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                Pelajari Lebih Lanjut
                <ArrowUpRight className="w-4 h-4 ml-2 text-cabindo-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;