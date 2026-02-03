import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Award, CheckCircle2, Quote } from 'lucide-react';
import { fadeInUp } from '@/config/animationConfig';

const HackathonCard = ({ hackathon, index }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-[9px] top-8 w-4 h-4 bg-emerald-500 rounded-full border-4 border-[#0F172A] shadow-[0_0_10px_rgba(16,185,129,0.5)] z-10" />

      <div className="glass-effect rounded-2xl overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all duration-500 group">
        <div className="grid lg:grid-cols-5 gap-0">
          <div className="lg:col-span-2 relative h-64 lg:h-auto overflow-hidden">
            <img
              src={hackathon.image}
              alt={hackathon.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors duration-500" />
            <div className="absolute top-4 left-4">
              <span className="px-4 py-2 bg-emerald-500 text-white text-sm font-bold rounded-full flex items-center gap-2 shadow-lg">
                <Trophy className="w-4 h-4" />
                {hackathon.achievement}
              </span>
            </div>
          </div>

          <div className="lg:col-span-3 p-8">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {hackathon.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm bg-white/5 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span>{hackathon.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-6 text-violet-400">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">{hackathon.award}</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-gray-300 text-sm">
                      <span className="text-emerald-400 font-semibold block mb-1">Solution:</span>
                      {hackathon.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {hackathon.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="relative pl-6 pt-2">
                  <Quote className="absolute top-0 left-0 w-4 h-4 text-emerald-500/50 transform -scale-x-100" />
                  <p className="text-gray-400 text-sm italic border-l-2 border-emerald-500/20 pl-4">
                    {hackathon.feedback}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HackathonCard;