import React, {createContext, useEffect, useState} from 'react';
import {COLORS} from 'constants/Colors';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({children}) => {
  const [themeMode, rawSetThemeMode] = useState<string>(undefined);
  useEffect(() => {
    const root = window.document.documentElement;
    const initialThemeValue = root.style.getPropertyValue('--initial-theme-mode');
    rawSetThemeMode(initialThemeValue);
  }, []);
  const setThemeMode = (newValue) => {
    const root = document.documentElement;
    rawSetThemeMode(newValue);

    localStorage.setItem('theme', newValue);

    root.style.setProperty(
      '--background-color',
      newValue === 'light' ? COLORS.background.light : COLORS.background.dark
    );

    root.style.setProperty('--color', newValue === 'light' ? COLORS.color.light : COLORS.color.dark);
  };

  return <ThemeContext.Provider value={{themeMode, setThemeMode}}>{children}</ThemeContext.Provider>;
};
