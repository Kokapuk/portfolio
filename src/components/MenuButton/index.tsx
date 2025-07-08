import Close from '@assets/Close';
import Menu from '@assets/Menu';
import { HEADER_TRANSITION_TAG } from '@components/Header/config';
import OverlayMenu from '@components/OverlayMenu';
import { Suspense, useState } from 'react';
import { Binder, startTransition, type Tag, type TransitionOptions } from 'react-smooth-flow';
import type { NavSection } from '../../App';
import styles from './MenuButton.module.scss';

export interface OverlayMenuProps {
  navSections: NavSection[];
}

const MENU_ICON_TRANSITION_TAG: Tag = 'menu_icon';
const MENU_ICON_TRANSITION_OPTIONS: TransitionOptions = {
  duration: 300,
  forcePresenceTransition: true,
  enterKeyframes: { transform: ['rotate(-180deg)', 'rotate(0deg)'], opacity: [0, 1] },
  exitKeyframes: { transform: ['rotate(0deg)', 'rotate(180deg)'], opacity: [1, 0] },
  relevantStyleProperties: ['width', 'height', 'color'],
};
const MENU_OVERLAY_TRANSITION_TAG: Tag = 'menu_overlayMenu';
const MENU_OVERLAY_TRANSITION_OPTIONS: TransitionOptions = {
  duration: 400,
  enterKeyframes: { transform: ['translateY(-100%)', 'translateY(0)'], opacity: [0, 1] },
  exitKeyframes: 'reversedEnter',
};

export const test = 0;
const MenuButton = ({ navSections }: OverlayMenuProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button
        className={styles.button}
        onClick={() =>
          startTransition([MENU_OVERLAY_TRANSITION_TAG, HEADER_TRANSITION_TAG, MENU_ICON_TRANSITION_TAG], () =>
            setMenuOpen((prev) => !prev)
          )
        }
        aria-label="Menu"
      >
        <Suspense>
          {isMenuOpen ? (
            <Binder transitions={{ [MENU_ICON_TRANSITION_TAG]: MENU_ICON_TRANSITION_OPTIONS }}>
              <Close />
            </Binder>
          ) : (
            <Binder transitions={{ [MENU_ICON_TRANSITION_TAG]: MENU_ICON_TRANSITION_OPTIONS }}>
              <Menu />
            </Binder>
          )}
        </Suspense>
      </button>
      {isMenuOpen && (
        <Binder
          transitions={{
            [MENU_OVERLAY_TRANSITION_TAG]: MENU_OVERLAY_TRANSITION_OPTIONS,
          }}
        >
          <OverlayMenu
            navSections={navSections}
            onClose={() =>
              startTransition([MENU_OVERLAY_TRANSITION_TAG, HEADER_TRANSITION_TAG, MENU_ICON_TRANSITION_TAG], () =>
                setMenuOpen(false)
              )
            }
          />
        </Binder>
      )}
    </>
  );
};

export default MenuButton;
