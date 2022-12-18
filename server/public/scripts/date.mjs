function isLeap(year){
    if(year%4 === 0){
        if(year%100 ===0){
            if(year%400 === 0){
                return true
            }
            else{
                return false
            }
        }
        else{
            return true
        }
    }
    else{
        return false
    }
}


function weekDay(dateObj){
    let yearNum = parseInt(dateObj.year.substr(2,2));
    let dayNum = parseInt(dateObj.day);
    let monthNum = parseInt(dateObj.month);

    let monthCode = [null,1,4,4,0,2,5,0,3,6,1,4,6];
    let code = monthCode[monthNum];

    let dayOfWeek;
    if(isLeap(parseInt(dateObj.year))){
        if(monthNum === 1 || monthNum === 2){
            dayOfWeek = ((Math.floor(yearNum/4) + dayNum + code + yearNum+6-1)%7);
        }
        else{
            dayOfWeek = ((Math.floor(yearNum/4) + dayNum + code + yearNum+6)%7);
        }
    }
    else{
        dayOfWeek = ((Math.floor(yearNum/4) + dayNum + code + yearNum+6)%7);
    } 
    
    let days = ["Sat", "Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
   
    return(days[dayOfWeek])
}

function dateCreator(date){
    let dateData = {
        year: date.substr(0,4),
        month: date.substr(5,2),
        day: date.substr(8,2),
    }

    let hour = date.substr(11,2);
    let min = date.substr(14,2)
    let tod = "AM"


    if(hour > 12){
        tod = "PM";
        hour -= 12;
    }

    return(`${hour}:${min} ${tod} - ${weekDay(dateData)}`)

}


export default dateCreator; 