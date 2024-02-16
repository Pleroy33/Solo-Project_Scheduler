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

    console.log('id:', id)
    useEffect(() => {

        dispatch({

            type: 'FETCH_SHIFTS', payload: id
        })
    }, [])






    return (
        <div>
            <h1>Shifts For Week {shifts[0]?.start_week}</h1>
            <section className="shiftList">

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
                                <ViewWeekScheduleDetail key={shift.id} shift={shift} id={id} />
                            )

                        })}


                    </tbody>
                    <div>
                    <button type='button' onClick={() => { history.push(`/chooseday/02-11-2024/02-17-2024/`) }}>Back to Select Day</button>
                    <button type='button' onClick={() => { history.push('/createschedule') }}>Return to create schedule</button>

                    </div>
                </table>
            </section>

        </div>
    )

}
export default ViewWeekSchedule