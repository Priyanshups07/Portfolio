import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Instagram } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-400">Priyanshu</span> Sahu
            </h3>
            <p className="text-gray-400">
              Building intelligent systems and cutting-edge solutions with passion and innovation.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <motion.a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="text-red-500 fill-current" size={16} /> by Priyanshu Sahu © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
