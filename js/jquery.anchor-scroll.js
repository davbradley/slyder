(function($) {

	function clickHandler() {
		var href = this.getAttribute('href');
		if (href && href.indexOf('#') == 0) {
			var top = $(href).offset().top;
			$(document.body).animate({
				scrollTop: top
			}, 600);
		}
		return false;
	}

	$.fn.anchorScroll = function () {
		this.click(clickHandler);
		return this;
	};

}(jQuery));