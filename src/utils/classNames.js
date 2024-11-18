export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const variants = {
  primary: 'bg-blue-500 hover:bg-blue-600 text-white',
  secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  danger: 'bg-red-500 hover:bg-red-600 text-white',
  success: 'bg-green-500 hover:bg-green-600 text-white',
};

export const sizes = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg',
};

export const containerStyles = {
  card: 'bg-white rounded-lg shadow-md p-6',
  section: 'py-8',
  wrapper: 'container mx-auto px-4 sm:px-6 lg:px-8',
};
