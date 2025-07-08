import DownloadCVButton from '@components/DownloadCVButton';
import MenuButton from '@components/MenuButton';
import Navigation from '@components/Navigation';
import { Binder } from 'react-smooth-flow';
import type { NavSection } from '../../App';
import { HEADER_TRANSITION_TAG } from './config';
import styles from './Header.module.scss';

export interface HeaderProps {
  navSections: NavSection[];
}

const Header = ({ navSections }: HeaderProps) => {
  return (
    <Binder transitions={{ [HEADER_TRANSITION_TAG]: { duration: 0 } }}>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.navigation}>
            <Navigation navSections={navSections} orientation="horizontal" />
          </div>
          <DownloadCVButton className={styles.downloadCVButton} />
          <div className={styles.menuButton}>
            <MenuButton navSections={navSections} />
          </div>
        </div>
      </header>
    </Binder>
  );
};

export default Header;
