import './search-panel.css';
import {useState} from "react";

const SearchInput = ({onSearchChange}) => {

    const [searchTerm, setSearchTerm] = useState('');


    const onSearch = (e) => {
        const term = e.target.value;
       setSearchTerm(term);
        onSearchChange(term);
    }

    return (
        <input
            type="text"
            className="form-control search-input"
            placeholder="Search"
            onChange={onSearch}
            value={searchTerm}
        />
    )
}


export default SearchInput;