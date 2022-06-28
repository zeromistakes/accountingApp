import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({data}) => {
    const elements = data.map((employee) => {
        const {id, ...employeeProps} = employee;
        return (
            <EmployeesListItem key={id} {...employeeProps}/>
        )
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;