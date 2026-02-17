import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm mono text-primary tracking-widest uppercase mb-2">About</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Who I Am</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative z-10 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              <span className="text-foreground font-semibold">Hi! I'm Priyanshu Sahu,</span> a Computer Science Engineering student at Raipur Institute of Technology. I'm passionate about Python, full-stack web engineering, and machine learning systems.
            </p>
            <p>
              I love building real-world software solutions that combine the power of data science, robust backend architecture, and modern frontend technologies.
            </p>
            <p>
              Turning ideas into scalable applications is what drives me, and I'm always looking for the next hands-on project or engineering challenge to grow.
            </p>
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-secondary/30 rounded-br-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
