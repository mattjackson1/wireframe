'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return 'Loading';

    if (resolvedTheme === 'dark') {
        return (
            <button onClick={() => setTheme('light')} className="flex items-center gap-2">
                <FiSun /> <span className="hidden md:inline">Light mode</span>
            </button>
        );
    }
    if (resolvedTheme === 'light') {
        return (
            <button onClick={() => setTheme('dark')} className="flex items-center gap-2">
                <FiMoon /> <span className="hidden md:inline">Dark mode</span>
            </button>
        );
    }
}
