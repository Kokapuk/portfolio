import Navigation from '@components/Navigation';
import { useEffect, useLayoutEffect, useState, type Ref } from 'react';
import { createPortal } from 'react-dom';
import type { NavSection } from '../../App';
import styles from './OverlayMenu.module.scss';

export interface OverlayMenuProps {
  navSections: NavSection[];
  ref?: Ref<HTMLDivElement>;
  onClose(): void;
}

const OverlayMenu = ({ navSections, ref, onClose }: OverlayMenuProps) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    setHeaderHeight(document.querySelector('header')!.clientHeight);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).tagName === 'A') {
      onClose();
    }
  };

  return createPortal(
    <div ref={ref} className={styles.wrapper} style={{ top: headerHeight }} onClick={handleClick}>
      <Navigation navSections={navSections} orientation="vertical" />
    </div>,
    document.getElementById('modalRoot')!
  );
};

export default OverlayMenu;
