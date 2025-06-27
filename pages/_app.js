import '@/styles/globals.scss';
import { appWithTranslation } from 'next-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      <Component {...pageProps} />
    </>
  )}

export default appWithTranslation(MyApp);
