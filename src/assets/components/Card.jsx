export default function Card({ imgSrc, title, subtitle, actionText }) {
  return (
    <div className="border-[1px] border-black p-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)] bg-white hover:scale-[1.0125] transition-transform">
      {/* <img src={imgSrc} alt="project/achievement pic" /> */}
      <h2 className="font-serif font-bold text-xl">{title}</h2>
      <p className="font-serif">{subtitle}</p>
      <button
        type="button"
        className="font-serif text-zinc-400 text-right hover:cursor-pointer hover:underline w-full"
      >
        {actionText}
      </button>
    </div>
  );
}
