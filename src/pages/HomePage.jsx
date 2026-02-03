import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, MapPin, MousePointer2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useParallaxScroll from '@/hooks/useParallaxScroll';
import useFloatingAnimation from '@/hooks/useFloatingAnimation';
import { staggerContainer, fadeInUp } from '@/config/animationConfig';

const HomePage = () => {
  const { y, opacity } = useParallaxScroll();
  const floating1 = useFloatingAnimation(4, 15);
  const floating2 = useFloatingAnimation(5, 20);

  return (
    <>
      <Helmet>
        <title>Samarth K Hosamani | Full-Stack Developer & Backend Architect</title>
        <meta name="description" content="Building scalable systems that solve real-world problems. Specialized in hybrid backend architectures and rapid prototyping." />
      </Helmet>

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1584472666931-ab417d14e08b)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.25)',
            y,
            opacity
          }}
        />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 z-0 animated-gradient opacity-80 mix-blend-overlay" />

        {/* Floating Shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            {...floating1}
            className="absolute top-1/4 left-[10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" 
          />
          <motion.div 
            {...floating2}
            className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-violet-500/10 rounded-full blur-[100px]" 
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          {/* Location Bar Removed from Here - Moved to Header */}

          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight mt-12 md:mt-0"
          >
            <span className="gradient-text">Samarth K Hosamani</span>
          </motion.h1>

          <motion.div variants={fadeInUp} className="mb-6">
            <h2 className="text-xl md:text-3xl text-gray-300 font-light tracking-wide font-sans">
              Full-Stack Developer <span className="text-emerald-500 mx-2">•</span> Backend Architect
            </h2>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Building <span className="text-emerald-500 font-semibold border-b border-emerald-500/30 pb-0.5">scalable systems</span> that solve real-world problems with{' '}
            <span className="text-violet-500 font-semibold border-b border-violet-500/30 pb-0.5">pragmatic, inspiring solutions</span>
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link to="/projects">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-7 text-lg rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 group"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-7 text-lg rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 group"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="absolute -bottom-32 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-gray-500"
            >
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <ChevronDown className="w-6 h-6 text-emerald-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;