import { motion } from 'framer-motion';
import { Trophy, Target, Award, Rocket } from 'lucide-react';
import { achievements, futureGoals } from '../data/portfolioData';
import { animationConfig, fadeInUp, fadeInLeft, fadeInRight } from '../lib/animations';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              transition={{ 
                duration: animationConfig.durations.medium,
                ease: "easeOut"
              }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <Trophy className="text-yellow-500 mr-3" size={36} />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Achievements
                </h2>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
            </motion.div>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInLeft}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * animationConfig.stagger.medium,
                    duration: animationConfig.durations.medium,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    x: 10,
                    transition: { 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }
                  }}
                  className="bg-gradient-to-r from-white to-yellow-50 rounded-xl p-6 border border-yellow-200 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="p-3 bg-yellow-100 rounded-lg mr-4 flex-shrink-0">
                      <Award className="text-yellow-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-700">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
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
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <Rocket className="text-blue-500 mr-3" size={36} />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Future Goals
                </h2>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            </motion.div>

            <div className="space-y-6">
              {futureGoals.map((goal, index) => (
                <motion.div
                  key={goal.id}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInRight}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * animationConfig.stagger.medium,
                    duration: animationConfig.durations.medium,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    x: -10,
                    transition: { 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }
                  }}
                  className="bg-gradient-to-l from-white to-blue-50 rounded-xl p-6 border border-blue-200 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4 flex-shrink-0">
                      <Target className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {goal.title}
                      </h3>
                      <p className="text-gray-700">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ 
            delay: animationConfig.durations.medium,
            duration: animationConfig.durations.medium,
            ease: "easeOut"
          }}
          className="mt-16 bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            I'm always excited to collaborate on innovative projects and explore new opportunities in tech.
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }
            }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
