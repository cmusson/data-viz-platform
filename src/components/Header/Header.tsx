import { NavButton } from '../Button';
import Search from '../Search';

const Header = () => {
  return (
    <header className="text-white flex items-center justify-between p-4 sm:pl-0">
      <nav className="flex gap-2">
        <NavButton
          variant="header"
          className="bg-bg-secondary border border-border-secondary"
        >
          Charging Stations
        </NavButton>
        <NavButton variant="header">Fleet Sizing</NavButton>
        <NavButton variant="header">Parking</NavButton>
      </nav>

      <Search />
    </header>
  );
};

export default Header;
