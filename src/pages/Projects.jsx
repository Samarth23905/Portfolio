import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { staggerContainer, fadeInUp } from '@/config/animationConfig';
import aiImage from '@/imgs/ai.jpeg';
import innovImage from '@/imgs/innov.jpeg';
import musicImage from '@/imgs/music.jpeg';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: 'Real-time Hospital Tracking',
      description: 'Advanced tracking system with live location updates, route optimization, and emergency dispatch management. Built for scalability and reliability.',
      image: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0',
      tech: ['Flutter', 'Flask','PostgreSQL'],
      category: 'backend',
      achievements: ['#'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'AI-Powered Debugging Tool',
      description: 'Advanced debugging tool that leverages AI to identify and resolve issues in real-time. Built with machine learning and intelligent pattern recognition.',
      image: aiImage,
      tech: ['Html', 'Tailwind Css', 'JavaScript', 'Node.js', 'Express', 'AI(api)', 'PostgreSQL'],
      category: 'full-stack',
      achievements: ['#'],
      demoLink: 'https://ai-voice-assist-tg1s.onrender.com/',
      githubLink: 'https://github.com/Samarth23905/ai-voice-assist'
    },
    {
      title: 'Peer to Peer Student Innovation Platform',
      description: 'A collaborative platform for students to share projects, resources, and feedback. Features include user profiles, project showcases, and discussion forums and collaboration of college fests.',
      image: innovImage,
      tech: ['EJS', 'TailwindCss', 'JavaScript', 'Node.js', 'Express', 'AI(api)', 'PostgreSQL'],
      category: 'full-stack',
      achievements: ['#'],
      demoLink: 'https://student-innovation.onrender.com/',
      githubLink: 'https://github.com/Samarth23905/student-innovation'
    },
    {
      title: 'Music Player',
      description: 'A responsive music player built with HTML, CSS, and JavaScript. Features include playlist management, volume control, and playback controls.',
      image: musicImage,
      tech: ['Html', 'Css', 'JavaScript'],
      category: 'frontend',
      achievements: ['#'],
      demoLink: 'https://samarth23905.github.io/Music-player/',
      githubLink: 'https://github.com/Samarth23905/music-player'
    }
  ];
  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'backend', label: 'Backend' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'full-stack', label: 'Full-Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Projects | Samarth K Hosamani</title>
        <meta name="description" content="Scalable full-stack applications and real-time systems." />
      </Helmet>

      <div className="min-h-screen pt-32 pb-20">
        <SectionWrapper>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Selected Works
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-3xl mx-auto">
              Engineering solutions where performance meets intuitive design
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                  filter === f.value
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 scale-105'
                    : 'glass-effect text-gray-400 hover:text-white hover:border-emerald-500/30'
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </motion.div>
        </SectionWrapper>
      </div>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={selectedProject} 
      />
    </>
  );
};

export default Projects;