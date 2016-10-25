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
//     if (scroll_pos > 200) {
//     	$("ul").css('background-color', '#302e2e');
//     	$("li a").css('color', 'white');
//     } else {
//      	$("ul").css('background-color', '#ffff');
//     	$("li a").css('color', '#302e2e');
//       	$("#logo").css('color', '#302e2e');
//     }
//  });


$("ul").on("click", "a", scroll);

})