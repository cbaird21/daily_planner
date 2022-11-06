var currentDay = $("#currentDay");
var appointments = [];
var saveBtn = $('.saveBtn')
var timeBlockEl = $('.time-block');
var day = dayjs();

$(function () {
  // create variable for day
  var day = dayjs();
  window.onload = displayClock();
  // display clock function 
  function displayClock() {
  var liveTime = new Date().toLocaleTimeString();
// how to display the current date with liveTime
  currentDay.text(day.format("MM DD, YYYY") + " " + liveTime);
  setTimeout(displayClock, 1000);
  }

  function checkTime() {
    var hour = day.hour();
    
    timeBlockEl.each(function (){
      var currentBlock = parseInt($(this).attr("id"));

      if (currentBlock > hour) {
        $(this).addClass("future");

      } else if (currentBlock === hour) {
        $(this).addClass("present");

      } else {
        $(this).addClass("past");
      }
    });
  }

  saveBtn.on("click", function () {
    // this is creating the item of what is input in the divs to store the text of sibling of the row 
   var time = $(this).siblings(".row").text();
   var appointments = $(this).siblings(".description").val();
   localStorage.setItem(time,appointments);
  })

  function displayAppointments() {
    $('.row').each(function(){
      var textInput = $(this).text();
      var userInput = localStorage.getItem(textInput);

      if (userInput !== null){
        $(this).siblings(".description").val(userInput);
      }
    })
  }

  checkTime();
  displayAppointments();
});