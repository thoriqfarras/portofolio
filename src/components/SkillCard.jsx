export default function SkillCard({ name, level }) {
  function handleHoverOverSkills(e) {
    const skillLevel = [...e.target.children].find((c) =>
      c.classList.contains('level')
    );
    console.log(skillLevel);
    skillLevel.classList.add('grid-rows-[1fr]');
    skillLevel.classList.remove('grid-rows-[0fr]');
  }

  function handleHoverOutOfSkills(e) {
    const skillLevel = [...e.target.children].find((c) =>
      c.classList.contains('level')
    );
    skillLevel.classList.remove('grid-rows-[1fr]');
    skillLevel.classList.add('grid-rows-[0fr]');
  }

  return (
    <div
      className="font-serif p-2 border-[1px] bg-white drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)] hover:scale-[1.0125] transition-all h-fit"
      onMouseEnter={handleHoverOverSkills}
      onMouseLeave={handleHoverOutOfSkills}
    >
      <p className="font-bold text-center">{name}</p>
      <div className="level grid grid-rows-[0fr] transition-[grid-template-rows_0.5s_ease-out]">
        <p className="overflow-hidden text-sm text-center">{level}</p>
      </div>
    </div>
  );
}
