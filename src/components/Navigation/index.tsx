import cn from 'classnames';
import type { NavSection } from '../../App';
import styles from './Navigation.module.scss';

export interface NavigationProps {
  navSections: NavSection[];
  orientation: 'horizontal' | 'vertical';
}

const Navigation = ({ navSections, orientation }: NavigationProps) => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const anchorHrefHash = new URL(event.currentTarget.href).hash;

    if (!anchorHrefHash) {
      return;
    }

    const scrollTarget = document.querySelector(anchorHrefHash);

    if (!scrollTarget) {
      return;
    }

    event.preventDefault();

    const header = document.querySelector('header');

    document.documentElement.scrollTo({
      top: scrollTarget.getBoundingClientRect().top + window.scrollY - ((header?.clientHeight ?? 0) + 50),
      behavior: 'smooth',
    });
  };

  return (
    <nav>
      <ul className={cn(styles.list, styles[orientation])}>
        {navSections.map((section) => (
          <li key={section.id}>
            <a className={styles.link} href={`#${section.id}`} onClick={handleLinkClick} data-customunderline>
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
