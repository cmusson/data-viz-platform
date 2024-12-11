import { ReactNode } from 'react';
import cn from '../../util/tailwind-cn';
import { useDispatch } from 'react-redux';
import { IVariables, updateSelected } from '../../redux/variablesSlice';
import {
  closeContextWindow,
  openContextWindow,
  setContextVariable,
} from '../../redux/contextWindowSlice';

interface IVariableProps {
  children: ReactNode;
  selected: boolean;
  group: keyof IVariables;
  index: number;
}

const Variable = ({ children, selected, group, index }: IVariableProps) => {
  const dispatch = useDispatch();

  const handleUpdateSelected = () => {
    dispatch(updateSelected({ group: group, index: index }));
  };

  const handleOpenCW = () => {
    dispatch(setContextVariable(children as string));
    dispatch(openContextWindow());
  };

  const handleCloseCW = () => {
    dispatch(closeContextWindow());
  };

  return (
    <button
      onMouseEnter={handleOpenCW}
      onMouseLeave={handleCloseCW}
      onClick={handleUpdateSelected}
      className={cn(
        selected ? 'border-lumi' : 'border-border-secondary',
        'text-text-gray bg-bg-secondary border transition-transform duration-300 ease-in-out rounded-2xl flex flex-row items-center justify-between gap-6 p-1 px-2 cursor-pointer'
      )}
    >
      <div className={cn('text-sm', selected ? 'text-lumi' : '')}>
        {children}
      </div>
      <div className="flex flex-row gap-2">
        <img
          className={cn('w-3', !selected && 'filter invert brightness-0')}
          alt=""
          src="/stars.svg"
        />
        <img
          className="w-2"
          alt={selected ? 'selected' : ' not selected'}
          src={selected ? '/check.svg' : '/plus.svg'}
        />
      </div>
    </button>
  );
};

export default Variable;
