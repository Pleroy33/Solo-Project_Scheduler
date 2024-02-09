import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import axios from "axios"



function EditEmployee() {
    console.log('inside Edit Employee');
    const history = useHistory();
    const dispatch = useDispatch();


   
    const editEmployee = useSelector((store) => store.editEmployee)
    console.log('edit employee:', editEmployee)


    const handleEditFirst = (event)=> {
    event.preventDefault();
    console.log('editEmployee handleEditFirst', event.target.value);
        dispatch({
            type: 'EDIT_EMPLOYEE',
            payload: { property: 'first_name', value: event.target.value }
        })
    }

    const handleEditLast = (event)=> {
        event.preventDefault();
        console.log('editEmployee handleEditLast', event.target.value);
            dispatch({
                type: 'EDIT_EMPLOYEE',
                payload: { property: 'last_name', value: event.target.value }
            })
        }
    

        const handleEditNotes = (event)=> {
            event.preventDefault();
            console.log('editEmployee handleEditNotes', event.target.value);
                dispatch({
                    type: 'EDIT_EMPLOYEE',
                    payload: { property: 'notes', value: event.target.value }
                })
            }
          
    
    const handleSubmit = (event) => { 
        event.preventDefault();
        console.log('inside handleSubmit for EditEmployee')

        axios.put(`api/employee/${editEmployee.id}`, editEmployee)
        .then(response => {
            console.log("Success Sending Employee Update")
            dispatch({type: 'EDIT_CLEAR'})
        }).catch(error => {
            console.log("Error sending employee update:", error)
        })

    }

    return (

        <div className='Edit-employee'>
            <header className='add-employee-header'>
                <h1>Edit Employee</h1>
            </header>

            <div className='Employee-form'>
                <form onSubmit={handleSubmit}>
                    <input placeholder='First Name' value= {editEmployee.first_name} onChange={(event) => handleEditFirst(event)} />
                    <input  placeholder='Last Name' value={editEmployee.last_name } onChange={(event) => handleEditLast(event)}/>
                    <input  placeholder='Employee Notes' value={editEmployee.notes} onChange={(event) => handleEditNotes(event)} />

                    <button type='submit'>Accept</button>
                </form>
            </div>
        </div>
    )
}

export default EditEmployee
