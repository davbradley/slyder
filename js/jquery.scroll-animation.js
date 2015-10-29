(function($) {
	
	function changeHandler() {
		var scrollTop = $(window).scrollTop();
		this.each(function () {
			var $item = $(this);
			var rate = $item.data('scroll-animation-rate') || 1.0;
			var property = $item.data('scroll-animation-property') || 'margin-left';
			var max = $item.data('scroll-animation-max') || 100;
			var value = Math.min(max, parseInt(scrollTop * rate));
			$item.css(property, value);
		});
	}

	$.fn.scrollAnimation = function () {
		var items = this;
		$(window).resize(function () {
			changeHandler.call(items);
		});
		$(window).scroll(function () {
			changeHandler.call(items);
		});
		return this;
	};

}(jQuery));