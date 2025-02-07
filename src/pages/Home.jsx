import { useState } from 'react';
import { works } from '@/data/work';
import { achievements } from '@/data/achievements';
import { playground } from '@/data/playground';

import { Arrow } from '@/components/Icons';
import Separator from '@/components/Separator';
import SkillCard from '@/components/SkillCard';
import Card from '@/components/Card';

const GITHUB_URL = 'https://github.com/thoriqfarras';
const LINKEDIN_URL =
  'https://www.linkedin.com/in/thoriq-ibrahim-farras-326579262/';

export default function Home() {
  const [aboutMeExpanded, setAboutMeExpanded] = useState(false);
  const [activeProjectsTab, setActiveProjectsTab] = useState(0);

  return (
    <>
      <Hero />
      <button
        className="flex items-center py-4 gap-2 text-zinc-400 w-full hover:cursor-pointer hover:underline"
        type="button"
        onClick={() => setAboutMeExpanded(!aboutMeExpanded)}
      >
        <p className="font-serif">Click to learn more about me!</p>
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
            activeProjectsTab === 0 || activeProjectsTab === 2
              ? GITHUB_URL
              : LINKEDIN_URL
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
        <SkillCard name="Tailwind CSS" level={2} />
        <SkillCard name="Bootstrap" level={0} />
        <SkillCard name="PHP" level={0} />
        <SkillCard name="Python" level={2} />
        <SkillCard name="C++" level={0} />
        <SkillCard name="Java" level={0} />
        <SkillCard name="Git" level={2} />
        <SkillCard name="Figma" level={1} />
      </div>
    </>
  );
}

function Hero() {
  return (
    <>
      <h1 className="font-mono text-3xl mt-24 font-bold drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,0.25)]">
        Hi, I'm Thoriq.
      </h1>
      <p className="font-serif text-2xl mt-4">
        I'm an aspiring full-stack developer based on Semarang, Indonesia.
      </p>
      <ul className="flex mt-4 text-xl gap-4 font-serif">
        <li>
          <a href={GITHUB_URL} className="underline" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href={LINKEDIN_URL} target="_blank" className="underline">
            LinkedIn
          </a>
        </li>
      </ul>
    </>
  );
}

function About({ expanded }) {
  return (
    <div className={`flex flex-col ${expanded ? '' : 'hidden'}`}>
      <p className="text-zinc-600 font-serif mt-2 md:text-center">
        My name is Thoriq Ibrahim Farras. I'm a 3rd year computer science
        student at Universitas Negeri Semarang. I specialize in creating
        simplistic and functional UIs and efficient back-end. My passion is to
        help my local community grow their digital presence. In my free time, I
        love devouring high fantasy novels.
      </p>
      <div className="grid md:grid-cols-2 font-serif">
        <div className="md:text-center">
          <h2 className="font-serif font-bold text-xl mt-8">Education</h2>
          <ul className="font-serif mt-4 text-zinc-600 [&>li>p:nth-child(1)]:text-black [&>li>p:nth-child(1)]:text-lg [&>li>p:nth-child(1)]:mt-4">
            <li>
              <p>Universitas Negeri Semarang [IDN]</p>
              <p>Computer Science. 3.93 GPA</p>
              <p>2022 &ndash; ongoing</p>
            </li>
            <li>
              <p>University of California, Davis [USA]</p>
              <p>Fully-funded study abroad programme. 3.73 GPA</p>
              <p>Aug &ndash; Dec 2024</p>
            </li>
            <li>
              <p>SMA N 12 Semarang [IDN]</p>
              <p>High school</p>
              <p>2021 &ndash; 2022</p>
            </li>
            <li>
              <p>Sirius Academy North, Hull [GBR]</p>
              <p>Secondary education (Middle and High school)</p>
              <p>2017 &ndash; 2020</p>
            </li>
            <li>
              <p>Daarul Quran School Semarang [IDN]</p>
              <p>Elementary school</p>
              <p>2010 &ndash; 2016</p>
            </li>
          </ul>
        </div>
        <div className="md:text-center [&_p]:text-zinc-600">
          <h2 className="font-serif font-bold text-xl mt-8">Interests</h2>
          <h3 className="font-serif font-bold text-lg mt-4">
            Full-stack Development
          </h3>
          <p>
            To craft a fully functioning web app from the ground up and maintain
            it is imperative to help the local community gain digital tractions.
          </p>
          <h3 className="font-serif font-bold text-lg mt-8">
            Machine Learning
          </h3>
          <p>
            The infusion of AI into every facets of life calls for every
            individual in the tech sphere to be able demystify the seemingly
            arcane algorithms.
          </p>
          <h3 className="font-serif font-bold text-lg mt-8">Cloud Computing</h3>
          <p>
            As AI-based solutions scale, cloud computing is slowly becoming the
            backbone of modern computing.
          </p>
        </div>
      </div>
    </div>
  );
}

function Works() {
  return (
    <div className="mt-4 grid gap-4 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
      {works.map((work) => (
        <Card
          key={work.title}
          title={work.title}
          subtitle={work.description}
          actionText="Learn more"
          url={work.blogUrl}
        ></Card>
      ))}
    </div>
  );
}

function Achievements() {
  return (
    <div className="mt-4 grid gap-4 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
      {achievements.map((achievement) => (
        <Card
          key={achievement.title}
          title={achievement.title}
          subtitle={achievement.description}
          actionText="Learn more"
          url={achievement.blogUrl}
        ></Card>
      ))}
    </div>
  );
}

function Playground() {
  return (
    <div className="mt-4 grid gap-4 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
      {playground.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          subtitle={project.description}
          actionText="Live demo"
          url={project.demoUrl}
          newTab={true}
        ></Card>
      ))}
    </div>
  );
}
