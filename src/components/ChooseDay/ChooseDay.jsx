import React, {useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { DateTime } from 'luxon';
// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ChooseDay() {
  
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store.createWeek);
  
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch({
        type:'FETCH_EMPLOYEES'})
},[])

  console.log('on ChooseDay Schedule');
  console.log('store', store)
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

      <button type='button' value ='Sunday' onClick={() => { history.push(`/scheduledayform/1/Sunday`) }}>Sunday</button>
      <button type='button' value = 'Monday' onClick={() => { history.push('/scheduledayform/2/Monday') }}>Monday</button>
      <button type='button' value = 'Tuesday' onClick={() => { history.push('/scheduledayform/3/Tuesday') }}>Tuesday</button>
      <button type='button' value ='Wednesday' onClick={() => { history.push('/scheduledayform/4/Wednesday') }}>Wednesday</button>
      <button type='button' value = 'Thursday' onClick={() => { history.push('/scheduledayform/5/Thursday') }}>Thursday</button>
      <button type='button' value = 'Friday' onClick={() => { history.push('/scheduledayform/6/Friday') }}>Friday</button>
      <button type='button' value = 'Saturday' onClick={() => { history.push('/scheduledayform/7/Saturday') }}>Saturday</button>
      </div>

      <div>
      <button type='button' onClick={() => { history.push('/createschedule') }}>Return to create schedule</button>

      </div>

    </>
  );

}

export default ChooseDay;