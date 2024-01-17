import { ChangeEventHandler } from "react";
import './search_bar.css'

interface ISearchBarProps {
    className: string;
    placeHolder?: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;

}

const SearchBar = ({ className, placeHolder, onChangeHandler}: ISearchBarProps) => (
    <input
        className={`search-box ${className}`}
        type="text"
        placeholder={placeHolder}
        onChange={onChangeHandler}
    />
)


export default SearchBar;