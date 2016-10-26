$(document).ready(function() {

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

$("#h").css('border-bottom-style', 'hidden');
$("#camp").css('border-bottom-style', 'hidden');
$("#affin").css('border-bottom-style', 'hidden');
$("#best").css('border-bottom-style', 'hidden');


/**Hover function for ios*/
 $(".beast").hover(function(){
 	var race = $(this).attr('id');
 	$('#' + race + ' #overlay').css('opacity', '1');},
 	function() {
 	var race = $(this).attr('id');
 	$('#' + race + ' #overlay').css('opacity', '0');
 });

/**Scrolls down to the category. False prevents it from flashing**/
function scroll(href) {
	href = $(this).attr("href");
	$('html, body').animate({ scrollTop: $(href).offset().top});
	return false;
}

/**Scrolls keeping track of the orange underline for the navbar.*/
var scroll_pos = 0;
$(document).scroll(function() { 
 	scroll_pos = $(this).scrollTop();
 	if (!isMobile) {
 		if ((scroll_pos > 200) && (scroll_pos < 1200)) {
			$("#camp").css('border-bottom-style', 'solid');
			$("#affin").css('border-bottom-style', 'hidden');
			$("#best").css('border-bottom-style', 'hidden');
    	} 
    	else if ((scroll_pos > 1201) && (scroll_pos < 2000)) {
    		$("#camp").css('border-bottom-style', 'hidden');
			$("#affin").css('border-bottom-style', 'hidden');
			$("#best").css('border-bottom-style', 'solid');
		}
		else if (scroll_pos > 2001) {
			$("#camp").css('border-bottom-style', 'hidden');
			$("#affin").css('border-bottom-style', 'solid');
			$("#best").css('border-bottom-style', 'hidden');
		} else {
			$("#camp").css('border-bottom-style', 'hidden');
			$("#affin").css('border-bottom-style', 'hidden');
			$("#best").css('border-bottom-style', 'hidden');
    	}
    } else {
    	return
    }
 });

/**Scrolls down to category when clicked.**/
$("ul").on("click", "a", scroll);

})