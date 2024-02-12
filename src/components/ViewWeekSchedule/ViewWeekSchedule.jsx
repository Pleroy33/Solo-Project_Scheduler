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






    return (
        <div>
            <h1>Shifts For Week {week[0].start_week}</h1>
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
                    {/* <tbody>
                        {week.map(employee => {
        return (
          <EmployeeDetail key={employee.id} employee={employee} />
        )
      
       
    })}


                    </tbody> */}
                </table>
            </section>

            {/* <button type='button' onClick={() => { history.push('addemployee') }}>Add Another Employee</button>  <button type='button' onClick={() => { history.push('createschedule') }}>Accept</button> */}
        </div>
    )

}
export default ViewWeekSchedule