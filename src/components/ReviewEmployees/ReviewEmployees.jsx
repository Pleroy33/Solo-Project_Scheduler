import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ReviewEmployees() {
    console.log("inside reviewEmployees")
    const dispatch =useDispatch();
    const history = useHistory()
    const employees = useSelector(store => store.employees)
    console.log('full store', employees)

    useEffect(()=> {
        dispatch({
            type:'FETCH_EMPLOYEES'})
    },[])

    // const handleAddAnotherClick= () => {
    //     history.push('/addemployee')
    // }
    return (
    <>
    <h1>Employee List</h1>
    <section className="employeeList">

    <table>
        <thead>
  <tr>
    <td>First Name</td>
    <td>Last Name</td>
    <td>Edit Employee</td>
    <td>Delete Employee</td>
  </tr>
  </thead>
  <tbody>
    {employees.map(employee => {
        
        return(<tr key={employee.id}>
         <td>{employee.first_name}</td>
         <td>{employee.last_name}</td>
         <td>{employee.notes}</td>
       </tr>
       );
    })}
  
  
  </tbody>
</table>
</section>

<button type ='button' onClick={()=>{history.push('addemployee')}}>Add Another Employee</button>  <button type ='button'onClick={()=>{history.push('createschedule')}}>Accept</button>
    </>
    )

}
export default ReviewEmployees