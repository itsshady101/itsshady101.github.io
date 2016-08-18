document.addEventListener('DOMContentLoaded',function(){
	smoothScroll.init({
	    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
	    selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
	    speed: 700, // Integer. How fast to complete the scroll in milliseconds
	    easing: 'easeInOutCubic', // Easing pattern to use
	    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
	    updateURL: true, // Boolean. If true, update the URL hash on scroll
	    callback: function ( anchor, toggle ) {} // Function to run after scrolling
	});

	var openMenu = document.getElementById('openMenu');
	var menu = document.getElementById('menu');

	openMenu.addEventListener('click', function() {
		menu.classList.toggle('active');
	});
});