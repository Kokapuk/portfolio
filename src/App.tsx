import Header from '@components/Header';
import type { SectionIdProps } from '@components/Section';
import Experience from '@sections/Experience';
import Hero from '@sections/Hero';
import Projects from '@sections/Projects';
import TechStack from '@sections/TechStack';
import type { JSX } from 'react';

export interface NavSection {
  id: string;
  label: string;
  Component: (props: SectionIdProps) => JSX.Element;
}

const SECTIONS: NavSection[] = [
  { id: 'hero', label: 'Contacts', Component: Hero },
  { id: 'tech-stack', label: 'Tech Stack', Component: TechStack },
  { id: 'experience', label: 'Experience', Component: Experience },
  { id: 'Projects', label: 'Projects', Component: Projects },
];

const App = () => {
  return (
    <>
      <Header navSections={SECTIONS} />
      <main style={{ paddingBlock: '150px', display: 'flex', flexDirection: 'column', gap: 200 }}>
        {SECTIONS.map((section) => (
          <section.Component key={section.id} id={section.id} />
        ))}
      </main>
    </>
  );
};

export default App;
