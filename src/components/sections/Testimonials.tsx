import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container.tsx';
import { Card } from '@/components/ui/card.tsx';
import { Quote } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/utils/animations';

interface Testimonial {
    content: string;
    author: string;
    role: string;
    organization: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        content: "This platform has revolutionized how we deliver care. The AI diagnostics support has been invaluable in our decision-making process.",
        author: "Dr. Sarah Chen",
        role: "Chief of Medicine",
        organization: "Metropolitan Hospital",
        image: "https://picsum.photos/64/64"
    },
    {
        content: "The integrated hospital management system has streamlined our operations significantly. We've seen a 40% improvement in efficiency.",
        author: "James Wilson",
        role: "Hospital Administrator",
        organization: "Central Healthcare",
        image: "https://picsum.photos/64/64"
    },
    {
        content: "As a physician, having instant access to patient records and AI-powered insights has transformed how I practice medicine.",
        author: "Dr. Michael Patel",
        role: "Primary Care Physician",
        organization: "HealthFirst Clinic",
        image: "https://picsum.photos/64/64"
    }
];

export const Testimonials: React.FC = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <Container>
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <motion.h2
                        variants={fadeIn}
                        className="text-4xl font-bold mb-6 text-white"
                    >
                        Trusted by Healthcare Leaders
                    </motion.h2>
                    <motion.p
                        variants={fadeIn}
                        className="text-xl text-blue-200"
                    >
                        See how our platform is transforming healthcare delivery and management
                        for institutions worldwide.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={index}
                        >
                            <Card className="p-8 h-full flex flex-col bg-transparent hover:bg-white/10 transition-all">
                                <Quote className="w-12 h-12 text-blue-400 mb-6" />
                                <p className="text-blue-100 flex-grow mb-6">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <div className="font-semibold text-white">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-sm text-blue-200">
                                            {testimonial.role}
                                        </div>
                                        <div className="text-sm text-blue-300">
                                            {testimonial.organization}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};