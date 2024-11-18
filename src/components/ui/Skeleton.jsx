import { classNames } from '../../utils/classNames';

export const Skeleton = ({ 
  type = 'text',
  className = '',
  width,
  height,
  repeat = 1,
  ...props 
}) => {
  const baseClass = 'animate-pulse bg-gray-200 rounded';

  const variants = {
    text: 'h-4',
    title: 'h-8',
    image: 'h-48',
    avatar: 'h-12 w-12 rounded-full',
    button: 'h-10',
    custom: '',
  };

  const style = {
    width: width,
    height: height,
  };

  const elements = Array(repeat).fill(0);

  return (
    <div className="space-y-2">
      {elements.map((_, index) => (
        <div
          key={index}
          className={classNames(
            baseClass,
            variants[type] || variants.custom,
            className
          )}
          style={style}
          {...props}
        />
      ))}
    </div>
  );
};

export const SkeletonGroup = ({ children, className = '' }) => (
  <div className={classNames('space-y-6', className)}>{children}</div>
);

// Pre-built skeleton components
export const CardSkeleton = ({ className = '' }) => (
  <div className={classNames('p-6 bg-white rounded-lg shadow-md', className)}>
    <Skeleton type="image" className="w-full mb-4" />
    <Skeleton type="title" className="w-3/4 mb-4" />
    <Skeleton type="text" className="w-full mb-2" />
    <Skeleton type="text" className="w-5/6 mb-2" />
    <Skeleton type="text" className="w-4/6" />
  </div>
);

export const ProfileSkeleton = ({ className = '' }) => (
  <div className={classNames('flex items-center', className)}>
    <Skeleton type="avatar" className="mr-4" />
    <div>
      <Skeleton type="title" width={150} className="mb-2" />
      <Skeleton type="text" width={100} />
    </div>
  </div>
);

export const TableRowSkeleton = ({ columns = 4, className = '' }) => (
  <div className={classNames('flex space-x-4', className)}>
    {Array(columns).fill(0).map((_, i) => (
      <Skeleton
        key={i}
        type="text"
        className={`flex-1 ${i === 0 ? 'w-1/4' : 'w-1/6'}`}
      />
    ))}
  </div>
);
