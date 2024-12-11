import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import cn from '../../util/tailwind-cn';

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

const Button = ({
  children,
  variant = 'primary',
  className,
  ...props
}: IButtonProps) => {
  const buttonStyles = {
    primary: 'bg-bg-secondary',
    secondary: 'bg-bg-primary',
    tertiary: 'rounded-2xl p-2 px-3 border-lumi',
    quaternary: 'border-none',
  }[variant];
  return (
    <button
      className={cn(
        'p-2 border border-border-secondary text-xs sm:text-sm rounded-md transition-transform duration-300 ease-in-out hover:bg-bg-primary active:bg-transparent',
        buttonStyles,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
