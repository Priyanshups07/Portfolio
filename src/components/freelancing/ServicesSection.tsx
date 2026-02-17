import { motion } from "framer-motion";
import { Brain, Code2, Globe, Laptop, Workflow, BarChart3, CloudCog, ShieldCheck } from "lucide-react";

const services = [
    {
        category: "AI Development",
        items: [
            {
                title: "AI Agents & Chatbots",
                description: "Custom LLM-powered agents that automate customer support, sales, and internal workflows.",
                icon: Brain,
            },
            {
                title: "AI Business Tools",
                description: "Intelligent tools for data analysis, content generation, and predictive modeling.",
                icon: CloudCog,
            },
        ],
    },
    {
        category: "Web & SaaS Development",
        items: [
            {
                title: "Full-Stack Web Apps",
                description: "Scalable, secure, and high-performance web applications using React, Next.js, and Node.js.",
                icon: Globe,
            },
            {
                title: "SaaS MVPs",
                description: "Rapid development of Minimum Viable Products to test your business ideas quickly.",
                icon: Laptop,
            },
        ],
    },
    {
        category: "Business Automation",
        items: [
            {
                title: "Process Automation",
                description: "Streamline repetitive tasks with custom n8n workflows and API integrations.",
                icon: Workflow,
            },
            {
                title: "Data Pipelines",
                description: "Robust data ingestion, processing, and visualization pipelines for business insights.",
                icon: BarChart3,
            },
        ],
    },
    {
        category: "Technical Consulting",
        items: [
            {
                title: "Architecture Planning",
                description: "Expert guidance on system architecture, tech stack selection, and scalability strategies.",
                icon: ShieldCheck,
            },
            {
                title: "Code Reviews & Audits",
                description: "Comprehensive code analysis to improve performance, security, and maintainability.",
                icon: Code2,
            },
        ],
    },
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-24 bg-background/50">
            <div className="container max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
                        My Services
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your business needs, from intelligent AI systems to robust web platforms.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-semibold text-primary/80 border-b border-primary/20 pb-2">
                                {category.category}
                            </h3>
                            <div className="space-y-4">
                                {category.items.map((item, itemIdx) => (
                                    <div
                                        key={itemIdx}
                                        className="p-6 rounded-xl bg-card/50 hover:bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <item.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h4 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
