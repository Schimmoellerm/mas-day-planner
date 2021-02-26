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
let inputBox1 = $('#9');

$('#saveBtn1').on("click", function(){
    console.log('Click1');
    let timeSlot1 = $(this).attr('id');
    let InputValue1 = $("#9").val()
    localStorage.setItem(timeSlot1, InputValue1);
    console.log(timeSlot1, InputValue1);
});


function getData() {
TextBox9am = localStorage.getItem("saveBtn1");
console.log(TextBox9am);
document.getElementById("9").value = TextBox9am;
}

getData();

$('#saveBtn2').on("click", function(){
    console.log('Click2');
    let timeSlot2 = $(this).attr('id');
    let InputValue2 = $("#10").val()
    localStorage.setItem(timeSlot2, InputValue2);
    console.log(timeSlot2, InputValue2);
});

$('#saveBtn3').on("click", function(){
    console.log('Click2');
    let timeSlot3 = $(this).attr('id');
    let InputValue3 = $("#11").val()
    localStorage.setItem(timeSlot3, InputValue3);
    console.log(timeSlot3, InputValue3);
});

$('#saveBtn4').on("click", function(){
    console.log('Click2');
    let timeSlot4 = $(this).attr('id');
    let InputValue4 = $("#12").val()
    localStorage.setItem(timeSlot4, InputValue4);
    console.log(timeSlot4, InputValue4);
});

$('#saveBtn5').on("click", function(){
    console.log('Click2');
    let timeSlot5 = $(this).attr('id');
    let InputValue5 = $("#13").val()
    localStorage.setItem(timeSlot5, InputValue5);
    console.log(timeSlot5, InputValue5);
});

$('#saveBtn6').on("click", function(){
    console.log('Click2');
    let timeSlot6 = $(this).attr('id');
    let InputValue6 = $("#14").val()
    localStorage.setItem(timeSlot6, InputValue6);
    console.log(timeSlot6, InputValue6);
});

$('#saveBtn7').on("click", function(){
    console.log('Click2');
    let timeSlot7 = $(this).attr('id');
    let InputValue7 = $("#15").val()
    localStorage.setItem(timeSlot7, InputValue7);
    console.log(timeSlot7, InputValue7);
});

$('#saveBtn8').on("click", function(){
    console.log('Click2');
    let timeSlot8 = $(this).attr('id');
    let InputValue8 = $("#16").val()
    localStorage.setItem(timeSlot8, InputValue8);
    console.log(timeSlot8, InputValue8);
});

$('#saveBtn9').on("click", function(){
    console.log('Click2');
    let timeSlot9 = $(this).attr('id');
    let InputValue9 = $("#17").val()
    localStorage.setItem(timeSlot9, InputValue9);
    console.log(timeSlot9, InputValue9);
});