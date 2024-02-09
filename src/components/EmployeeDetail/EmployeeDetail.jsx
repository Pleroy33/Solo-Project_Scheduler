import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


function EmployeeDetail({employee}) {
    const dispatch = useDispatch();
    const history = useHistory();

    console.log('employee:', employee )

    const handleDeleteEmployee =(id) => { 
        console.log('inside handleDeleteEmplyee')
        dispatch({type: 'DELETE_EMPLOYEE', payload: id})
       }
       const setEditEmployee = () => {
        console.log('inside handleEditEmployee',employee)
        dispatch({type: 'SET_EDIT_EMPLOYEE', payload: employee})
        history.push('/editemployee')

    }

return (

   
    <tr>
        <td>{employee.first_name}</td>
        <td>{employee.last_name}</td>
        <td><button onClick={setEditEmployee}>Edit Employee</button></td>
        <td><button onClick={() => handleDeleteEmployee(employee.id)} >Delete Employee</button></td>
    </tr>
)
}
export default EmployeeDetail