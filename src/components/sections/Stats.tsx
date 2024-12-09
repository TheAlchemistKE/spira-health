import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container.tsx';
import { Activity, Users, Building2, Globe } from 'lucide-react';
import { fadeIn, scaleIn } from '@/utils/animations';
import {Card} from "@/components/ui/card.tsx";

export const Stats: React.FC = () => {
    const stats = [
        {
            icon: Users,
            value: "1M+",
            label: "Active Users",
            description: "Healthcare professionals and patients combined"
        },
        {
            icon: Activity,
            value: "10M+",
            label: "Consultations",
            description: "Successfully completed virtual consultations"
        },
        {
            icon: Building2,
            value: "500+",
            label: "Hospitals",
            description: "Major healthcare institutions using our platform"
        },
        {
            icon: Globe,
            value: "50+",
            label: "Countries",
            description: "Global presence and growing"
        }
    ];

    return (
        <section className="py-32 relative bg-gradient-to-b from-slate-900 to-slate-950">
            <Container>
                <motion.div
                    variants={fadeIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl font-bold mb-6 text-white">
                        Making a Global Impact
                    </h2>
                    <p className="text-xl text-blue-200">
                        Our platform is transforming healthcare delivery worldwide,
                        connecting patients with quality care and empowering healthcare providers.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={scaleIn}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={index}
                        >
                            <Card className="p-6 text-center bg-transparent hover:bg-white/10 transition-all">
                                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                                <div className="text-4xl font-bold text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-xl font-semibold text-blue-300 mb-2">
                                    {stat.label}
                                </div>
                                <p className="text-blue-200">
                                    {stat.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
