/*Todays date and time******************************************************/
var currentDay = $('#currentDay');

//pulls current date and time from moment.js to display in index.html
setInterval(function() {
    currentDay.text(moment().format('[Today is] MMMM Do, YYYY h:mm A'));
}, 1000);

/*Input color changer******************************************************/

//Pulls the hour from moment.js
let currentTime = moment().format('H');
console.log(currentTime);

//Array to pull compared 'hours' from
let timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(timeArray);

//Compares the current hour to the time array loop and changes input box colors
function timeChecker(time) {
    console.log(time);
    console.log(currentTime);
    console.log(parseInt(currentTime));
    //set input box background to grey
    if (time < parseInt(currentTime)) {
        console.log('grey');
        $("#" + timeArray[i]).attr("style", "background-color: #d3d3d3")
    //set input box background to green
    }else if (time > parseInt(currentTime)){
        console.log('green');
        $("#" + timeArray[i]).attr("style", "background-color: #77dd77")
    //set input box background to red
    }else if (time == parseInt(currentTime)){
        console.log('red');
        $("#" + timeArray[i]).attr("style", "background-color: #ff6961")
    }
};

//Runs the timeChecker function through timeArray loop 
function timeLooper() {
    for (i=0; i<timeArray.length; i++) {
        timeChecker(timeArray[i]);    
    }
    //timeArray.forEach(timeChecker);    
};

timeLooper();

/*Store inputs in local storage********************************************/
//9am Save button
$('#saveBtn1').on("click", function(){
    console.log('Click1');
    let timeSlot1 = $(this).attr('id');
    let InputValue1 = $("#9").val()
    localStorage.setItem(timeSlot1, InputValue1);
    console.log(timeSlot1, InputValue1);
});

//10am Save button
$('#saveBtn2').on("click", function(){
    console.log('Click2');
    let timeSlot2 = $(this).attr('id');
    let InputValue2 = $("#10").val()
    localStorage.setItem(timeSlot2, InputValue2);
    console.log(timeSlot2, InputValue2);
});

//11am Save button
$('#saveBtn3').on("click", function(){
    console.log('Click2');
    let timeSlot3 = $(this).attr('id');
    let InputValue3 = $("#11").val()
    localStorage.setItem(timeSlot3, InputValue3);
    console.log(timeSlot3, InputValue3);
});

//12pm Save button
$('#saveBtn4').on("click", function(){
    console.log('Click2');
    let timeSlot4 = $(this).attr('id');
    let InputValue4 = $("#12").val()
    localStorage.setItem(timeSlot4, InputValue4);
    console.log(timeSlot4, InputValue4);
});

//1pm Save button
$('#saveBtn5').on("click", function(){
    console.log('Click2');
    let timeSlot5 = $(this).attr('id');
    let InputValue5 = $("#13").val()
    localStorage.setItem(timeSlot5, InputValue5);
    console.log(timeSlot5, InputValue5);
});

//2pm Save button
$('#saveBtn6').on("click", function(){
    console.log('Click2');
    let timeSlot6 = $(this).attr('id');
    let InputValue6 = $("#14").val()
    localStorage.setItem(timeSlot6, InputValue6);
    console.log(timeSlot6, InputValue6);
});

//3pm Save button
$('#saveBtn7').on("click", function(){
    console.log('Click2');
    let timeSlot7 = $(this).attr('id');
    let InputValue7 = $("#15").val()
    localStorage.setItem(timeSlot7, InputValue7);
    console.log(timeSlot7, InputValue7);
});

//4pm Save button
$('#saveBtn8').on("click", function(){
    console.log('Click2');
    let timeSlot8 = $(this).attr('id');
    let InputValue8 = $("#16").val()
    localStorage.setItem(timeSlot8, InputValue8);
    console.log(timeSlot8, InputValue8);
});

//5pm Save button
$('#saveBtn9').on("click", function(){
    console.log('Click2');
    let timeSlot9 = $(this).attr('id');
    let InputValue9 = $("#17").val()
    localStorage.setItem(timeSlot9, InputValue9);
    console.log(timeSlot9, InputValue9);
});

/*Pull data from local storage************************************/
//Pulls data from local storage and inserts it into the input box
function getData() {
    //9am input box
    TextBox9am = localStorage.getItem("saveBtn1");
    console.log(TextBox9am);
    //document.getElementById("9").value = TextBox9am;
    $('#9').val(TextBox9am)
    console.log($('#9').val())
    
    //10am input box
    TextBox10am = localStorage.getItem("saveBtn2");
    console.log(TextBox10am);
    //document.getElementById("10").value = TextBox10am;
    $('#10').val(TextBox10am)

    //11am input box
    TextBox11am = localStorage.getItem("saveBtn3");
    console.log(TextBox11am);
    //document.getElementById("11").value = TextBox11am;
    $('#11').val(TextBox11am)

    //12pm input box
    TextBox12pm = localStorage.getItem("saveBtn4");
    console.log(TextBox12pm);
    //document.getElementById("12").value = TextBox12pm;
    $('#12').val(TextBox12pm)

    //1pm input box
    TextBox1pm = localStorage.getItem("saveBtn5");
    console.log(TextBox1pm);
    //document.getElementById("13").value = TextBox1pm;
    $('#13').val(TextBox1pm)

    //2pm input box
    TextBox2pm = localStorage.getItem("saveBtn6");
    console.log(TextBox2pm);
    //document.getElementById("14").value = TextBox2pm;
    $('#14').val(TextBox2pm)

    //3pm input box
    TextBox3pm = localStorage.getItem("saveBtn7");
    console.log(TextBox3pm);
    //document.getElementById("15").value = TextBox3pm;
    $('#15').val(TextBox3pm)

    //4pm input box
    TextBox4pm = localStorage.getItem("saveBtn8");
    console.log(TextBox4pm);
    //document.getElementById("16").value = TextBox4pm;
    $('#16').val(TextBox4pm)

    //5pm input box
    TextBox5pm = localStorage.getItem("saveBtn9");
    console.log(TextBox5pm);
    //document.getElementById("17").value = TextBox5pm;
    $('#17').val(TextBox5pm)
    }
    
    getData();