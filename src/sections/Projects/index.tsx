import PasswordManager from '@assets/PasswordManager.png';
import Project, { type ProjectProps } from '@components/Project';
import Section, { type SectionIdProps } from '@components/Section';
import { lazy } from 'react';
import styles from './Projects.module.scss';

const Electron = lazy(() => import('@assets/Electron'));
const Express = lazy(() => import('@assets/Express'));
const MongoDb = lazy(() => import('@assets/MongoDb'));
const NextJS = lazy(() => import('@assets/NextJS'));
const NodeJS = lazy(() => import('@assets/NodeJS'));
const RSF = lazy(() => import('@assets/RSF'));
const React = lazy(() => import('@assets/React'));
const SASS = lazy(() => import('@assets/SASS'));
const TypeScript = lazy(() => import('@assets/TypeScript'));
const Vite = lazy(() => import('@assets/Vite'));
const Zustand = lazy(() => import('@assets/Zustand'));
const Github = lazy(() => import('@assets/Github'));
const ArrowRight = lazy(() => import('@assets/ArrowRight'));

const PROJECTS: ProjectProps[] = [
  {
    bannerLogo: <RSF />,
    title: 'React Smooth Flow',
    caption:
      'React animation library for entering, exiting, and updating elements without much effort. React Smooth Flow is designed to simplify complex animations while providing control over transition behavior, making it suitable for any React project, from small components to large SPAs',
    technologies: [
      { icon: <React />, href: 'https://react.dev' },
      { icon: <TypeScript />, href: 'https://www.typescriptlang.org' },
      { icon: <Vite />, href: 'https://vite.dev' },
    ],
    actions: [
      {
        icon: <ArrowRight style={{ transform: 'rotate(-45deg)' }} />,
        label: 'Visit',
        href: 'https://www.npmjs.com/package/react-smooth-flow',
      },
      { icon: <Github />, label: 'Source code', href: 'https://github.com/Kokapuk/react-smooth-flow' },
    ],
  },
  {
    bannerLogo: <img src={PasswordManager} loading="lazy" />,
    title: 'Password Manager',
    caption:
      'Secure and intuitive password manager for credential storage and access. Built with modern web technologies, this application simplifies the way users manage their passwords — from adding and organizing entries to securely accessing them when needed',
    technologies: [
      { icon: <React />, href: 'https://react.dev' },
      { icon: <TypeScript />, href: 'https://www.typescriptlang.org' },
      { icon: <NextJS />, href: 'https://nextjs.org' },
      { icon: <SASS />, href: 'https://sass-lang.com' },
      { icon: <Zustand />, href: 'https://zustand-demo.pmnd.rs' },
      { icon: <RSF />, href: 'https://www.npmjs.com/package/react-smooth-flow' },
      { icon: <NodeJS />, href: 'https://nodejs.org' },
      { icon: <Electron />, href: 'https://www.electronjs.org' },
      { icon: <Express style={{ background: 'white', padding: '3px' }} />, href: 'https://expressjs.com' },
      { icon: <MongoDb />, href: 'https://www.mongodb.com' },
    ],
    actions: [
      {
        icon: <ArrowRight style={{ transform: 'rotate(-45deg)' }} />,
        label: 'Visit',
        href: 'https://password-manager-iota.vercel.app',
      },
      { icon: <Github />, label: 'Source code', href: 'https://github.com/Kokapuk/password-manager' },
    ],
  },
];

const Projects = (props: SectionIdProps) => {
  return (
    <Section title="Projects" caption="My personal projects i'm currently working on" size="thin" {...props}>
      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
      <a className={styles.moreProjectsLink} href="https://github.com/kokapuk" data-customunderline target="_blank">
        <Github /> More projects
      </a>
    </Section>
  );
};

export default Projects;
