import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/freelancing/HeroSection";
import ServicesSection from "@/components/freelancing/ServicesSection";
import WorkTypesSection from "@/components/freelancing/WorkTypesSection";
import CTASection from "@/components/freelancing/CTASection";
import { useEffect } from "react";

const Freelancing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Navbar />

            <main>
                <HeroSection />
                <ServicesSection />
                <WorkTypesSection />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
};

export default Freelancing;
