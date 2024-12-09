import React from 'react';


export const Logo: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle cx="16" cy="16" r="16" fill="url(#faviconBg)" />
            <path
                d="M8 16 L12 16 L14 12 L18 20 L20 16 L24 16"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse-line"
            />
            <path
                d="M15 11 V21 M10 16 H20"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.6"
            />
            <defs>
                <linearGradient id="faviconBg" x1="0" y1="0" x2="32" y2="32">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
            </defs>
            <style>
                {`
                    @keyframes pulse-line {
                        from {
                            stroke-dashoffset: 40;
                        }
                        to {
                            stroke-dashoffset: -40;
                        }
                    }
                    .animate-pulse-line {
                        stroke-dasharray: 20;
                        animation: pulse-line 2s linear infinite;
                    }
                `}
            </style>
        </svg>
    );
};