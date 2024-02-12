const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;

// Middleware Includes
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route Includes
const userRouter = require('./routes/user.router');
const employeeRouter = require('./routes/employee.router')
const shiftRouter = require('./routes/scheduleshift.router')
const weekRouter = require('./routes/scheduleweek.router')

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', userRouter)
app.use('/api/employee', employeeRouter);
app.use('/api/scheduleshift', shiftRouter)
app.use('/api/scheduleweek', weekRouter)

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
