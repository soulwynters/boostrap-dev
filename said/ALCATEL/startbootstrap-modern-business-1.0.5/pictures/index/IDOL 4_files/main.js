(function(window, $, document) {
	'use strict';
	
	var $window = $(window);

    var initialize = function (context) {
    	var $page = $('body > #page');
    	var $mainNavBtn = $page.children('header').find('#main-nav > ul > li > .dropdown-toggle');
    	var $subNavContent = $page.children('header').find('#main-nav > ul > li > .sub-nav-container');
    	var $showMobileMenuBtn = $page.children('header').find('#show-mobile-menu');
    	var $mainNav = $page.children('header').find('#main-nav');
    	var $country = $page.children('footer, header').find('.country a, .country-btn');
    	var $footer = $page.children('footer');
    	var $carousel = $('.carousel');
    	var $videoLink = $('.video-link');
    	var $overlay = $('.overlay');
    	var desktopMinWidth = 992;
    	
    	// Affix block
    	var affixBlock = function() {
    		$('[data-spy="affix"]').each(function() {
    			var obj = $(this);
    			obj.width(obj.parent().width());
    			if ($(this).data('bs.affix') !== undefined) {
    				obj.data('bs.affix').options.offset.top = obj.attr('data-mobile-offset-top') || 0;
    				obj.data('bs.affix').options.offset.bottom = $footer.outerHeight() + 80;
    			} else { 				
	    			obj.data('offset-top', obj.attr('data-mobile-offset-top') || 0);
	    			obj.data('offset-bottom', $footer.outerHeight() + 80);	
    			}
    		});
    	};
    	affixBlock();
    	
    	// Set footer
    	var setFooter = function() {
    		$page.css('paddingBottom', $footer.outerHeight());
    	};
    	setFooter();
    	
		// Resize window
    	$window.resize(function() {
    		affixBlock();
    		if (Modernizr.mq('(min-width: ' + desktopMinWidth + 'px)')) {
    			$('body').css('overflow', 'auto');
    		} else if ($mainNav.hasClass('active')) {
    			$('body').css('overflow', 'hidden');
    		}
    		setFooter();
    	});    	
    	
    	// Main nav buttons
    	$mainNavBtn.click(function() {
    		$(this).parent().toggleClass('opened');
    	});
    	
    	// Show mobile menu
    	$showMobileMenuBtn.click(function() {
    		$mainNav.toggleClass('active');
    		($mainNav.hasClass('active')) ? $('body').css('overflow', 'hidden') : $('body').css('overflow', 'auto');
    		$overlay.toggleClass('visible');
    	});
    	
    	// Overlay
    	$overlay.click(function() {
    		$('body').css('overflow', 'auto');
    		$overlay.removeClass('visible');
    		$mainNav.removeClass('active');	
    	});
    	
    	// Sub nav content
    	$subNavContent.on('mouseleave', function() {
    		$(this).parent().removeClass('opened');
    	});
    	
    	// Swipe
    	$carousel.on('swipeleft', function(e) {
    		$(this).carousel('next');
    	});
    	$carousel.on('swiperight', function(e) {
    		$(this).carousel('prev');
    	});
    	
    	// country
	    $country.venobox({
	        frameheight: $window.height() - 200
	    });
	    
	    // tips
		$videoLink.venobox();
		
    };

    $(function () {
        initialize(document);
    });
    
})(window, jQuery, window.document);
