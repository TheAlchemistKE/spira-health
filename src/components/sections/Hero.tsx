import React from 'react';
import { ChevronDown } from 'lucide-react';
import {DnaHelix} from "@/components/3D/DNAHelix.tsx";


export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-[#0A0D14] overflow-hidden flex flex-row justify-evenly items-center">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-400/5 pointer-events-none" />
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Left Column - Content */}
                <div className="z-10 flex flex-col justify-center px-6 lg:px-12 pt-32">
                    <div className="max-w-[600px]">
                        <h1 className="text-[56px] md:text-[80px] font-semibold leading-[1.1] tracking-tight">
                            <span className="bg-gradient-to-r from-[#60A5FA] to-[#67E8F9] bg-clip-text text-transparent block">
                                Healthcare
                            </span>
                            <span className="text-white">
                                Reimagined
                            </span>
                        </h1>

                        <p className="text-white/60 text-xl mt-6 mb-12">
                            Experience the convergence of AI-powered telemedicine and
                            comprehensive hospital management in one revolutionary platform.
                        </p>

                        <div className="flex items-center gap-4">
                            <button className="bg-[#60A5FA] text-white px-6 py-3 rounded-lg hover:bg-blue-600 flex items-center gap-2">
                                Get Started
                                <span>→</span>
                            </button>
                            <div className="w-48 h-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-center flex items-center justify-center ">
                                Learn More
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mt-24">
                            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="text-2xl font-semibold text-white">10M+</div>
                                <div className="text-white/60">Patient Consultations</div>
                            </div>
                            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="text-2xl font-semibold text-white">99.9%</div>
                                <div className="text-white/60">System Uptime</div>
                            </div>
                            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="text-2xl font-semibold text-white">ISO 27001</div>
                                <div className="text-white/60">Security Certified</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - DNA Helix */}
                <div className="absolute lg:relative right-0 w-full lg:w-auto  opacity-20 lg:opacity-100 mt-14 pl-14">
                    <DnaHelix className="w-full h-full bg-transparent" />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2">
                <span className="text-sm">Scroll to explore</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </div>
        </section>
    );
};