import { Button } from '../../../components/Button';
import InfoBox from '../../../components/InfoBox';

const InfoSection = () => {
  return (
    <section className="mb-8">
      <div className="mb-6 flex flex-row items-center justify-between">
        <div className="flex gap-2">
          <img src="/stars.svg" />
          <h2 className="text-lumi text-xl">Best Scenario Results</h2>
        </div>
        <Button variant="tertiary">
          <img className="w-3" src="/chevron-up.svg" />
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        <InfoBox>
          The best found configuration based on profit is characterized by 11
          zones (max) with charging stations and 48 total number of poles.
        </InfoBox>
        <InfoBox>
          The best found configuration based on satisfied demand is
          characterized by 11 zones (max) with charging stations and 48 total
          number of poles.
        </InfoBox>
      </div>
    </section>
  );
};

export default InfoSection;
