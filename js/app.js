$(document).ready(function () {
    var rightNumber;
  	var difference;
  	var guess;
  
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

    //checks for guess
    function guesses() {
		guess = document.getElementById('userGuess').value;
		guess = parseInt(guess);

		difference = rightNumber - guess;
		if (difference < 0) {
		  difference = difference * -1;
		  return difference;
		} else {
		  return (difference);
		}
		console.log('yo')

    };

    //checks if  the user's guess is a real number
    var validation = function(x) {
    	if (isNaN(x)) {
    		//return [text('Please enter a real number'), false]
    		//return (alert('yo'));
    		return false;
    	} else if ( x < 1 || x > 100) {
    		//return text('Please enter a number between 1-100');
    		return false;
    	} else if (x == "") {
    		return false;
    	} else {
    		return true;
    	}

    };

    //gives the user feedback depending on the difference between the right number
    //and the one the guessed.
	function comments () {
		if (difference === 0) {
		  return text('You win!');
		} else if (difference <= 5) {
		  return text('Your guess is on fire');
		} else if (difference <= 10) {
		  return text('Your guess is very hot');
		} else if (difference <= 20) {
		  return text('Your guess is hot');
		} else if (difference <= 30) {
		  return text('Your guess is warm');
		} else if (difference <= 50) {
		  return text('Your guess is cold');
		} else if (difference > 50) {
		  return text('Your guess is ice cold');
		}
	};
	

    var text = function (insert) {
    	$(feedback).text(insert);
    };

 
    newGame();
    //console.log(rightNumber)
    console.log(rightNumber);

    //starts new game on click
    $('.new').on('click', newGame);
    
    $('form').submit(function(e) {
      e.preventDefault();
      guesses();
      
	  if (validation(guess)) {
	    comments();
	  } else {
	  	alert('boom');
	  	// return true;
	  }
    });

});