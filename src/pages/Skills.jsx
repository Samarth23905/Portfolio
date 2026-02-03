import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import SkillBadge from '@/components/SkillBadge';
import { Server, Code, Database, Zap, Filter } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/config/animationConfig';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const skillCategories = [
    {
      id: 'backend',
      title: 'Backend',
      icon: Server,
      color: 'emerald',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 90 },
        { name: 'Python Flask', level: 85 },
        { name: 'Socket.IO', level: 88 }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend',
      icon: Code,
      color: 'violet',
      skills: [
        { name: 'React', level: 92 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 93 },
        { name: 'Leaflet.js', level: 85 }
      ]
    },
    {
      id: 'db',
      title: 'Databases',
      icon: Database,
      color: 'blue',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 82 }
      ]
    },
    {
      id: 'special',
      title: 'Specializations',
      icon: Zap,
      color: 'amber',
      skills: [
        { name: 'Hybrid Backend Architectures', level: 95 },
        { name: 'Role-Based Automation', level: 90 },
        { name: 'Real-Time Systems', level: 88 },
        { name: 'Rapid Prototyping', level: 93 }
      ]
    }
  ];

  const filteredCategories = activeFilter === 'All' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.title === activeFilter);

  const filterOptions = ['All', 'Backend', 'Frontend', 'Databases', 'Specializations'];

  return (
    <>
      <Helmet>
        <title>Skills | Samarth K Hosamani</title>
        <meta name="description" content="Technical expertise in backend development, frontend technologies, databases, and specialized skills." />
      </Helmet>

      <div className="min-h-screen pt-32 pb-20">
        <SectionWrapper>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold gradient-text mb-6 tracking-tight">
              Technical Arsenal
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-3xl mx-auto">
              A curated suite of technologies for building robust, scalable solutions
            </motion.p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 scale-105'
                    : 'glass-effect text-gray-400 hover:text-white hover:border-emerald-500/30'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredCategories.map((category) => (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-effect rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 p-32 bg-${category.color}-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-14 h-14 rounded-2xl bg-${category.color}-500/10 flex items-center justify-center border border-${category.color}-500/20 group-hover:scale-110 transition-transform duration-500`}>
                        <category.icon className={`w-7 h-7 text-${category.color}-500`} />
                      </div>
                      <h2 className="text-2xl font-bold text-white tracking-wide">{category.title}</h2>
                    </div>

                    <div className="space-y-6">
                      {category.skills.map((skill, index) => (
                        <SkillBadge key={index} skill={skill} color={category.color} index={index} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center glass-effect rounded-3xl p-10 border border-emerald-500/10"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Evolution</h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              The tech landscape never settles, and neither do I. Currently exploring advanced distributed systems patterns and AI integration in backend workflows.
            </p>
          </motion.div>
        </SectionWrapper>
      </div>
    </>
  );
};

export default Skills;