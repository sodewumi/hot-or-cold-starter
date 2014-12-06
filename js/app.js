$(document).ready(function () {
	var counter;
    var rightNumber;
  	var difference;
  	var guess;
  	var win;



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
    	//reset
    	win = false; 
        rightNumber = Math.floor((Math.random()*100)+1);
        counter = 0   

        //text
        $('ul#guessList').empty();
        text('Make Your Guess!');
        $('#count').text(counter);

        console.log('The number is ' + rightNumber);
    };

    //checks for users guess. Finds the difference b/w
    //user's guess and right number
    function guesses() {
    	//gets guess value
		guess = document.getElementById('userGuess').value;
		guess = parseInt(guess);

		//finds the difference
		difference = rightNumber - guess;
		if (difference < 0) {
		  difference = difference * -1;
		  return difference;
		} else {
		  return difference;
		};		
    };

    //lists out number of guess and which guess
    function lists() {
    	counter ++

    	$('span#count').text(counter);
    	$('ul#guessList').append('<li>' +guess+ '</li>');
    }

    //checks if  the user's guess is a real number
    var validation = function(x) {
    	if (isNaN(x)) {
    		text('Please enter a real number');
    		//return (alert('yo'));
    		return false;
    	} else if ( x < 1 || x > 100) {
    		text('Please enter a number between 1-100');
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
		  text('You win!');
		  return win = true;

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

    // function focusAndClear() {
    // 	$('#userGuess').onfocus();
    // 	$('#userGuess').value('');
    // }

 
    newGame();
    //console.log(rightNumber)

    //starts new game on click
    $('.new').on('click', newGame);
    
    $('form').submit(function(e) {
      e.preventDefault();
      guesses();

      if(!win) {
      	if(validation(guess)) {
      		lists();
      		comments();
      	}
      } else {
      	text('You already won! To play a new game click on the New Game \
			button.')
      }

    });

});