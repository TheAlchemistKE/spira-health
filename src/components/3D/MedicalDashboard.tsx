import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';

interface DataPoint {
    name: string;
    efficiency: number;
    safety: number;
    satisfaction: number;
}

const initialData: DataPoint[] = [
    { name: 'Hospitals', efficiency: 92, safety: 88, satisfaction: 85 },
    { name: 'Clinics', efficiency: 85, safety: 90, satisfaction: 88 },
    { name: 'Specialists', efficiency: 88, safety: 95, satisfaction: 90 },
    { name: 'Remote', efficiency: 90, safety: 87, satisfaction: 92 }
];

interface CustomTooltipProps {
    active?: boolean;
    payload?: unknown[];
    label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (!active || !payload) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800 border border-slate-700 rounded-lg p-4 shadow-xl"
        >
            <p className="text-slate-300 font-medium mb-2">{label}</p>

            {payload.map((entry: any, index: number) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                    <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: entry.fill }}
                    />
                    <span className="text-slate-400">{entry.name}:</span>
                    <span className="text-white font-medium">{entry.value}%</span>
                </div>
            ))}
        </motion.div>
    );
};

export const MedicalDashboard: React.FC<{ className?: string }> = ({ className }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

    const metrics = [
        { key: 'efficiency', color: '#60A5FA', name: 'Efficiency' },
        { key: 'safety', color: '#34D399', name: 'Safety' },
        { key: 'satisfaction', color: '#A78BFA', name: 'Satisfaction' }
    ];

    return (
        <div className={`${className} space-y-4`}>
            {/* Metric Selectors */}
            <div className="flex gap-3">
                {metrics.map((metric) => (
                    <motion.button
                        key={metric.key}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            selectedMetric === metric.key || !selectedMetric
                                ? 'bg-slate-800 text-white'
                                : 'bg-slate-900/50 text-slate-400 hover:bg-slate-800/50'
                        }`}
                        onClick={() => setSelectedMetric(
                            selectedMetric === metric.key ? null : metric.key
                        )}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="flex items-center gap-2">
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: metric.color }}
                            />
                            {metric.name}
                        </div>
                    </motion.button>
                ))}
            </div>

            {/* Chart */}
            <motion.div
                className="w-full h-[400px] bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={initialData}
                        onMouseMove={(state) => {
                            if (state?.activeTooltipIndex !== undefined) {
                                setActiveIndex(state.activeTooltipIndex);
                            }
                        }}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#334155"
                            vertical={false}
                        />
                        <XAxis
                            dataKey="name"
                            stroke="#94A3B8"
                            tick={{ fill: '#94A3B8' }}
                            axisLine={{ stroke: '#334155' }}
                        />
                        <YAxis
                            stroke="#94A3B8"
                            tick={{ fill: '#94A3B8' }}
                            domain={[0, 100]}
                            axisLine={{ stroke: '#334155' }}
                        />
                        <Tooltip content={<CustomTooltip />} />

                        {metrics.map((metric) => (
                            (!selectedMetric || selectedMetric === metric.key) && (
                                <Bar
                                    key={metric.key}
                                    dataKey={metric.key}
                                    name={metric.name}
                                    fill={metric.color}
                                    radius={[4, 4, 0, 0]}
                                >
                                    {initialData.map((_, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={metric.color}
                                            fillOpacity={
                                                activeIndex === null || activeIndex === index
                                                    ? 1
                                                    : 0.5
                                            }
                                        />
                                    ))}
                                </Bar>
                            )
                        ))}
                    </BarChart>
                </ResponsiveContainer>
            </motion.div>
        </div>
    );
};