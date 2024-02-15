import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addShift(action) {
    try {
        //send the shift data with a POST request
        const postShift = yield axios.post('api/scheduleshift', action.payload)
        //set the value of the addShift reducer
        yield put({ type: "FETCH_SHIFTS" })


    } catch (error) {
        console.log('addShift error', error)
    }
}

function* getOneWeekShifts(action) {
    console.log('in getOneWeekShifts', action)
    try {
        const shifts  = yield axios.get(`api/scheduleshift/${action.payload}`)
        yield put({ type: "SET_SHIFTS" ,payload: shifts.data })
    } catch (error) {
        console.log('getOneEmployee Error,',error)
    }
}

function* deleteShift(action) {
    console.log('in deleteEmployees', action)
    try {
        const removeShift = yield axios.delete(`api/scheduleshift/${action.payload}`)
        yield put({ type: "FETCH_SHIFTS", payload:action.id})
    } catch (error) {
        console.log('deleteEmployee Error,',error)
    }
}
function* shiftsSaga() {
    yield takeLatest('POST_SHIFT', addShift)
    yield takeLatest('FETCH_SHIFTS', getOneWeekShifts)
    yield takeLatest('DELETE_SHIFT', deleteShift)
    
}

export default shiftsSaga
