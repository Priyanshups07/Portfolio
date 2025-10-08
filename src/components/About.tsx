import { motion } from 'framer-motion';
import { GraduationCap, Code, Sparkles } from 'lucide-react';
import { aboutMe } from '../data/portfolioData';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <GraduationCap className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                    <p className="text-gray-600">Building my foundation</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-lg text-gray-900">B.Tech in Computer Science Engineering</h4>
                    <p className="text-gray-700 font-medium">Raipur Institute of Technology (CSVTU University)</p>
                    <p className="text-gray-600">2022–2026</p>
                    <p className="text-blue-600 mt-2">Specialization: AI/ML and Emerging Technologies</p>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl p-8 mt-6 text-white"
              >
                <div className="flex items-center mb-4">
                  <Sparkles className="mr-3" size={28} />
                  <h3 className="text-2xl font-bold">Quick Intro</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {aboutMe.intro}
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mt-6"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 rounded-lg mr-4">
                    <GraduationCap className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Languages</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Hindi</span>
                    <span className="text-gray-600">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">English</span>
                    <span className="text-gray-600">Fluent</span>
                  </div>
                </div>
              </motion.div>

              
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-cyan-100 rounded-lg mr-4">
                    <Code className="text-cyan-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
                    <p className="text-gray-600">From curiosity to career</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {aboutMe.story.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-gray-700 leading-relaxed"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
