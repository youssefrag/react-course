import "./SearchBox.css";

const name: string = 123456;

const SearchBox = ({ placeholder, onChangeHandler, className }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
