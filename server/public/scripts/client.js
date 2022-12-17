$(onReady);

function onReady(){
    // show input field
    $('#btn-add-task').on('click', toggleInput);
    // submit input field
    $('#input-submit').on('click', submitTask)
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
    })
    .catch((err)=>{
        console.log('error with GET request', err)
    })
}