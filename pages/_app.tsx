import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AppWrapper } from '../components/AppWrapper';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function App({ Component, pageProps }: AppProps) {
  return <AppWrapper><Component {...pageProps} /></AppWrapper>
}

export default App
