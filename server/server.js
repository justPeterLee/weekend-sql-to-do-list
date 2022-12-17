const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = 5001;

app.use(express.static('server/public'));


// routes
let tasksRouter = require('./routes/tasks.js')
app.use('/tasks', tasksRouter)
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})