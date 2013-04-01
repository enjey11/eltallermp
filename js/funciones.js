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
	
	//.parallax(xPosition, adjuster, inertia, outerHeight) options:
	//xPosition - Horizontal position of the element
	//adjuster - y position to start from
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#inicio').parallax("50%", 0, 0.1, true);
	$('#nosotros').parallax("50%", 0, 0.1, true);
	/*$('.bg').parallax("50%", 2500, 0.4, true);*/
	$('#third').parallax("50%", 2750, 0.3, true);
	
	var deck = new $.scrolldeck({
		slides: '.slide',
		buttons: '.nav li a',
		duration: 1000,
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



	/******************************* FILTRO DE IMAGENES */

	//comenzamos aplicandole un evento click a las etiquetas de tipo ancla
	//que se encuentran en la lista (todos, rojos, azules, amarillo)
	$('#filter ul li a').click(function() {
		
		$('#filter ul li a').removeClass('active');
		$(this).addClass('active');
		//el texto al cual dimos click lo pasamos a minusculas, 
		//le quitamos los espacios en blanco y lo asignamos a la variable
		//textoFiltro
		var textoFiltro = $(this).find('span').text().toLowerCase().replace(/\s/g,"-");
		
		//si el texto es igual a 'todos' mostramos todos los elementos que contengan la clase hidden
		//y a dicho elemento le removemos la clase hidden
		//la clase hidden es opcional, en éste caso la usamos solo como referencia
		//puedes llamarla como quieras o incluso no utilizarla
		if(textoFiltro == 'todos') 
		{
			$('div#filtros div.hidden')/*.fadeIn('slow')*/.removeClass('hidden');
		}
		//de lo contrario hacemos lo siguiente
		else
		{
			//aqui empieza la magia
			
			//hacemos un bucle con el metodo each para
			//obtener todos los divs que se encuentren dentro de 
			//la clase filtros
			$('#filtros div').each(function() {
				
				//entonces comparamos
				//si el elemento NO tiene una clase llamada con el mismo valor que
				//nuestra variable textoFiltro, entonces se ocultará utilizando el metodo
				//fadeOut() de jQuery
				if(!$(this).hasClass(textoFiltro)) 
				{
					$(this).show('slow').addClass('hidden');
				}
				//de lo contrario se mostrará utilizando el método
				//fadeIn() de jQuery
				else 
				{
					$(this).show('slow').removeClass('hidden');
				}
			});
		}
		
		return false;
	});

	/****************************************** POPUP */
	$(".ajax").colorbox({width:"1000px", height:"700px",rel:'ajax'});
	$(".inline").colorbox({inline:true, width:"50%"});
})