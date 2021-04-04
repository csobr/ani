import React from 'react';
import {COLORS} from '../constants/Colors';

const MagicScriptTag = () => {
  let codeToRunOnClient = `    (function () {
    function getInitialThemeMode() {
      const themePerference = window.localStorage.getItem('theme');
      const hasThemePerference = typeof themePerference === 'string';

      if (hasThemePerference) {
        return themePerference;
      }
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const hasMediaQueryPerference = typeof mql.matches === 'boolean';
      

      if (hasMediaQueryPerference) {
        return mql.matches ? 'dark' : 'light';
      }
      return 'light';
    }

  const themeMode = getInitialThemeMode();

  const root = document.documentElement;
  root.style.setProperty('--color', themeMode === 'light' ? '${COLORS.color.light}' : '${COLORS.color.dark}');
  root.style.setProperty(
    '--background-color',
    themeMode === 'light' ? ' ${COLORS.background.light}' : ' ${COLORS.background.dark}'
  );

  root.style.setProperty('--initial-theme-mode', themeMode);})()
`;

  return <script dangerouslySetInnerHTML={{__html: codeToRunOnClient}} />;
};
export const onRenderBody = ({setPreBodyComponents}) => {
  setPreBodyComponents(<MagicScriptTag />);
};
export default MagicScriptTag;

// https://www.joshwcomeau.com/react/dark-mode/ - The man
