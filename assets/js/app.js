$(document).ready(function() {


	  
	$("#start").on('click', function gameStart(event) {	
	//  Variable that will hold our setInterval that runs the stopwatch


		var intervalId;
		var time = 3;
		var i = 0;
		var correctAnswer = 0;
		var incorrectAnswer = 0;

		run();
		game();

		// Setting the decrease of counter to every second.
		function run() {

			IntervalId = setInterval(decrement, 1000);
	    
	    }

	    //  The decrement function.
	    function decrement() {

	      	//  Decrease number by one.
	  		time--;

	       	var converted = timeConverter(time);

	      	//  Show the number in the #show-number tag.
	      	$("#timer").html("<h2>" + converted + "</h2>");


	      	//  Once number hits zero...
	      	if (time === 0) {
				alert("Times up!");
	      		nextQuestion();
	      		game ();
	      	} 
	    }

	    //converts Decrement function in 00:00
	    function timeConverter(t) {

		    var minutes = Math.floor(t / 60);
		    var seconds = t - (minutes * 60);

		    if (seconds < 10) {
		      seconds = "0" + seconds;
		    }

		    if (minutes === 0) {
		      minutes = "00";
		    }
		    else if (minutes < 10) {
		      minutes = "0" + minutes;
		    }

		    return minutes + ":" + seconds;
		}

		//stops timer by clearing variable IntervalId
		function reset() {

			window.location.reload();
		
		}

    	function nextQuestion() {

    		time = 3;
    		i++;

    	}

 		function game() {

 			var gameObj = {

				qaList: 
				[
				{
					question: "Bananas help you?",
					answer: "Fight Cancer",
					incorrectAnswer: 
					[
						"Sleep", "Reduce Blood Sugar", "Move Bowels"
					]
					
				},
				{
					question: "Eggs help you boost your immune system?",
					answer: "True",
					incorrectAnswer: "False"
				},
				{
					question: "Milk does what?",
					answer: "Boost your Endurance",
					incorrectAnswer: 
					[
						"Increase Vitamin C", "Reduce Blood Sugar", "Jump Higher"
					]
				},
				{
					question: "blagg",
					answer: "blahh",
					incorrectAnswer: "blahh"
				},
				]
			};

			var answerArray = [];

			for (x in gameObj.qaList) {
				
				if (gameObj.qaList.length !== i) {


			    	$("#gameContent").empty();

				    var timerContainer = $( "<div class='timerContainer text-center' id='timerContainer'> </div>");
					var timerHeader = $("<h2 class='timerHeader' id='timerHeader'>Time Remaining!</h2>");
				 	var timer = $( "<h2 class='timer' id='timer'>00:30</h2>");
				 	var qaContainer = $("<div class='qaContainer text-center' id='qaContainer'></div>");


					$("#timerContainer").append(timerHeader);
					$("#gameContent").append(timerContainer);
					$("#timerContainer").append(timer);
					$("#gameContent").append(qaContainer);
				    	
  					var question = gameObj.qaList[i].question;
					var answer = gameObj.qaList[i].answer;
					var incorrectAnswer = gameObj.qaList[i].incorrectAnswer;


					var questiontxt = $("<h2 id='questiontxt' class='questiontxt'>" + question + "</h2>");

					var answerTxtContainer = $("<div>").addClass("ansTxtContainer").attr("id", "ansTxtContainer")
					var answerTxt = $("<h2 id='answertxt' class='answertxt text-center'>" + answer + "</h2>");

					$("#qaContainer").append(questiontxt);
					$("#gameContent").append(answerTxtContainer)
				 	$("#ansTxtContainer").append(answerTxt);

			    	if (Array.isArray(incorrectAnswer)) {

				    	 $.each(incorrectAnswer, function(number, character){

	    	 		
							var incAnsTxtContainer = $("<div>").addClass("ansTxtContainer").attr("id", "incAnsTxtContainer")							
				    	 	var incorrectAnswersTxt = $("<h2 class='incorrectAnswers text-center'>" + character + "</h2>" );

				    	 	$("#gameContent").append(incAnsTxtContainer);
				    	 	$("#incAnsTxtContainer").append(incorrectAnswersTxt)


						});	




					} else if (!Array.isArray(incorrectAnswer)) {
					
						var incAnsTxtContainer = $("<div>").addClass("incAnsTxtContainer").attr("id", "incAnsTxtContainer")							
			    	 	var incorrectAnswersTxt = $("<h2 class='incorrectAnswers text-center'>" + incorrectAnswer + "</h2>" );

			    	 	$("#gameContent").append(incAnsTxtContainer);
			    	 	$("#incAnsTxtContainer").append(incorrectAnswersTxt)
				    };


				    function guess() {

		    	 		$('#ansTxtContainer').on('click', function() {

		    	 		alert("That is correct!!!")

		    	 		correctAnswer ++;
		    	 		console.log(correctAnswer)
		    	 		nextQuestion();
		    	 		game();


		    	 		});	

		    	 		$('#incAnsTxtContainer').on('click', function() {

		    	 		alert("Please Try Again that is Incorrect!!!")

		    	 		incorrectAnswer ++;

		    	 		console.log(incorrectAnswer)
		    	 		nextQuestion();
		    	 		game();

		    	 		});				    	 		
		    	 	};

		    	 	guess();



				} else {

					reset();

				};

			};
		};
		
	});   
});