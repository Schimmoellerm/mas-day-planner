//Todays date and time
var currentDay = $('#currentDay');

setInterval(function() {
    currentDay.text(moment().format('[Today is] MMMM Do, YYYY h:mm A'));
}, 1000);

/***************************************************************************/
//Input color changer
let currentTime = moment().format('H');
console.log(currentTime);

let timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(timeArray);

function timeChecker(time) {
    console.log(time);
    console.log(currentTime);
    console.log(parseInt(currentTime));
    if (time < parseInt(currentTime)) {
        console.log('grey');//set to grey

    }else if (time > parseInt(currentTime)){
        console.log('green');//set to green

    }else if (time == parseInt(currentTime)){
        console.log('red');//set to red

    }
};

function timeLooper() {
    for (i=0; i<timeArray.length; i++) {
        timeChecker(timeArray[i]);    
    }
    //timeArray.forEach(timeChecker);    
};
timeLooper();

/*************************************************************/

