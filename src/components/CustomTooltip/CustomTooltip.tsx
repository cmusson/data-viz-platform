interface ICustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

const CustomTooltip = ({
  active,
  payload,
}: //   label,
ICustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-bg-secondary border border-border-secondary p-4 rounded-md shadow-lg">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-white text-lg font-semibold">
            ${(payload[0].value / 1000).toFixed(2)}k
          </h3>
          <img src="/question.svg" alt="info" className="w-4 h-4" />
        </div>
        <div className="text-text-gray flex items-center gap-1 mt-1">
          <img
            className="border border-lumi rounded-2xl p-1"
            src="/arrow-up.svg"
          />
          <span className="text-sm">4.6% above target</span>
        </div>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
