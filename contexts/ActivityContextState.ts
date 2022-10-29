import {useState} from "react";
import {ActivityState} from "./ActivityContext";
import {Dict} from "../models";

export function useActivityContextState(): ActivityState {

  const [activities, setActivities] = useState<Dict<boolean>>({});

  function startActivity(key: string) {
    setActivities(prevState => ({
      ...prevState, [key]: true,
    }));
  }

  function completeActivity(key: string) {
    setActivities(prevState => {
      delete prevState[key];

      return prevState;
    })
  }

  return { dict: activities, startActivity, completeActivity };
}