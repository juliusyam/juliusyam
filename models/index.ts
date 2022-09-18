import {ReactNode} from "react";

export interface Dict<T> {
  [key: string]: T,
}

export interface StringChildrenProps {
  children: string,
}

export interface ChildrenProps {
  children: ReactNode,
}