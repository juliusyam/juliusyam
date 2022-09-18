import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AppWrapper } from '../components/AppWrapper';

function App({ Component, pageProps }: AppProps) {
  return <AppWrapper><Component {...pageProps} /></AppWrapper>
}

export default App
