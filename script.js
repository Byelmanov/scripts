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
};


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

$(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.button').fadeIn();
        } else {
            $('.button').fadeOut();
        }
    });
});

$(".button").on("click", function(){
    $("html, body").animate({scrollTop: 0}, 500, function(){
    	$(".button").fadeOut();
    });
});

//anchor scroll
// 60 - size of menu

$(".contacts").click(function(){
    let anchor = $(this).attr("href");
	$("html, body").animate({
		scrollTop: $(anchor).offset().top - 60
	}, 500);
	hideMenu();
});