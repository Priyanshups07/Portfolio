import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'AI-Native Workforce Training Platform',
    description: 'Role-based learning system aiding integration of AI into workflows through practice and feedback.',
    tech: ['TypeScript', 'AI Integration'],
    features: ['Role-based learning', 'Real-world workflows', 'Hands-on practice', 'Guided feedback'],
  },
  {
    title: 'CodeArena',
    description: 'Real-time coding competition platform for creating rooms, solving challenges, and live competition.',
    tech: ['Next.js', 'Node.js', 'Supabase', 'Tailwind CSS'],
    features: ['Competition rooms', 'Live environment', 'Challenge solving', 'Real-time collaboration'],
  },
  {
    title: 'RITEEE-HCKTHON-2026',
    description: 'Official platform for the RITEEE × Kalp Studio Innovation Hackathon 2026, focusing on Blockchain, AI, and Cybersecurity.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Event registration', 'Hackathon information', 'Prize pool details', 'Offline marathon guide'],
  },
  {
    title: 'Crop Advisory Offline First',
    description: 'Offline-first crop advisory app for farmers, providing instructions for rice, wheat, and soybeans in local languages.',
    tech: ['HTML', 'PWA'],
    features: ['Offline access', 'Local language support', 'Step-by-step guides', 'Crop management'],
  },
  {
    title: 'YouTube-Dow',
    description: 'A Python-based utility for downloading YouTube videos and playlists.',
    tech: ['Python'],
    features: ['Video downloading', 'Playlist support', 'Format selection'],
  },
  {
    title: 'Academic Risk Predictor',
    description: 'Machine learning app predicting student academic risk using attendance, marks, and lifestyle data.',
    tech: ['Python', 'Pandas', 'Streamlit', 'Scikit-learn'],
    features: ['Risk prediction', 'Student analytics', 'Health factor analysis', 'Study habit tracking'],
  },
  {
    title: 'Data Insight Explorer',
    description: 'Streamlit app for automated exploratory data analysis (EDA) of CSV files with visualizations.',
    tech: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
    features: ['Automated EDA', 'CSV processing', 'Interactive visualizations', 'Summary statistics'],
  },
  {
    title: 'Scriptsetu',
    description: 'Cross-platform mobile app with camera, translator, and profile features for connecting users.',
    tech: ['TypeScript', 'React Native', 'Expo'],
    features: ['Camera integration', 'Real-time translator', 'Profile management', 'Cross-platform'],
  },
  {
    title: 'Decode-Tech',
    description: 'Modern website for a digital innovation agency showcasing 20+ professional services.',
    tech: ['TypeScript', 'Vite', 'Tailwind CSS'],
    features: ['Service showcase', 'Modern UI/UX', 'Digital agency portfolio', 'Responsive design'],
  },
  {
    title: 'WhatsApp Messenger',
    description: 'Automated messaging script for WhatsApp.',
    tech: ['Python', 'Selenium'],
    features: ['Automated messaging', 'Contact management', 'Message scheduling'],
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
