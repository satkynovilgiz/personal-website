import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import styles from '@/styles/LanguageSwitcher.module.scss';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <select
      onChange={changeLanguage}
      value={i18n.language || router.locale}
      aria-label="Select language"
      className={styles.langSelect}
    >
      <option value="ru">Русский</option>
      <option value="en">English</option>
    </select>
  );
}
