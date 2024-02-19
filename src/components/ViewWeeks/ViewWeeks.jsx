import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ViewWeeksDetail from "../ViewWeeksDetail/ViewWeeksDetail";
import{ DateTime } from 'luxon'

function ViewWeeks() {
    console.log("inside ViewWeeks Component")
    const dispatch = useDispatch();
    const history = useHistory()
    const weeks = useSelector(store => store.setWeeks)
    const item =  weeks[0]?.start_week
    console.log('store.weeks', item)
    console.log('week format', DateTime.fromISO(item).toLocaleString())

    useEffect(() => {
        dispatch({
            type: 'FETCH_WEEKS'
        })
    }, [])

        

    return (
        <div>
            <h1>Choose Week to view</h1>
            <section className="formPanel">

                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col'>Week of:</th>
                            <th scope='col'>View Week</th>

                        </tr>
                    </thead>
                    <tbody>
                        {weeks.map(week => {
                            return (
                                <ViewWeeksDetail key={week.id} week={week} />
                            )
                        })}


                    </tbody>
                </table>
                <button className='btn' type='button' onClick={() => { history.push('/createschedule') }}>Return to create schedule</button>

            </section>

            {/* <button type ='button' onClick={()=>{history.push('addemployee')}}>Add Another Employee</button>  <button type ='button'onClick={()=>{history.push('createschedule')}}>Accept</button> */}
        </div>
    )

}
export default ViewWeeks