import Harmata from '@assets/Harmata.png';
import Section, { type SectionIdProps } from '@components/Section';
import Workplace from '@components/Workplace';
import styles from './Experience.module.scss';

const Experience = (props: SectionIdProps) => {
  return (
    <Section title="Experience" caption="My previous workplaces" size="thin" {...props}>
      <div className={styles.wrapper}>
        <Workplace
          logoUrl="https://www.google.com/s2/favicons?domain=airomedical.com&sz=32"
          title="Front-end developer at AiroMedical"
          href="https://airomedical.com"
          workingPeriod={{ start: new Date('2023-07-20') }}
          caption="As a key member of the engineering team at AiroMedical, I contributed to the development of a web application in the healthcare domain. My responsibilities included implementing complex front-end interfaces, optimizing rendering performance, and maintaining scalable architecture using modern web technologies. I collaborated closely with product managers and designers to deliver intuitive user experiences and ensure long-term maintainability of the codebase."
        />
        <Workplace
          logoUrl={Harmata}
          title="Technical lead at Harmata"
          href="https://linkedin.com/jobs/view/unreal-engine-developer-at-harmata-studio-4018432435"
          workingPeriod={{ start: new Date('2023-01-13'), end: new Date('2024-01-2') }}
          caption="As the technical lead of a small indie development team, I was responsible for defining the core gameplay architecture of a 3D game built with Unreal Engine. I led technical planning, implemented core logic and authored internal documentation to maintain code quality across the team. In addition to hands-on development, I onboarded team members, reviewed their code, and facilitated weekly syncs to ensure alignment on tasks and priorities. This experience strengthened my leadership skills and ability to deliver structured solutions in a collaborative, fast-paced environment."
        />
      </div>
    </Section>
  );
};

export default Experience;
