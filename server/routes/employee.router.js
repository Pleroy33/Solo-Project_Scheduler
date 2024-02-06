const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET route code here
    console.log('in employee get route')
    console.log('isAuthenicated', req.isAuthenticated)
    console.log('user,', req.user)
    if (req.isAuthenticated()) {
        const query = `
    select * from "employees"
    order by "first_name";
    `

        pool.query(query)
            .then(result => {
                res.send(result.rows);
            })
            .catch(err => {
                console.log('Error getting employees', err)
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

    const newEmployee = req.body; //settting req.body to an alias 

    if (req.isAuthenticated()) {
        const sqlText = `
        INSERT INTO "employees" 
        ("first_name", "last_name", "notes")
        VALUES ($1, $2, $3);
        `;
        const queryParams = [
            newEmployee.first_name,
            newEmployee.last_name,
            newEmployee.notes
        ];
        pool
            .query(sqlText, queryParams)
            .then(() => {
                res.status(201).send()
            })
            .catch((err) => {
                console.log('error in server employee POST route', err)
                res.sendStatus(500);
            })
    }
    else {
        res.sendStatus(403)
    }
})

router.delete('/:id', (req, res) => {
    console.log('in employee DELETE route')
    if (req.isAuthenticated()) {
        const queryText = `
        DELETE FROM "employees" 
        WHERE "id" = $1;`
        const queryParams = [req.params.id]

        pool
            .query(queryText, queryParams)
            .then(() => {
                res.sendStatus(201);
            })
            .catch(err => {
                console.log('employee server delete didnt work', err);
                res.sendStatus(500)
            })
    } else {
        sendstatus(403)
    }
})



module.exports = router;