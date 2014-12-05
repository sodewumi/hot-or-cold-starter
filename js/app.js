$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var rightNumber = Math.floor((Math.random() * 100) + 1)
  	console.log(rightNumber);
  	
  	//when user starts a new game
  	function newGame() {
  		console.log(rightNumber);

  	}

  	function guesses() {
  			console.log(rightNumber);
  			// var guess = document.getElementById('userGuess').value();
  			// if ( guess += 20 < rightNumber < guess -= 20) {
  			// 	console.log('you\'re cold bro');
  			// }
  			var guess = document.getElementById('userGuess').value;
  			var guess = parseInt(guess);

  			console.log(guess, rightNumber);


  	};

  	//guesses();
  	newGame();


  	//starts new game on click
  	$('.new').on('click', newGame);
  	$('#guessButton').on('click', guesses);

});


