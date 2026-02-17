import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const certifications = [
  {
    title: 'IEEE ICECCT Conference Participation',
    org: 'IEEE',
    year: '2025',
    description: 'Active participation in the International Conference on Electrical, Computer and Communication Technologies.',
  },
  {
    title: 'Business Analytics',
    org: 'IIT Bombay & BSE Institute',
    year: 'Dec 2024',
    description: 'Received a Certificate of Participation for successfully completing the Business Analytics Workshop conducted by Techfest, IIT Bombay in collaboration with BSE Institute. This workshop provided valuable insights into data-driven decision making, business intelligence, and analytics tools used in the industry.',
    skills: ['Business Analytics', 'Data Analysis']
  },
  {
    title: 'Git and GitHub',
    org: 'CodeNesters',
    year: 'Apr 2024',
    description: 'This workshop helped me understand version control, branching, merging, and how to manage code effectively using Git and GitHub — skills that are essential for every developer.',
    skills: ['Git', 'GitHub', 'Version Control']
  },
  {
    title: 'TECKATHON 2024',
    org: 'G.H. Raisoni College of Engineering, Nagpur',
    year: 'Mar 2024',
    description: 'For active participation in One Day Hackathon event TECKATHON 2024 regarding "active participation in One Day Hackathon event". Organized by Dept of CSE & Center of Excellence Data Science.',
    skills: ['Hackathon', 'Project Management', 'Teamwork']
  },
  {
    title: 'AI & Machine Learning',
    org: 'Infynas Learning Solutions',
    year: '2024',
    description: 'Comprehensive training in Artificial Intelligence and Machine Learning concepts and applications.',
    skills: ['Python', 'Machine Learning', 'Data Science']
  },
  {
    title: 'Python with Django',
    org: 'Rays IT',
    year: '2024',
    description: 'Full stack web development training using Python and the Django framework.',
    skills: ['Python', 'Django', 'Web Development']
  },
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
              className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary glow-cyan -translate-x-1/2 z-10 top-6" />

              {/* Card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group" style={{ border: '1px solid hsl(190 100% 50% / 0.1)' }}>
                  <div className={`flex flex-col ${i % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <span className="mono text-xs text-primary px-2 py-1 rounded bg-primary/10 border border-primary/20 mb-2 inline-block w-fit">{cert.year}</span>
                    <h4 className="text-foreground font-bold text-lg mb-1 group-hover:text-primary transition-colors">{cert.title}</h4>
                    <p className="text-sm font-medium text-secondary mb-3">{cert.org}</p>

                    {cert.description && (
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed opacity-90">
                        {cert.description}
                      </p>
                    )}

                    {cert.skills && (
                      <div className={`flex flex-wrap gap-2 mt-auto ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        {cert.skills.map(skill => (
                          <span key={skill} className="text-[10px] mono px-2 py-0.5 rounded-full border border-primary/20 text-primary/70 bg-primary/5">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
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
