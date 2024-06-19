'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return <span className="p-2">&nbsp;</span>;

    if (resolvedTheme === 'dark') {
        return (
            <button onClick={() => setTheme('light')} className="flex h-[36px] items-center gap-2 p-2" aria-label="Light mode">
                <FiSun /> <span className="hidden md:inline">Light mode</span>
            </button>
        );
    }
    if (resolvedTheme === 'light') {
        return (
            <button onClick={() => setTheme('dark')} className="flex h-[36px] items-center gap-2 p-2" aria-label="Dark mode">
                <FiMoon /> <span className="hidden md:inline">Dark mode</span>
            </button>
        );
    }
}
