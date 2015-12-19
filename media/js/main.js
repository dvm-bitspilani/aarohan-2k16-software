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

	 	$("#qno").html(index+1);

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
	 				optionshtml += "<input type='radio' checked class='ansradio' name='answer' val='"+index+"' value='"+j+"'>&nbsp;&nbsp;&nbsp;"+quesEntry['options'][j]['desc']+"<br>";
	 			else 
	 				optionshtml += "<input type='radio' class='ansradio' name='answer' val='"+index+"' value='"+j+"'>&nbsp;&nbsp;&nbsp;"+quesEntry['options'][j]['desc']+"<br>";
	 		}
	 		else if(quesEntry['options'][j]['type'] == 'image')
	 			if(response[index].response == j)
	 				optionshtml += "<input type='radio' checked class='ansradio' name='answer' val='"+index+"' value='"+j+"'>&nbsp;&nbsp;<img src='"+quesEntry['options'][j]['desc']+"'><br>";
	 			else 
	 				optionshtml += "<input type='radio' class='ansradio' name='answer' val='"+index+"' value='"+j+"'>&nbsp;&nbsp;<img src='"+quesEntry['options'][j]['desc']+"'><br>";

	 	}

		$("#IOContent").append(optionshtml);

		current = index;
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


/*
Start button click event.
*/
$("#start_test").click(function() {
	$("#start_panel").hide();
	populateQuestionsList();
	flushQuestion(0);
	$("#quesanspanel").show();

	// start the timer and set up handler to update clock.


});


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