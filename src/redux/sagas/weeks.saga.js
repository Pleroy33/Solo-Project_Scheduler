import axios from "axios";
import { takeLatest, put, take } from "redux-saga/effects";

function* fetchAllWeeks(action) {
    console.log('in fetchAllWeeks,', action)
    try {
        const weeks = yield axios.get('api/scheduleweek')
        yield put({ type: 'SET_WEEKS', payload: employees.data })
    } catch (error) {
        console.log('fetch weeks,', error)
    }
}
export default fetchAllWeeks