import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { DateTime } from 'luxon';
import { useDispatch } from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function CreateSchedule() {
  const dispatch = useDispatch();
  const history = useHistory();


  const moment = DateTime.local()
  console.log('moment:', moment)
  const yearNumber = moment.localWeekYear
  const weekDay = moment.localWeekday
  console.log('local weekday', weekDay)
  console.log('yearNumber:', yearNumber)
  const weekNumber = moment.localWeekNumber
  console.log('weekNumber:', weekNumber)
  const dt = DateTime.fromObject({
    weekYear: yearNumber,
    weekNumber: weekNumber
  });

  const dt2 = DateTime.fromObject({
    weekYear: yearNumber,
    weekNumber: (weekNumber) + 1
  });


  const dt3 = DateTime.fromObject({
    weekYear: yearNumber,
    weekNumber: (weekNumber) + 2
  });

  const dt4 = DateTime.fromObject({
    weekYear: yearNumber,
    weekNumber: (weekNumber) + 3
  });

  const dt5 = DateTime.fromObject({
    weekYear: yearNumber,
    weekNumber: (weekNumber) + 4
  });
  const dateFromStr = dt.startOf('week', { useLocaleWeeks: true });
  const dateToStr = dt.endOf('week', { useLocaleWeeks: true });
  const dateFromStr2 = dt2.startOf('week', { useLocaleWeeks: true });
  const dateToStr2 = dt2.endOf('week', { useLocaleWeeks: true });
  const dateFromStr3 = dt3.startOf('week', { useLocaleWeeks: true });
  const dateToStr3 = dt3.endOf('week', { useLocaleWeeks: true });
  const dateFromStr4 = dt4.startOf('week', { useLocaleWeeks: true });
  const dateToStr4 = dt4.endOf('week', { useLocaleWeeks: true });
  const dateFromStr5 = dt5.startOf('week', { useLocaleWeeks: true });
  const dateToStr5 = dt5.endOf('week', { useLocaleWeeks: true });
  console.log(dateFromStr.toISODate())

  const postWeek = () => {
    console.log(dateFromStr.toSQLDate())

    dispatch({ type: 'POST_WEEK', payload: { start_week: dateFromStr3.toSQLDate() } })
    history.push(`chooseday/${(dateFromStr3.toFormat('MM-dd-yyyy'))}/${(dateToStr3.toFormat('MM-dd-yyyy'))}/`)
  }





  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'


  return (
    <>
      <div>
        <h1>Scheduling</h1>
        <div className='formPanel'>
          <label htmlFor="weeks">Choose week:</label>

          <select name="week" id="week">
            <option value={(dateFromStr.toFormat('MM-dd-yyyy'))}>{(dateFromStr.toFormat('MM-dd-yyyy'))} to {(dateToStr.toFormat('MM-dd-yyyy'))}</option>
            <option value={(dateFromStr2.toFormat('MM-dd-yyyy'))}>{(dateFromStr2.toFormat('MM-dd-yyyy'))} to {(dateToStr2.toFormat('MM-dd-yyyy'))}</option>
            <option value={(dateFromStr3.toFormat('MM-dd-yyyy'))}>{(dateFromStr3.toFormat('MM-dd-yyyy'))} to {(dateToStr3.toFormat('MM-dd-yyyy'))}</option>
            <option value={(dateFromStr4.toFormat('MM-dd-yyyy'))}>{(dateFromStr4.toFormat('MM-dd-yyyy'))} to {(dateToStr4.toFormat('MM-dd-yyyy'))}</option>
            <option value={(dateFromStr5.toFormat('MM-dd-yyyy'))}>{(dateFromStr5.toFormat('MM-dd-yyyy'))} to {(dateToStr5.toFormat('MM-dd-yyyy'))}</option>


          </select>

        
      {/* <button type='button' onClick={() => { history.push(`weekschedulereview/${(dateFromStr.toFormat('MM-dd-yyyy'))}`) }}>View Schedule</button> */}
      <br/><button type='button' className='btn' onClick={() => { history.push('/viewweeks/') }}>Weeks Scheduled</button>

      <button className='btn' type='button' onClick={postWeek}>Go to Schedule Day</button>
      </div>
      </div>
    </>
  );

}

export default CreateSchedule;