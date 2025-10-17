import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemeToggleProps {
    inline?: boolean; // when true, render inline-friendly styles
    className?: string;
}

export default function ThemeToggle({ inline = false, className = '' }: ThemeToggleProps) {
    const { theme, toggleTheme } = useTheme();

    const baseClasses = inline
        ? `p-2 rounded-md bg-card/30 border border-border hover:bg-card transition-all duration-200 ${className}`
        : `fixed top-6 right-6 z-40 p-3 rounded-full bg-card/50 border border-border hover:bg-card transition-all duration-300 hover:scale-110 backdrop-blur-sm ${className}`;

    return (
        <button
            onClick={toggleTheme}
            className={baseClasses}
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300" />
            ) : (
                <Moon className="w-5 h-5 text-blue-600 transition-transform duration-300" />
            )}
        </button>
    );
}