import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import ViewWeekScheduleDetail from "../ViewWeekScheduleDetail/ViewWeekScheduleDetail";
import { DateTime } from 'luxon';

function ViewWeekSchedule() {
    const { id } = useParams()
    console.log("inside ViewWeekSchedule")
    const dispatch = useDispatch();
    const history = useHistory()
    const shifts = useSelector((store) => store.shifts)
    const item = shifts[0]?.start_week
    console.log('shifts:', shifts)

    console.log('id:', id)
    useEffect(() => {

        dispatch({

            type: 'FETCH_SHIFTS', payload: id
        })
    }, [])



    


    return (
        <div>
            <h1>Shifts For Week {DateTime.fromISO(item).toLocaleString()}</h1>
            <section className="formPanel">

                <table className="table">
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
                   
                    </table>
                    <button className='btn' type='button' onClick={() => { history.push(`/chooseday/03-03-2024/03-09-2024/`) }}>Back to Select Day</button>
                    <button className='btn' type='button' onClick={() => { history.push('/createschedule') }}>Return to create schedule</button>
                                
                   
                    
            </section>

        </div>
    )

}
export default ViewWeekSchedule