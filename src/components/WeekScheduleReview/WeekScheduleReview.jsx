import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function WeekScheduleReview() {
    console.log("inside ")
    const dispatch =useDispatch();
    const history = useHistory()
    const shifts = useSelector(store => store)
    console.log('full store', shifts)

    // useEffect(()=> {
    //     dispatch({
    //         type:'FETCH_EMPLOYEES'})
    // },[])
    const handleEditShift = (id) => {
        console.log('inisde handleEditEmployee')
        // dispatch({ type:  'GET_ONE_EMPLOYEE', payload: id})
    }
   const handleDeleteShift =(id) => { 
    console.log('inside handleDeleteEmplyee')
    // dispatch({type: 'DELETE_EMPLOYEE', payload: id})
   }
    return (
    <>
    <h1>Employee List</h1>
    <section className="employeeList">

    <table>
        <thead>
  <tr>
    <th scope='col'>First Name</th>
    <th scope='col'>Last Name</th>
    <th scope='col'>Day</th>
    <th scope='col'>Start Time</th>
    <th scope='col'>End Time</th>
    <th scope='col'>Edit Employee</th>
    <th scope='col'>Delete Employee</th>
  </tr>
  </thead>
  <tbody>
    {/* {shifts.map(shift => {
        
        return(<tr key={shift.id}>
         <td>{shift.first_name}</td>
         <td>{shift.last_name}</td>
         <td><button onClick={(event) => handleEditShift(event.target.value)} value={shift.id}>Edit Shift</button></td>
         <td><button onClick={(event) => handleDeleteShift(event.target.value)} value={shift.id}>Delete Shift</button></td>
       </tr>
       );
    })} */}
  
  
  </tbody>
</table>
</section>

<button type ='button' onClick={()=>{history.push('createschedule')}}>Add Another Shift</button>  <button type ='button'onClick={()=>{history.push('/user')}}>Return Home</button>
    </>
    )

}
export default WeekScheduleReview