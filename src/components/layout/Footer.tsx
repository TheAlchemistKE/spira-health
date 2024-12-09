import React from 'react';
import { Container } from '@/components/ui/container.tsx';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
    const footerSections = [
        {
            title: 'Product',
            links: [
                { label: 'Features', href: '#features' },
                { label: 'Solutions', href: '#solutions' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Updates', href: '#updates' }
            ]
        },
        {
            title: 'Company',
            links: [
                { label: 'About', href: '#about' },
                { label: 'Careers', href: '#careers' },
                { label: 'Blog', href: '#blog' },
                { label: 'Press', href: '#press' }
            ]
        },
        {
            title: 'Resources',
            links: [
                { label: 'Documentation', href: '#docs' },
                { label: 'Help Center', href: '#help' },
                { label: 'Community', href: '#community' },
                { label: 'Contact', href: '#contact' }
            ]
        },
        {
            title: 'Legal',
            links: [
                { label: 'Privacy', href: '#privacy' },
                { label: 'Terms', href: '#terms' },
                { label: 'Security', href: '#security' },
                { label: 'HIPAA', href: '#hipaa' }
            ]
        }
    ];

    const socialLinks = [
        { Icon: Facebook, href: '#' },
        { Icon: Twitter, href: '#' },
        { Icon: Linkedin, href: '#' },
        { Icon: Instagram, href: '#' }
    ];

    return (
        <footer className="bg-slate-900 border-t border-white/10">
            <Container className="py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-slate-400 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-4">
                            {socialLinks.map(({ Icon, href }) => (
                                <a
                                    key={href}
                                    href={href}
                                    className="text-slate-400 hover:text-white transition-colors p-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                        <div className="text-slate-400 text-sm">
                            © {new Date().getFullYear()} eHealth. All rights reserved.
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};