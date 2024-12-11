import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  // ReferenceLine,
} from 'recharts';
import CustomTooltip from '../CustomTooltip';
import { Button } from '../Button';

const data = [
  { month: 'Apr', value: 20000 },
  { month: 'May', value: 45000 },
  { month: 'Jun', value: 20000 },
  { month: 'Jul', value: 95000 },
  { month: 'Aug', value: 40000 },
  { month: 'Sep', value: 40000 },
  { month: 'Oct', value: 60000 },
];

const Chart = () => {
  return (
    <div className="bg-bg-secondary border border-border-secondary p-4 pr-8 pt-6 mt-5 rounded min-w-84">
      <div className="w-full flex justify-end">
        <Button className="bg-bg-primary hover:bg-bg-secondary active:bg-bg-primary">
          <div className="flex flex-row gap-2 text-xs">
            <div>Unsatisifed Demand %</div>
            <img
              className="filter invert brightness-0"
              src="/chevron-down.svg"
            />
          </div>
        </Button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid stroke="#2d2d2d" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: '#bdbdbd' }} tickLine={false} />
          <YAxis
            tickFormatter={(value) => `$${value / 1000}K`}
            tick={{ fill: '#bdbdbd' }}
            tickLine={false}
            axisLine={false}
            domain={[0, 100000]}
            ticks={[20000, 40000, 60000, 80000, 100000]}
          />
          <Tooltip
            cursor={{ stroke: '#4caf50', strokeDasharray: '5 5' }}
            content={<CustomTooltip />}
          />
          {/* <ReferenceLine x="Jul" stroke="#bdbdbd" strokeDasharray="5 5" /> */}
          <Line
            type="linear"
            dataKey="value"
            stroke="#c0ff74"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: 'black', stroke: '#c0ff74' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
