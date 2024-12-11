import cn from '../../util/tailwind-cn';

interface ISearchProps {
  className?: string;
}
const Search = ({ className }: ISearchProps) => {
  return (
    <div
      className={cn(
        'flex items-center bg-bg-primary border border-border-secondary p-2 px-3 gap-2 rounded-md',
        className
      )}
    >
      <img className="w-3" src="/search.svg" />
      <input
        type="text"
        placeholder="Search"
        className="w-12 bg-transparent text-xs placeholder:text-white focus:outline-none focus:ring-0"
      />
    </div>
  );
};

export default Search;
