import Swiper, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

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
