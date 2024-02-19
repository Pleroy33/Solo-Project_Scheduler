import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


function ViewEmployeeDetail({employee}) {
    const dispatch = useDispatch();
    const history = useHistory();

    console.log('employee:', employee )

    const handleDeleteEmployee =(id) => { 
        console.log('inside handleDeleteEmployee')
        dispatch({type: 'DELETE_EMPLOYEE', payload: id})
       }
       const setEditEmployee = () => {
        console.log('inside handleEditEmployee',employee)
        dispatch({type: 'SET_EDIT_EMPLOYEE', payload: employee})
        history.push('/editemployee')

    }

return (

   
    <tr>
        <td >{employee.first_name}</td>
        <td>{employee.last_name}</td>
        <td><button className = 'btn_edit' onClick={setEditEmployee}>Edit Employee</button></td>
        <td><button className='btn_delete' onClick={() => handleDeleteEmployee(employee.id)} >Delete Employee</button></td>
    </tr>
)
}
export default ViewEmployeeDetail