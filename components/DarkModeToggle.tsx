import React, {useContext} from 'react';
import {ThemeContext} from './ThemeContext';

const DarkModeToggle = () => {
  const {themeMode, setThemeMode} = useContext(ThemeContext);
  if (!themeMode) return null;
  return (
    <label htmlFor="checkbox" className="custom-checkbox">
      <input
        type="checkbox"
        checked={themeMode === 'dark'}
        onChange={(e) => {
          setThemeMode(e.target.checked ? 'dark' : 'light');
        }}
      />
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <circle className="checkbox__bg" cx="50" cy="50" r="50" />
      </svg>
    </label>
  );
};
export default DarkModeToggle;
