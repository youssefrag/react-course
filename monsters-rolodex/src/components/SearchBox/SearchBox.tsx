import "./SearchBox.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  placeholder,
  onChangeHandler,
  className,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
