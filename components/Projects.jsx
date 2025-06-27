import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Slider from 'react-slick';
import styles from '@/styles/Projects.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Projects() {
  const { t } = useTranslation('common');
  // Защита: если t возвращает не массив, берем пустой
  const projectsRaw = t('projects_list', { returnObjects: true });
  const projects = Array.isArray(projectsRaw) ? projectsRaw : [];

  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpand = (idx) => {
    setExpandedIndexes((prev) =>
      prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : [...prev, idx]
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className={styles.projects} id="projects">
      <h2>{t('projects_title')}</h2>
      <Slider {...settings} className={styles.slider}>
        {projects.map(({ title, description, link, img }, idx) => {
          const isExpanded = expandedIndexes.includes(idx);
          return (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
              aria-label={`${title} project link`}
            >
              <img src={img} alt={title} />
              <div className={styles.projectInfo}>
                <h3>{title}</h3>
                <p className={isExpanded ? styles.expanded : ''}>
                  {description}
                </p>
                <button
                  className={styles.readMoreBtn}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleExpand(idx);
                  }}
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? t('read_less') : t('read_more')}
                </button>
              </div>
            </a>
          );
        })}
      </Slider>
    </section>
  );
}
