import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
// import employeeSaga from './postemployee';
import employeesSaga from './employees.saga';
import weeksSaga from './weeks.saga';
import shiftsSaga from './shifts.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    // employeeSaga(),
    employeesSaga(),
    weeksSaga(),
    shiftsSaga()
    
  ]);
}
