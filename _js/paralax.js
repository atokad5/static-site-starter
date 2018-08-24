export default function() {
	;(function($) {
		let didScroll = false;
		let $windowOffset = $(window).scrollTop();


		let updateScrollPosition = () => {
			didScroll = true;
			$windowOffset = $(window).scrollTop();
		}

		$.fn.inView = function(){
	    var win = $(window);
	    var obj = $(this);
	    var scrollPosition = win.scrollTop();
	    var visibleArea = win.scrollTop() + win.height() ;
	    var objEndPos = (obj.offset().top + obj.outerHeight());
	    return(visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
	  };


	


		let moveElements = () => {
			if(didScroll) {
				

				didScroll = false;
			}
			requestAnimationFrame(moveElements);

		}



		$(window).on('scroll', updateScrollPosition);
		requestAnimationFrame(moveElements);
	})(jQuery);
}