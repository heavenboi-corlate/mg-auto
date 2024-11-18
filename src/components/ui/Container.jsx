import { classNames, containerStyles } from '../../utils/classNames';

export const Container = ({ 
  children, 
  className = '', 
  as: Component = 'div',
  maxWidth = true,
  ...props 
}) => {
  return (
    <Component
      className={classNames(
        containerStyles.section,
        maxWidth && containerStyles.wrapper,
        'animate-fade-in transition-all duration-300 ease-in-out',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
