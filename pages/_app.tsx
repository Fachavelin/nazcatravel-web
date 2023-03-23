import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '@/styles/global.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Component {...pageProps} />;
}
