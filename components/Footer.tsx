import React from 'react';
import { FULL_COMPANY_NAME } from '../constants';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">{FULL_COMPANY_NAME}</h2>
                <p className="text-gray-400 max-w-sm mb-6">
                    Mitra terpercaya Anda untuk solusi bangunan modular, kontainer kantor, dan modifikasi kontainer berkualitas tinggi di Indonesia.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-cabindo-yellow transition-colors"><Facebook size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-cabindo-yellow transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-cabindo-yellow transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-cabindo-yellow transition-colors"><Twitter size={20} /></a>
                </div>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Layanan</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-cabindo-yellow transition-colors">Office Container</a></li>
                    <li><a href="#" className="hover:text-cabindo-yellow transition-colors">Modular Building</a></li>
                    <li><a href="#" className="hover:text-cabindo-yellow transition-colors">Portable Camp</a></li>
                    <li><a href="#" className="hover:text-cabindo-yellow transition-colors">Toilet & Ablution</a></li>
                    <li><a href="#" className="hover:text-cabindo-yellow transition-colors">Sewa Kontainer</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Tautan Cepat</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li><a href="#about" className="hover:text-cabindo-yellow transition-colors">Tentang Kami</a></li>
                    <li><a href="#projects" className="hover:text-cabindo-yellow transition-colors">Proyek</a></li>
                    <li><a href="#contact" className="hover:text-cabindo-yellow transition-colors">Hubungi Kami</a></li>
                    <li><a href="#" className="hover:text-cabindo-yellow transition-colors">Karir</a></li>
                    <li><a href="#" className="hover:text-cabindo-yellow transition-colors">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} {FULL_COMPANY_NAME}. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
