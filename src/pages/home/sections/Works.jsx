import Card from '../../../components/Card';
import { works } from '@/data/work';

export default function Works() {
  return (
    <div className="mt-4 grid gap-4 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
      {works.map((work) => (
        <Card
          key={work.title}
          title={work.title}
          subtitle={work.description}
          actionText="Learn more & live demo"
          url={work.blogUrl}
        ></Card>
      ))}
    </div>
  );
}
