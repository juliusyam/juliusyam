import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { ChildrenProps } from '../models';

export function AppWrapper({ children }: ChildrenProps) {

  const { pathname, asPath, basePath } = useRouter();

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

function AnimationWrapper({ children }: ChildrenProps) {
  return (
    <AnimatePresence exitBeforeEnter initial={ false }>
      { children }
    </AnimatePresence>
  )
}