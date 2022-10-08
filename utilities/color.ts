import { EnumDict } from '../models';

export interface ColorGroupDict {
  text: ColorGroup,
  background: ColorGroup,
}

interface ColorGroup {
  main: string,
  hover: string,
}

export enum Color {
  blue,
  green,
  red,
  yellow,
}

export type ColorDict = EnumDict<Color, ColorGroupDict>

export const Colors: ColorDict = {
  [Color.blue]: {
    text: {
      main: 'text-jy-blue',
      hover: 'text-jy-blue-700'
    },
    background: {
      main: 'bg-jy-blue',
      hover: 'bg-jy-blue-700'
    },
  },
  [Color.green]: {
    text: {
      main: 'text-jy-green',
      hover: 'text-jy-green-700'
    },
    background: {
      main: 'bg-jy-green',
      hover: 'bg-jy-green-700'
    },
  },
  [Color.red]: {
    text: {
      main: 'text-jy-red',
      hover: 'text-jy-red-700'
    },
    background: {
      main: 'bg-jy-red',
      hover: 'bg-jy-red-700'
    },
  },
  [Color.yellow]: {
    text: {
      main: 'text-jy-yellow',
      hover: 'text-jy-yellow-700'
    },
    background: {
      main: 'bg-jy-yellow',
      hover: 'bg-jy-yellow-700'
    },
  },
}