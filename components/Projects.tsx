import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cabindo-primary font-bold tracking-wider uppercase text-sm mb-3 block">Portfolio Unggulan</span>
            <h2 className="text-4xl md:text-5xl font-bold text-cabindo-secondary mb-6">Rekam Jejak Kami</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
                Berbagai proyek skala nasional yang telah kami selesaikan dengan standar kualitas tertinggi dan kepuasan klien.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg">
              <div className="aspect-w-16 aspect-h-10 h-[400px]">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-cabindo-secondary/95 via-cabindo-secondary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="w-8 h-[2px] bg-cabindo-primary"></span>
                    <span className="text-cabindo-primary font-bold text-sm uppercase tracking-wider">{project.category}</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">{project.title}</h4>
                <p className="text-gray-300 text-base line-clamp-2 max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 border-2 border-cabindo-secondary text-cabindo-secondary font-bold rounded-lg hover:bg-cabindo-secondary hover:text-white transition-all duration-300">
                Lihat Semua Portfolio
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;