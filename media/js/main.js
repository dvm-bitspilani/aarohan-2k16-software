/*
stage 0 : before test starts
stage 1 : as soon as start button is clicked, quesanspanel is loaded, timer starts
stage 2 : test ends, either quitting or time up, button to calculate score
stage 3 : calculates score and displays, {we need to find a way to take in response}
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
		var frame = "<button id='q"+set[obj].num+"' value='"+set[obj].num+"' class='quesbutton unattempted-ques'>"+qno+"</button>"
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
function flushQuestion(number) {
	var quesEntry = null;
	for(var i=0;i<set.length;i++) {
		if(set[i].num == number) {
			quesEntry = set[i];
			break;
		}
 	}

 	if(quesEntry != null) {

	 	$("#qno").html(number);

	 	var questionhtml = quesEntry.ques;
	 	if (quesEntry.ques_img != null) {
	 		questionhtml += "<br><img src='"+quesEntry.ques_img+"' />"
	 	}

	 	$("#IOContent").html("");
	 	$("#IOContent").append(questionhtml+"<br><br>");

	 	var optionshtml = ""

	 	for(var j=0;j<quesEntry['options'].length;j++) {
	 		if(quesEntry['options'][j]['type'] == 'text') {
	 			if(response[number-1].response == j)
	 				optionshtml += "<input type='radio' checked class='ansradio' name='answer' val='"+number+"' value='"+j+"'>&nbsp;&nbsp;&nbsp;"+quesEntry['options'][j]['desc']+"<br>";
	 			else 
	 				optionshtml += "<input type='radio' class='ansradio' name='answer' val='"+number+"' value='"+j+"'>&nbsp;&nbsp;&nbsp;"+quesEntry['options'][j]['desc']+"<br>";
	 		}
	 		else if(quesEntry['options'][j]['type'] == 'image')
	 			if(response[number-1].response == j)
	 				optionshtml += "<input type='radio' checked class='ansradio' name='answer' val='"+number+"' value='"+j+"'>&nbsp;&nbsp;<img src='"+quesEntry['options'][j]['desc']+"'><br>";
	 			else 
	 				optionshtml += "<input type='radio' class='ansradio' name='answer' val='"+number+"' value='"+j+"'>&nbsp;&nbsp;<img src='"+quesEntry['options'][j]['desc']+"'><br>";

	 	}

		$("#IOContent").append(optionshtml);

		current = number;
		response[number-1].visited = true;
		response[number-1].visits++;
	}

	else {
		console.log("call to : "+number);
		console.log("privacy tampered !");
	}

}


/*
Start button click event.
*/
$("#start_test").click(function() {
	$("#start_panel").hide();
	populateQuestionsList();
	flushQuestion(1);
	$("#quesanspanel").show();

	// start the timer and set up handler to update clock.


});


$("#back").click(function() {
	flushQuestion((Math.abs(current-2)%(set.length)) + 1);
});


$("#skip").click(function() {
	flushQuestion(((current)%(set.length)) + 1);
});

$("#save").click(function() {
	var ans = $("input:checked").val()
	if(ans == undefined) {
		response[current-1].response = null;
	}
	else {
		response[current-1].response = Number(ans);
	}

	flushQuestion((Math.abs(current-2)%(set.length)) + 1);

});