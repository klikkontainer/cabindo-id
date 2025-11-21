import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { FULL_COMPANY_NAME } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 bg-cabindo-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cabindo-primary/5 rounded-full filter blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <div>
            <span className="text-cabindo-primary font-bold tracking-wider uppercase text-sm mb-3 block">Hubungi Kami</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Siap Memulai Proyek Anda?</h2>
            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
              Konsultasikan kebutuhan modular Anda dengan tim ahli kami. Kami memberikan solusi teknis dan penawaran harga terbaik.
            </p>
            
            <div className="grid gap-8">
                <div className="flex items-start space-x-5">
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                        <MapPin className="text-cabindo-primary w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-xl text-white mb-1">Kantor Pusat</h4>
                        <p className="text-gray-400 leading-relaxed">Jl. Raya Bekasi KM 23, Cakung,<br/>Jakarta Timur, Indonesia</p>
                    </div>
                </div>
                
                <div className="flex items-start space-x-5">
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                        <Phone className="text-cabindo-primary w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-xl text-white mb-1">Telepon</h4>
                        <p className="text-gray-400">+62 21 8899 7766 (Office)</p>
                        <p className="text-gray-400 font-medium text-white mt-1">+62 812 3456 7890 (WhatsApp)</p>
                    </div>
                </div>

                <div className="flex items-start space-x-5">
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                        <Mail className="text-cabindo-primary w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-xl text-white mb-1">Email</h4>
                        <p className="text-gray-400">sales@cabindo.co.id</p>
                        <p className="text-gray-400">info@cabindo.co.id</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-8 text-cabindo-secondary">Kirim Pesan</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                        <label className="block text-sm font-semibold text-gray-600 mb-2 group-focus-within:text-cabindo-primary transition-colors">Nama Lengkap</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cabindo-primary focus:ring-2 focus:ring-cabindo-primary/20 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="group">
                        <label className="block text-sm font-semibold text-gray-600 mb-2 group-focus-within:text-cabindo-primary transition-colors">Nomor HP</label>
                        <input type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cabindo-primary focus:ring-2 focus:ring-cabindo-primary/20 outline-none transition-all" placeholder="0812 xxx" />
                    </div>
                </div>
                <div className="group">
                    <label className="block text-sm font-semibold text-gray-600 mb-2 group-focus-within:text-cabindo-primary transition-colors">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cabindo-primary focus:ring-2 focus:ring-cabindo-primary/20 outline-none transition-all" placeholder="email@perusahaan.com" />
                </div>
                <div className="group">
                    <label className="block text-sm font-semibold text-gray-600 mb-2 group-focus-within:text-cabindo-primary transition-colors">Jenis Layanan</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cabindo-primary focus:ring-2 focus:ring-cabindo-primary/20 outline-none transition-all">
                        <option>Pilih Layanan...</option>
                        <option>Office Container</option>
                        <option>Modular Building</option>
                        <option>Sewa Container</option>
                        <option>Modifikasi Custom</option>
                    </select>
                </div>
                <div className="group">
                    <label className="block text-sm font-semibold text-gray-600 mb-2 group-focus-within:text-cabindo-primary transition-colors">Pesan</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cabindo-primary focus:ring-2 focus:ring-cabindo-primary/20 outline-none transition-all resize-none" placeholder="Deskripsikan kebutuhan proyek Anda..."></textarea>
                </div>
                <button type="submit" className="w-full bg-cabindo-secondary text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                    Kirim Pesan
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;