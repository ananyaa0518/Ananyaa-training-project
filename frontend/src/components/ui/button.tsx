type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
};

function Button({
  children,
  variant = 'primary',
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles =
    'rounded-lg px-8 py-4 text-lg font-semibold transition-all duration-200';

  const variants = {
    primary: 'bg-[#F4A300] text-black hover:bg-[#E69500]',
    secondary:
      'border border-[#F4A300] text-[#F4A300] hover:bg-[#F4A300] hover:text-black',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
