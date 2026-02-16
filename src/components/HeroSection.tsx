import { motion } from 'framer-motion';
import HeroScene from './HeroScene';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 z-[1]" />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mono text-sm text-primary tracking-widest uppercase mb-4"
        >
          Computer Science Engineering
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 glow-text"
          style={{ color: 'hsl(190 100% 50%)' }}
        >
          Priyanshu Sahu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-6"
        >
          Aspiring Python & Full-Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-base text-muted-foreground/80 max-w-2xl mx-auto mb-10 italic"
        >
          "I build intelligent web and machine learning systems that solve real-world problems."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_30px_hsl(190_100%_50%/0.4)] hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg glass border border-primary/30 text-primary font-semibold transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_20px_hsl(190_100%_50%/0.2)] hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
