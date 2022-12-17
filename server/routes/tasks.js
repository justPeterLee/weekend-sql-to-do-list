const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

router.get('/', (req,res)=>{
    let queryText = `SELECT * FROM tasks`;

    pool.query(queryText)
    .then((result)=>{
        res.send(result.rows)
    })
    .catch((err)=>{
        console.log('error making a query, ', err);
        res.sendStatus(500);
    })
})

router.post('/',(req,res)=>{
    const newTask = req.body;
    const queryText = `
    INSERT INTO tasks(task, description, difficulty, due, created_at)
    VALUES($1,$2,$3,$4,$5);
    `;
    pool.query(queryText, [newTask.task, newTask.description, newTask.difficulty, newTask.due, newTask.created_at])
    .then((result)=>{
        res.sendStatus(201);
    })
    .catch((err)=>{
        console.log('error with POST query, ', err);
        res.sendStatus(500);
    })

})
module.exports = router;