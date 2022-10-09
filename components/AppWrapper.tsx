import { Navigation } from './Navigation';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { ChildrenProps } from '../models';
import Head from "next/head";

export function AppWrapper({ children }: ChildrenProps) {

  const { pathname } = useRouter();

  if (pathname === '/') return <Wrapper>{ children }</Wrapper>;

  return (
    <>
      <div className="fixed w-full z-50"><Navigation /></div>

      <div>
        <Wrapper>{ children }</Wrapper>
      </div>
    </>
  )
}

function Wrapper({ children }: ChildrenProps) {
  return (
    <>
      <Head>
        <title>Julius Yam | Web, Mobile, UX, Graphic Design</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta name="description" content="Design is a function that transcends practicality into the world of beauty. The idea of a design focused software developer is to create bespoke software products that converts functionality into aesthetics and usability, whilst devising a design language uniquely tailored to each client, and ultimately transform unimaginable ideas to life."/>
        <link rel="shortcut icon" href="/img/favicon.ico" />
      </Head>
      <AnimatePresence exitBeforeEnter initial={ false }>
        { children }
      </AnimatePresence>
    </>
  )
}