import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { DateTime } from 'luxon'


function ViewWeekScheduleDetail({ shift,id }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const start = shift.start_time
    const end = shift.end_time
    console.log('shift:', shift)
    console.log('id', id)
    
    const handleDeleteShift =(shift, id) => { 
        console.log('inside handleDeleteShift')
        dispatch({type: 'DELETE_SHIFT', payload: shift, id:id})
    }
       
       const setEditShift = (e) => {
        console.log('inside handleEditShift',shift)
        // dispatch({type: 'SET_EDIT_EMPLOYEE', payload: employee})
        // history.push('/editemployee')

    }

    return (



        <tr>
            <td>{shift.first_name}</td>
            <td>{shift.weekday}</td>
            <td>{start}</td>
            <td>{end}</td>
            <td><button className='btn_edit' onClick={setEditShift}>Edit Shift</button></td>
            <td><button className='btn_delete' onClick={() => handleDeleteShift(shift.id,id)} >Delete Shift</button></td>

        </tr>


    )
}
export default ViewWeekScheduleDetail