$(document).ready(function(){
	$(window).scroll(function() {
		if ($(document).scrollTop() > 150) {
			$("#menu").css('background-color', '#0087c9');
			$("#menu").css('transition', '0.5s');
		} else {
			$('#menu').css('background-color', 'transparent');
		}
	});
});
