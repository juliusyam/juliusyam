import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

interface AppWrapperProps {
  children: ReactNode,
}

export function AppWrapper({ children }: AppWrapperProps) {

  const { pathname } = useRouter();

  if (pathname === '/') return <>{ children }</>;

  return (
    <>
      <div className="fixed w-full z-50"><Navigation /></div>

      <AnimatePresence exitBeforeEnter
                       initial={ false }
                       onExitComplete={ () => window.scrollTo(0, 0) }>
        <div className="pt-20">{ children }</div>
      </AnimatePresence>
    </>
  )
}