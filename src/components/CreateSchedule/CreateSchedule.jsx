import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory,useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { DateTime } from 'luxon';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function CreateSchedule() {
  const moment = DateTime.now()
  const yearNumber = moment.year
  const weekNumber = moment.weekNumber
  const dt = DateTime.fromObject({
    weekYear: yearNumber,
    weekNumber: weekNumber
  });

  const dateFromStr = dt.startOf('week');
  console.log(dateFromStr); // last Monday at 00:00:00
  const dateToStr = dt.endOf('week');
  console.log(dateToStr.toISO());

  console.log(dateFromStr)







  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);

  



  

  const history = useHistory();



  return (
    <>
      <div>
        <h1>Scheduling</h1>
        <label htmlFor="weeks">Choose week:</label>

        <select name="week" id="week">
          <option value={(dateFromStr.toFormat('MM-dd-yyyy'))}>{(dateFromStr.toFormat('MM-dd-yyyy'))} to {(dateToStr.toFormat('MM-dd-yyyy'))}</option>
          {/* <option value= {(weekNumber)+1}>{((dateFromStr.weekNumber)+1).toFormat('MM-dd-yyyy')}</option> */}

        </select>
        <p>{dateFromStr.weekNumber}</p>
        
      </div>
      <button type='button' onClick={() => { history.push(`weekschedulereview/${(dateFromStr.toFormat('MM-dd-yyyy'))}`) }}>View Schedule</button>

      <button type='button' onClick={() => { history.push(`chooseday/${(dateFromStr.toFormat('MM-dd-yyyy'))}`) }}>Accept</button>

    </>
  );

}

export default CreateSchedule;