import axios from "axios";
import { takeLatest, put, take } from "redux-saga/effects";

function* fetchAllWeeks(action) {
    console.log('in fetchAllWeeks,', action)
    try {
        const weeks = yield axios.get('api/scheduleweek')
        yield put({ type: 'SET_WEEKS', payload: weeks.data })
    } catch (error) {
        console.log('fetch weeks,', error)
    }
}
function* weeksSaga() {
    yield takeLatest('FETCH_WEEKS', fetchAllWeeks)
    
}

export default weeksSaga