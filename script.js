$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});

    //First Challenge 

    $("P").click(function() {
	    $("P").css("color", "red");
    });

    $("h2").hover(
        function(){
        $("h2").css("color", "lightblue");
        },
        function(){
        $("h2").css("color", "black");
    });

    $("h2").hover(
        function(){
        $(this).css("font-size", "150%");
        },
        function(){
        $(this).css("font-size", "100%");
    });

    $(".bottom_button").mouseenter(function() {
	    $("body").css("background-color", "black");
    });

    $(".bottom_button").mouseleave(function() {
	    $("body").css("background-color", "gray");
    });

    //Second Challenge 

    $("button:first").click(function(){
        $(this).hide(500);
    });

    // Third Challenge

    $("#mysql button").click(function(){
        $("#mysql p").toggle(500);
    });

    // Forth Challenge

    $("#python button").click(function(){
        $("#python p").slideToggle(500);
    });

    //Fifth Challenge

    $("#jquery button").mouseenter(function() {
	    $(this).fadeTo(500, .5);
    });

    $("#jquery button").mouseleave(function() {
	    $(this).fadeTo(500, 1);
    });


}); 
