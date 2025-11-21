import React from 'react';
import { ArrowRight, CheckCircle2, Box, Layout, Clock } from 'lucide-react';
import { FULL_COMPANY_NAME, COMPANY_DESCRIPTION } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
          alt="Industrial Modular Site" 
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-slate-900/40"></div>
        {/* Grid pattern for industrial feel */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 flex-grow flex items-center">
        <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-8">
                <span className="w-2 h-2 rounded-full bg-cabindo-primary animate-pulse"></span>
                Solusi Konstruksi Masa Depan
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
                Bangun Lebih Cepat,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cabindo-primary to-amber-200">Lebih Efisien.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
                {FULL_COMPANY_NAME} menghadirkan inovasi bangunan modular dan modifikasi kontainer kualitas premium untuk kebutuhan industri, komersial, dan hunian.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
                <a 
                    href="#projects" 
                    className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-cabindo-secondary bg-cabindo-primary hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                >
                    Lihat Portfolio
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center px-8 py-4 border border-white/30 backdrop-blur-sm text-base font-bold rounded-lg text-white hover:bg-white hover:text-cabindo-secondary transition-all duration-300"
                >
                    Hubungi Kami
                </a>
            </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="relative z-20 bg-white/5 backdrop-blur-lg border-t border-white/10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center gap-4 text-white">
                    <div className="p-3 rounded-lg bg-cabindo-primary/20 text-cabindo-primary">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Pengerjaan Cepat</h4>
                        <p className="text-sm text-gray-400">Hingga 50% lebih cepat dari konvensional</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                    <div className="p-3 rounded-lg bg-cabindo-primary/20 text-cabindo-primary">
                        <Box size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Portable & Fleksibel</h4>
                        <p className="text-sm text-gray-400">Mudah dipindahkan dan dimodifikasi</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                    <div className="p-3 rounded-lg bg-cabindo-primary/20 text-cabindo-primary">
                        <CheckCircle2 size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Standar ISO</h4>
                        <p className="text-sm text-gray-400">Kualitas material terjamin dan tahan lama</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;