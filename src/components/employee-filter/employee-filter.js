import './employee-filter.css';


const EmployeeFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All'},
        {name: 'increase', label: 'For Salary Raise'},
        {name: 'moreThan1000', label: 'Salary more than 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const btnClass = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${btnClass}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default EmployeeFilter;