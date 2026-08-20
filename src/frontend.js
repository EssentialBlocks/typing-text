jQuery(document).ready(function ($) {
	// typed.min.js is a separate handle; bail out rather than throwing a
	// ReferenceError if a caching or optimisation plugin drops it.
	if (typeof Typed === "undefined") {
		return;
	}

	$(".eb-typed-wrapper").each(function () {
		const $content = $(this).find(".eb-typed-content");

		// Generate array of strings for TypedJs
		let strings = [];
		$(this)
			.find(".eb-typed-text")
			.each(function () {
				strings.push(this.innerHTML);
			});

		// typed.js throws on an empty strings array.
		if (strings.length === 0) {
			return;
		}

		const options = {
			strings: strings,
			typeSpeed: $content.data("type-speed"),
			startDelay: $content.data("start-delay"),
			smartBackspace: $content.data("smart-backspace"),
			backSpeed: $content.data("back-speed"),
			backDelay: $content.data("back-delay"),
			fadeOut: $content.data("fade"),
			fadeOutDelay: $content.data("fade-delay"),
			loop: $content.data("loop"),
			showCursor: $content.data("cursor"),
		};

		$(this)
			.find(".eb-typed-view")
			.each(function () {
				// Guard against a second init on the same node (block rendered
				// twice, or the script enqueued more than once on a page).
				if (this.dataset.ebTypedInit === "1") {
					return;
				}
				this.dataset.ebTypedInit = "1";
				new Typed(this, options);
			});
	});
});
