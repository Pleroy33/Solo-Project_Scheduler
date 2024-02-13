import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ScheduleDay(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const history = useHistory();
  // const [heading, setHeading] = useState('Functional Component');
  const [input, setInput] = useState({first_name: '', start_time: '', end_time: ''})
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // dispatch({ type: "POST_SHIFT", payload: input})
    // setInput({first_name: '', start_time: '', end_time: ''})
    history.push('/viewweekschedule/:id')
}

  return (
    <>
    <div>
      <h1>Day of Week</h1>
     </div>
     <div className='Add-shift'>
               <header className='Add-shift-header'>
                <h1>Add Employee</h1>
               </header>
            <div className='Shift-form'>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='First Name' value={input.first_name} onChange={(event)=> setInput({...input, first_name: event.target.value})} />
                    <input type="text" placeholder='Start Shift' value={input.start_shift} onChange={(event) => setInput({...input, start_shift: event.target.value})} />
                    <input type="text" placeholder='End Shift' value={input.end_shift} onChange={(event) => setInput({...input, end_shift: event.target.value})}/>

                    <button type ='submit'>Accept Shift</button>
                </form>
            </div>
            <div>
              <h4>Employee Notes</h4>
            </div>
            <div>
            <button type ='button' onClick={()=>{history.push('chooseday')}}>Back to Select Day</button> 
            </div>
            </div>
</>
  );

}

export default ScheduleDay;
