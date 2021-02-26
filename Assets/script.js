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
        $("#" + timeArray[i]).attr("style", "background-color: #d3d3d3")
    }else if (time > parseInt(currentTime)){
        console.log('green');//set to green
        $("#" + timeArray[i]).attr("style", "background-color: #77dd77")
    }else if (time == parseInt(currentTime)){
        console.log('red');//set to red
        $("#" + timeArray[i]).attr("style", "background-color: #ff6961")
    }
};

function timeLooper() {
    for (i=0; i<timeArray.length; i++) {
        timeChecker(timeArray[i]);    
    }
    //timeArray.forEach(timeChecker);    
};
timeLooper();

/***************************************************************************/
//Store inputs in local storage
$('.saveBtn').on("click", function(){
    console.log('Click Me Harder Daddy!');
})


