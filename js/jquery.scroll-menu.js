(function($) {
	
	function changeHandler() {
		var topOffset = 0;
		var scrollTop = $(window).scrollTop();
		this.removeClass('scroll-menu-active').css('top', '').css('width', '');
		$('.scroll-menu-container').css('width', '').css('height', '');
		if (scrollTop < 10) {
			return;
		}
		this.each(function () {
			var $menu = $(this);
			var top = $menu.data('original-top');
			var newTop = scrollTop + topOffset;
			if (top < newTop) {
				$menu.parent('.scroll-menu-container').css('width', $menu.outerWidth()).css('height', $menu.outerHeight());
				$menu.addClass('scroll-menu-active');
				$menu.css('top', topOffset);
				$menu.css('width', $(window).width());
				topOffset += $menu.outerHeight(true);
			} else {
				return false;
			}
		});
	}

	$.fn.scrollMenu = function () {
		var menus = this;
		this.each(function () {
			var $menu = $(this);
			var top = $menu.offset().top;
			$menu.data('original-top', top);
			$menu.data('original-width', $menu.outerWidth());
			var $container = $('<div class="scroll-menu-container"></div>');
			$container.insertBefore($menu);
			$container.append($menu);
		});
		$(window).resize(function () {
			changeHandler.call(menus);
		});
		$(window).scroll(function () {
			changeHandler.call(menus);
		});
		return this;
	};

}(jQuery));