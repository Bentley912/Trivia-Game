// create html page that has all the questions in seperate divs

// starting page with "Start" Button

var questions =[
  {
    question: "Where do you live?",
    choice: ['Savannah', 'Atlanta', 'Boston', 'Raleigh'],
    correct: "Savannah",
  },

  {
    question: "What are you here to do ?",
    choice: ["clean", "code", "dance", "fuck shit up"],
    correct: "code"
  },

  {
    question: "What do you want?",
    choice: ["food", "money", "pleasure", "freedom"],
    correct: "freedom"
  }
];

var counter = 0;
var answers = ('p');

var letters = ["a)", "b)", "c)", "d)"];

function nextQuestion(){


  for (var i =0; i < questions[counter].choice.length; i++ ){
    $('h3').html(questions[counter].question);
    $(answers[i]).html(letters[i] + questions[counter].choice[i]);
    $(answers[i]).attr('value', questions[counter].choice[i]);
  }

  $('.questions p').on('click', function(){

  		if($(this).attr('value') === questions[counter].correct){

  				console.log($(this).attr('value'));
  			}
  			else{
  				console.log("Nope it didn't worked!!!")
  			}
  		});

  } // end of nextQuestions



function startCounter(time){
			var startCounting = setInterval(function(){

			nextQuestion();
			counter++;


			if(counter >= questions.length){
				clearInterval(startCounting)
			}
		}, time)
}
$('.start').on("click", function(){
  $('.start').css('display', 'none');
  $('.questions').css('display','block');

  var clock = startCounter(10000);
  
});


//var stopwatch = {
//  time:30,
//  count: function(){
//    stopwatch.time--;
//    $('.clock').html(stopwatch.time);
//    if (stopwatch.time===0){
//        clearInterval(intervalId);
//      $('#timeUpGif').show();
//
//    }
//    },
//    start: function() {

//        intervalId = setInterval(stopwatch.count, 1000);
//    }
//}













// if timer counts down to 0, the question is marked incorrect (incorrect ++) and a gif is shown and user notified that the time ran out

// if the wrong answer is clicked , incorrect ++, and gif shows

//if answer is correct, correct ++, and gif shows

// when gif shows, it shoudl run for 5 seconds and then push next section into main division


// when last question is answered, final page should show correct and incorrect answers

// final page should have button that restarts trivia game at first question.
