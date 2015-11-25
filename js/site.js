jQuery(function ($) {
	// Init slyder hero canvas
	var canvas = document.getElementById('slyder-hero-canvas');
	var canvasContext = canvas.getContext("2d");
	var backgroundImage = new Image();
	backgroundImage.src = 'images/homemarq-keyring-B1.jpg';
	function reloadCanvas() {
		var $slyderHero = $('#slyder-hero');
		var containerWidth = $slyderHero.width();
		var containerHeight = $slyderHero.height();
		
		var width = backgroundImage.width;
		var height = backgroundImage.height;
		
		var aspectRatio = width/height;
		var scale = containerHeight/height;
		var scaledWidth = scale*width;
		
		var clipHeight = 0;
		var clipWidth = 0;
		if (scaledWidth > containerWidth) {
			clipHeight = height;
			clipWidth = containerWidth/scale;
		} else {
			scale = containerWidth/width;
			clipHeight = containerHeight/scale;
			clipWidth = width;
		}

		var clipOffsetX = (width - clipWidth)/2;
		var clipOffsetY = (height - clipHeight)/2; 
		
		canvas.width = containerWidth;
		canvas.height = containerHeight;
		canvasContext.drawImage(backgroundImage, parseInt(clipOffsetX), parseInt(clipOffsetY), parseInt(clipWidth), parseInt(clipHeight), 0, 0, containerWidth, containerHeight);
	}
	backgroundImage.onload = function () { reloadCanvas(); };
	$(window).resize(function() { reloadCanvas(); });
	
	// Toggle blur
	$('#navbar-toggle').click(function () {
		var $slyderHero = $('#slyder-hero');
		var containerWidth = $slyderHero.width();
		var containerHeight = $slyderHero.height();
		
		if ($(this).attr('aria-expanded') == 'false') {
			var radius = 0;
			var step = 10;
			var max = 50;
			var animationInterval = setInterval(function () {
				radius += step;
				if (radius > max) {
					clearInterval(animationInterval);
				}
				stackBlurCanvasRGBA('slyder-hero-canvas', 0, 0, containerWidth, containerHeight, step);
			}, 10);
			$slyderHero.find('.slyder-hero-items').fadeOut('fast');
		} else {
			reloadCanvas();
			$slyderHero.find('.slyder-hero-items').show();
		}
	});


	// Product options
	$('input.product-option').click(function () {
		var $productGroup = $($(this).data('product-group'));
		var $productDetails = $($(this).data('product-details'));
		$productGroup.addClass('product-details-hidden');
		$productDetails.removeClass('product-details-hidden');
	}).each(function () {
		$('input[name="' + this.name + '"]').first().click();
	});

	$('select.product-options').change(function () {
		var selectedIndex = this.selectedIndex;
		var $productGroup = $($(this.options[selectedIndex]).data('product-group'));
		var $productDetails = $($(this.options[selectedIndex]).data('product-details'));
		$productGroup.addClass('product-details-hidden');
		$productDetails.removeClass('product-details-hidden');
	}).each(function () {
		this.selectedIndex = 0;
	});


	// Anchor scroll
	$('a[href^="#"]').anchorScroll();
});