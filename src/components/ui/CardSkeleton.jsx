import { Card } from './Card';
import { Skeleton } from './Skeleton';

export const CardSkeleton = ({ repeat = 1 }) => {
  const skeletons = Array(repeat).fill(0).map((_, index) => (
    <Card key={index} className="p-4">
      <Skeleton className="h-48 w-full mb-4" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2" />
    </Card>
  ));

  return repeat === 1 ? skeletons[0] : <div className="space-y-4">{skeletons}</div>;
};
