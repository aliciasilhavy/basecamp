/* show/hide animations */
function showAnimation(selector) {
	$(selector).addClass("show").addClass("openAnimate").removeClass("hide").removeClass("closeAnimate");
};

function hideAnimation(selector) {
	$(selector).removeClass("openAnimate").removeClass("show").addClass("closeAnimate");
	setTimeout(function () {
		$(selector).addClass("hide")
	}, 200);
};


$(".close").click(function () {
	hideAnimation("#searchwindow");
	hideAnimation("#popup");
});

$("#menu-burger").click(function () {
	showAnimation("#popup");
});

$("#search-icon").click(function () {
	showAnimation("#searchwindow");
});

/* Animating menu dropdown */

function showMenu(selector) {
	$(selector).addClass("showBlock").addClass("openAnimate").removeClass("hide").removeClass("closeAnimate");
};

function hideMenu(selector) {
	$(selector).removeClass("openAnimate").addClass("closeAnimate");
	setTimeout(function () {
		$(selector).addClass("hide");
		$(selector).removeClass("showBlock");
	}, 200);
};

function downClose(selector) {
	$(selector).addClass("fa-times").removeClass("fa-arrow-down");
	$(selector).parent().nextAll().slideDown(200);
}

function closeDown(selector) {
	$(selector).addClass("fa-arrow-down").removeClass("fa-times");
	$(selector).parent().nextAll().slideUp(200);
}

$("#Favorites").click(function () {
	if ($("#Favorites").hasClass("fa-arrow-down")) {
		downClose("#Favorites");
		showMenu(".Favorites");
	} else {
		closeDown("#Favorites");
		hideMenu(".Favorites");
	}
});

$("#Insperation").click(function () {
	if ($("#Insperation").hasClass("fa-arrow-down")) {
		downClose("#Insperation");
		showMenu(".Insperation");
	} else {
		closeDown("#Insperation");
		hideMenu(".Insperation");
	}
});

$("#Resources").click(function () {
	if ($("#Resources").hasClass("fa-arrow-down")) {
		downClose("#Resources");
		showMenu(".Resources");
	} else {
		closeDown("#Resources");
		hideMenu(".Resources");
	}
});
