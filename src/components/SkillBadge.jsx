import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ skill, color = 'emerald', index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-200 font-medium group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span className="text-gray-500 text-sm group-hover:text-emerald-400 transition-colors">
          {skill.level}%
        </span>
      </div>
      
      <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className={`h-full bg-gradient-to-r from-${color}-600 to-${color}-400 rounded-full relative`}
        >
          <div className="absolute top-0 right-0 bottom-0 w-full bg-white/20 animate-pulse" />
          <div className="absolute top-0 right-0 h-full w-2 bg-white/50 blur-[2px]" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillBadge;