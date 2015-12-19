/*
stage 0 : before test starts
stage 1 : as soon as start button is clicked, quesanspanel is loaded, timer starts
stage 2 : quit warning.
stage 3 : test ends, button to check score and feedback
stage 4 : check score and feedback
*/
var stage = 0;

/*
holds the response of the user during the session, array of objects having question no and response (a,b,c,d)
*/
var response = []; 
for(var i = 0;i<set.length;i++) {
	response[i] = { 'num' : (i+1), 'response' : null, 'visited' : false, 'visits' : 0};
}

/*
holds the num of the current question
*/
var current = -1;



/*
popullates the question sidebar and add event listeners
*/
function populateQuestionsList() {
	var html = "";
	for(obj in set) {
		var qno = "Q. "+set[obj].num;
		var frame = "<button id='q"+set[obj].num+"' value='"+obj+"' class='quesbutton unattempted-ques'>"+qno+"</button>"
		html += frame;
	}
	$("#questionsList").html(html);

	$(".quesbutton").click(function() {
		flushQuestion($(this).attr("value"));
	});
}


/*
Changes to a specific question on the panel 
*/
function flushQuestion(index) {
	var quesEntry = set[index];
	
 	if(quesEntry != null) {

 		var no = Number(index)+1;
	 	$("#qno").html("").append(no);

	 	var questionhtml = quesEntry.ques;
	 	if (quesEntry.ques_img != null) {
	 		questionhtml += "<br><img src='"+quesEntry.ques_img+"' />"
	 	}

	 	$("#IOContent").html("");
	 	$("#IOContent").append(questionhtml+"<br><br>");

	 	var optionshtml = ""

	 	for(var j=0;j<quesEntry['options'].length;j++) {
	 		if(quesEntry['options'][j]['type'] == 'text') {
	 			if(response[index].response == j)
	 				optionshtml += "<label><input type='radio' checked class='ansradio' name='answer' val='"+index+"' value='"+j+"'>&nbsp;&nbsp;&nbsp;"+quesEntry['options'][j]['desc']+"</label><br>";
	 			else 
	 				optionshtml += "<label><input type='radio' class='ansradio' name='answer' val='"+index+"' value='"+j+"'>&nbsp;&nbsp;&nbsp;"+quesEntry['options'][j]['desc']+"</label><br>";
	 		}
	 		else if(quesEntry['options'][j]['type'] == 'image')
	 			if(response[index].response == j)
	 				optionshtml += "<label><input type='radio' checked class='ansradio' name='answer' val='"+index+"' value='"+j+"'>&nbsp;&nbsp;<img src='"+quesEntry['options'][j]['desc']+"'></label><br>";
	 			else 
	 				optionshtml += "<label><input type='radio' class='ansradio' name='answer' val='"+index+"' value='"+j+"'>&nbsp;&nbsp;<img src='"+quesEntry['options'][j]['desc']+"'></label><br>";

	 	}

		$("#IOContent").append(optionshtml);

		current = Number(index);
		response[index].visited = true;
		response[index].visits++;
		updateColorCoding();
	}

	else {
		console.log("call to : "+index);
		console.log("privacy tampered !");
	}

}

function updateColorCoding() {
	for(var i=0;i<set.length;i++) {
		if(i == current) {
			// blue
			$("#q"+(i+1)).css({"background-color" : "#238dd0", "color" : "white"});
		}
		else if(response[i].response != null) {
			// green
			$("#q"+(i+1)).css({"background-color" : "#a9e339", "color" : "black"});
		}
		else if(response[i].visited == true) {
			//red
			$("#q"+(i+1)).css({"background-color" : "#ff2a4d", "color" : "black"});
		}
		else {
			$("#q"+(i+1)).css({"background-color" : "#eee", "color" : "black"});
		}
	}
}

//------TIMER
var now=null;
mins = 60;
secs = '00';
function secondsLeft() {
  if((secs-1)>=0)
  {
  	secs = parseInt(secs);
  	--secs;
  	if(secs<10)
  		secs= '0' + secs;
  }
  else
  {
  	mins = parseInt(mins);
  	--mins;
  	if(mins<10)
  		mins= '0' + mins;
  	secs=59;
  }
  $('#topContainer1').html(mins+':'+secs);
  if(mins==0 &&secs==0)
  {
  	clearInterval(timer);
  	//do something
  	alert("time is up");
  }
}

function timer_init() {
	now = new Date();
	$('#topContainer1').html(mins+':'+secs);
  	timer = setInterval("secondsLeft()", 1000);
}

function calcScore() {
	var score = 0;
	for(var i=0;i<set.length;i++) {
		var marked = response[i].response;
		if(marked == null) {
			score += set[i].scoring[2];
		}
		else if(Number(marked) == set[i].correct) {
			score += set[i].scoring[0];
		}
		else {
			score += set[i].scoring[1];
		}
	}
	return score;
}


/*
Start button click event.
*/
$("#start_test").click(function() {
	$("#start_panel").hide();
	populateQuestionsList();
	flushQuestion(0);
	$("#quesanspanel").show();
	stage = 1;
	// start the timer and set up handler to update clock.
	timer_init();

});


/*
quit test button
*/
$("#quitTest").click(function() {
	if(stage == 1) {
		$("#quesanspanel").hide();
		$("#warnquitpanel").show();
		stage = 2;
	}
});



/*
warn page return button, brings you back to test.
*/
$("#warnquitreturn").click(function() {
	if(stage == 2) {			
		$("#quesanspanel").show();
		$("#warnquitpanel").hide();
		stage = 1;
	}
});


/*
irrationally quits the game, go home you are drunk.
*/
$("#warnquitconfirm").click(function() {
	if(stage == 2) {
		$("#warnquitpanel").hide();
		$("#testendpanel").show();
		stage = 3;
	}
	// stop timer.
});


/*
calculates score, useless !!!
*/
$("#scorecalcbutton").click(function() {
	if(stage == 3) {
		var thescoreis = calcScore();
		$(".scoreIs").html(thescoreis);
		$("#testendpanel").hide();
		$("#feedbackpanel").show();
		stage = 4;
	}
});



/*
downloads the feedback and student info !
*/
$("#feedbackSubmit").click(function(e) {
	e.preventDefault();
	if(stage == 4) {
		var info = {};
		info['name'] = $("#feedbackName").val();
		info['mail'] = $("#feedbackMail").val();
		info['phno'] = $("#feedbackPhno").val();
		info['feed'] = $("#feedbackField").val();
		console.log(info);
	}
});






/*
quesanspanel button functionalities
*/
$("#back").click(function() {
	if(current == 0)
		flushQuestion(set.length - 1);
	else
		flushQuestion(current-1);
});


$("#skip").click(function() {
	flushQuestion(((current+1)%(set.length)));
});

$("#save").click(function() {
	var ans = $("input:checked").val()
	if(ans == undefined) {
		response[current].response = null;
	}
	else {
		response[current].response = Number(ans);
	}

	flushQuestion(((current+1)%(set.length)));	
});