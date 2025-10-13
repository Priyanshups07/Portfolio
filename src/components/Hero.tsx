import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ChevronDown } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';
import { animationConfig, fadeInUp, scaleIn } from '../lib/animations';
import { getOptimizedAnimationProps } from '../lib/performance';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ 
                  duration: animationConfig.durations.medium,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  variants={scaleIn}
                  transition={{ 
                    delay: animationConfig.durations.fast,
                    duration: animationConfig.durations.medium,
                    ease: "easeOut"
                  }}
                  className="inline-block mb-4 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30"
                >
                  <span className="text-blue-400 font-medium">Aspiring Python Developer</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  <span className="block">Hi, I'm</span>
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                    Priyanshu Sahu
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Building Scalable Applications & AI-Driven Solutions
                </p>

                <p className="text-lg text-gray-400 mb-8">
                  Aspiring Python Developer with expertise in Django, React, and AI-driven tools. Skilled in developing scalable full-stack and cross-platform applications, including real-time projects such as ScriptSetu and CodeArena.
                </p>

                <div className="flex space-x-4 mb-8">
                  <motion.a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
                  >
                    <Github className="text-white" size={24} />
                  </motion.a>
                  <motion.a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
                  >
                    <Linkedin className="text-white" size={24} />
                  </motion.a>
                  <motion.a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
                  >
                    <Instagram className="text-white" size={24} />
                  </motion.a>
                </div>

                <motion.button
                  onClick={scrollToAbout}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                >
                  Explore My Work
                </motion.button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: animationConfig.durations.slow,
                ease: "easeOut",
                delay: animationConfig.durations.medium
              }}
              className="hidden md:flex items-center justify-center"
            >
              <div className="relative w-full max-w-md">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <div className="w-72 h-72 mx-auto bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50">
                      <span className="text-8xl">👨‍💻</span>
                    </div>
                  </div>
                </motion.div>

                {/* Simplified decorative animations for better performance */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <ChevronDown className="text-white/60" size={32} />
      </motion.div>
    </section>
  );
}