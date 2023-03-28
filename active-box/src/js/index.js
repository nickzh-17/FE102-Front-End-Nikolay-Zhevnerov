import Swiper, { Pagination } from 'swiper';
import '../../node_modules/swiper/modules/pagination/pagination.scss';
import '../../node_modules/swiper/swiper-bundle.min.css';

Swiper.use([Pagination]);

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	allowTouchMove: true,
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
