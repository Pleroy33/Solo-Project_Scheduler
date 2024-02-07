import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchEmployees(action){
    console.log('in fetchEmployees,', action)
    try{ 
        const employees = yield axios.get('api/employee')
        yield put({type:'SET_EMPLOYEES', payload: employees.data})
    }catch (error)  {
        console.log('fetch emeployees,', error)
    }
}

function* employeesSaga() {
    yield takeLatest ('FETCH_EMPLOYEES', fetchEmployees)
}

export default employeesSaga