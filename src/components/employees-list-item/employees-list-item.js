import './employees-list-item.css';
import {Component} from "react";

class EmployeesListItem extends Component {
    render () {
        const { name,
                salary,
                onDelete,
                onToggleProp,
                isForSalaryRaise,
                isFavourite,
              } = this.props;
        let listClassName = "list-group-item d-flex justify-content-between"
        if(isForSalaryRaise) {
            listClassName += ' increase';
        }
        if(isFavourite) {
            listClassName += ' like';
        }
        return (
            <li className={listClassName}>
                <span onClick={onToggleProp} data-toggle="isFavourite" className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            onClick={onToggleProp} data-toggle="isForSalaryRaise"
                            className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"/>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}
                    >
                        <i className="fas fa-trash"/>
                    </button>
                    <i className="fas fa-star"/>
                </div>
            </li>
        )
    }

}

export default EmployeesListItem;