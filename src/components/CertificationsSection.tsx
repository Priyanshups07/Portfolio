import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const certifications = [
  { title: 'AI & Machine Learning', org: 'Infynas Learning Solutions', year: '2024' },
  { title: 'Python with Django', org: 'Rays IT', year: '2024' },
  { title: 'Git & GitHub', org: 'Codenesters', year: '2024' },
  { title: 'IEEE ICECCT Conference Participation', org: 'IEEE', year: '2025' },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm mono text-primary tracking-widest uppercase mb-2">Certifications</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">Credentials</h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />

          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex items-center mb-8 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary glow-cyan -translate-x-1/2 z-10" />

              {/* Card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                <div className="glass rounded-xl p-5 hover:border-primary/30 transition-all duration-300" style={{ border: '1px solid hsl(190 100% 50% / 0.1)' }}>
                  <span className="mono text-xs text-primary">{cert.year}</span>
                  <h4 className="text-foreground font-semibold mt-1">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
