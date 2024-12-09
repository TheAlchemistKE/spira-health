import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { Container } from '@/components/ui/container.tsx';
import { cn } from '@/utils/animations';
import {Logo} from "@/components/layout/Logo.tsx";

interface NavItem {
    label: string;
    href: string;
    submenu?: Array<{
        label: string;
        href: string;
    }>;
}

const navigation: NavItem[] = [
    {
        label: 'Solutions',
        href: '#solutions',
        submenu: [
            { label: 'Telehealth', href: '#telehealth' },
            { label: 'Hospital Management', href: '#hospital' },
            { label: 'AI Diagnostics', href: '#ai' }
        ]
    },
    {
        label: 'Features',
        href: '#features',
        submenu: [
            { label: 'Virtual Consultations', href: '#virtual' },
            { label: 'Patient Records', href: '#records' },
            { label: 'Analytics', href: '#analytics' }
        ]
    },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' }
];

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
            isScrolled ? 'bg-slate-900/80 backdrop-blur-lg' : 'bg-transparent'
        )}>
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a
                        href="/"
                        className="flex items-center gap-3 group"
                    >
                        <Logo className="w-8 h-8"/>
                        <span
                            className="text-xl font-semibold bg-gradient-to-r from-[#60A5FA] to-[#67E8F9] bg-clip-text text-transparent group-hover:from-[#67E8F9] group-hover:to-[#60A5FA] transition-all duration-300">
                            Spira Health
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <div
                                key={item.label}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <a
                                    href={item.href}
                                    className="flex items-center gap-1 text-white/90 hover:text-white transition-colors"
                                >
                                    {item.label}
                                    {item.submenu && (
                                        <ChevronDown className={cn(
                                            "w-4 h-4 transition-transform duration-200",
                                            activeDropdown === item.label && "rotate-180"
                                        )}/>
                                    )}
                                </a>

                                {item.submenu && (
                                    <div className={cn(
                                        "absolute top-full left-0 mt-2 min-w-[200px] transition-all duration-200 opacity-0 invisible",
                                        activeDropdown === item.label && "opacity-100 visible"
                                    )}>
                                        <div
                                            className="py-2 px-4 bg-slate-800 rounded-xl shadow-xl border border-white/10 backdrop-blur-lg">
                                            {item.submenu.map((subItem) => (
                                                <a
                                                    key={subItem.label}
                                                    href={subItem.href}
                                                    className="block py-2 text-white/80 hover:text-white transition-colors"
                                                >
                                                    {subItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Button variant="ghost">Log in</Button>
                        <Button variant="default">Get Started</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={cn(
                    "lg:hidden absolute left-0 right-0 bg-slate-900/95 backdrop-blur-lg transition-all duration-300 border-t border-white/10",
                    isMobileMenuOpen ? "top-full opacity-100 visible" : "top-[calc(100%-4px)] opacity-0 invisible"
                )}>
                    <Container className="py-6 space-y-4">
                        {navigation.map((item) => (
                            <div key={item.label} className="space-y-2">
                                <a
                                    href={item.href}
                                    className="block text-lg text-white/90 hover:text-white"
                                >
                                    {item.label}
                                </a>
                                {item.submenu && (
                                    <div className="pl-4 space-y-2">
                                        {item.submenu.map((subItem) => (
                                            <a
                                                key={subItem.label}
                                                href={subItem.href}
                                                className="block text-white/70 hover:text-white"
                                            >
                                                {subItem.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-4 space-y-4">
                            <Button variant="ghost" className="w-full">Log in</Button>
                            <Button variant="default" className="w-full">Get Started</Button>
                        </div>
                    </Container>
                </div>
            </Container>
        </nav>
    );
};