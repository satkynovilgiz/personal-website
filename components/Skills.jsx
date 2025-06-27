import { useTranslation } from 'next-i18next';
import styles from '@/styles/Skills.module.scss';

import {
  FaPython,
  FaJsSquare,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaHtml5,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiDjango,
  SiFlask,
  SiTelegram,
  SiFigma,
} from 'react-icons/si';

import { MdVerified } from 'react-icons/md';

const skillsList = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'QA', icon: <MdVerified /> },
  { name: 'Telegram Bot', icon: <SiTelegram /> },
  { name: 'React / Next.js', icon: <FaReact /> },
  { name: 'Django / Flask', icon: <SiDjango /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'HTML / CSS', icon: <FaHtml5 /> },
  { name: 'UX / UI Design', icon: <SiFigma /> },
];

export default function Skills() {
  const { t } = useTranslation('common');

  return (
    <section className={styles.skills} id="skills">
      <h2>{t('skills_title')}</h2>
      <div className={styles.skillGrid}>
        {skillsList.map(({ name, icon }) => (
          <div key={name} className={styles.skillCard} title={name}>
            <div className={styles.icon}>{icon}</div>
            <p>{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
