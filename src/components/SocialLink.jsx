import React from 'react';
import { motion } from 'framer-motion';

const SocialLink = ({ href, icon: Icon, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="p-3 rounded-lg glass-effect hover:bg-emerald-500/20 transition-colors group"
      aria-label={label}
    >
      <Icon className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" />
    </motion.a>
  );
};

export default SocialLink;