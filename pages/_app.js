import '../styles/index.css';
import {ThemeProvider} from '@components/Theme/ThemeContext';

export default function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
