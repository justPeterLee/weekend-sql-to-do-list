// const {dateCreator} = require('./date.js');
import dateCreator from './date.mjs';
$(onReady);

function onReady(){
    // show input field
    $('#btn-add-task').on('click', toggleInput);
    // submit input field
    $('#input-submit').on('click', submitTask);
    // checkOff btn
    $('.task-output').on('click', '.check', checkOff);
    // delete btn
    $('.task-output').on('click', '.delete', deleteTask)
    //render task
    getTask();
}


// show input field function
function toggleInput(){
    if($("#input-div").first().is(":hidden")){
        $( "#input-div" ).slideDown();
    } 
    else {
        $( "#input-div" ).slideUp();
    }
}

// submit input field
function submitTask(){
    console.log('hello');
    let today = new Date();
    let currDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')} ${today.getHours()}:${today.getMinutes()}`
    let task = $('.input-title').val();
    let date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')} ${$('.input-date').val()}`;
    let desc = $('.input-desc').val();
    let diff = $('input[name="importance"]:checked').val();

    if(task){
        if(date){
            if(desc){
                if(diff){
                    let taskData = {
                        task: task,
                        description: desc,
                        difficulty: diff,
                        due:date,
                        created_at: currDate
                    }
                    postTask(taskData)
                }else{alert("invalid field")}
            }else{alert("invalid field")}
        }else{alert("invalid field")}
    }else{alert("invalid field")}
    
    
}

// POST request 
function postTask(data){
    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: data
    })
    .then((response)=>{
        //render (GET)
        getTask()
    })
    .catch((err)=>{
        console.log("error with POST request,", err)
    })
}

// GET request
function getTask(){
    $.ajax({
        method: 'GET',
        url: '/tasks'
    })
    .then((response)=>{
        console.log(response);
        renderTask(response)
    })
    .catch((err)=>{
        console.log('error with GET request', err)
    })
}

//rener function 
function renderTask(task){
    $('.task-output').empty();
    for(let i=0; i < task.length; i++){
        $(`
        <div id="task-display">

            <div id="task-container">
            <div class="word-display">
                <div class="title-display">
                    <div class="diff-display"></div>
                    <h1 class="task-title">${task[i].task}</h1>
                </div>

                <div class="task-description">
                <h3 class="description">${task[i].description}</h3>
                </div>

                <div class="task-dates">
                    <h4 class="due"> - due - ${dateCreator(task[i].due)}</h4>
                    <h4 class="create">- created - ${dateCreator(task[i].created_at)}</h4>
                </div>
            </div>



            <div class="task-btn" data-id=${task[i].id} data-check=${task[i].completion}>
                <button class="check">></button>
                <button class="delete">X</button>
                <button class="edit">?</button>
            </div>
            </div>

        </div>
    `).prependTo('.task-output')
    }
}



dateCreator("2022-12-17T14:25:00.000Z")


// PUST request
function checkOff(){
    let id = $(this).parent().data('id');
    let isCheck = $(this).parent().data('check');

    console.log(isCheck)

    $.ajax({
        method: "PUT",
        url: `/tasks/checked/${id}`,
        data: {completion: isCheck}
    })
    .then((response)=>{
        console.log(response);
        getTask()
    })
    .catch((err)=>{
        console.log("error with POST request, ", err)
    })
    
}

// DELETE request
function deleteTask(){
    console.log("DELETED")
    const id = $(this).parent().data('id');
    console.log(id)
    $.ajax({
        method: 'DELETE',
        url:`/tasks/${id}`
    })
    .then((response)=>{
        getTask();
    })
    .catch((err)=>{
        console.log('error with DELETE request, ', err)
    })
    
}