import {ReactNode} from "react";
import {Navigation} from "./Navigation";

interface PageWrapperProps {
  children: ReactNode,
}

export function PageWrapper({ children }: PageWrapperProps) {

  return (
    <>
      <div className="fixed w-full z-50"><Navigation /></div>

      <div className="pt-20">{ children }</div>
    </>
  )
}