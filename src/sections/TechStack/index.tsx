import InfiniteSlider from '@components/InfiniteSlider';
import Section, { type SectionIdProps } from '@components/Section';
import { lazy, Suspense, useLayoutEffect, useState, type ReactNode } from 'react';
import styles from './TechStack.module.scss';

const CSS = lazy(() => import('@assets/CSS'));
const Electron = lazy(() => import('@assets/Electron'));
const Express = lazy(() => import('@assets/Express'));
const Figma = lazy(() => import('@assets/Figma'));
const Git = lazy(() => import('@assets/Git'));
const HTML = lazy(() => import('@assets/HTML'));
const Illustrator = lazy(() => import('@assets/Illustrator'));
const JavaScript = lazy(() => import('@assets/JavaScript'));
const MongoDb = lazy(() => import('@assets/MongoDb'));
const NestJS = lazy(() => import('@assets/NestJS'));
const NextJS = lazy(() => import('@assets/NextJS'));
const NodeJS = lazy(() => import('@assets/NodeJS'));
const NPM = lazy(() => import('@assets/NPM'));
const React = lazy(() => import('@assets/React'));
const SASS = lazy(() => import('@assets/SASS'));
const SocketIO = lazy(() => import('@assets/SocketIO'));
const TypeScript = lazy(() => import('@assets/TypeScript'));
const Zustand = lazy(() => import('@assets/Zustand'));
const Vite = lazy(() => import('@assets/Vite'));
const Jest = lazy(() => import('@assets/Jest'));

export interface Technology {
  icon: ReactNode;
  label: string;
  href: string;
}

const TECH_STACK: Technology[] = [
  { icon: <HTML />, label: 'HTML', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { icon: <CSS />, label: 'CSS', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { icon: <SASS />, label: 'SASS/SCSS', href: 'https://sass-lang.com' },
  { icon: <JavaScript />, label: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { icon: <TypeScript />, label: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { icon: <React />, label: 'React', href: 'https://react.dev' },
  { icon: <NextJS />, label: 'Next.js', href: 'https://nextjs.org' },
  { icon: <Zustand />, label: 'Zustand', href: 'https://zustand-demo.pmnd.rs' },
  { icon: <Jest />, label: 'Jest', href: 'https://jestjs.io' },
  { icon: <Git />, label: 'Git', href: 'https://git-scm.com' },
  { icon: <NodeJS />, label: 'Node.js', href: 'https://nodejs.org' },
  { icon: <Electron />, label: 'Electron', href: 'https://www.electronjs.org' },
  { icon: <NestJS />, label: 'Nest.js', href: 'https://nestjs.com' },
  {
    icon: <Express style={{ background: 'white', paddingBlock: 10 }} />,
    label: 'Express',
    href: 'https://expressjs.com',
  },
  { icon: <SocketIO />, label: 'Socket.IO', href: 'https://socket.io' },
  { icon: <NPM />, label: 'npm publishing', href: 'https://npmjs.com' },
  { icon: <Vite />, label: 'Vite', href: 'https://vite.dev' },
  { icon: <MongoDb />, label: 'MongoDB', href: 'https://www.mongodb.com' },
  { icon: <Figma />, label: 'Figma', href: 'https://figma.com' },
  { icon: <Illustrator />, label: 'Adobe Illustrator', href: 'https://www.adobe.com/ua/products/illustrator.html' },
];

const TechStack = (props: SectionIdProps) => {
  const [gap, setGap] = useState('100px');

  useLayoutEffect(() => {
    setGap(window.matchMedia('only screen and (max-width: 599px)').matches ? '50px' : '100px');
  }, []);

  return (
    <Section title="My Tech Stack" caption="Technologies I've been working with recently" {...props}>
      <div className={styles.wrapper}>
        <InfiniteSlider gap={gap} direction="left" duration="20s" shadowWidth={gap}>
          {TECH_STACK.slice(0, Math.floor(TECH_STACK.length / 2)).map((technology) => (
            <a key={technology.href} className={styles.iconContainer} href={technology.href} title={technology.label}>
              <Suspense>{technology.icon}</Suspense>
            </a>
          ))}
        </InfiniteSlider>
        <InfiniteSlider gap={gap} direction="right" duration="20s" shadowWidth={gap}>
          {TECH_STACK.slice(Math.floor(TECH_STACK.length / 2), undefined).map((technology) => (
            <a key={technology.href} className={styles.iconContainer} href={technology.href} title={technology.label}>
              <Suspense>{technology.icon}</Suspense>
            </a>
          ))}
        </InfiniteSlider>
      </div>
    </Section>
  );
};

export default TechStack;
