import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { useRouter } from 'next/router';

interface AppWrapperProps {
  children: ReactNode,
}

export function AppWrapper({ children }: AppWrapperProps) {

  const { pathname } = useRouter();

  if (pathname === '/') return <>{ children }</>;

  return (
    <>
      <div className="fixed w-full z-50"><Navigation /></div>

      <div className="pt-20">{ children }</div>
    </>
  )
}