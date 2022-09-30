import './app.css';
import HeaderInfo from "../header-info/header-info";
import SearchInput from "../search-input/search-input";
import EmployeeFilter from "../employee-filter/employee-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeeAddForm from "../employee-add-form/employee-add-form";
import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';

const App = () => {

    const data = [{
        name: 'Alex', salary: 400, isForSalaryRaise: false, isFavourite: true, id: 0
    }, {
        name: 'Paul', salary: 500, isForSalaryRaise: false, isFavourite: false, id: 1
    }, {
        name: 'Kate', salary: 800, isForSalaryRaise: true, isFavourite: false, id: 2
    },];

    const [employeesData, setEmployeesData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const employees = employeesData.length;
    const increased = employeesData.filter(item => item.isForSalaryRaise).length;

    useEffect(() => {
        setEmployeesData(data);
    }, []);

    const addItem = (name, salary) => {
        const newItem = {
            name, salary, isForSalaryRaise: false, isFavourite: false, id: uuidv4(),
        }
        setEmployeesData((employeesData) => [...employeesData, newItem]);
    }

    const deleteItem = (id) => {
        const newArr = employeesData.filter(item => item.id !== id);
        setEmployeesData([...newArr]);
    }

    const onToggleProp = (id, prop) => {
        const newArr = employeesData.map(item => {
            if (item.id === id) return {...item, [prop]: !item[prop]};
            return item;
        })
        setEmployeesData(newArr);
    }

    const search = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.name.indexOf(term) > -1;
        })
    }

    const onSearchChange = (term) => {
        setSearchTerm(term);
    }

    const filterList = (items, filter) => {
        switch (filter) {
            case 'increase':
                return items.filter((item) => item.isForSalaryRaise);
            case 'moreThan1000':
                return items.filter((item) => item.salary > 1000);
            default:
                return items;
        }
    }

    const onFilterSelect = (filter) => {
        setFilter(filter);
    }

    const visibleData = filterList(search(employeesData, searchTerm), filter);

    return (<div className='app'>
            <HeaderInfo
                employees={employees}
                increased={increased}
            />
            <div className="searchPanel">
                <SearchInput onSearchChange={onSearchChange}/>
                <EmployeeFilter filter={filter} onFilterSelect={onFilterSelect}/>
            </div>
            <EmployeesList
                onDelete={deleteItem}
                onToggleProp={onToggleProp}
                data={visibleData}/>
            <EmployeeAddForm onAdd={addItem}/>
        </div>)

}


export default App;