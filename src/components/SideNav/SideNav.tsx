import cn from '../../util/tailwind-cn';
import { IconButton } from '../Button';

const sideNavOptions = [
  { name: 'menu', icon: '/burger.svg' },
  { name: 'home', icon: '/home.svg' },
  { name: 'notifications', icon: '/bell.svg' },
  { name: 'copy', icon: '/clipboard.svg' },
  { name: 'upload', icon: '/upload.svg' },
  { name: 'settings', icon: '/cog.svg' },
];

const SideNav = () => {
  return (
    <aside className="text-white h-screen w-16 hidden sm:flex flex-col items-center justify-between p-4 py-7">
      <div className="flex flex-col items-center gap-8">
        {sideNavOptions.map((option, idx) => (
          <IconButton
            className={cn(
              idx === 1 && 'border border-border-secondary bg-bg-secondary'
            )}
            key={`${option.name}-${idx}`}
          >
            <img src={option.icon} alt={option.name} />
          </IconButton>
        ))}
      </div>
      <IconButton>
        <img src="/account.svg" alt="profile" />
      </IconButton>
    </aside>
  );
};

export default SideNav;
