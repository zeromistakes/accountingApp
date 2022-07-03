import "./header-info.css"

const HeaderInfo = ({employees, increased}) => {
    return (
        <div className="headerInfo">
            <h1>Employees accounting app</h1>
            <h2>Number of employees in the company: {employees}</h2>
            <h2>Employees, who will get increase: {increased}</h2>
        </div>
    )
}

export default HeaderInfo;