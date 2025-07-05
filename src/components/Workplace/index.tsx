import dayjs from 'dayjs';
import styles from './Workplace.module.scss';

export interface WorkplaceProps {
  href?: string;
  logoUrl: string;
  title: string;
  workingPeriod: { start: Date; end?: Date };
  caption: string;
}

const Workplace = ({ href, logoUrl, title, workingPeriod, caption }: WorkplaceProps) => {
  const formatDate = (date: Date) => dayjs(date).format('MMM YYYY');

  return (
    <div>
      <div className={styles.header}>
        <img src={logoUrl} className={styles.logo} loading="lazy" />

        {href ? (
          <a className={styles.title} href={href} data-customunderline target="_blank">
            {title}
          </a>
        ) : (
          <p className={styles.title}>{title}</p>
        )}

        <p className={styles.workingPeriod}>
          {formatDate(workingPeriod.start)} - {workingPeriod.end ? formatDate(workingPeriod.end) : 'Present'}
        </p>
      </div>
      <p className={styles.caption}>{caption}</p>
    </div>
  );
};

export default Workplace;
