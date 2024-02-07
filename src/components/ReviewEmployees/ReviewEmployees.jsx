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
    const handleEditEmployee = (id) => {
        console.log('inisde handleEditEmployee')
    }
   const handleDeleteEmployee =(id) => { 
    console.log('inside handleDeleteEmplyee')
    dispatch({type: 'DELETE_EMPLOYEE', payload: id})
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
    <th scope='col'>Edit Employee</th>
    <th scope='col'>Delete Employee</th>
  </tr>
  </thead>
  <tbody>
    {employees.map(employee => {
        
        return(<tr key={employee.id}>
         <td>{employee.first_name}</td>
         <td>{employee.last_name}</td>
         <td><button onClick={(event) => handleEditEmployee(event.target.value)} value={employee.id}>Edit Employee</button></td>
         <td><button onClick={(event) => handleDeleteEmployee(event.target.value)} value={employee.id}>Delete Employee</button></td>
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