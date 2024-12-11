import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import cn from '../../util/tailwind-cn';

interface IIconButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

const IconButton = ({ children, className }: IIconButtonProps) => {
  return (
    <button
      className={cn(
        'transition-transform duration-300 ease-in-out rounded-md border border-transparent p-2 hover:bg-bg-primary active:bg-transparent active:filter active:invert active:brightness-0',
        className
      )}
    >
      {children}
    </button>
  );
};

export default IconButton;
