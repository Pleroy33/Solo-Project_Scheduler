const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */

router.get('/:id', (req, res) => {
  // GET route code here
  console.log('in schedule get route')
  console.log('isAuthenicated', req.isAuthenticated)
  console.log('user,', req.user)
  if (req.isAuthenticated()) {
    const queryParams = [req.params.id]
      const querytext = `
      SELECT s.id, d.id, w.start_week, d.weekday, e.first_name, start_time, end_time
      FROM "schedules" s
      JOIN "weeks" w ON w.id = s.week_id
      JOIN "days" d ON s.day_id = d.id
      JOIN "employees" e ON s.employee_id = e.id
      WHERE s.week_id = $1
      ORDER BY d.id ASC;
  `

      pool.query(querytext,queryParams)
          .then(result => {
              res.send(result.rows);
          })
          .catch(err => {
              console.log('Error getting shifts', err)
              res.sendStatus(500)
          })
  } else {
      res.sendStatus(403)
  }
});


router.post('/', (req, res) => {
  console.log('in employee post route');//logging to see route used
  console.log('isAuthenicated', req.isAuthenticated);//logging to see that user is verified
  console.log('user,', req.user);//logging to see user 

  const newShift = req.body; //settting req.body to an alias 
  const user = req.user
  if (req.isAuthenticated()) {
      const sqlText = `
      INSERT INTO "schedules" 
      ("week_id", "day_id", "employee_id", "start_time", "end_time", "user_id")
      VALUES ($1, $2, $3, $4, $5, $6);
      `;
      const queryParams = [
            newShift.week_id,
            newShift.day_id,
            newShift.employee_id,
            newShift.start_time,
            newShift.end_time,
            user.id
      ];
      pool
          .query(sqlText, queryParams)
          .then(() => {
              res.status(201).send()
          })
          .catch((err) => {
              console.log('error in server schedule shift POST route', err)
              res.sendStatus(500);
          })
  }
  else {
      res.sendStatus(403)
  }
})

router.delete('/:id', (req, res) => {
    console.log('in shift DELETE route')
    if (req.isAuthenticated()) {
        const queryText = `
        DELETE FROM "schedules" 
        WHERE "id" = $1;`
        const queryParams = [req.params.id]

        pool
            .query(queryText, queryParams)
            .then(() => {
                res.sendStatus(201);
            })
            .catch(err => {
                console.log('schedule shift server delete didnt work', err);
                res.sendStatus(500)
            })
    } else {
        sendstatus(403)
    }
})

module.exports = router