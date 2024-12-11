import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import cn from '../../util/tailwind-cn';

interface INavButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  variant?: 'side' | 'header';
}

const NavButton = ({
  variant = 'side',
  children,
  className,
}: INavButtonProps) => {
  const variantStyles = { side: '', header: 'p-1 px-1 sm:px-2' }[variant];
  return (
    <button
      className={cn(
        'text-xs sm:text-lg transition-transform duration-300 ease-in-out rounded-md hover:bg-bg-primary active:bg-transparent',
        variantStyles,
        className
      )}
    >
      {children}
    </button>
  );
};

export default NavButton;
