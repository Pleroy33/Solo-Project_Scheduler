import axios from "axios";
import { takeLatest, put, take } from "redux-saga/effects";

function* fetchEmployees(action) {
    console.log('in fetchEmployees,', action)
    try {
        const employees = yield axios.get('api/employee')
        yield put({ type: 'SET_EMPLOYEES', payload: employees.data })
    } catch (error) {
        console.log('fetch emeployees,', error)
    }
}

// add_employee Saga: will be fired on "ADD_EMPLOYEE" actions
function* addEmployee(action) {
    try {
        //send the employee data with a POST request
        const postEmployee = yield axios.post('api/employee', action.payload)
        //set the value of the addEmployee reducer
        yield put({ type: "FETCH_EMPLOYEES" })


    } catch (error) {
        console.log('addEmployee error', error)
    }
}

function* deleteEmployee(action) {
    console.log('in deleteEmployees', action)
    try {
        const removeEmployee = yield axios.delete(`api/employee/${action.payload}`)
        yield put({ type: "FETCH_EMPLOYEES" })
    } catch (error) {
        console.log('deleteEmployee Error,',error)
    }
}
function* employeesSaga() {
    yield takeLatest('FETCH_EMPLOYEES', fetchEmployees)
    yield takeLatest('DELETE_EMPLOYEE', deleteEmployee)
    yield takeLatest('POST_EMPLOYEE', addEmployee);
}

export default employeesSaga