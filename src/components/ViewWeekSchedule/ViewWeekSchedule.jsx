import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import ViewWeekScheduleDetail from "../ViewWeekScheduleDetail/ViewWeekScheduleDetail";

function ViewWeekSchedule() {
    const { id } = useParams()
    console.log("inside ViewWeekSchedule")
    const dispatch = useDispatch();
    const history = useHistory()
    const week = useSelector((store) => store.setOneWeek)
    const shifts = useSelector((store) => store.shifts)
    console.log('shifts:', shifts)
    useEffect(() => {
        dispatch({
            // type: 'FETCH_ONE_WEEK', payload: id,
            type: 'FETCH_SHIFTS' , payload: id
        })
    }, [])

    




    return (
        <div>
            <h1>Shifts For Week {shifts[0]?.start_week}</h1>
            <section className="employeeList">

                <table>
                    <thead>
                        <tr>
                            <th scope='col'>First Name</th>
                            <th scope='col'>Day</th>
                            <th scope='col'>Start Time</th>
                            <th scope='col'>End Time</th>
                            <th scope='col'>Edit Shift</th>
                            <th scope='col'>Delete Shift</th>
                        </tr>
                    </thead>
                    <tbody>

                    {shifts.map(shift => {
        return (
          <ViewWeekScheduleDetail key={shift.id} shift={shift} id={id}/>
        )
      //   return(<tr key={employee.id}>
      //    <td>{employee.first_name}</td>
      //    <td>{employee.last_name}</td>
        //  <td><button onClick={(event) => handleEditEmployee(event.target.value)} value={employee}>Edit Employee</button></td>
        //  <td><button onClick={(event) => handleDeleteEmployee(event.target.value)} value={employee.id}>Delete Employee</button></td>
      //  </tr>
       
    })}
                       

                    </tbody>
                </table>
            </section>

            {/* <button type='button' onClick={() => { history.push('addemployee') }}>Add Another Employee</button>  <button type='button' onClick={() => { history.push('createschedule') }}>Accept</button> */}
        </div>
    )

}
export default ViewWeekSchedule