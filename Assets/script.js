//Variables
var currentDay = $('#currentDay');

//Todays date and time
//var currentDay = moment().format("[Today is] dddd," + " MMMM"  + " DD," + " YYYY" + " kk:mm:ss");
//$("#currentDay").text(currentDay);

setInterval(function() {
    currentDay.text(moment().format('[Today is] MMMM Do, YYYY kk:mm'));
}, 1000);