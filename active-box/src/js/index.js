import Swiper, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const BURGER_CLASS = 'burger';
const BURGER_ACTIVE_CLASS = 'opened';

const getClass = className => `.${className}`;

Swiper.use([Pagination]);

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	allowTouchMove: true,
	loop: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const onBurgerClick = event => {
	const burgerElement = event.target.closest('.burger');
	console.log(burgerElement);
	burgerElement.classList.toggle('opened');
	burgerElement.querySelector('.burger__button').classList.toggle('opened');
	burgerElement.querySelector('.burger__body').classList.toggle('opened');
};

class Burger {
	constructor() {
		this.button = document.querySelector('.burger');
		this.button.addEventListener('click', onBurgerClick);
	}
}

const burger = new Burger();
