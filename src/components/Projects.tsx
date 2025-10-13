import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { animationConfig, fadeInUp } from '../lib/animations';
import { optimizeAnimationsForDevice } from '../lib/performance';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'ai-ml', name: 'AI/ML' },
  { id: 'automation', name: 'Automation' }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);
    
  // Optimize the number of project animations based on device capabilities
  const maxProjects = optimizeAnimationsForDevice(filteredProjects.length);
  const optimizedProjects = filteredProjects.slice(0, maxProjects);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ 
            duration: animationConfig.durations.medium,
            ease: "easeOut"
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing my journey through innovative solutions, from AI/ML models to dynamic web applications
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ 
            duration: animationConfig.durations.medium,
            ease: "easeOut",
            delay: animationConfig.durations.fast
          }}
          className="flex items-center justify-center mb-12 flex-wrap gap-3"
        >
          <div className="flex items-center mr-4">
            <Filter className="text-gray-600 mr-2" size={20} />
            <span className="text-gray-700 font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: animationConfig.durations.fast,
              ease: "easeOut"
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {optimizedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ 
                  delay: index * animationConfig.stagger.medium,
                  duration: animationConfig.durations.medium,
                  ease: "easeOut"
                }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-6xl opacity-30">
                      {project.category === 'web' && '🌐'}
                      {project.category === 'mobile' && '📱'}
                      {project.category === 'ai-ml' && '🤖'}
                      {project.category === 'automation' && '⚡'}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                    {project.year}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {project.githubLink && (
                    <div className="flex gap-3">
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Github size={18} />
                        <span className="text-sm font-medium">View Code</span>
                      </motion.a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {optimizedProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: animationConfig.durations.medium,
              ease: "easeOut"
            }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}