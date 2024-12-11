import { ReactNode } from 'react';

interface IMetricsCardProps {
  children: ReactNode;
  info: string;
  value: string;
}

const MetricsCard = ({ children, info, value }: IMetricsCardProps) => {
  return (
    <div className="border border-border-secondary flex flex-col items-end gap-6 p-6 px-4 w-52 rounded-md bg-bg-secondary">
      <div>
        <div className="flex flex-row items-center justify-between w-full mb-1">
          <h4 className="capitalize text-white text-nowrap">{children}</h4>
          <img alt="info" src="/question.svg" />
        </div>

        <p className="text-text-gray text-xs text-left">{info}</p>
      </div>

      <div className="text-white text-2xl font-bold">{value}</div>
    </div>
  );
};

export default MetricsCard;
