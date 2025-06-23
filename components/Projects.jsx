// my-app/components/Projects.jsx
import { useTranslation } from 'next-i18next';
import styles from '@/styles/Projects.module.scss';

const projects = [
  {
    title: 'Персональный сайт',
    description:
      'Современный сайт с адаптивным дизайном и анимациями, построенный на Next.js',
    link: 'https://github.com/ilgiz/personal-website',
    img: '/images/anime.jpg',
  },
  {
    title: 'Телеграм-бот для школы',
    description: 'Бот для борьбы с буллингом, с поддержкой нескольких языков',
    link: '#',
    img: '/images/create.jpg',
  },
];

export default function Projects() {
  const { t } = useTranslation('common');
  return (
    <section className={styles.projects} id="projects">
      <h2>{t('projects_title')}</h2>
      <div className={styles.projectList}>
        {projects.map(({ title, description, link, img }, idx) => (
          <a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <img src={img} alt={title} />
            <div className={styles.projectInfo}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
