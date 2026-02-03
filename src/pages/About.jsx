import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { CheckCircle2, Target, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Strategic mindset',
      description: 'Hands-on troubleshooting expertise with long-term architectural vision'
    },
    {
      icon: Lightbulb,
      title: 'Clarity-driven',
      description: 'Documentation and communication that makes complex systems accessible'
    },
    {
      icon: Zap,
      title: 'Real-world impact',
      description: 'Focus on scalability and solutions that matter'
    }
  ];

  const milestones = [
    { year: '2024', title: 'Backend Architecture Specialist', description: 'Mastered hybrid backend systems and role-based automation' },
    { year: '2025', title: 'Full-Stack Innovator', description: 'Built real-time tracking systems handling multiple users' },
    { year: '2026', title: 'AI/ML', description: 'Exploring machine learning applications in backend systems' }
  ];

  return (
    <>
      <Helmet>
        <title>About | Samarth K Hosamani</title>
        <meta name="description" content="Learn about my journey as a full-stack developer specializing in hybrid backend architectures, role-based automation, and rapid prototyping." />
      </Helmet>

      <div className="min-h-screen pt-24 pb-12">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">About Me</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A pragmatic, inspiring, and solution-oriented developer who believes in building systems that make a difference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-effect rounded-2xl p-8 border border-emerald-500/20"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-violet-500 p-1 mb-6 mx-auto">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl font-bold gradient-text">
                  SK
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 text-center">Professional Summary</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm a full-stack developer with a passion for building scalable, real-world solutions. My approach combines strategic thinking with hands-on implementation, focusing on systems that are not just technically sound but also impactful and maintainable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-emerald-500 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  Specializations
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Hybrid backend architectures (Node.js + Python Flask)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Role-based automation and access control systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Rapid prototyping for hackathons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Real-time systems with Socket.IO and WebSockets</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">What Drives Me</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect rounded-2xl p-6 text-center group hover:border-emerald-500/50 border border-transparent transition-all"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                    <item.icon className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Career Milestones</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="glass-effect rounded-xl p-6 border-l-4 border-emerald-500 hover:border-violet-500 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl font-bold text-emerald-500 min-w-[60px]">{milestone.year}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionWrapper>
      </div>
    </>
  );
};

export default About;