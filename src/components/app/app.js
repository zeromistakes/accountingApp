import './app.css';
import HeaderInfo from "../header-info/header-info";
import SearchInput from "../search-input/search-input";
import EmployeeFilter from "../employee-filter/employee-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeeAddForm from "../employee-add-form/employee-add-form";
const App = () => {
    return (
        <div className='app'>
            <HeaderInfo/>
            <div className="searchPanel">
                <SearchInput/>
                <EmployeeFilter/>
            </div>
            <EmployeesList/>
            <EmployeeAddForm/>
        </div>
    )
}

export default App;