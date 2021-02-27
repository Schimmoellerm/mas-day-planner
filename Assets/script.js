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
    //set to grey
    if (time < parseInt(currentTime)) {
        console.log('grey');
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
$('#saveBtn1').on("click", function(){
    console.log('Click1');
    let timeSlot1 = $(this).attr('id');
    let InputValue1 = $("#9").val()
    localStorage.setItem(timeSlot1, InputValue1);
    console.log(timeSlot1, InputValue1);
});

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

/********************************************************/
//Pull data from local storage

function getData() {
    TextBox9am = localStorage.getItem("saveBtn1");
    console.log(TextBox9am);
    //document.getElementById("9").value = TextBox9am;
    $('#9').val(TextBox9am)
    console.log($('#9').val())
    

    TextBox10am = localStorage.getItem("saveBtn2");
    console.log(TextBox10am);
    //document.getElementById("10").value = TextBox10am;
    $('#10').val(TextBox10am)

    TextBox11am = localStorage.getItem("saveBtn3");
    console.log(TextBox11am);
    //document.getElementById("11").value = TextBox11am;
    $('#11').val(TextBox11am)

    TextBox12am = localStorage.getItem("saveBtn4");
    console.log(TextBox12am);
    //document.getElementById("12").value = TextBox12am;
    $('#12').val(TextBox12am)

    TextBox1pm = localStorage.getItem("saveBtn5");
    console.log(TextBox1pm);
    //document.getElementById("13").value = TextBox1pm;
    $('#13').val(TextBox1pm)

    TextBox2pm = localStorage.getItem("saveBtn6");
    console.log(TextBox2pm);
    //document.getElementById("14").value = TextBox2pm;
    $('#14').val(TextBox2pm)

    TextBox3pm = localStorage.getItem("saveBtn7");
    console.log(TextBox3pm);
    //document.getElementById("15").value = TextBox3pm;
    $('#15').val(TextBox3pm)

    TextBox4pm = localStorage.getItem("saveBtn8");
    console.log(TextBox4pm);
    //document.getElementById("16").value = TextBox4pm;
    $('#16').val(TextBox4pm)

    TextBox5pm = localStorage.getItem("saveBtn9");
    console.log(TextBox5pm);
    //document.getElementById("17").value = TextBox5pm;
    $('#17').val(TextBox5pm)
    }
    
    getData();