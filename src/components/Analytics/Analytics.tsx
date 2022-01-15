import React, { useEffect, useState } from 'react';
import AnalyticsScript from './AnalyticsScript';
import CookiesBanner from './CookiesBanner';
import { checkCookieSelection } from './Analytics.utils';

export default function Analytics() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(!checkCookieSelection());
  }, []);

  return (
    <>
      <AnalyticsScript />
      {showBanner && <CookiesBanner setShowBanner={setShowBanner} />}
    </>
  );
}
