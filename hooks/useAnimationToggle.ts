import {useState} from "react";

interface AnimationState {
  initialLoad: boolean,
  toggled: boolean,
}

interface AnimationToggle {
  state: AnimationState,
  toggleOn: () => void,
  toggleOff: () => void,
}

export function useAnimationToggle(): AnimationToggle {

  const [toggleState, setToggleState] = useState<AnimationState>({
    initialLoad: true,
    toggled: false,
  });

  const toggleOn = () => {
    setToggleState({
      initialLoad: false,
      toggled: true,
    });
  };

  const toggleOff = () => {
    setToggleState({
      initialLoad: false,
      toggled: false,
    });
  }

  return { state: toggleState, toggleOn, toggleOff };
}