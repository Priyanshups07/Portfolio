import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    company: z.string().optional(),
    projectType: z.string().min(1, "Please select a project type"),
    budget: z.string().min(1, "Please select a budget range"),
    timeline: z.string().min(1, "Please select a timeline"),
    description: z.string().min(10, "Please provide some project details"),
});

interface HireMeModalProps {
    children?: React.ReactNode;
    defaultOpen?: boolean;
}

const HireMeModal = ({ children, defaultOpen = false }: HireMeModalProps) => {
    const [open, setOpen] = useState(defaultOpen);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            projectType: "",
            budget: "",
            timeline: "",
            description: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);

        // Simulate API call
        console.log("Form submitted:", values);

        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast.success("Project request received!", {
            description: "I'll get back to you shortly to discuss your project.",
        });

        setIsSubmitting(false);
        setOpen(false);
        form.reset();
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] bg-background/95 backdrop-blur-xl border-primary/20 max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold gradient-text">Start a Project</DialogTitle>
                    <DialogDescription>
                        Tell me about your vision. I'll help you build a scalable, intelligent solution.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} className="bg-muted/50" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="john@example.com" {...field} className="bg-muted/50" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company (Optional)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your Company Name" {...field} className="bg-muted/50" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="projectType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Project Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="bg-muted/50">
                                                    <SelectValue placeholder="Select type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="ai-agent">AI Agent / Chatbot</SelectItem>
                                                <SelectItem value="web-app">Full-Stack Web App</SelectItem>
                                                <SelectItem value="automation">Automation / Workflow</SelectItem>
                                                <SelectItem value="saas">SaaS MVP</SelectItem>
                                                <SelectItem value="consulting">Technical Consulting</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="budget"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Budget Range</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="bg-muted/50">
                                                    <SelectValue placeholder="Select budget" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="<1000">&lt; $1,000</SelectItem>
                                                <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                                                <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                                                <SelectItem value="10000+">$10,000+</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="timeline"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Timeline</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="bg-muted/50">
                                                <SelectValue placeholder="Select timeline" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="urgent">Urgent (Asap)</SelectItem>
                                            <SelectItem value="1-month">Within 1 Month</SelectItem>
                                            <SelectItem value="1-3-months">1-3 Months</SelectItem>
                                            <SelectItem value="flexible">Flexible</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Details</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Describe your project, goals, and expected outcomes..."
                                            className="min-h-[100px] bg-muted/50"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" disabled={isSubmitting} className="w-full neon-border">
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending Request...
                                </>
                            ) : (
                                "Send Project Request"
                            )}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default HireMeModal;
