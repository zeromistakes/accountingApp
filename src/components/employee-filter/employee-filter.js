import './employee-filter.css';

const EmployeeFilter = () => {
    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-light">
                All employees
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                For increase
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                Salary more than 1000 $
            </button>
        </div>
    )
}

export default EmployeeFilter;