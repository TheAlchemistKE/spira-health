import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container.tsx';
import { Card } from '@/components/ui/card.tsx';
import { Stethoscope, Brain, Database, Shield, Activity, Users } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/utils/animations';

interface Feature {
    icon: React.FC<{ className?: string }>;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: Stethoscope,
        title: "Virtual Consultations",
        description: "Connect with patients through our secure, HD video platform with integrated vital monitoring."
    },
    {
        icon: Brain,
        title: "AI Diagnostics",
        description: "Leverage our advanced AI system for faster, more accurate diagnostic suggestions."
    },
    {
        icon: Database,
        title: "Unified Records",
        description: "Access and manage patient records seamlessly across all departments and locations."
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-grade encryption and compliance with HIPAA, GDPR, and other healthcare standards."
    },
    {
        icon: Activity,
        title: "Real-time Analytics",
        description: "Monitor hospital performance and patient outcomes with advanced analytics."
    },
    {
        icon: Users,
        title: "Team Collaboration",
        description: "Enable seamless communication between healthcare professionals and departments."
    }
];

export const Features: React.FC = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl -z-10" />

            <Container>
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto text-center mb-16"
                >
                    <motion.h2
                        variants={fadeIn}
                        className="text-4xl font-bold mb-6 text-white"
                    >
                        Powerful Features for Modern Healthcare
                    </motion.h2>
                    <motion.p
                        variants={fadeIn}
                        className="text-xl text-blue-200"
                    >
                        Our platform combines cutting-edge technology with intuitive design
                        to revolutionize healthcare delivery and management.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            custom={index}
                        >
                            <Card className="p-8 bg-transparent group hover:bg-white/12">
                                <div className="w-16 h-16 mb-6 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-blue-200">
                                    {feature.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
};