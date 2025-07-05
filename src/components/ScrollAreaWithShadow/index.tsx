import cn from 'classnames';
import {
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type Ref,
} from 'react';
import styles from './ScrollAreaWithShadow.module.scss';

export interface ScrollAreaWithShadowProps {
  shadowSize: string;
  orientation: 'vertical' | 'horizontal';
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  ref?: Ref<HTMLDivElement>;
}

const ScrollAreaWithShadow = ({
  shadowSize,
  orientation,
  className,
  style,
  children,
  ref,
}: ScrollAreaWithShadowProps) => {
  const [scrolledToStart, setScrolledToStart] = useState(false);
  const [scrolledToEnd, setScrolledToEnd] = useState(false);
  const scrollArea = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => scrollArea.current!, []);

  useLayoutEffect(() => {
    if (!scrollArea.current) {
      return;
    }

    const localScrollArea = scrollArea.current;

    const recalcShadows = () => {
      if (orientation === 'vertical') {
        if (localScrollArea.scrollTop === 0) {
          setScrolledToStart(true);
          setScrolledToEnd(false);
        } else if (localScrollArea.scrollTop + localScrollArea.clientHeight === localScrollArea.scrollHeight) {
          setScrolledToStart(false);
          setScrolledToEnd(true);
        } else {
          setScrolledToStart(false);
          setScrolledToEnd(false);
        }
      } else if (orientation === 'horizontal') {
        if (localScrollArea.scrollLeft === 0) {
          setScrolledToStart(true);
          setScrolledToEnd(false);
        } else if (localScrollArea.scrollLeft + localScrollArea.clientWidth === localScrollArea.scrollWidth) {
          setScrolledToStart(false);
          setScrolledToEnd(true);
        } else {
          setScrolledToStart(false);
          setScrolledToEnd(false);
        }
      }
    };

    localScrollArea.addEventListener('scroll', recalcShadows);
    recalcShadows();

    return () => {
      localScrollArea.removeEventListener('scroll', recalcShadows);
    };
  }, [orientation]);

  return (
    <div
      ref={scrollArea}
      className={cn(
        styles.scrollArea,
        styles[orientation],
        !scrolledToStart && styles.startShadow,
        !scrolledToEnd && styles.endShadow,
        className
      )}
      style={{ '--shadowSize': shadowSize, ...style } as CSSProperties}
    >
      {children}
    </div>
  );
};

export default ScrollAreaWithShadow;
