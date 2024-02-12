import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ViewWeeks() {
    console.log("inside ViewWeeks Component")
    const dispatch =useDispatch();
    const history = useHistory()
    const weeks = useSelector(store => store.weeks)
    console.log('full store', weeks)

    useEffect(()=> {
        dispatch({
            type:'FETCH_WEEKS'})
    },[])

    


    return (
    <div>
    <h1>Choose Week to view</h1>
    <section className="weekScheduleList">

    <table>
        <thead>
  <tr>
    <th scope='col'>Week of:</th>
    <th scope='col'>View Week</th>
    
  </tr>
  </thead>
  <tbody>
    {weeks.map(week => {
        return (
          <EmployeeDetail key={employee.id} employee={employee} />
        )
      //   return(<tr key={employee.id}>
      //    <td>{employee.first_name}</td>
      //    <td>{employee.last_name}</td>
      //    <td><button onClick={(event) => handleEditEmployee(event.target.value)} value={employee}>Edit Employee</button></td>
      //    <td><button onClick={(event) => handleDeleteEmployee(event.target.value)} value={employee.id}>Delete Employee</button></td>
      //  </tr>
       
    })}
  
  
  </tbody>
</table>
</section>

<button type ='button' onClick={()=>{history.push('addemployee')}}>Add Another Employee</button>  <button type ='button'onClick={()=>{history.push('createschedule')}}>Accept</button>
</div>
    )

}
export default ReviewEmployees