$(document).ready(function() {

wow = new WOW({
	mobile: false
});
wow.init();

/**Scrolls down to the category. False prevents it from flashing**/
function scroll(href) {
	href = $(this).attr("href");
	$('html, body').animate({ scrollTop: $(href).offset().top});
	return false;
}
    
// var scroll_pos = 0;
// $(document).scroll(function() { 
//  	scroll_pos = $(this).scrollTop();
//     if ((scroll_pos > 300) && (scroll_pos < 400)) {
//     	$("#bestiary").css('background-color', '#7ea3e7');
//     }
//  });


$("ul").on("click", "a", scroll);

})