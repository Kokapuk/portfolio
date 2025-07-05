import cn from 'classnames';
import type { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Section.module.scss';

export type SectionSize = 'default' | 'thin';

export interface SectionProps {
  title?: string;
  caption?: string;
  titleClass?: string;
  titleStyle?: CSSProperties;
  captionClass?: string;
  captionStyle?: CSSProperties;
  size?: SectionSize;
}

export type FullSectionProps = SectionProps &
  Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'title'>;

export type SectionIdProps = { id: string };

const Section = ({
  title,
  caption,
  children,
  className,
  titleClass,
  titleStyle,
  captionClass,
  captionStyle,
  size = 'default',
  ...props
}: FullSectionProps) => {
  return (
    <section {...props} className={cn(styles.section, styles[size], className)}>
      {!!title && (
        <h2 className={cn(styles.title, titleClass)} style={titleStyle}>
          {title}
        </h2>
      )}
      {!!caption && (
        <p className={cn(styles.caption, captionClass)} style={captionStyle}>
          {caption}
        </p>
      )}

      {children}
    </section>
  );
};

export default Section;
