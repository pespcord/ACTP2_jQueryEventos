
// ##### 1.
$( document ).ready(function() {
  // Handler for .ready() called.
	var img;
	var imagesAutor;
	var	name;
	var NuevaImagen;
	var SeleccionadaImagen;
	var NuevoAutor;
	var SeleccionadoAutor;
	var	followers ;
	var	likes ;
	var	following ;

// ##### 2. tarjeta abierta
	  $('.cards').on('click','.card', function(event){
	    event.preventDefault();
	   	event.stopPropagation();
		$(this).toggleClass('card--open');
	  });
// ##### 3. corazones
	  $('.cards').on('click','.card__like',function(event){
	    event.stopPropagation();
	    event.preventDefault();
	    	$(this).toggleClass('card__like--red');
	  });

// ##### 4
	  $('.cards').on('click','.card__follow-btn',function(event){
	    event.preventDefault();
	    event.stopPropagation();
	    	$(this).toggleClass('card__follow-btn--following');
	  });
// ##### 5
	$('#image').change(function(event){
		img = $(this).val();
		$('.create__image').children('img').attr("src","assets/images/squared/"+img)		
		NuevaImagen = $('.create__profile').children('img').attr("src");
		SeleccionadaImagen = $('#image').children(":selected").text();

	})
// ##### 6
	$('#author').change(function(e){
		imagesAutor = $(this).val();
		$('.create__profile').children('img').attr("src","assets/images/profiles/"+imagesAutor);
		NuevoAutor = $('.create__profile').children('img').attr("src");
		SeleccionadoAutor = $('#author').children(":selected").text();
	})
// ##### 7
	// var name = $('#name').val();
	// var followers = $('#followers').val();
	// var likes = $('#likes').val();
	// var following = $('#following').val();
	// console.log(name+'-'+followers+'-'+likes+'-'+following)

// ##### 8

$('.create__submit').on('click', function(event){
	event.preventDefault();
	event.stopPropagation();
	var name = $('#name').val();
	var followers = $('#followers').val();
	var likes = $('#likes').val();
	var following = $('#following').val();
	console.log(name+'-'+followers+'-'+likes+'-'+following)

    $('.cards').append('<li class="card">'
      +'<div class="card__highlight">'
       +' <img class="card__img" src="assets/images/squared/'+img+'" alt="">'
      +'</div>'
      +'<div class="card__content">'
        +'<div class="card__profile-container">'
          +'<img class="card__profile" src="assets/images/profiles/'+imagesAutor+'" alt="">'
        +'</div>'
        +'<div class="card__title">'
          +'<h2>'+name+'</h2>'
        +'</div>'
        +'<div class="card__author">'
          +'<h3 class="card__author-name">'+SeleccionadoAutor+'</h3>'
        +'</div>'
        +'<a class="card__like" href="#">'
          +'<i class="fas fa-heart"></i>'
        +'</a>'
        +'<div class="card__hidden">'
          +'<ul class="social">'
            +'<li class="social__element">'
              +'<div class="social__number">'+followers+'</div>'
              +'<div class="social__text">Followers</div>'
            +'</li>'
            +'<li class="social__element">'
              +'<div class="social__number">'+likes+'</div>'
              +'<div class="social__text">Likes</div>'
            +'</li>'
            +'<li class="social__element">'
              +'<div class="social__number">'+following+'</div>'
              +'<div class="social__text">Following</div>'
            +'</li>'
          +'</ul>'
          +'<div class="card__follow">'
            +'<button class="card__follow-btn">Seguir</button>'
          +'</div>'
        +'</div>'
      +'</div>'
    +'</li>');
  });




});

