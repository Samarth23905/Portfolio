import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useSpring, useMotionValue, useTransform, animate } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import HackathonCard from '@/components/HackathonCard';
import { Trophy, Award, Zap } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/config/animationConfig';

const AnimatedCounter = ({ value, label, icon: Icon }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, parseInt(value), { duration: 2 });
    return animation.stop;
  }, [value, count]);

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      className="glass-effect rounded-2xl p-8 text-center border border-white/5 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <Icon className="w-12 h-12 text-emerald-500 mx-auto mb-4 relative z-10" />
      <div className="text-5xl font-bold gradient-text mb-2 relative z-10 flex justify-center items-center">
        <motion.span>{rounded}</motion.span>
        <span>+</span>
      </div>
      <div className="text-gray-400 font-medium relative z-10">{label}</div>
    </motion.div>
  );
};

const Hackathons = () => {
  const hackathons = [
    {
      name: '#',
      date: '#',
      achievement: '- Place',
      award: '#',
      problem: '#',
      solution: '#',
      highlights: ['#', '#', '#'],
      feedback: '#',
      image: 'https://images.unsplash.com/photo-1643101807331-21a4a3f081d5'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hackathons | Samarth K Hosamani</title>
        <meta name="description" content="Hackathon achievements, rapid prototyping wins, and technical awards." />
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
              Hackathon Glory
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-3xl mx-auto">
              Where strategic problem-solving meets rapid execution
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-20"
          >
            <AnimatedCounter value="0" label="Wins" icon={Trophy} />
            <AnimatedCounter value="5+" label="Participated" icon={Award} />
            <AnimatedCounter value="00" label="Commitment" icon={Zap} />
          </motion.div>

          <div className="relative border-l-2 border-emerald-500/20 ml-4 md:ml-12 space-y-16 py-8">
            {hackathons.map((hackathon, index) => (
              <HackathonCard key={index} hackathon={hackathon} index={index} />
            ))}
          </div>
        </SectionWrapper>
      </div>
    </>
  );
};

export default Hackathons;