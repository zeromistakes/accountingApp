import './employees-add-form.css';
import {useState} from "react";

const EmployeesAddForm = ({onAdd}) => {

    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onSalaryChange = (e) => {
        setSalary(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(name, salary);
        setName('');
        setSalary('');
    }

    return (
        <div className="app-add-form">
            <h3>Add a new employee</h3>
            <form
                className="add-form d-flex"
                onSubmit={onSubmit}
            >
                <input type="text"
                       className="form-control new-post-label"
                       placeholder="Name"
                       name="name"
                       value={name}
                       onChange={onNameChange}
                />
                <input type="number"
                       className="form-control new-post-label"
                       placeholder="Salary"
                       name="salary"
                       value={salary}
                       onChange={onSalaryChange}
                />
                <button type="submit"
                        className="btn btn-outline-light">Add
                </button>
            </form>
        </div>
    )
}


export default EmployeesAddForm;