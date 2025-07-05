import Social, { type SocialProps } from '@components/Social';
import cn from 'classnames';
import { lazy, Suspense, type CSSProperties } from 'react';
import styles from './Socials.module.scss';

const Discord = lazy(() => import('@assets/Discord'));
const Email = lazy(() => import('@assets/Email'));
const Github = lazy(() => import('@assets/Github'));
const Phone = lazy(() => import('@assets/Phone'));
const Telegram = lazy(() => import('@assets/Telegram'));

const SOCIALS: SocialProps[] = [
  {
    href: 'https://github.com/kokapuk',
    icon: <Github />,
    label: 'kokapuk',
  },
  {
    href: 'mailto:yarik.pavlov@971@gmail.com',
    icon: <Email />,
    label: 'yarik.pavlov@971@gmail.com',
  },
  {
    href: 'https://t.me/kokapuk',
    icon: <Telegram />,
    label: 'kokapuk',
  },
  {
    href: 'tel:+380500886155',
    icon: <Phone />,
    label: '+380 50 088 6155',
  },
  {
    href: 'https://discord.com/users/387664775473135617',
    icon: <Discord />,
    label: 'kokapuk',
  },
];

export interface SocialsProps {
  wrapperClass?: string;
  wrapperStyle?: CSSProperties;
  linkClass?: string;
  linkStyle?: CSSProperties;
}

const Socials = ({ wrapperClass, wrapperStyle, linkClass, linkStyle }: SocialsProps) => {
  return (
    <div className={cn(styles.wrapper, wrapperClass)} style={wrapperStyle}>
      {SOCIALS.map((social) => (
        <Social
          key={social.href}
          href={social.href}
          icon={<Suspense fallback={<div className={styles.iconFallback} />}>{social.icon}</Suspense>}
          label={social.label}
          className={cn(styles.link, linkClass)}
          style={linkStyle}
        />
      ))}
    </div>
  );
};

export default Socials;
