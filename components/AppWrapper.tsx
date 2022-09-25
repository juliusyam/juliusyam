import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

interface AppWrapperProps {
  children: ReactNode,
}

export function AppWrapper({ children }: AppWrapperProps) {

  const { pathname } = useRouter();

  if (pathname === '/') return <AnimationWrapper>{ children }</AnimationWrapper>;

  return (
    <>
      <div className="fixed w-full z-50"><Navigation /></div>

      <div className="pt-20">
        <AnimationWrapper>{ children }</AnimationWrapper>
      </div>
    </>
  )
}

function AnimationWrapper({ children }: AppWrapperProps) {
  return (
    <AnimatePresence exitBeforeEnter initial={ false }>
      { children }
    </AnimatePresence>
  )
}