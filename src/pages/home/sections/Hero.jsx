export default function Hero() {
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
          <a
            href="https://github.com/thoriqfarras"
            className="underline"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/thoriq-ibrahim-farras-326579262/"
            target="_blank"
            className="underline"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </>
  );
}
