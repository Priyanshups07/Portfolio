import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Sparkles } from "lucide-react";
import HireMeModal from "./HireMeModal";

const AnimatedShape = () => {
    return (
        <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
                color="#3b82f6"
                attach="material"
                distort={0.5}
                speed={1.5}
                roughness={0.2}
                metalness={0.9}
                transparent
                opacity={0.8}
            />
        </Sphere>
    );
};

const HeroSection = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background" />
            <div className="absolute inset-0 -z-10 grid-background opacity-20" />

            <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 lg:order-1 relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Available for new projects</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Freelance <span className="gradient-text">AI & Full-Stack</span> Development Services
                    </h1>

                    <p className="text-lg text-muted-foreground mb-8 text-balance max-w-xl">
                        I build intelligent automation systems, AI agents, and scalable web applications that help businesses grow and operate efficiently.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <HireMeModal>
                            <Button size="lg" className="neon-border group">
                                Start a Project
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </HireMeModal>

                        <Button size="lg" variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Services
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-muted-foreground text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span>Response within 24h</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Code className="w-4 h-4" />
                            <span>Modern Tech Stack</span>
                        </div>
                    </div>
                </motion.div>

                {/* 3D Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="order-1 lg:order-2 h-[400px] lg:h-[600px] w-full relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
                    <Canvas className="w-full h-full">
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <AnimatedShape />
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
                    </Canvas>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
