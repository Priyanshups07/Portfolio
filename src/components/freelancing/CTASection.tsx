import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HireMeModal from "./HireMeModal";

const CTASection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/5 blur-3xl -z-10" />

            <div className="container max-w-4xl mx-auto px-6 text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold gradient-text">
                    Have a project in mind?
                </h2>

                <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                    Let’s build a smart solution for your business. From concept to deployment, I'm here to help you succeed.
                </p>

                <div className="pt-4">
                    <HireMeModal>
                        <Button size="lg" className="h-14 px-8 text-lg neon-border group">
                            Start Project
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </HireMeModal>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
