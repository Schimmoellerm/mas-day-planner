//Variables
var currentDay = $('#currentDay');

//Todays date and time
setInterval(function() {
    currentDay.text(moment().format('[Today is] MMMM Do, YYYY kk:mm'));
}, 1000);