$(onReady);

function onReady(){
    $('#btn-add-task').on('click', toggleInput);
}

function toggleInput(){
    console.log('hello');

    if($("#input-div").first().is(":hidden")){
        $( "#input-div" ).slideDown();
    } 
    else {
        $( "#input-div" ).slideUp();
    }
}