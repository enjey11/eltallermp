//plugin
jQuery.fn.topLink = function(settings) {
	settings = jQuery.extend({
		min: 1,
		fadeSpeed: 100,
		ieOffset: 50
	}, settings);
	return this.each(function() {
		//listen for scroll
		var el = $(this);
		el.css('display','none'); //in case the user forgot
		$(window).scroll(function() {
			//stupid IE hack
			if(!jQuery.support.hrefNormalized) {
				el.css({
					'position': 'absolute',
					'top': $(window).scrollTop() + $(window).height() - settings.ieOffset
				});
			}
			if($(window).scrollTop() >= settings.min)
			{
				el.fadeIn(settings.fadeSpeed);
			}
			else
			{
				el.fadeOut(settings.fadeSpeed);
			}
		});
	});
};

$(document).ready(function(){
	//$('#nav').localScroll(800);
	
	/*RepositionNav();
	
	$(window).resize(function(){
		RepositionNav();
	});*/	

	$('.carousel').carousel({
		carouselWidth:726,
		carouselHeight:239,
		frontWidth:239,
		frontHeight:239,
		hMargin:0.9,
		slidesPerScroll:3,
		directionNav:true,
		shadow:false
	});
	
	//.parallax(xPosition, adjuster, inertia, outerHeight) options:
	//xPosition - Horizontal position of the element
	//adjuster - y position to start from
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#inicio').parallax("50%", 0, 0.1, true);
	$('#nosotros').parallax("50%", 0, 0.1, true);
	/*$('.bg').parallax("50%", 2500, 0.4, true);*/
	$('#third').parallax("50%", 2750, 0.3, true);

	$('#page').parallax("50%", 0, 0.3, true);

	$('#mouseScroll').one('mouseenter',function(){
		$(this).sprite({fps: 10, no_of_frames: 7});
	});

	$('#mouseScroll1, #mouseScroll2, #mouseScroll3, #mouseScroll4, mouseScroll5').one('mouseenter',function(){
		$(this).sprite({fps: 10, no_of_frames: 5});
	});
	
	var deck = new $.scrolldeck({
		slides: '.slide',
		buttons: '.nav li a',
		duration: 3000,
		//easing: 'easeInOutExpo'
	});


	/****************************** SCROLL TOP */
	$('#top-link').topLink({
		min: 400,
		fadeSpeed: 100
	});
	//smoothscroll
	$('#top-link').click(function(e) {
		e.preventDefault();
		$.scrollTo(0,900);
	});

	/****************************************** POPUP */
	$(".ajax").colorbox({width:"1000px", height:"700px",rel:'ajax'});
	$(".inline").colorbox({inline:true, width:"50%"});
	$("a.colorbox").colorbox({photo:true});
})