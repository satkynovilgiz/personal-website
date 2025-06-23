// my-app/components/Skills.jsx
import { useTranslation } from 'next-i18next';
import styles from '@/styles/Skills.module.scss';
import { FaPython, FaJsSquare, FaDocker, FaGitAlt, FaReact } from 'react-icons/fa';

const skillsList = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Git', icon: <FaGitAlt /> },
];

export default function Skills() {
  const { t } = useTranslation('common');
  return (
    <section className={styles.skills} id="skills">
      <h2>{t('skills_title')}</h2>
      <div className={styles.skillGrid}>
        {skillsList.map(({ name, icon }) => (
          <div key={name} className={styles.skillCard}>
            <div className={styles.icon}>{icon}</div>
            <p>{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
