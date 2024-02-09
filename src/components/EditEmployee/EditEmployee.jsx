import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import axios from "axios"



function EditEmployee({employee}) {
    console.log('inside Edit Employee');
    const history = useHistory();
    const dispatch = useDispatch();

    // const EditEmployee = useSelector((store) => store.employees)
    console.log('edit employee:', employee)
    return (
        
        <div className='Edit-employee'>
               <header className='add-employee-header'>
                <h1>Edit Employee</h1>
               </header>
        
            {/* <div className='Employee-form'>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='First Name' value={employee} onChange={(event)=> setInput({...input, first_name: event.target.value})} />
                    <input type="text" placeholder='Last Name' value={} onChange={(event) => setInput({...input, last_name: event.target.value})} />
                    <input type="text" placeholder='Employee Notes' value={input.notes} onChange={(event) => setInput({...input, notes: event.target.value})}/>

                    <button type ='submit'>Accept</button>
                </form>
            </div> */}
          </div>   
    )
    }

export default EditEmployee
