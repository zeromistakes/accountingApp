import './app.css';
import HeaderInfo from "../header-info/header-info";
import SearchInput from "../search-input/search-input";
import EmployeeFilter from "../employee-filter/employee-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeeAddForm from "../employee-add-form/employee-add-form";
import {Component} from "react";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: 'Alex',
                    salary: 400,
                    isForSalaryRaise: false,
                    isFavourite: true,
                    id: 0
                },
                {name: 'Paul',
                    salary: 500,
                    isForSalaryRaise: false,
                    isFavourite: false,
                    id: 1
                },
                {name: 'Kate',
                    salary: 800,
                    isForSalaryRaise: true,
                    isFavourite: false,
                    id: 2
                },
                ]

        }
    }
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            isForSalaryRaise: false,
            isFavourite: false,
            id: uuidv4(),
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    deleteItem = (id) => {
        this.setState(({data})=>{
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) return {...item, [prop]: !item[prop]};
                return item;
            })
        }))
    }

    render() {
        const {data} = this.state;
        const employees = data.length;
        const increased = data.filter(item => item.isForSalaryRaise).length;
        return (
            <div className='app'>
                <HeaderInfo
                employees={employees}
                increased={increased}
                />
                <div className="searchPanel">
                    <SearchInput/>
                    <EmployeeFilter/>
                </div>
                <EmployeesList
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    data={data}/>
                <EmployeeAddForm onAdd={this.addItem}/>
            </div>
        )
    }

}

export default App;