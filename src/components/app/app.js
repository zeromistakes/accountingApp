import './app.css';
import HeaderInfo from "../header-info/header-info";
import SearchInput from "../search-input/search-input";
import EmployeeFilter from "../employee-filter/employee-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeeAddForm from "../employee-add-form/employee-add-form";

const App = () => {
    const data = [
        {name: 'Alex', salary: 400, isForSalaryRaise: false, id: 0},
        {name: 'Paul', salary: 500, isForSalaryRaise: false, id: 1},
        {name: 'Kate', salary: 800, isForSalaryRaise: true, id: 2},
    ];
    return (
        <div className='app'>
            <HeaderInfo/>
            <div className="searchPanel">
                <SearchInput/>
                <EmployeeFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeeAddForm/>
        </div>
    )
}

export default App;