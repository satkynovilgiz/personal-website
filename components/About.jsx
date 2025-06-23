// my-app/components/About.jsx
import { useTranslation } from 'next-i18next';
import styles from '@/styles/About.module.scss';

export default function About() {
  const { t } = useTranslation('common');
  return (
    <section className={styles.about} id="about">
      <div className={styles.text}>
        <h2>{t('about_title')}</h2>
        <p>{t('about_text')}</p>
      </div>
      <div className={styles.image}>
        <img src="/images/bg.jpg" alt="Ильгиз Саткынов" />
      </div>
    </section>
  );
}
