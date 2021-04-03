import React, {useContext} from 'react';
import {ThemeContext} from './ThemeContext';

const DarkModeToggle = () => {
  const {themeMode, setThemeMode} = useContext(ThemeContext);
  if (!themeMode) return null;
  return (
    <label>
      <input
        type="checkbox"
        checked={themeMode === 'dark'}
        onChange={(e) => {
          setThemeMode(e.target.checked ? 'dark' : 'light');
        }}
      />
      Dark
    </label>
  );
};
export default DarkModeToggle;
