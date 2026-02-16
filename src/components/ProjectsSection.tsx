import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Academic Risk Predictor',
    description: 'Machine learning web application that predicts student academic risk using academic and lifestyle data for early intervention.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'],
    features: ['ML pipeline', 'Prediction interface', 'Data processing', 'Model evaluation'],
  },
  {
    title: 'CodeArena',
    description: 'Full-stack coding competition and collaboration platform.',
    tech: ['Next.js', 'Node.js', 'Supabase', 'Tailwind CSS'],
    features: ['Authentication', 'Dashboard', 'Competition rooms', 'Real-time listings', 'Interactive UI'],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="glass rounded-2xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
      style={{ border: '1px solid hsl(190 100% 50% / 0.1)' }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="mono text-xs text-primary/60">0{index + 1}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
        </div>

        <h4 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h4>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {t}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          {project.features.map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1 h-1 rounded-full bg-primary" />
              {f}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm mono text-primary tracking-widest uppercase mb-2">Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">What I've Built</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
