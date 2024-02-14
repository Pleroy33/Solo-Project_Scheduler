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

function* getOneWeek(action) {
    console.log('in fetchOneEmployees', action)
    try {
        const week = yield axios.get(`api/scheduleweek/${action.payload}`)
        yield put({ type: "SET_ONE_WEEK", payload: week.data })
    } catch (error) {
        console.log('getOneEmployee Error,',error)
    }
}

function* postStartWeek(action) {
    console.log('in postStartWeek', action.payload)
    try { 
        const start = yield axios.post('api/scheduleweek', action.payload)
        yield put ({ type: 'CREATE_WEEK', payload: start})
    } catch (error) {
        console.log('postStartWeek error', error)
    }

}
function* weeksSaga() {
    yield takeLatest('FETCH_WEEKS', fetchAllWeeks)
    yield takeLatest('FETCH_ONE_WEEK', getOneWeek)
    yield takeLatest('POST_WEEK', postStartWeek )
    
}

export default weeksSaga