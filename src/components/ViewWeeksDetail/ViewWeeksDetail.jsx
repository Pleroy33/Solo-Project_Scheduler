import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


function ViewWeekDetail({week}) {
    const dispatch = useDispatch();
    const history = useHistory();
    // useEffect(() => {
    //     dispatch({
    //         // type: 'FETCH_ONE_WEEK', payload: id,
    //         type: 'FETCH_SHIFTS' , payload: id
    //     })
    // }, [])
    
const handleViewWeekOnClick = () => {
    console.log('inside viewweek click', week.id)
    history.push(`/viewweekschedule/${week.id}`)

}
    console.log('Weekof:', week.start_week)

    

return (
    
    <tr key={week.id}>
        <td>{week.start_week}</td>
        <td><button onClick={handleViewWeekOnClick}>View Week</button></td>
    </tr>
)
}
export default ViewWeekDetail