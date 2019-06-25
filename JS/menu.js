const $menu = document.querySelector('.menu')
const $btnMenuOpen = document.querySelector('.btnMenu_open')
const $btnMenuClose = document.querySelector('.btnMenu_close')
const $FecharMenu = document.querySelector('.fechar')
const $FecharMenu2 = document.querySelector('.fechar2')
const $FecharMenu3 = document.querySelector('.fechar3')
const $FecharMenu4 = document.querySelector('.fechar4')

$btnMenuOpen.addEventListener('click',function() {
	$menu.classList.add('menu_open')
})

$btnMenuClose.addEventListener('click',function(){
	$menu.classList.remove('menu_open')
})

$FecharMenu.addEventListener('click',function(){
	$menu.classList.remove('menu_open')
})

$FecharMenu2.addEventListener('click',function(){
	$menu.classList.remove('menu_open')
})

$FecharMenu3.addEventListener('click',function(){
	$menu.classList.remove('menu_open')
})


