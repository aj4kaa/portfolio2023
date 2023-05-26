"use strict"

window.onload = () => {

	const menu = document.querySelector('.menu');

	const showModal = () => {
		document.querySelector('.overlay').style.display = "block";
	}

	const hideModal = () => {
		document.querySelector('.overlay').style.animation = "fadeToNone 0.5s ease-in-out";
		setTimeout(() => function () {
			document.querySelector('.overlay').style.display = "none";
			document.querySelector('.overlay').style.animation = "fadeInFromNone 0.5s ease-in-out";
		}(), 450);
	}

	document.querySelector('.hamburger').addEventListener('click', () => {
		document.querySelector('.hamburger span').classList.toggle('active');
		menu.classList.toggle('active');
		if (menu.classList.contains('active')) {
			showModal();
		} else {
			hideModal();
		}
	});
	document.querySelectorAll('.skills__percent').forEach((e) => {
		e.nextElementSibling.style.width = e.innerHTML;
	});
}