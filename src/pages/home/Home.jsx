import { useState } from 'react';

import { Arrow } from '../../components/Icons';
import Separator from '../../components/Separator';
import SkillCard from '../../components/SkillCard';

import Hero from './sections/Hero';
import About from './sections/About';
import Works from './sections/Works';
import Achievements from './sections/Achievements';
import Playground from './sections/Playground';

export default function Home() {
  const [aboutMeExpanded, setAboutMeExpanded] = useState(false);
  const [activeProjectsTab, setActiveProjectsTab] = useState(0);
  const [activeSkillsTab, setActiveSkillsTab] = useState(0);

  return (
    <>
      <Hero />
      <button
        className="flex items-center py-4 gap-2 text-zinc-400 w-full hover:cursor-pointer hover:underline"
        type="button"
        onClick={() => setAboutMeExpanded(!aboutMeExpanded)}
      >
        <p className="font-serif">Learn more about me</p>
        <Arrow
          className={`fill-zinc-400 transition-all h-full ${
            aboutMeExpanded ? '' : 'rotate-180'
          }`}
        />
        <div
          className={` transition-all duration-300 ${
            aboutMeExpanded ? 'flex-1' : 'flex-0'
          }`}
        >
          <div className={`border-t-[1px] border-zinc-400`}></div>
        </div>
      </button>
      <About expanded={aboutMeExpanded} />
      <ul className="flex  overflow-x-auto mt- [&_button]:hover:cursor-pointer [&>*]:mr-4 mt-10">
        <li
          className={`${
            activeProjectsTab === 0
              ? 'bg-linear-to-t from-zinc-600 via-zinc-300 to-transparent from-0% via-10% to-25%'
              : 'text-zinc-400'
          } transition-colors`}
        >
          <h1 className="font-mono text-2xl  mb-4 font-bold">
            <button type="button" onClick={() => setActiveProjectsTab(0)}>
              Works
            </button>
          </h1>
        </li>
        <li
          className={`${
            activeProjectsTab === 1
              ? 'bg-linear-to-t from-zinc-600 via-zinc-300 to-transparent from-0% via-10% to-25%'
              : 'text-zinc-400'
          } transition-colors`}
        >
          <h1
            className={`font-mono text-2xl  mb-4 font-bold ${
              activeProjectsTab === 1 ? '' : 'text-zinc-400'
            }`}
          >
            <button type="button" onClick={() => setActiveProjectsTab(1)}>
              Achievements
            </button>
          </h1>
        </li>
        <li
          className={`${
            activeProjectsTab === 2
              ? 'bg-linear-to-t from-zinc-600 via-zinc-300 to-transparent from-0% via-10% to-25%'
              : 'text-zinc-400'
          } transition-colors`}
        >
          <h1
            className={`font-mono text-2xl  mb-4 font-bold ${
              activeProjectsTab === 2 ? '' : 'text-zinc-400'
            }`}
          >
            <button type="button" onClick={() => setActiveProjectsTab(2)}>
              Playground
            </button>
          </h1>
        </li>
      </ul>
      <Separator />
      {activeProjectsTab === 0 ? (
        <Works />
      ) : activeProjectsTab === 1 ? (
        <Achievements />
      ) : activeProjectsTab === 2 ? (
        <Playground />
      ) : (
        ''
      )}
      <p className="font-serif  mt-8 text-center">
        Looking for some more? Check out my{' '}
        <a
          className="font-bold underline"
          href={
            activeProjectsTab === 0
              ? 'https://github.com/thoriqfarras'
              : 'https://www.linkedin.com/in/thoriq-ibrahim-farras-326579262/'
          }
          target="_blank"
        >
          {activeProjectsTab === 0 || activeProjectsTab === 2
            ? 'Github'
            : 'LinkedIn'}
        </a>
        .
      </p>
      <h1 className="font-mono text-2xl mt-10  mb-4 font-bold">Stack</h1>

      <Separator />
      <div className=" mt-4 mb-8 grid gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
        <SkillCard name="ReactJS" level={1} />
        <SkillCard name="NextJS" level={0} />
        <SkillCard name="Laravel" level={0} />
        <SkillCard name="PostgreSQL" level={0} />
        <SkillCard name="MySQL" level={0} />
        <SkillCard name="ExpressJS" level={0} />
        <SkillCard name="HTML, CSS, JS" level={2} />
        <SkillCard name="PHP" level={0} />
        <SkillCard name="Python" level={2} />
      </div>
    </>
  );
}
