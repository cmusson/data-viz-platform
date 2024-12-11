import { Button } from '../../../components/Button';
import Chart from '../../../components/Chart';
import MetricsCard from '../../../components/MetricsCard';

const info = 'This describes variable two and what the shown data means';

const kpis = [
  {
    title: 'Infrastructure Units',
    info: info,
    value: '€421.07',
  },
  {
    title: 'Charging Growth',
    info: info,
    value: '33.07',
  },
  {
    title: 'Localization Change',
    info: info,
    value: '21.9%',
  },
  {
    title: 'Fleet Growth',
    info: info,
    value: '7.03%',
  },
];

const DataSection = () => {
  return (
    <section className="flex w-full gap-4 flex-col items-center lg:items-start lg:flex-row">
      <div className="flex-grow items-center">
        <h3 className="pt-2 text-lg">Graphs</h3>
        <Chart />
      </div>

      <div className="w-auto flex flex-col max-w-[435px]">
        <div className="flex items-center justify-between mb-4 gap-2">
          <h3 className="text-lg">Key Performance Indicators</h3>
          <Button
            variant="secondary"
            className="flex flex-row gap-2 items-center"
          >
            <div>Vairables</div>
            <img src="/plus.svg" />
          </Button>
        </div>
        <div className="flex flex-col items-center sm:flex-row flex-wrap gap-4">
          {kpis.map((kpi, idx) => (
            <MetricsCard
              key={`${kpi.title}-${idx}`}
              info={kpi.info}
              value={kpi.value}
            >
              {kpi.title}
            </MetricsCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataSection;
