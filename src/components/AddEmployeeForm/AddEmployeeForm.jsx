import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'



function AddEmployee() {
    console.log('in AddEmployee component')

    const history = useHistory();
    const dispatch = useDispatch();

    const [input, setInput] = useState({ first_name: '', last_name: '', notes: '' })
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [notes, setNotes] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        // const newEmployee ={ firstName, lastName, notes}
        // console.log('submitting newEmployee,', newEmployee)
        dispatch({ type: "POST_EMPLOYEE", payload: input })
        setInput({ first_name: '', last_name: '', notes: '' })
        // setLastName('');
        // setNotes('')
        history.push('/reviewemployees')
    }
    return (
        <>
            <div className='formPanel'>
                <header className='Add-employee-header'>
                    <h1>Add Employee</h1>
                </header>
                <div className='formPanel'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='First Name' value={input.first_name} onChange={(event) => setInput({ ...input, first_name: event.target.value })} />
                        <input type="text" placeholder='Last Name' value={input.last_name} onChange={(event) => setInput({ ...input, last_name: event.target.value })} />
                        <input type="text" placeholder='Employee Notes' value={input.notes} onChange={(event) => setInput({ ...input, notes: event.target.value })} />

                        <button type='submit'>Accept</button>
                    </form>
                </div>

            </div>
        </>
    )
}
export default AddEmployee