"use strict"

// const url = 'http://localhost:8000';
// const headers = {
// 	"content-type": "application/json;charset=utf-8",
// 	"access-control-allow-origin": "*",
// 	"access-control-allow-credentials": true
// }

// const options = {
// 	root: document.querySelector('.scroll-list'),
// 	rootMargin: '0px',
// 	threshold: 0
// }

window.onload = () => {

	const menu = document.querySelector('.menu');

	const showModal = () => {
		document.querySelector('.overlay').style.display = "block";
	}

	const debounce = (fn, delay = 500) => {
		let timeoutId;
		return (...args) => {

			if (timeoutId) {
				clearTimeout(timeoutId);
			}

			timeoutId = setTimeout(() => {
				fn.apply(null, args)
			}, delay);
		};
	};

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

	window.addEventListener('scroll', debounce(function () {
		if (window.pageYOffset > 1600) {
			document.querySelector('.pageup').style.display = "block";
		}
		else {
			document.querySelector('.pageup').style.animation = "fadeToNone 0.5s ease-in-out";
			setTimeout(() => function () {
				document.querySelector('.pageup').style.display = "none";
				document.querySelector('.pageup').style.animation = "fadeInFromNone 0.5s ease-in-out";
			}(), 450);
		}
	}));
}