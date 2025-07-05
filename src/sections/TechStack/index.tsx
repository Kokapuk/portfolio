import Vite from '@assets/Vite';
import InfiniteSlider from '@components/InfiniteSlider';
import Section, { type SectionIdProps } from '@components/Section';
import { lazy, Suspense, type ReactNode } from 'react';
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

export interface Technology {
  icon: ReactNode;
  href: string;
}

const TECH_STACK: Technology[] = [
  { icon: <HTML />, href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { icon: <CSS />, href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { icon: <JavaScript />, href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { icon: <TypeScript />, href: 'https://www.typescriptlang.org' },
  { icon: <React />, href: 'https://react.dev' },
  { icon: <NextJS />, href: 'https://nextjs.org' },
  { icon: <Zustand />, href: 'https://zustand-demo.pmnd.rs' },
  { icon: <SASS />, href: 'https://sass-lang.com' },
  { icon: <Git />, href: 'https://git-scm.com' },
  { icon: <NodeJS />, href: 'https://nodejs.org' },
  { icon: <Electron />, href: 'https://www.electronjs.org' },
  { icon: <NestJS />, href: 'https://nestjs.com' },
  { icon: <Express style={{ background: 'white', paddingBlock: 10 }} />, href: 'https://expressjs.com' },
  { icon: <SocketIO />, href: 'https://socket.io' },
  { icon: <NPM />, href: 'https://npmjs.com' },
  { icon: <Vite />, href: 'https://vite.dev' },
  { icon: <MongoDb />, href: 'https://www.mongodb.com' },
  { icon: <Figma />, href: 'https://figma.com' },
  { icon: <Illustrator />, href: 'https://www.adobe.com/ua/products/illustrator.html' },
];

const TechStack = (props: SectionIdProps) => {
  return (
    <Section title="My Tech Stack" caption="Technologies I've been working with recently" {...props}>
      <div className={styles.wrapper}>
        <InfiniteSlider gap="100px" direction="left" duration="20s" shadowWidth="100px">
          {TECH_STACK.slice(0, Math.floor(TECH_STACK.length / 2)).map((technology) => (
            <a key={technology.href} className={styles.iconContainer} href={technology.href}>
              <Suspense>{technology.icon}</Suspense>
            </a>
          ))}
        </InfiniteSlider>
        <InfiniteSlider gap="100px" direction="right" duration="20s" shadowWidth="100px">
          {TECH_STACK.slice(Math.floor(TECH_STACK.length / 2), undefined).map((technology) => (
            <a key={technology.href} className={styles.iconContainer} href={technology.href}>
              <Suspense>{technology.icon}</Suspense>
            </a>
          ))}
        </InfiniteSlider>
      </div>
    </Section>
  );
};

export default TechStack;
