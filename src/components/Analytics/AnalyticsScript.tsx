import Head from 'next/head';
import { getCookieSelection, GA_TRACKING_ID } from './Analytics.utils';

export default function AnalyticsScript() {
  if (!getCookieSelection()) return null;
  // we don't want to track analytics while in development
  if (process.env.NODE_ENV !== 'production') return null;

  return (
    <Head>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                      anonymize_ip: true
                    });
                  `,
        }}
      />
    </Head>
  );
}
