import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import { scaleOnHover, fadeInUp } from '@/config/animationConfig';

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      onClick={onClick}
      className="group relative glass-effect rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-emerald-500/30 transition-colors duration-500"
    >
      <div className="relative h-72 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />
        
        {/* Hover Overlay Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/90 flex items-center justify-center backdrop-blur-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <ArrowUpRight className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      <div className="p-8 relative">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
            {project.title}
          </h3>
        </div>
        
        <p className="text-gray-400 mb-6 line-clamp-2 leading-relaxed group-hover:text-gray-300 transition-colors">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-md text-xs font-medium tracking-wide"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-md text-xs">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;