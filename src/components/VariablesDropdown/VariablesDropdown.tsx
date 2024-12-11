import { ReactNode } from 'react';
import { Button } from '../Button';

interface IVariablesDropdownProps {
  children: ReactNode;
}

const VariablesDropdown = ({ children }: IVariablesDropdownProps) => {
  return (
    <div className="cursor:pointer text-lumi border border-border-secondary bg-bg-secondary rounded-md flex items-center justify-between p-2 px-4 mt-4">
      <div>{children}</div>
      <Button variant="tertiary">
        <img className="w-3" src="/chevron-down.svg" />
      </Button>
    </div>
  );
};

export default VariablesDropdown;
