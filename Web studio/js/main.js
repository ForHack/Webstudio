$(function() {

	// Activating Slick Slider
	$('.slider__wrap').slick({
		dots: true,
		arrows: true,
		prevArrow: '<div class="slick-next my-arrow-prev"></div>',
		nextArrow: '<div class="slick-prev my-arrow-next"></div>'
	});

	$('.clients__slider').slick({
		arrows: true,
		slidesToShow: 4,
		dots: false,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-next my-arrow-prev"></div>',
		nextArrow: '<div class="slick-prev my-arrow-next"></div>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					dots: true
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			}
		]
	});

	 $("#wr-tabs").on("click", ".tab", function(){
	     var tabs = $("#wr-tabs .tab"),
	         cont = $("#wr-tabs .tab-cont");
	       // Удаляем классы active
	       tabs.removeClass("active");
	       cont.removeClass("active");
	       // Добавляем классы active
	      $(this).addClass("active");
	       cont.eq($(this).index()).addClass("active");

	      return false;
 	  });

	$('.discount__slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-next my-arrow-prev"></div>',
		nextArrow: '<div class="slick-prev my-arrow-next"></div>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	})

	$('.burger').on('click', function() {
		$('.header__navigation').toggleClass('show-menu');
		$('.dark-overlay').addClass('overlay-show');
		$('.dark-overlay').on('click', function() {
			$('.header__navigation').removeClass('show-menu');
			$(this).removeClass('overlay-show')
		});
	});

	$('.development__slider').slick({
		dots: true,
		arrows: true,
		prevArrow: '<div class="slick-next my-arrow-prev"></div>',
		nextArrow: '<div class="slick-prev my-arrow-next"></div>'
	})

	$('.marketing__slider').slick({
		arrows: true,
		slidesToShow: 2,
		prevArrow: '<div class="slick-next my-arrow-prev"></div>',
		nextArrow: '<div class="slick-prev my-arrow-next"></div>',
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			}
		]
	})

	$('.mobile__slider').slick({
		arrows: true,
		prevArrow: '<div class="slick-next my-arrow-prev"></div>',
		nextArrow: '<div class="slick-prev my-arrow-next"></div>'
	})

});