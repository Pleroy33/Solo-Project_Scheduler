import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


function EmployeeDetail({employee}) {
    const dispatch = useDispatch();
    const history = useHistory();

    console.log('employee:', employee)

    const handleDeleteEmployee =(id) => { 
        console.log('inside handleDeleteEmplyee')
        dispatch({type: 'DELETE_EMPLOYEE', payload: id})
       }
       const handleEditEmployee = (employee) => {
        console.log('inisde handleEditEmployee',employee)
        history.push('/editemployee')

    }

return (

    // <h1>hello world!</h1>
    <tr>
        <td>{employee.first_name}</td>
        <td>{employee.last_name}</td>
        <td><button onClick={(event) => handleEditEmployee(event.target.value)} value={employee}>Edit Employee</button></td>
        <td><button onClick={(event) => handleDeleteEmployee(event.target.value)} value={employee.id}>Delete Employee</button></td>
    </tr>
)
}
export default EmployeeDetail