import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';

import SEO from '../../next-seo.config';
import Footer from 'src/components/Footer';
import NavBar from 'src/components/NavBar';
import Analytics from 'src/components/Analytics';
import * as gtag from 'src/components/Analytics/gtag';
import 'src/styles/globals.css';
import { appWithTranslation } from 'next-i18next';

function MyApp(appProps: any) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <NavBar />
      <appProps.Component {...appProps.pageProps} />
      <Footer />
      <Analytics />
    </>
  );
}

export default appWithTranslation(MyApp);
