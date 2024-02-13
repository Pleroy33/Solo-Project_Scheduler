import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import axios from "axios"



function EditShift() {
    console.log('inside Edit Shift');
    const history = useHistory();
    const dispatch = useDispatch();



    const editShift = useSelector((store) => store.editShift)
    console.log('edit Shift:', editShift)


    const handleEditFirst = (event) => {
        event.preventDefault();
        console.log('editShift handleEditFirst', event.target.value);
        dispatch({

            type: 'EDIT_SHIFT',
            payload: { property: 'first_name', value: event.target.value }
        })
    }

    const handleEditLast = (event) => {
        event.preventDefault();
        console.log('editShift handleEditLast', event.target.value);
        dispatch({
            type: 'EDIT_SHIFT',
            payload: { property: 'last_name', value: event.target.value }
        })
    }


    const handleEditDay = (event) => {
        event.preventDefault();
        console.log('editShift handleEditDay', event.target.value);
        dispatch({
            type: 'EDIT_SHIFT',
            payload: { property: 'day', value: event.target.value }
        })
    }

    const handleEditStart = (event) => {
        event.preventDefault();
        console.log('editShift handleEditStart', event.target.value);
        dispatch({
            type: 'EDIT_SHIFT',
            payload: { property: 'start_time', value: event.target.value }
        })
    }

    const handleEditEnd = (event)=> {
        event.preventDefault();
        console.log('editShift handleEditDay', event.target.value);
            dispatch({
                type: 'EDIT_SHIFT',
                payload: { property: 'end_time', value: event.target.value }
            })
        }



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('inside handleSubmit for EditShift')

        axios.put(`api/shift/${editShift.id}`, editShift)
            .then(response => {
                console.log("Success Sending Shift Update")
                dispatch({ type: 'EDIT_CLEAR' })
                history.push('/reviewShifts')
            }).catch(error => {
                console.log("Error sending Shift update:", error)
            })

    }




    return (


        <div className='Edit-employee'>
            <header className='add-employee-header'>
                <h1>Edit Employee</h1>
            </header>


            <div className='Shift-form'>
                <form onSubmit={handleSubmit}>
                    <input placeholder='First Name' value={editShift.first_name} onChange={(event) => handleEditFirst(event)} />
                    <input placeholder='Last Name' value={editShift.last_name} onChange={(event) => handleEditLast(event)} />
                    <input placeholder='Day' value={editShift.day} onChange={(event) => handleEditDay(event)} />
                    <input placeholder='Start Time' value={editShift.start_time} onChange={(event) => handleEditStart(event)} />
                    <input placeholder='End Time' value={editShift.end_time} onChange={(event) => handleEditEnd(event)} />

                    <button type='submit'>Accept</button>
                </form>
            </div>

        </div>
    )
}

export default EditShift


