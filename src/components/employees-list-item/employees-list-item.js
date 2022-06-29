import './employees-list-item.css';
import {Component} from "react";

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isForSalaryRaise: false,
            isFavourite: false,
        }
    }

    toggleCookie = () => {
        this.setState(({isForSalaryRaise}) => ({
            isForSalaryRaise: !isForSalaryRaise,
        }))
    }

    makeFavourite = () => {
        this.setState(({isFavourite}) => ({
            isFavourite: !isFavourite,
        }))
    }

    render () {
        const {name, salary} = this.props;
        const {isForSalaryRaise, isFavourite} = this.state;
        let listClassName = "list-group-item d-flex justify-content-between"
        if(isForSalaryRaise) {
            listClassName += ' increase';
        }
        if(isFavourite) {
            listClassName += ' like';
        }
        return (
            <li className={listClassName}>
                <span onClick={this.makeFavourite} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            onClick={this.toggleCookie}
                            className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"/>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"/>
                    </button>
                    <i className="fas fa-star"/>
                </div>
            </li>
        )
    }

}

export default EmployeesListItem;