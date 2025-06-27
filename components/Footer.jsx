import styles from '@/styles/Footer.module.scss';
import { useTranslation } from 'next-i18next';

export default function Footer() {
    const { t } = useTranslation('common');
  
  return (
    <footer className={styles.footer}>
      <p>{t('footer_text')}</p>
    </footer>
  );
}
