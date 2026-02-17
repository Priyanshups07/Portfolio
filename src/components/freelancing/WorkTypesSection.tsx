import { motion } from "framer-motion";

const skills = [
    "AI Systems",
    "Automation",
    "Full-Stack Apps",
    "Business Tools",
    "Data Processing",
    "API Integration",
    "SaaS Development",
    "Dashboard UI",
];

const WorkTypesSection = () => {
    return (
        <section className="py-20 border-y border-border/40 bg-muted/10">
            <div className="container max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
                    Core Capabilities
                </h3>

                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="px-6 py-3 rounded-full bg-background border border-border/60 text-foreground/80 font-medium hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all cursor-default"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkTypesSection;
