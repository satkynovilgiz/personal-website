// my-app/pages/index.js
import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

// Эта функция нужна для подгрузки переводов на сервере при сборке
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

