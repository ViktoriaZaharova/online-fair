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

$('.manufacturer-gallery').slick({
	slidesToShow: 1,
	variableWidth: true,
	infinite: false,
	arrows: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.products-slider').slick({
	slidesToShow: 6,
	infinite: false,
	arrows: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				variableWidth: true,
				appendArrows: '.products-slider__nav',
				infinite: false,
			}
		}
	]
});

$('.btn-burger').on('click', function () {
	$(this).toggleClass('click');
	$('.nav-menu').fadeToggle();
});

$('.btn-toggle-map').on('click', function (e) {
	e.preventDefault();
	$('.row-map').fadeToggle();
});

// show map
$('.btn-toggle-map').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content_map = $('.map-box'),
		content_catalog = $('.row-catalog');


	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.find('.btn-text').html('закрыть карту');

		content_map.fadeIn();
		content_catalog.fadeOut();
	} else {
		$this.removeClass('trigger');
		$this.find('.btn-text').html('показать на карте');

		content_catalog.fadeIn();
		content_map.fadeOut();
	}
});
// show map

$('.btn-toggle-requizites').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $('.requizites-box');


	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.find('span').html('скрыть реквизиты');

		content.fadeIn();
	} else {
		$this.removeClass('trigger');
		$this.find('span').html('показать реквизиты');

		content.fadeOut();
	}
});

// accordeon
function accordeon() {
	var panel = $('.panel_heading');

	if (panel.hasClass('in')) {
		$('.in').next('.block_hover').slideDown();
	}

	$('.panel_heading .block_title').on('click', function () {
		$(this).toggleClass('in').siblings('.block_hover').slideToggle();
	});
}

accordeon();
