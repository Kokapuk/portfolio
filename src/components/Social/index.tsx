import cn from 'classnames';
import { type CSSProperties, type ReactNode } from 'react';
import styles from './Social.module.scss';

export interface SocialProps {
  href: string;
  icon: ReactNode;
  label?: string;
  target?: string;
  className?: string;
  style?: CSSProperties;
}

const Social = ({ href, icon, label, className, style, target = '_blank' }: SocialProps) => {
  return (
    <a href={href} className={cn(styles.link, className)} style={style} target={target} data-customunderline>
      {icon}
      {label}
    </a>
  );
};

export default Social;
