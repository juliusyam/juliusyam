import {ReactNode} from "react";

export interface Dict<T> {
  [key: string]: T,
}

export type EnumDict<T extends string | symbol | number, U> = {
  [key in T]: U;
};

export interface StringChildrenProps {
  children: string,
}

export interface ChildrenProps {
  children: ReactNode,
}

export interface ClassNameProps {
  className?: string,
}