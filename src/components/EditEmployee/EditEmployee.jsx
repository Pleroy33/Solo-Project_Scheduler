import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import axios from "axios"



function EditEmployee() {
    console.log('inside Edit Employee');
    const history = useHistory();
    const dispatch = useDispatch();


   
    const editEmployee = useSelector((store) => store.EditEmployee)
    console.log('edit employee:', editEmployee)


    const handleEditChange = (event)=> {
    event.preventDefault();
    console.log('editEmployee handlechange', event.target.value);
        dispatch({
            type: 'EDIT_EMPLOYEE',
            payload: { property: 'first_name', value: event.target.value }
        })
    }

    const handleSubmit = (event) => { 
        event.preventDefault();
        console.log('inside handleSubmit')
    }
    return (

        <div className='Edit-employee'>
            <header className='add-employee-header'>
                <h1>Edit Employee</h1>
            </header>

            <div className='Employee-form'>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='First Name' value= {editEmployee} onChange={(event) => handleEditChange(event)} />
                    {/* <input type="text" placeholder='Last Name' value={employee.last_name } onChange={(event) => setInput({ ...input, last_name: event.target.value })} /> */}
                    {/* <input type="text" placeholder='Employee Notes' value={input.notes} onChange={(event) => setInput({ ...input, notes: event.target.value })} /> */}

                    <button type='submit'>Accept</button>
                </form>
            </div>
        </div>
    )
}

export default EditEmployee
