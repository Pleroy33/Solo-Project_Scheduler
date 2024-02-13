import React, {useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ChooseDay() {
  
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  console.log('on ChooseDay Schedule');
  const history = useHistory();
  const { date, date2 } = useParams();
  console.log(date, date2)
  return (
    <>
      <div>
        <h1>Week of {date} to {date2}</h1>

        <h2>Select Day to Schedule</h2>


      </div>

      <div>
      <button type='button' onClick={() => { history.push('/scheduledayform/1') }}>Sunday</button>
      <button type='button' onClick={() => { history.push('/scheduledayform/2') }}>Monday</button>
      <button type='button' onClick={() => { history.push('/scheduledayform/3') }}>Tuesday</button>
      <button type='button' onClick={() => { history.push('/scheduledayform/4') }}>Wednesday</button>
      <button type='button' onClick={() => { history.push('/scheduledayform/5') }}>Thursday</button>
      <button type='button' onClick={() => { history.push('/scheduledayform/6') }}>Friday</button>
      <button type='button' onClick={() => { history.push('/scheduledayform/7') }}>Saturday</button>
      </div>

      <div>
      <button type='button' onClick={() => { history.push('/createschedule') }}>Return to create schedule</button>

      </div>

    </>
  );

}

export default ChooseDay;