import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import styles from '@/styles/Header.module.scss';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation('common');
  const [showContact, setShowContact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowContact(window.scrollY > 150);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>{t('main_title')}</div>

          {/* Весь правый блок: навигация + язык + бургер */}
          <div className={styles.right}>
            <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
              <Link href="#about" onClick={() => setMenuOpen(false)}>{t('about_title')}</Link>
              <Link href="#skills" onClick={() => setMenuOpen(false)}>{t('skills_title')}</Link>
              <Link href="#projects" onClick={() => setMenuOpen(false)}>{t('projects_title')}</Link>
              <Link href="#contact" onClick={() => setMenuOpen(false)}>{t('contact_title')}</Link>

              <div className={styles.languageSwitcherMobile}>
                <LanguageSwitcher />
              </div>
            </nav>

            <div className={styles.actions}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={styles.burger}
                aria-label="Toggle menu"
              >
                {menuOpen ? <IoClose size={26} /> : <GiHamburgerMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`${styles.bottomContacts} ${showContact ? styles.show : ''}`}>
        <a href="https://t.me/yourtelegram" target="_blank" rel="noreferrer">
          <FaTelegramPlane />
        </a>
        <a href="https://wa.me/yourwhatsapp" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </>
  );
}
