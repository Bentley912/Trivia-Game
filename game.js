// create html page that has all the questions in seperate divs

// starting page with "Start" Button


$('#timeUpGif').hide();

var stopwatch = {
  time:30,
  count: function(){
    stopwatch.time--;
    $('.clock').html(stopwatch.time);
    if (stopwatch.time===0){
      $('#timeUpGif').show();
      $('.clock').empty();
    }
    },
    start: function() {

        intervalId = setInterval(stopwatch.count, 1000);
    }
}

$('#timer').click(stopwatch.start);
$('#start').on("click", function(){
    $('.question-section').empty();
});








// When start button is clicked first question appears.

// Timer also appears in the main section and begins counting down

// if timer counts down to 0, the question is marked incorrect (incorrect ++) and a gif is shown and user notified that the time ran out

// if the wrong answer is clicked , incorrect ++, and gif shows

//if answer is correct, correct ++, and gif shows

// when gif shows, it shoudl run for 5 seconds and then push next section into main division


// when last question is answered, final page should show correct and incorrect answers

// final page should have button that restarts trivia game at first question.
