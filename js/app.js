$(document).ready(function () {
    var rightNumber;
  	//var guess;
  
  	//Display information modal box
    $(".what").click(function(){
    $(".overlay").fadeIn(1000);

    });

    //Hide information modal box
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });


    
    //starts a new game
    function newGame() {

      rightNumber = Math.floor((Math.random()*100)+1);    
    };

   function guesses() {
		var guess = document.getElementById('userGuess').value;
		guess = parseInt(guess);

		var difference = rightNumber - guess;
		if (difference < 0) {
		  difference = difference * -1;
		};

		if (difference <= 5) {
		  console.log('you\'re on fire');
		} else if (difference <= 10) {
		  console.log('you\'re very hot');
		} else if (difference <= 20) {
		  console.log('you\'re hot');
		} else if (difference <= 30) {
		  console.log('you\'re warm');
		} else if (difference <= 50) {
		  console.log('you\'re cold');
		} else if (difference > 50) {
		  console.log('you\'re ice cold');
		}
   };

    newGame();
    //console.log(rightNumber)
    console.log(rightNumber);

    //starts new game on click
    $('.new').on('click', newGame);
    
    $('form').submit(function(e) {
      e.preventDefault();
      guesses();
    });

});