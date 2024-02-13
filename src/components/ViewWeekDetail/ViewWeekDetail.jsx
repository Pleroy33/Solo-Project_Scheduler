import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

function ViewWeekSchedule() {
    const { id } = useParams()
    console.log("inside ViewWeekSchedule")
    const dispatch = useDispatch();
    const history = useHistory()
    const week = useSelector(store => store.setOneWeek)

    useEffect(() => {
        dispatch({
            type: 'FETCH_ONE_WEEK', payload: id
        })
    }, [])
    console.log(week[0])

    const handleDeleteShift =(id) => { 
        console.log('inside handleDeleteEmployee')
        dispatch({type: 'DELETE_SHIFT', payload: id})
       }

       const setEditShift = () => {
        console.log('inside handleEditEmployee', week)
        dispatch({type: 'SET_EDIT_WEEK', payload: week})
        history.push('/editshift')

    }




    return (
        <div>
            <h1>Shifts For Week {week[0]?.start_week}</h1>
            <section className="employeeList">

                <table>
                    <thead>
                        <tr>
                            <th scope='col'>First Name</th>
                            <th scope='col'>Last Name</th>
                            <th scope='col'>Day</th>
                            <th scope='col'>Start Time</th>
                            <th scope='col'>End Time</th>
                            <th scope='col'>Edit Shift</th>
                            <th scope='col'>Delete Shift</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>placeholder.firstname</td>
                            <td>placeholder.last_name</td>
                            <td>placeholder.day</td>
                            <td>placeholder.starttime</td>
                            <td>placeholder.endtime</td>
                            <td><button onClick={setEditShift}>Edit Shift</button></td>    
                            <td><button onClick={() => handleDeleteShift(week.id)} >Delete Employee</button></td>

                        </tr>

                    </tbody>
                </table>
            </section>

            {/* <button type='button' onClick={() => { history.push('addemployee') }}>Add Another Employee</button>  <button type='button' onClick={() => { history.push('createschedule') }}>Accept</button> */}
        </div>
    )

}
export default ViewWeekSchedule