import './search-panel.css';
import {Component} from "react";

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        }
    }

    onSearch = (e) => {
        const term = e.target.value;
        this.setState(({searchTerm}) => {
            return {
                searchTerm: term
            }
        })
        this.props.onSearchChange(term);
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Search"
                onChange={this.onSearch}
                value={this.state.searchTerm}
            />
        )
    }
}

export default SearchInput;