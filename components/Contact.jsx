// my-app/components/Contact.jsx
import { useTranslation } from 'next-i18next';
import styles from '@/styles/Contact.module.scss';

export default function Contact() {
  const { t } = useTranslation('common');
  return (
    <section className={styles.contact} id="contact">
      <h2>{t('contact_title')}</h2>
      <p>{t('contact_text')}</p>
      <form className={styles.form}>
        <input type="text" placeholder={t('contact_name')} required />
        <input type="email" placeholder={t('contact_email')} required />
        <textarea placeholder={t('contact_message')} required />
        <button type="submit">{t('contact_send')}</button>
      </form>
    </section>
  );
}
