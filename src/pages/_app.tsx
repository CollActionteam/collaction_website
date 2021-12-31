import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "src/components/Footer";
import CookiesBanner from "src/components/Cookies/CookiesBanner";
import * as gtag from "src/lib/gtag";
import "src/styles/globals.css";
import "src/styles/ticker.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>CollAction</title>
      </Head>
      <Component {...pageProps} />
      <Footer />
      <CookiesBanner />
    </>
  );
}

export default MyApp;
