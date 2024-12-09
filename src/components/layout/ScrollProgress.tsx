import React from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export const ScrollProgress: React.FC = () => {
    const progress = useScrollProgress();

    return (
        <div className="fixed top-0 left-0 right-0 h-1 z-50">
            <div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-100"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};