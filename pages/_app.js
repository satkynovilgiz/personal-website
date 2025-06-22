import '@/styles/globals.scss';
import { useState, createContext } from 'react';
import { appWithTranslation } from 'next-i18next';

export const ThemeContext = createContext();

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  );
}

export default appWithTranslation(MyApp);
