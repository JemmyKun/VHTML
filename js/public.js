$(function() {
	var page = {
		ready: function() {
			this.bindEvent();
		},
		bindEvent: function() {
			// head menu
			$(".head-menu>li").hover(
				function() {
					$(this)
						.find(".drop-menu")
						.show();
				},
				function() {
					$(this)
						.find(".drop-menu")
						.hide();
				}
			);
		}
	};
	page.ready();
});
