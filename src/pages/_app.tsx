import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <NextNProgress color="#FF57B2" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
