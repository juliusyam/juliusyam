import {useAnimationToggle} from "../../hooks/useAnimationToggle";
import styles from "../../styles/Navigation.module.scss";
import { NavBar } from './NavBar';
import { NavPanel } from './NavPanel';

export function Navigation() {

  const { state: { initialLoad, toggled }, toggleOn, toggleOff } = useAnimationToggle();

  return (
    <div className="grid relative z-50">
      <NavBar openPanel={ toggleOn } />

      <div className={`grid absolute top-0 left-0 h-screen w-0 
      ${ initialLoad ? styles.initialPanel : toggled ? styles.panelReveal : styles.panelDisappear } overflow-hidden`
      }>
        <NavPanel closePanel={ toggleOff } />
      </div>
    </div>
  )
}