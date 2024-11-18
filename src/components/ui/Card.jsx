import { classNames, containerStyles } from '../../utils/classNames';

export const Card = ({ 
  children, 
  className = '', 
  onClick,
  hover = false,
  ...props 
}) => {
  return (
    <div
      className={classNames(
        containerStyles.card,
        'transition-all duration-300 ease-in-out animate-fade-in',
        hover && 'hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};
