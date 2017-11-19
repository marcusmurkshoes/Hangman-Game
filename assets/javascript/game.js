
	// Psuedo Code:
	// 1. Press any key to start the game

	// use only for the letters the user is going to guess



	var word1 = ["_", "_", "_", "_"];


	document.onkeyup = function() {

		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		word1[0] = "H";


		for (var i = 0; i < word1.length; i++) {
			word1[i]
		}

		word1.toString();
		

		document.getElementById("word").innerHTML = userGuess;

		


		console.log(word1);

	}

			// var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

			// document.getElementById("word").innerHTML = userGuess;

			// var userChoice = word1[Math.floor(Math.random() * word1.length)];

			// console.log(userChoice);
			// console.log(userGuess);


			// if (userGuess === 'h' || userGuess === 'e' || userGuess === 'l' || userGuess === 'l' || userGuess === 'o') {
			// 		for (var i = 0; i < word1.length; i++) {
			// 			userGuess[i]
			// 		}

				
			// 		document.getElementById("word").innerHTML = userGuess;

					

			// 	}

				// if (userGuess === "h") {



				// 		document.getElementById("words").innerHTML = userGuess;


				// 		return userGuess;


				// }


				// if (userGuess === "e") {

				// 	document.getElementById("words2").innerHTML = userGuess;


				// }

				// if (userGuess === "l") {


				// 	document.getElementById("words3").innerHTML = userGuess;

				// }

				// if (userGuess === "l") {


				// 	document.getElementById("words4").innerHTML = userGuess;



				// }



				// if (userGuess === "o") {




				// 	document.getElementById("words5").innerHTML = userGuess;



				// }
					 


						
					
				

						

				
			




			


	

		