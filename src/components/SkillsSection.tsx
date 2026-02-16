import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  { name: 'Programming', skills: ['Python', 'JavaScript'], color: 'var(--neon-cyan)' },
  { name: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS'], color: 'var(--neon-blue)' },
  { name: 'Backend', skills: ['Django', 'Node.js', 'Supabase'], color: 'var(--neon-purple)' },
  { name: 'Machine Learning', skills: ['Pandas', 'NumPy', 'Scikit-learn'], color: 'var(--neon-cyan)' },
  { name: 'Tools', skills: ['Git', 'GitHub', 'n8n'], color: 'var(--neon-blue)' },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm mono text-primary tracking-widest uppercase mb-2">Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">Tech Stack</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 animate-float"
              style={{
                border: '1px solid hsl(190 100% 50% / 0.1)',
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ background: `hsl(${cat.color})` }}
              />

              <h4 className="mono text-xs text-primary tracking-wider uppercase mb-4">{cat.name}</h4>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-muted/50 text-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-border hover:border-primary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
