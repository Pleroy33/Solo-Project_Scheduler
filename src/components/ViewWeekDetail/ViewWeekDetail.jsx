import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


function ViewWeekDetail({week}) {
    const dispatch = useDispatch();
    const history = useHistory();

    console.log('Weekof:', week )

    // const handleDeleteEmployee =(id) => { 
    //     console.log('inside handleDeleteEmplyee')
    //     dispatch({type: 'DELETE_EMPLOYEE', payload: id})
    //    }
    //    const setEditEmployee = () => {
    //     console.log('inside handleEditEmployee',employee)
    //     dispatch({type: 'SET_EDIT_EMPLOYEE', payload: employee})
    //     history.push('/editemployee')

    // }

return (

   
    <tr key={week.id}>
        <td>{week.start_week}</td>
        {/* <td>{employee.last_name}</td> */}
        <td><button onClick={console.log('')}>View Week</button></td>
        {/* <td><button onClick={() => handleDeleteEmployee(employee.id)} >Delete Employee</button></td> */}
    </tr>
)
}
export default ViewWeekDetail