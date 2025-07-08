import cn from 'classnames';
import type { CSSProperties } from 'react';
import styles from './DownloadCVButton.module.scss';

export interface DownloadCVButtonProps {
  className?: string;
  style?: CSSProperties;
}

const DownloadCVButton = ({ className, style }: DownloadCVButtonProps) => {
  return (
    <a href="/CV_Yaroslav_Pavlov_Frontend_Developer.pdf" className={cn(styles.button, className)} style={style} target="_blank">
      Download CV
    </a>
  );
};

export default DownloadCVButton;
