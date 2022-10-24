import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AppWrapper } from '../components/AppWrapper';
import { appWithTranslation } from 'next-i18next';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {useAppHeight} from "../hooks/useAppHeight";
config.autoAddCss = false;

function App({ Component, pageProps, router }: AppProps) {

  useAppHeight();

  return <AppWrapper><Component {...pageProps} key={ router.asPath } /></AppWrapper>
}

export default appWithTranslation(App);
