import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// add_employee Saga: will be fired on "ADD_EMPLOYEE" actions
// function* addEmployee() {
//     try { 
//         const 
//     }
// }

function* employeeSaga() {
    yield takeLatest('ADD_EMPLOYEE', addEmployee);
}

export default employeeSaga;
