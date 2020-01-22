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

    // Challenge start at this point

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



}); 
