import { NavLink } from 'react-router';

export default function Card({ title, subtitle, actionText, url }) {
  return (
    <NavLink
      to={url}
      className="border-[1px] border-black p-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)] bg-white hover:scale-[1.0125] transition-transform flex "
    >
      <div className="flex flex-col h-full">
        <h2 className="font-serif font-bold text-xl">{title}</h2>
        <p className="font-serif">{subtitle}</p>
        <p className="font-serif text-zinc-400 text-right hover:cursor-pointer hover:underline mt-auto">
          {actionText}
        </p>
      </div>
    </NavLink>
  );
}
