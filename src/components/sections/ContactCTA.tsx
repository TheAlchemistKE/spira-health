import React from 'react';
import { Container } from '@/components/ui/container.tsx';
import { Button } from '@/components/ui/button.tsx';
import { ArrowRight, Mail, Phone, Calendar } from 'lucide-react';

export const ContactCTA: React.FC = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500">
                <div className="absolute inset-0 bg-grid-white/10" />
                <div
                    className="absolute inset-0 bg-gradient-to-t from-slate-900"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent, black)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)'
                    }}
                />
            </div>

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Transform Your Healthcare Practice Today
                        </h2>
                        <p className="text-xl text-blue-100">
                            Join thousands of healthcare providers delivering better care with our platform
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                            <Mail className="w-8 h-8 text-blue-300 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                            <p className="text-blue-200 mb-4">
                                Get in touch with our support team
                            </p>
                            <Button variant="ghost" className="w-full">
                                Send Email
                            </Button>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                            <Phone className="w-8 h-8 text-blue-300 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                            <p className="text-blue-200 mb-4">
                                Speak with a healthcare specialist
                            </p>
                            <Button variant="ghost" className="w-full">
                                Schedule Call
                            </Button>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                            <Calendar className="w-8 h-8 text-blue-300 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Book Demo</h3>
                            <p className="text-blue-200 mb-4">
                                See our platform in action
                            </p>
                            <Button variant="ghost" className="w-full">
                                Book Now
                            </Button>
                        </div>
                    </div>

                    <div className="text-center">
                        <Button size="lg" className="group">
                            Get Started Now
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};
