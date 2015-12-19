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
var now=null,sec;
function renderTime() {
	var min = parseInt(sec/60);
	var secs = sec%60;
	$('#topContainer1').html(min+':'+(secs>9?'':'0')+secs);
	sec--;
	if(sec==0)
	{
		clearInterval(timer);
		//do something
		alert("time is up");
	}
}

function timer_init() {
	sec = 3600;
  	timer = setInterval("renderTime()", 1000);
}

// Timer End


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


function generateRef() {
	var dgt = [2];
	
	dgt[0] = ['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z'];
	dgt[1] = ['1','2','3','4','5','6','7','8','9','0'];
	
	var ref = "";
	for(var i = 1;i<=8;i++) {
		var set = parseInt(Math.random()*2);
		var chr = parseInt(Math.random()*dgt[set].length);
		ref += dgt[set][chr];
	}
	return ref;
}


function saveTextAsFile(text) {
	var ref = generateRef();
	text = "REF\t\t\t::\t"+ref+"\n\n"+text;
	var textToWrite = text;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = ref+".txt";

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}


function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
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
		info['score'] = calcScore();
		var text = "Name \t\t::\t"+info['name']+"\nEmail \t\t::\t"+info['mail']+"\nPhone\t\t::\t"+info['phno']+"\nFeedback \t::\t"+info['feed']+"\n\nScore \t\t::\t"+info['score'];
		saveTextAsFile(text);
		$(".feedback_form").html("Thank You !");
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