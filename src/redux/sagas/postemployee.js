// import axios from 'axios';
// import { put, takeLatest } from 'redux-saga/effects';

// // add_employee Saga: will be fired on "ADD_EMPLOYEE" actions
// function* addEmployee(action) {
//     try { 
//         //send the employee data with a POST request
//         const postEmployee = yield axios.post('api/employee', action.payload)
//         //set the value of the addEmployee reducer
//         yield put({type:"FETCH_EMPLOYEES"})

        
//     }catch(error) {
//         console.log('addEmployee error', error)
//     }
// }

// function* employeeSaga() {
//     yield takeLatest('POST_EMPLOYEE', addEmployee);
// }

// export default employeeSaga;
