import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';
//1. key дожен біть уникальнім только среди "соседей" в других частаях приложения может біть такие же id , а не глобально, единственним на странице
//2. плохая практика использовать рандомные числа или строки для кей.
//3. глобально key нужен для оптимизации работы приложения
//4. реакт обновляет в интерфейсе только те елементы котрые действительно изменились.
//5. Алгоритм согласования. (Сравнение в дом дереве старой и новой версии)

const EmployeesList = ({data}) => {
  
  const elements = data.map(item => {
    const {id, ...itemProps} = item //частичная диструктуризация. Витаскиваю только одно свойство id а все остальное будет оставаться в props

    return(
      <EmployeesListItem key={id} {...itemProps}/>
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployeesList;