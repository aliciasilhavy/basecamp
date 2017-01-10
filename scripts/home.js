    var topOffset = new Array();

    function scrollFunction() {

    	var scrollHeight = $(window).scrollTop();
    	var headerCounter = 0;
    	var scrolled = 0;
    	var headerItems = $('.sectionTitle').length;

    	$('.sectionTitle').each(function (index, el) {

    		var elementHeight = $(this).outerHeight();

    		var nextElementHeight = 0;
    		var nextElement;

    		if (index !== $('.sectionTitle').length - 1) {
    			nextElementHeight = $('.fa-icon').eq(index + 1).outerHeight();
    			nextElement = $('.sectionTitle').eq(index + 1);
    		}

    		if (scrollHeight >= topOffset[headerCounter] && (scrollHeight < topOffset[headerCounter + 1] || headerCounter == headerItems - 1)) {

    			scrolled = 1;

    			if (scrollHeight >= topOffset[headerCounter + 1] - elementHeight) {
    				$(this).css({
    					position: "fixed",
    					top: (-(scrollHeight - (topOffset[headerCounter + 1] - elementHeight))) + 63
    				});
    				nextElement.css({
    					position: "fixed",
    					top: topOffset[headerCounter + 1] - scrollHeight + 63
    				});
    				$('body').css({
    					"padding-top": elementHeight + nextElementHeight + 63
    				});
    				return false;
    			} else {
    				$(this).css({
    					position: "fixed",
    					top: 63,
    					left: 7
    				});
    				$('body').css({
    					"padding-top": elementHeight
    				});
    				if (nextElement != undefined) {
    					nextElement.css({
    						position: "static",
    					});
    				}
    			}

    		} else {
    			$(this).css({
    				position: "static"
    			});
    		}

    		headerCounter++;
    	});

    	if (scrolled == 0) {
    		$('body').css({
    			"padding-top": 0
    		});
    	}
    }

    $(function () {
    	$('.sectionTitle').each(function () {
    		topOffset.push($(this).offset().top - 63);
    	});
    });

    $(window).scroll(scrollFunction);
