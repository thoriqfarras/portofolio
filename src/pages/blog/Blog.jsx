import { Arrow } from '../../components/Icons';
import Markdown from 'react-markdown';
import { useState, useEffect } from 'react';
import content from '/blog/test-blog/test-blog.md';

export default function Blog() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(content)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <>
      <a
        href="/"
        className="flex mt-8 text-xl items-center gap-1 font-mono text-zinc-400 fill-zinc-400 hover:underline"
      >
        <Arrow className="-rotate-90" />
        Back
      </a>
      <Markdown className="prose prose-xl prose-h1:font-mono prose-ul:font-serif mt-8 mb-20 prose-headings:mt-8 prose-p:mt-8 prose-blockquote:mb-2 prose-ul:mb-2 prose-ol:mb-2">
        {markdown}
      </Markdown>
    </>
  );
}
