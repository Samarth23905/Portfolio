import React from 'react';
import Modal from '@/components/ui/Modal';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, TrendingUp, Calendar, Layers, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      className="max-w-4xl"
    >
      <div className="space-y-8">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            {project.category && (
              <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                {project.category}
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-emerald-500 mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5" />
                Overview
              </h4>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-emerald-500 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {project.achievements.map((achievement, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-xl">
              <h4 className="text-white font-semibold mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-800/80 border border-slate-700 text-gray-300 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={() => window.open(project.demoLink, '_blank')}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white h-12 text-lg"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </Button>
              <Button 
                onClick={() => window.open(project.githubLink, '_blank')}
                variant="outline" 
                className="w-full border-gray-600 text-gray-300 hover:text-white h-12"
              >
                <Github className="w-5 h-5 mr-2" />
                View Source
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;