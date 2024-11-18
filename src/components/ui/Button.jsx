import { classNames, variants, sizes } from '../../utils/classNames';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  isLoading = false,
  disabled = false,
  type = 'button',
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      className={classNames(
        'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-md',
        variants[variant],
        sizes[size],
        isLoading && 'opacity-70 cursor-not-allowed hover:scale-100 hover:shadow-none',
        disabled && 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none',
        className
      )}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};
