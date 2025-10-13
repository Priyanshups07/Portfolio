import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { animationConfig, fadeInDown } from '../lib/animations';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInDown}
            transition={{ 
              delay: animationConfig.durations.fast,
              duration: animationConfig.durations.medium,
              ease: "easeOut"
            }}
            className="text-xl font-bold text-white"
          >
            <span className="text-blue-500">Priyanshu</span> Sahu
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial="hidden"
                animate="visible"
                variants={fadeInDown}
                transition={{ 
                  delay: index * animationConfig.stagger.medium,
                  duration: animationConfig.durations.medium,
                  ease: "easeOut"
                }}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ 
                  color: "#60a5fa",
                  transition: { 
                    duration: animationConfig.durations.fast 
                  }
                }}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ 
              duration: animationConfig.durations.medium,
              ease: "easeOut"
            }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ 
                    delay: index * animationConfig.stagger.fast,
                    duration: animationConfig.durations.fast,
                    ease: "easeOut"
                  }}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ 
                    color: "#60a5fa",
                    x: 10,
                    transition: { 
                      duration: animationConfig.durations.fast 
                    }
                  }}
                  className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors duration-200 py-2"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
