jQuery(document).ready(function(){
	smoothScroll.init({
		speed: 800,
		easing: 'easeInOutCubic',
		offset: 0,
		updateURL: true
	});
});

$(window).load(function(){
	$('body').addClass('loader');
})


