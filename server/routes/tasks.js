const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')


// GET
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

//POST
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

//PUT
router.put('/checked/:id', (req, res)=>{
    const currID = req.params.id;                       
    let queryText = `UPDATE tasks SET completion=1 WHERE id=$1;`;


    pool.query(queryText, [currID])
    .then((response)=>{
        res.send(response.rows);
    })
    .catch((err)=>{
        console.log('err with DB PUT request, ', err);
        res.sendStatus(500);
    })
})

//DELETE
router.delete('/:id', (req, res)=>{
    const deleteID = req.params.id;
    const queryText = `DELETE FROM tasks WHERE id=$1`;

    pool.query(queryText, [deleteID])
    .then((response)=>{
        res.sendStatus(200);
    })
    .catch((err)=>{
        console.log('error with DB DELETE request, ', err);
        res.sendStatus(500);
    })
})
module.exports = router;