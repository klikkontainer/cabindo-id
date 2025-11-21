import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatAssistant from './components/AIChatAssistant';
import { Shield, Award, Users } from 'lucide-react';

// About Section redesigned
const AboutSection = () => (
    <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image Collage */}
                <div className="relative">
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop" 
                            alt="Construction Worker" 
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cabindo-primary/10 rounded-full -z-0 blur-3xl"></div>
                    <div className="absolute top-10 -left-10 w-40 h-40 bg-slate-200 rounded-full -z-0 blur-2xl"></div>
                    
                    {/* Experience Badge */}
                    <div className="absolute -bottom-6 left-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 z-20 max-w-xs">
                        <div className="flex items-center gap-4">
                            <div className="bg-cabindo-secondary text-white p-3 rounded-lg">
                                <Award size={32} />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-cabindo-secondary">12+</p>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Tahun Pengalaman</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div>
                    <span className="text-cabindo-primary font-bold tracking-wider uppercase text-sm mb-3 block">Tentang Perusahaan</span>
                    <h2 className="text-4xl font-bold text-cabindo-secondary mb-6 leading-tight">
                        Mitra Konstruksi Modular <br/>Terpercaya di Indonesia
                    </h2>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        PT NIAGA KONSTRUKSI CABINDO (Cabindo) adalah pionir dalam industri konstruksi modular dan modifikasi kontainer. Kami menggabungkan keahlian teknik sipil dengan inovasi prefabrikasi untuk menghasilkan bangunan yang presisi, cepat, dan tahan lama.
                    </p>
                    
                    <div className="space-y-6 mt-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-50 p-2 rounded-lg text-cabindo-secondary mt-1">
                                <Shield size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900">Kualitas Material Premium</h4>
                                <p className="text-gray-500">Menggunakan baja standar ISO dan material insulasi terbaik.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-50 p-2 rounded-lg text-cabindo-secondary mt-1">
                                <Users size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900">Tim Ahli Tersertifikasi</h4>
                                <p className="text-gray-500">Didukung oleh insinyur dan teknisi berpengalaman di bidangnya.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                         <button className="text-cabindo-secondary font-bold border-b-2 border-cabindo-primary pb-1 hover:text-cabindo-primary transition-colors">
                            Pelajari Lebih Lanjut Tentang Kami
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

function App() {
  return (
    <div className="antialiased text-slate-800 bg-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <AIChatAssistant />
    </div>
  );
}

export default App;