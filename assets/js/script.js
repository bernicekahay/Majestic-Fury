$(document).ready(function() {

wow = new WOW({
	mobile: false
});
wow.init();

$("#h").css('border-bottom-style', 'hidden');
$("#camp").css('border-bottom-style', 'hidden');
$("#affin").css('border-bottom-style', 'hidden');
$("#best").css('border-bottom-style', 'hidden');


/**Scrolls down to the category. False prevents it from flashing**/
function scroll(href) {
	href = $(this).attr("href");
	$('html, body').animate({ scrollTop: $(href).offset().top});
	return false;
}
    
var scroll_pos = 0;
$(document).scroll(function() { 
 	scroll_pos = $(this).scrollTop();
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
 });


$("ul").on("click", "a", scroll);

})