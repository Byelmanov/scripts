// button on which user clicks -> scroll to the top of the page
$(".button").on("click", function(){
	$("body, html").animate({scrollTop: 0}, 500);
});