import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ToggleButton } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ScheduleDay() {

  const weekId = useSelector((store) => store.createWeek.id);
  const employees = useSelector((store) => store.employees)
  const history = useHistory();
  const dispatch = useDispatch();
  const { dayId,dayName } = useParams();

  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'


  console.log('employees:', employees)

  console.log('dayId as a number', Number(dayId))

  console.log('id', dayId)
  // const [heading, setHeading] = useState('Functional Component');
  const [input, setInput] = useState({ week_id: weekId, day_id: Number(dayId), employee_id: '', start_time: '', end_time: '' })
  const [selectCatagories, setSelectCatagories] = useState('all')
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('input', input)
  
  

    dispatch({ type: 'POST_SHIFT', payload: input })
    setInput({ start_time: '', end_time: '' })
    history.push(`/viewweekschedule/${weekId}`)
  }
  const setEmployee = (event) =>
  ({ ...input, employee_id: (event.target.value)})
  const handleCatagoryChange = (event, newValue) => {
    setSelectCatagories(newValue)
console.log(input)}

  return (
    <>
      <div>
        <h1>{dayName}</h1>
      </div>
      <div className='Add-shift'>
        <header className='Add-shift-header'>
          <h1>Add Employee</h1>
        </header>
        <div className='formPanel'>
          <form onSubmit={handleSubmit}>
          <ToggleButtonGroup
          orientation='horizontal'
      value= {selectCatagories}
      exclusive
      onChange={(event) => setInput({ ...input, employee_id: (event.target.value) })}
      aria-label="choose-employee">
      {employees.map((employee) => (
        <ToggleButton 
        key = {employee.id}
        value ={employee.id}
        
        >{employee.first_name} {employee.last_name}
        
        </ToggleButton>
      ))}
</ToggleButtonGroup>

{/* <DemoContainer components={['TimePicker']}>
        <TimePicker label="basic time picker" />
      </DemoContainer> */}




            {/* <label htmlFor={input.first_name}>Name</label><br />
            <input type="text" name={input.first_name} placeholder='First Name' value={input.first_name} onChange={(event) => setInput({ ...input, employee_id: Number(event.target.value) })} /><br /> */}
            <br/><label htmlFor={input.start_time}>Start Time</label>
            <input type="time" name={input.start_time} placeholder='Start Shift' value={input.start_shift} onChange={(event) => setInput({ ...input, start_time: event.target.value })} />
            <label htmlFor={input.end_time}>End Time</label>
            <input type="time" name={input.end_time} placeholder='End Shift' value={input.end_shift} onChange={(event) => setInput({ ...input, end_time: event.target.value })} /><br />

            <button className='btn3' type='button' onClick={() => { history.push(`/chooseday/02-11-2024/02-17-2024/`) }}>Back to Select Day</button>      
 <button className='btn2' type='submit'>Accept Shift</button>
          </form>
        
        <div>
          <h2>Employee Notes</h2>

          <table className='table'>
            <tbody>
              {employees.map(employee => {



                return (<tr key={employee.id}>
                  <td>{employee.first_name}</td>
                  <td>{employee.last_name}</td>
                  <td>{employee.notes}</td>
                </tr>

                )
              })}
            </tbody>
          </table>
        
        <div>
</div>
        </div>
        </div>
      </div>
    </>
  );

}

export default ScheduleDay;
