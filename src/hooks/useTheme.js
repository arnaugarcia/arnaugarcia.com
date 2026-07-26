import {useCallback, useEffect, useState} from 'react';

export const THEME_STORAGE_KEY = 'theme';

export function getPreferredTheme() {
    if (typeof window === 'undefined') {
        return 'light';
    }

    try {
        const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
        if (stored === 'dark' || stored === 'light') {
            return stored;
        }
    } catch {
        // Ignore storage access errors (private mode, blocked storage, etc.)
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme) {
    if (typeof document === 'undefined') {
        return;
    }
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
}

export function useTheme() {
    const [theme, setThemeState] = useState(null);

    useEffect(() => {
        const initial = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
        applyTheme(initial);
        setThemeState(initial);
    }, []);

    const setTheme = useCallback((nextTheme) => {
        applyTheme(nextTheme);
        setThemeState(nextTheme);
        try {
            window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        } catch {
            // Ignore storage access errors
        }
    }, []);

    const toggleTheme = useCallback(() => {
        if (!theme) {
            return;
        }
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }, [setTheme, theme]);

    return {
        theme,
        ready: theme !== null,
        setTheme,
        toggleTheme,
        isDark: theme === 'dark'
    };
}
