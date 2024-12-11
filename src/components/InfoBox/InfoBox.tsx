import { ReactNode } from 'react';

interface IInfoBox {
  children: ReactNode;
}

const InfoBox = ({ children }: IInfoBox) => {
  return (
    <div className="gap-4 p-3 px-4 text-lumi border-[0.5px] font-light border-lumi rounded-md flex flex-row items-center justify-between w-full">
      <p className="text-sm">{children}</p>
      <img alt="ellipes" src="/ellipses.svg" />
    </div>
  );
};

export default InfoBox;
