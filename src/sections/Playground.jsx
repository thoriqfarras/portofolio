import Card from '../assets/components/Card';

export default function Playground() {
  return (
    <div className="mx-4 mt-4 grid gap-4 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
      <Card
        title="Battleship"
        subtitle="Pure JS mastery with it being made in 100% vanilla JS. No frameworks."
        actionText="Learn more"
      ></Card>
    </div>
  );
}
