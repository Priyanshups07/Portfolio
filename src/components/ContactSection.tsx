import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm mono text-primary tracking-widest uppercase mb-2">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">Get In Touch</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-2xl overflow-hidden"
          style={{ border: '1px solid hsl(190 100% 50% / 0.15)' }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-6 py-3 bg-muted/30 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="mono text-xs text-muted-foreground ml-3">contact.terminal</span>
          </div>

          <div className="p-8 mono text-sm space-y-4">
            <div>
              <span className="text-primary">$ </span>
              <span className="text-muted-foreground">cat </span>
              <span className="text-foreground">contact_info.json</span>
            </div>

            <div className="pl-4 space-y-2 text-muted-foreground">
              <p>{'{'}</p>
              <p className="pl-4">
                <span className="text-primary">"email"</span>
                <span>: </span>
                <a href="mailto:iampriyanshusahu@gmail.com" className="text-neon-cyan hover:underline">"iampriyanshusahu@gmail.com"</a>
              </p>
              <p className="pl-4">
                <span className="text-primary">"github"</span>
                <span>: </span>
                <a href="https://github.com/Priyanshups07" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">"Priyanshups07"</a>
              </p>
              <p className="pl-4">
                <span className="text-primary">"linkedin"</span>
                <span>: </span>
                <a href="https://www.linkedin.com/in/priyanshu-sahu-78300a339" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">"priyanshu-sahu-78300a339"</a>
              </p>
              <p className="pl-4">
                <span className="text-primary">"location"</span>
                <span>: </span>
                <span className="text-foreground">"Raipur, Chhattisgarh, India"</span>
              </p>
              <p>{'}'}</p>
            </div>

            <div className="pt-4 border-t border-border">
              <span className="text-primary">$ </span>
              <span className="text-foreground">echo </span>
              <span className="text-secondary italic">"Let's build intelligent software together."</span>
              <span className="animate-pulse-glow text-primary">█</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
