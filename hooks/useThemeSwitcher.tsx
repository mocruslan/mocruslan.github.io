import React, { useState } from 'react';

const useThemeSwitcher = (): [string, (theme: string) => void] => {
    const [theme, setTheme] = useState(
        typeof window !== 'undefined' ? localStorage.theme : ''
    );
    const activeTheme = theme === 'dark' ? 'light' : 'dark';

    React.useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(activeTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, activeTheme]);

    return [activeTheme, setTheme];
};

export default useThemeSwitcher;
