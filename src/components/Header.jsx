import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, ArrowUp, MapPin } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/hackathons', label: 'Hackathons' },
    { path: '/contact', label: 'Contact' }
  ];

  const LocationPill = ({ className = "" }) => (
    <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full glass-effect border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors cursor-default ${className}`}>
      <MapPin className="w-3.5 h-3.5 text-emerald-500" />
      <span className="text-xs font-medium text-gray-300 tracking-wide">Based in India | B.Tech CS, GM University</span>
    </div>
  );

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex flex-col items-center ${
          scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className={`w-full transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
          <nav className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-2 group relative z-50 shrink-0">
                <div className="relative">
                  <Code2 className="w-8 h-8 text-emerald-500 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-emerald-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  SKH
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-3 lg:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                  >
                    {link.label}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                    <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative z-50 p-2 text-white hover:text-emerald-500 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Location Row - Below Navigation */}
        <div className={`w-full flex justify-center pb-3 transition-all duration-300 px-4 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <LocationPill />
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/98 backdrop-blur-xl z-40 flex items-center justify-center md:hidden"
            >
              <div className="flex flex-col items-center gap-8 p-4">
                <div className="flex flex-col items-center gap-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-2xl font-bold tracking-tight ${
                          location.pathname === link.path 
                            ? 'text-emerald-500' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 pt-8 border-t border-white/10 w-full flex justify-center"
                >
                  <LocationPill />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 hover:-translate-y-1 transition-all duration-300"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;