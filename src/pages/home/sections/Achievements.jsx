import Card from '../../../components/Card';

export default function Achievements() {
  return (
    <div className="mt-4 grid gap-4 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
      <Card
        title="Gemastik 2024"
        subtitle="Pure JS mastery with it being made in 100% vanilla JS. No frameworks."
        actionText="Learn more"
      ></Card>
      <Card
        title="Solution Challenge 2024"
        subtitle="Pure JS mastery with it being made in 100% vanilla JS. No frameworks."
        actionText="Learn more"
      ></Card>
    </div>
  );
}
