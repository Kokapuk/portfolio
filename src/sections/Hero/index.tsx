import Section, { type SectionIdProps } from '@components/Section';
import Socials from '@components/Socials';
import styles from './Hero.module.scss';

const Hero = (props: SectionIdProps) => {
  return (
    <Section {...props}>
      <div className={styles.head}>
        <div className={styles.column}>
          <h1 className={styles.title}>
            Hi 👋
            <br />
            My name is <mark>Yaroslav</mark>
          </h1>
          <p className={styles.caption}>
            I'm a web developer who enjoys building <mark>clean</mark>, <mark>efficient</mark>, and{' '}
            <mark>engaging</mark> user interfaces
          </p>
        </div>

        <Socials wrapperClass={styles.socials} />
      </div>
    </Section>
  );
};

export default Hero;
