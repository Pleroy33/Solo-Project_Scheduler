import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


function ViewWeekScheduleDetail({ shift,id }) {
    const dispatch = useDispatch();
    const history = useHistory();

    console.log('shift:', shift)
    console.log('id', id)

    const handleDeleteShift =(shift, id) => { 
        console.log('inside handleDeleteEmplyee')
        dispatch({type: 'DELETE_SHIFT', payload: shift, id:id})
    }
       
    //    const setEditEmployee = () => {
    //     console.log('inside handleEditEmployee',employee)
    //     dispatch({type: 'SET_EDIT_EMPLOYEE', payload: employee})
    //     history.push('/editemployee')

    // }

    return (



        <tr>
            <td>{shift.first_name}</td>
            <td>{shift.weekday}</td>
            <td>{shift.start_time}</td>
            <td>{shift.end_time}</td>
            {/* <td><button onClick={setEditShift}>Edit Shift</button></td> */}
            <td><button onClick={() => handleDeleteShift(shift.id,id)} >Delete Employee</button></td>

        </tr>


    )
}
export default ViewWeekScheduleDetail