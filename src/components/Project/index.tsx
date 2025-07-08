import ScrollAreaWithShadow from '@components/ScrollAreaWithShadow';
import type { Technology } from '@sections/TechStack';
import cn from 'classnames';
import { Suspense, useState, type CSSProperties, type ReactNode, type Ref } from 'react';
import styles from './Project.module.scss';
import useDragScroll from '@hooks/useDragScroll';

interface Action {
  icon: ReactNode;
  label: string;
  href?: string;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

export interface ProjectProps {
  bannerLogo: ReactNode;
  title: string;
  caption: string;
  technologies: Technology[];
  actions?: Action[];
  wrapperClass?: string;
  wrapperStyle?: CSSProperties;
  ref?: Ref<HTMLDivElement>;
}

const Project = ({
  bannerLogo,
  title,
  caption,
  technologies,
  actions,
  wrapperClass,
  wrapperStyle,
  ref,
}: ProjectProps) => {
  const [technologiesElement, setTechnologiesElement] = useState<HTMLDivElement | null>(null);
  useDragScroll(technologiesElement);

  return (
    <div ref={ref} className={cn(styles.wrapper, wrapperClass)} style={wrapperStyle}>
      <div className={styles.banner}>
        <Suspense>
          {bannerLogo}
          {bannerLogo}
        </Suspense>
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>

        <ScrollAreaWithShadow className={styles.caption} shadowSize="50px" orientation="vertical" tabIndex={0}>
          {caption}
        </ScrollAreaWithShadow>

        <ScrollAreaWithShadow
          ref={setTechnologiesElement}
          className={styles.technologies}
          orientation="horizontal"
          shadowSize="75px"
        >
          {technologies.map((technology) => (
            <a key={technology.href} href={technology.href} target="_blank" title={technology.label}>
              {technology.icon}
            </a>
          ))}
        </ScrollAreaWithShadow>

        {!!actions && (
          <div className={styles.actions}>
            {actions.map((action) =>
              action.href ? (
                <a className={styles.action} href={action.href} key={action.href} data-customunderline target="_blank">
                  <Suspense>{action.icon}</Suspense>
                  {action.label}
                </a>
              ) : (
                <button className={styles.action} key={action.label} onClick={action.onClick}>
                  <Suspense>{action.icon}</Suspense>
                  {action.label}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
