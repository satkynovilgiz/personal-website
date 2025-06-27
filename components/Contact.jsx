import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import styles from '@/styles/Contact.module.scss';

export default function Contact() {
  const { t } = useTranslation('common');
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Отправка...');
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    try {
      const res = await fetch('/api/contact', {  // Отправка запроса на backend
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Сообщение успешно отправлено!');
        e.target.reset();
      } else {
        setStatus('Ошибка отправки сообщения.');
      }
    } catch {
      setStatus('Ошибка отправки сообщения.');
    }
  }

  return (
    <section className={styles.contact} id="contact">
      <h2>{t('contact_title')}</h2>
      <p>{t('contact_text')}</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder={t('contact_name')} required />
        <input name="email" type="email" placeholder={t('contact_email')} required />
        <textarea name="message" placeholder={t('contact_message')} required />
        <button type="submit">{t('contact_send')}</button>
      </form>
      {status && <p>{status}</p>}
    </section>
  );
}
