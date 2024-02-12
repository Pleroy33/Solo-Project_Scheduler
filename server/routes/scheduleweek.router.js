const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */

router.get('/', (req, res) => {
  // GET route code here
  console.log('in schedule get route')
  console.log('isAuthenicated', req.isAuthenticated)
  console.log('user,', req.user)
  if (req.isAuthenticated()) {
      const query = `
  select * from "weeks"
  order by "start_week"
  `

      pool.query(query)
          .then(result => {
              res.send(result.rows);
          })
          .catch(err => {
              console.log('Error getting weeks', err)
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

  const newWeek = req.body; //settting req.body to an alias 
  const user = req.user
  if (req.isAuthenticated()) {
      const sqlText = `
      INSERT INTO "weeks" 
      ("start_week", "user_id")
      VALUES ($1, $2);
      `;
      const queryParams = [
          newWeek.start_week,
          user.id
      ];
      pool
          .query(sqlText, queryParams)
          .then(() => {
              res.status(201).send()
          })
          .catch((err) => {
              console.log('error in server schedule weeks POST route', err)
              res.sendStatus(500);
          })
  }
  else {
      res.sendStatus(403)
  }
})





module.exports = router;