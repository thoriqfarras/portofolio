import Card from '../assets/components/Card';

export default function Works() {
  return (
    <div className="mx-4 mt-4 grid gap-4 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
      <Card
        title="Vanilla To-do list"
        subtitle="Pure JS mastery with it being made in 100% vanilla JS. No frameworks."
        actionText="Learn more & live demo"
      ></Card>
      <Card
        title="Vanilla To-do list"
        subtitle="Pure JS mastery with it being made in 100% vanilla JS. No frameworks."
        actionText="Learn more & live demo"
      ></Card>
      <Card
        title="Vanilla To-do list"
        subtitle="Pure JS mastery with it being made in 100% vanilla JS. No frameworks."
        actionText="Learn more & live demo"
      ></Card>
    </div>
  );
}
