(function() {

	$.fn.newLavaLampMenu = function (options) {

		options = $.extend({
			overlap: 20,
			speed: 750,
			reset: 1500,
			effect: 'easeOutBack',
			bgColor: '#5ca2e2'
		}, options);

		return this.each(function() {
			
			var self = $(this),
				current = $('a.current-link', self),
				floater,
				reset;

			$('<span class="floater"></span>').appendTo(self).css({
				height: current.outerHeight() + options.overlap,
				width: current.outerWidth(),
				top: current.position().top - options.overlap / 2,
				left: current.position().left,
				backgroundColor: options.bgColor
			});

			floater = $('span.floater', self);

			$('a', self).hover(function () {
				clearTimeout(reset);
				floater.animate({
					left: $(this).position().left,
					width: $(this).outerWidth()
				}, {
					duration: options.speed,
					easing: options.effect,
					queue: false
				});
			}, function () {
				floater.animate({
					left: $(this).position().left,
					width: $(this).outerWidth(),
				}, {
					duration: options.speed,
					easing: options.effect,
					queue: false
				});

				reset = setTimeout(function () {
					floater.animate({
						left: current.position().left,
						width: current.outerWidth()
					}, options.speed)
				}, options.reset);
			});
		});
	};
})(jQuery);