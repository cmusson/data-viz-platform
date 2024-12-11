import Header from '../../components/Header';
import SideNav from '../../components/SideNav';
import Home from '../Home';

const MainPage = () => {
  return (
    <div className="flex h-screen bg-black relative">
      <SideNav />
      <div className="flex-1 flex flex-col">
        <Header />
        <Home />
      </div>
    </div>
  );
};

export default MainPage;
