document.addEventListener('DOMContentLoaded',function(){
	var openMenu = document.getElementById('openMenu');
	var menu = document.getElementById('menu');

	openMenu.addEventListener('click', function() {
		menu.classList.toggle('active');
	});
});