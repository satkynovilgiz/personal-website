import React, { useContext, useState } from 'react';
import styles from '@/styles/Header.module.scss';
import { useTranslation } from 'next-i18next';
import { ThemeContext } from '@/pages/_app';
import { motion } from 'framer-motion';

export default function Header() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <div className={styles.logo}>Ильгиз 🚀</div>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <a href="#hero">{t('menu.home')}</a>
          <a href="#skills">{t('menu.skills')}</a>
          <a href="#projects">{t('menu.projects')}</a>
          <a href="#blog">{t('menu.blog')}</a>
          <a href="#contact">{t('menu.contact')}</a>
        </nav>
        <div className={styles.controls}>
          <button onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? '🌞' : '🌙'}
          </button>
          <select onChange={changeLang} value={i18n.language} aria-label="Language select">
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>
    </motion.header>
  );
}
