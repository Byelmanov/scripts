// functions for show and hide burger-menu
function hideMenu(){
	$( ".menu" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
		});
};

function showMenu(){
	$( ".menu" ).slideToggle( "slow", function() {
			$( ".hamburger" ).hide();
			$( ".cross" ).show();
		});
}


// burger menu
$(function() {
	$( ".cross" ).hide();
	$( ".menu" ).hide();
	$( ".hamburger" ).click(function() {
		showMenu();
	});
	$( ".cross" ).click(function() {
		hideMenu();
	});
});


// button to the top 

$(".button").on("click", function(){
    $("html, body").animate({scrollTop: 0}, 500);
});

//anchor scroll


$(".contacts").click(function(){
	$("html, body").animate({
		scrollTop: $("#test_id").offset().top
	}, 500);
	hideMenu();
});