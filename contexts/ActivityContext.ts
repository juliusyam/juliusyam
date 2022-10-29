import { Dict } from '../models';
import {createContext, useContext} from "react";

export interface ActivityState {
  dict: Dict<boolean>,
  startActivity: (key: string) => void,
  completeActivity: (key: string) => void,
}

export const ActivityContext = createContext<ActivityState>({
  dict: {},
  startActivity: () => {},
  completeActivity: () => {},
});

export const useActivityContext = () => useContext(ActivityContext);