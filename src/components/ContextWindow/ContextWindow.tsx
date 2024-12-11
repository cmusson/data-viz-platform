import { useAppSelector } from '../../redux/store';

const ContextWindow = () => {
  const contextVariable = useAppSelector(
    (state) => state.contextWindow.contextVariable
  );

  return (
    <div className="p-6 py-8 bg-bg-secondary border-t border-border-secondary rounded-b-md flex flex-col gap-3 transition-all duration-500 ease-in-out transform translate-y-0 opacity-100">
      <div className="flex items-center gap-2">
        <h3 className="text-xl">{contextVariable}</h3>
        <img src="/info.svg" />
      </div>
      <p>
        But what truly sets Switch apart is its versatility. It can be used as a
        scooter, a bike, or even a skateboard, making it suitable for people of
        all ages. Whether you're a student, a professional, or a senior citizen,
        Switch adapts to your needs and lifestyle.
      </p>
    </div>
  );
};

export default ContextWindow;
