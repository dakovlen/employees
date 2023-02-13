import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

  const data = [
    {name: 'John C.', salary: 800, increase: true, id:1},
    {name: 'Alex', salary: 1000, increase: false, id:2},
    {name: 'Carl L.', salary: 3000, increase: true, id:3}
  ]

  function App() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={data} />
        <EmployeesAddForm />
      </div>
    )
  }


  export default App