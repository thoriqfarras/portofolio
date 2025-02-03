import { ExpandDown } from './assets/components/Icons';
import { useState } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Separator from './assets/components/Separator';
import SkillCard from './assets/components/SkillCard';
import Works from './sections/Works';
import Achievements from './sections/Achievements';
import Playground from './sections/Playground';

function App() {
  const [aboutMeExpanded, setAboutMeExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <header className="font-mono mx-4 py-4">thoriqfarras.</header>
      <Separator />
      <Hero />
      <button
        className="flex items-center py-4 gap-2 text-zinc-400 w-full hover:cursor-pointer hover:underline"
        type="button"
        onClick={() => setAboutMeExpanded(!aboutMeExpanded)}
      >
        <p className="font-serif ml-4 ">Learn more about me</p>
        <ExpandDown
          className={`fill-zinc-400 transition-all h-full ${
            aboutMeExpanded ? 'rotate-180' : ''
          }`}
        />
        <div
          className={`border-t-[1px] border-zinc-400 mr-4 flex-1 ${
            aboutMeExpanded ? '' : 'hidden'
          }`}
        ></div>
      </button>
      <About expanded={aboutMeExpanded} />
      <ul className="flex mx-4 overflow-x-auto [&_button]:hover:cursor-pointer">
        <li
          className={`${
            activeTab === 0
              ? 'bg-linear-to-t from-zinc-600 via-zinc-300 to-transparent from-0% via-10% to-25%'
              : 'text-zinc-400'
          }`}
        >
          <h1 className="font-mono text-2xl mt-8 mx-4 mb-4 font-bold">
            <button type="button" onClick={() => setActiveTab(0)}>
              Works
            </button>
          </h1>
        </li>
        <li
          className={`${
            activeTab === 1
              ? 'bg-linear-to-t from-zinc-600 via-zinc-300 to-transparent from-0% via-10% to-25%'
              : 'text-zinc-400'
          }`}
        >
          <h1
            className={`font-mono text-2xl mt-8 mx-4 mb-4 font-bold ${
              activeTab === 1 ? '' : 'text-zinc-400'
            }`}
          >
            <button type="button" onClick={() => setActiveTab(1)}>
              Achievements
            </button>
          </h1>
        </li>
        <li
          className={`${
            activeTab === 2
              ? 'bg-linear-to-t from-zinc-600 via-zinc-300 to-transparent from-0% via-10% to-25%'
              : 'text-zinc-400'
          }`}
        >
          <h1
            className={`font-mono text-2xl mt-8 mx-4 mb-4 font-bold ${
              activeTab === 2 ? '' : 'text-zinc-400'
            }`}
          >
            <button type="button" onClick={() => setActiveTab(2)}>
              Playground
            </button>
          </h1>
        </li>
      </ul>
      <Separator />
      {activeTab === 0 ? (
        <Works />
      ) : activeTab === 1 ? (
        <Achievements />
      ) : activeTab === 2 ? (
        <Playground />
      ) : (
        ''
      )}
      <p className="font-serif mx-4 my-4 text-center">
        Looking for some more? Check out my{' '}
        <a
          className="font-bold underline"
          href={
            activeTab === 0
              ? 'https://github.com/thoriqfarras'
              : 'https://www.linkedin.com/in/thoriq-ibrahim-farras-326579262/'
          }
          target="_blank"
        >
          {activeTab === 0 || activeTab === 2 ? 'Github' : 'LinkedIn'}
        </a>
        .
      </p>
      <h1 className="font-mono text-2xl mt-8 mx-4 mb-4 font-bold">Skills</h1>
      <Separator />
      <div className="mx-4 mt-4 mb-8 grid gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
        <SkillCard name="HTML, CSS, JS" level="Intermediate" />
        <SkillCard name="ReactJS" level="Intermediate" />
        <SkillCard name="NextJS" level="Basic" />
        <SkillCard name="HTML, CSS, JS" level="Intermediate" />
        <SkillCard name="ReactJS" level="Intermediate" />
        <SkillCard name="NextJS" level="Basic" />
      </div>
      <Separator />
      <footer className="font-serif text-center my-4 text-zinc-400">
        Copyright Thoriq Farras - {new Date().getFullYear()}
      </footer>
    </>
  );
}

export default App;
