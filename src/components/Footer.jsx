import React from 'react';
import { Link } from 'react-router-dom';
import SocialLink from '@/components/SocialLink';
import { Github, Linkedin, Twitter, Mail, Code2 } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <footer className="glass-effect border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-emerald-500" />
              <span className="text-xl font-bold gradient-text">Samarth K Hosamani</span>
            </div>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer | Backend Architect | Hackathon Strategist
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Quick Links</span>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Connect</span>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <SocialLink
                  key={i}
                  href={
                    i === 0
                      ? "https://github.com/Samarth23905"
                      : i === 1
                      ? "https://www.linkedin.com/in/samarth-hosamani-21047b313/"
                      : i === 2
                      ? "https://twitter.com"
                      : "mailto:samarthhosamani972@gmail.com"
                  }
                  icon={Icon}
                  label={
                    i === 0
                      ? "GitHub"
                      : i === 1
                      ? "LinkedIn"
                      : i === 2
                      ? "Twitter"
                      : "Email"
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Samarth K Hosamani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;