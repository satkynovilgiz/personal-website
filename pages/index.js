import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
// import Projects, BlogPreview, Contact, Footer когда готовы

export default function Home() {
  return (
    <>
      <Head>
        <title>Ильгиз — Портфолио</title>
        <meta name="description" content="Портфолио Ильгиза" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Skills />
        {/* <Projects /> */}
        {/* <BlogPreview /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
