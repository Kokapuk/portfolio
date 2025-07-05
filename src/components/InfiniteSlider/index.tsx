import cn from 'classnames';
import type { CSSProperties, ReactNode } from 'react';
import styles from './InfiniteSlider.module.scss';

export interface InfiniteSliderProps {
  children: ReactNode;
  gap: string;
  direction: 'left' | 'right';
  duration: string;
  shadowWidth: string | number;
  wrapperClass?: string;
  wrapperStyle?: CSSProperties;
  sliderClass?: string;
  sliderStyle?: CSSProperties;
}

const InfiniteSlider = ({
  children,
  gap,
  direction,
  duration,
  shadowWidth,
  wrapperClass,
  wrapperStyle,
  sliderClass,
  sliderStyle,
}: InfiniteSliderProps) => {
  return (
    <div
      className={cn(styles.wrapper, styles[direction], wrapperClass)}
      style={{ '--gap': gap, '--duration': duration, '--shadowWidth': shadowWidth, ...wrapperStyle } as CSSProperties}
    >
      <div className={cn(styles.slider, sliderClass)} style={sliderStyle}>
        {children}
        {children}
      </div>
    </div>
  );
};

export default InfiniteSlider;
