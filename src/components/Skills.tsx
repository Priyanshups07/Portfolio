import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Brain, Users, Lightbulb, Clock, MessageCircle, Zap, Palette, CheckCircle } from 'lucide-react';
import { skills, softSkills } from '../data/portfolioData';

const categoryIcons = {
  languages: Code2,
  frameworks: Code2,
  database: Database,
  tools: Wrench,
  specialized: Brain
};

const categoryColors = {
  languages: 'from-blue-500 to-blue-600',
  frameworks: 'from-cyan-500 to-cyan-600',
  database: 'from-green-500 to-green-600',
  tools: 'from-yellow-500 to-yellow-600',
  specialized: 'from-purple-500 to-purple-600'
};

const categoryNames = {
  languages: 'Programming Languages',
  frameworks: 'Frameworks & Libraries',
  database: 'Databases',
  tools: 'Tools & Platforms',
  specialized: 'Specialized Skills'
};

export default function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & <span className="text-blue-600">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100"
        >
          <div className="flex items-center justify-center mb-6">
            <Users className="text-purple-600 mr-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-900">Soft Skills</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => {
              // Map each skill to an appropriate icon
              let IconComponent = Lightbulb;
              switch (skill) {
                case 'Problem-Solving':
                  IconComponent = Lightbulb;
                  break;
                case 'Teamwork & Collaboration':
                  IconComponent = Users;
                  break;
                case 'Adaptability':
                  IconComponent = Zap;
                  break;
                case 'Time Management':
                  IconComponent = Clock;
                  break;
                case 'Communication Skills':
                  IconComponent = MessageCircle;
                  break;
                case 'Creativity':
                  IconComponent = Palette;
                  break;
                default:
                  IconComponent = CheckCircle;
              }
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-4 shadow-md border border-purple-100 flex items-center"
                >
                  <div className="p-2 bg-purple-100 rounded-lg mr-3">
                    <IconComponent className="text-purple-600" size={20} />
                  </div>
                  <span className="text-gray-800 font-medium">{skill}</span>
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-8 text-center text-gray-600">
            <p>These interpersonal skills complement my technical expertise to deliver exceptional results in collaborative environments.</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {Object.entries(groupedSkills).map(([category, categorySkills], index) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            const colorClass = categoryColors[category as keyof typeof categoryColors];
            const categoryName = categoryNames[category as keyof typeof categoryNames];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-br ${colorClass} rounded-lg mr-4`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{categoryName}</h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-800 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-full bg-gradient-to-r ${colorClass} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Always Learning</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly expanding my skill set through hands-on projects,
              research, and exploring emerging technologies in AI, Machine Learning, and software development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
