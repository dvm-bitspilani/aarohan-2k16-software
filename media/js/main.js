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



function updateScore(current) {
    
}


$("#start_test").click(function() {
	$("#start_panel").hide();
	$("#quesanspanel").show();

	// start the timer and set up handler to update clock.

	
});




$('.qButton').click(function() {
	var attempted = $(this).hasClass('nonClickableQuestion');
	var queriedFor = parseInt($(this).html().substring(1));
	if(!attempted) {
		$.ajax({
			url : '/question/',
			type : "GET",
			data : $.param({ no : queriedFor }),
			success : function(data) {
				if(data.status == 1)
					$('#numQuestion').html('Question '+queriedFor);
					$('#IOContent').html(data.content);
					presentQuestion = queriedFor;
					canUseDoubleDip = data.cdd;
			}
		});
	}
});

$('#answerSubmit').click(function() {
	var ans = $('#answerBox').val();
	var ddu = (doubleDipUsed==0)?false:true;
	$.ajax({
		url : '/question/',
		type : "POST",
		data : $.param({ answer : ans, no : presentQuestion, dd : ddu }),
		success : function(data) {
			alert(data);
		}
	});	
});