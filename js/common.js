$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.top-products-slider').slick({
	slidesToShow: 4,
	arrows: true,
	infinite: false,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				variableWidth: true,
				appendArrows: '.top-products-slider__nav',
				infinite: false,
			}
		}
	]
});

$('.popular-manufacturers-slider').slick({
	slidesToShow: 4,
	arrows: true,
	infinite: false,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				variableWidth: true,
				appendArrows: '.popular-manufacturers-slider__nav',
				infinite: false,
			}
		}
	]
});

$('.partners-slider').slick({
	slidesToShow: 4,
	arrows: true,
	infinite: false,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				variableWidth: true,
				appendArrows: '.partners-slider__nav',
				infinite: false,
			}
		}
	]
});

$('.new-manufacturers-slider').slick({
	slidesToShow: 4,
	arrows: true,
	infinite: false,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				variableWidth: true,
				appendArrows: '.new-manufacturers-slider__nav',
				infinite: false,
			}
		}
	]
});

$('.btn-burger').on('click', function () {
	$(this).toggleClass('click');
	$('.nav-menu').fadeToggle();
});