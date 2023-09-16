import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const GoogleAnalytics = ({ children }: any) => {
  useEffect(() => {
    ReactGA.initialize(`${process.env.NEXT_PUBLIC_TRACKING_ID_GGA}`);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return <>{children}</>;
};

export default GoogleAnalytics;
