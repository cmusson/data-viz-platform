import { useDispatch } from 'react-redux';
import { Button } from '../../components/Button';
import DataSection from './sections/DataSection';
import InfoSection from './sections/InfoSection';

import { openModal } from '../../redux/modalSlice';

const Home = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };
  return (
    <main className="flex-1 bg-bg-primary border border-b-0 border-r-0 border-border-secondary p-8 text-white rounded-md">
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-3">
          <img src="/bolt.svg" />
          <h1 className="text-lg sm:text-3xl">Charging Station</h1>
        </div>

        <div className="flex flex-row items-center gap-2">
          <Button>
            <img src="/refresh.svg" />
          </Button>
          <Button className="text-nowrap" onClick={handleOpenModal}>
            Edit Variables
          </Button>
          <Button className="flex flex-col items-center">
            <img
              className="w-3 filter invert brightness-0"
              src="/arrow-up.svg"
            />
            <img src="/under-arrow.svg" />
          </Button>
        </div>
      </div>

      <InfoSection />

      <DataSection />
    </main>
  );
};

export default Home;
