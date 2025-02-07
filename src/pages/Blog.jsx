import { Arrow } from '../components/Icons';
import Markdown from 'react-markdown';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router';

export default function Blog() {
  const [markdown, setMarkdown] = useState('');
  let { slug, md } = useParams();

  useEffect(() => {
    fetch(`/blog/${slug}/${md}`)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, [slug, md]);

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="">
          <NavLink
            to="/"
            className="flex mt-8 text-xl items-center gap-1 font-mono text-zinc-400 fill-zinc-400 hover:underline"
          >
            <Arrow className="-rotate-90" />
            Back
          </NavLink>
        </div>
        {markdown === '' ? (
          <MarkdownSkeleton />
        ) : (
          <Markdown
            className="prose prose-xl prose-h1:font-mono prose-ul:font-serif mt-8 mb-20 prose-headings:mt-8 prose-p:mt-8 prose-blockquote:mb-2 prose-ul:mb-2 prose-ol:mb-2"
            components={{ img: (props) => <img {...props} loading="lazy" /> }}
          >
            {markdown}
          </Markdown>
        )}
      </div>
    </div>
  );
}

function MarkdownSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-zinc-300 h-10 rounded-2xl mt-8"></div>
      <div className="bg-zinc-300 h-10 rounded-2xl mt-4 w-[50%]"></div>
      <ParagraphSkeleton />
      <ParagraphSkeleton />
      <ParagraphSkeleton />
      <ParagraphSkeleton />
      <ParagraphSkeleton />
      <div className="mb-16"></div>
    </div>
  );
}

function ParagraphSkeleton() {
  return (
    <>
      <div className="bg-zinc-200 h-4 rounded-2xl mt-8"></div>
      <div className="bg-zinc-200 h-4 rounded-2xl mt-2"></div>
      <div className="bg-zinc-200 h-4 rounded-2xl mt-2"></div>
      <div className="bg-zinc-200 h-4 rounded-2xl mt-2 w-[75%]"></div>
    </>
  );
}
