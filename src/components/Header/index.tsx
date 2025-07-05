import Navigation from '@components/Navigation';
import type { NavSection } from '../../App';
import styles from './Header.module.scss';

export interface HeaderProps {
  navSections: NavSection[];
}

const Header = ({ navSections }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Navigation navSections={navSections} />
      </div>
    </header>
  );
};

export default Header;
