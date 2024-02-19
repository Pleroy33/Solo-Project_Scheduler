import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ViewEmployeeDetail from "../ViewEmployeeDetail/ViewEmployeeDetail";

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

    // const handleEditEmployee = (employee) => {
    //     console.log('inisde handleEditEmployee',employee)
    //     history.push('/editemployee')

    // }
  //  const handleDeleteEmployee =(id) => { 
  //   console.log('inside handleDeleteEmplyee')
  //   dispatch({type: 'DELETE_EMPLOYEE', payload: id})
  //  }

//     const handleEditEmployee = (id) => {
//         console.log('inisde handleEditEmployee')
//         dispatch({ type:  'GET_ONE_EMPLOYEE', payload: id})
//     }
//    const handleDeleteEmployee =(id) => { 
//     console.log('inside handleDeleteEmplyee')
//     dispatch({type: 'DELETE_EMPLOYEE', payload: id})
//    }

    return (
    <div>
    <h1>Employee List</h1>
    <section className="formPanel" >

    <table  className ='table'  >
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
        return (
          <ViewEmployeeDetail key={employee.id} employee={employee} />
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

<div className="verticalCenter">
<button className= 'btn' type ='button' onClick={()=>{history.push('addemployee')}}>Add Another Employee</button>  <button className='btn' type ='button'onClick={()=>{history.push('createschedule')}}>Accept</button>
</div>
</section>
</div>
    )

}
export default ReviewEmployees