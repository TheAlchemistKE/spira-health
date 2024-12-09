import React from 'react';
import { MedicalDashboard } from '@/components/3D/MedicalDashboard.tsx';

export const Solutions: React.FC = () => {
    return (
        <section className="min-h-screen bg-[#0A0D14] py-24">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left side: Content */}
                    <div>
                        <h2 className="text-4xl font-semibold text-white mb-6">
                            Tailored Solutions for Everyone
                        </h2>
                        <p className="text-slate-400 text-lg mb-12">
                            Our platform adapts to the needs of every healthcare stakeholder,
                            providing specialized tools and features for optimal results.
                        </p>

                        <div className="space-y-8">
                            {/* For Hospitals */}
                            <div className="p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 transition-all">
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    For Hospitals
                                </h3>
                                <p className="text-slate-400 mb-4">
                                    Comprehensive management system for entire hospital operations.
                                </p>
                                <div className="grid grid-cols-2 gap-3 text-blue-400">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                        Department Management
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                        Resource Allocation
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                        Staff Scheduling
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                        Inventory Control
                                    </div>
                                </div>
                            </div>

                            {/* For Doctors */}
                            <div className="p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 transition-all">
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    For Doctors
                                </h3>
                                <p className="text-slate-400 mb-4">
                                    Tools to deliver better care and manage patient relationships.
                                </p>
                                <div className="grid grid-cols-2 gap-3 text-blue-400">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                        Patient Records
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                        AI Diagnostics
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                        Telemedicine Tools
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                        Prescription Management
                                    </div>
                                </div>
                            </div>

                            {/* For Patients */}
                            <div className="p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 transition-all">
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    For Patients
                                </h3>
                                <p className="text-slate-400 mb-4">
                                    Easy access to quality healthcare and personal health records.
                                </p>
                                <div className="grid grid-cols-2 gap-3 text-blue-400">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                        Virtual Consultations
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                        Health Tracking
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                        Appointment Booking
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                        Medical History
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side: 3D Dashboard */}
                    <div className="h-[600px] relative">
                        <MedicalDashboard className="absolute inset-0" />
                    </div>
                </div>
            </div>
        </section>
    );
};