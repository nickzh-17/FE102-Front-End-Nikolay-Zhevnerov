const reviews = [
	{
		author: {
			photo: './assets/images/review-1.png',
			name: 'Davis Rhiel Madsen',
			position: 'Manager',
		},
		comment:
			'Information security professionals manage all aspects of an organization’s security.',
	},
	{
		author: {
			photo: './assets/images/review-2.png',
			name: 'Jaydon Rosser',
			position: 'Manager',
		},
		comment:
			'Most modern web pages have huge DOM structures and this behavior would cost too much, resulting in slower loading pages.',
	},
	{
		author: {
			photo: './assets/images/review-3.png',
			name: 'Cooper Dorwart',
			position: 'Manager',
		},
		comment:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.',
	},
];
const onTabClick = event => {
	const ACTIVE_CLASS = 'tabs-section__simple-tab--active';

	const isTabActive = tab => tab.classList.contains(ACTIVE_CLASS);
	const currentTab = event.target;

	if (isTabActive(currentTab)) return;

	const currentActiveTab = document.querySelector('.' + ACTIVE_CLASS);
	currentActiveTab.classList.remove(ACTIVE_CLASS);

	currentTab.classList.toggle(ACTIVE_CLASS);

	return;
};

const updateReview = (reviewElement, review) => {
	const name = reviewElement.querySelector('.review__name');
	const photo = reviewElement.querySelector('.review__photo');
	const position = reviewElement.querySelector('.review__position');
	const comment = reviewElement.querySelector('.review__comment');

	name.textContent = review.author.name;
	photo.src = review.author.photo;
	position.textContent = review.author.position;
	comment.textContent = review.comment;
};

const changeSlideData = i => {
	const slideReview = document.querySelector('.slider__slide .review');
	updateReview(slideReview, reviews[i]);
};

const updateReviews = arr => {
	document
		.querySelectorAll('.reviews-section__content .review')
		.forEach((review, index) => {
			updateReview(review, reviews[index]);
		});
};
const onReviewSliderClick = event => {
	const toggleDotStyles = (prevDot, newDot) => {
		prevDot.classList.remove('selected');
		newDot.classList.add('selected');
	};

	const currentDot = document.querySelector('.slider__dot.selected');
	const currentSlidePosition = currentDot.id.at(-1);
	const newDot = event.target;
	const newSlidePosition = newDot.id.at(-1);

	if (currentSlidePosition === newSlidePosition) return null;

	changeSlideData(newSlidePosition);
	toggleDotStyles(currentDot, newDot);
};

changeSlideData(1);
updateReviews(reviews);

document.querySelectorAll('.tabs-section__simple-tab').forEach(tab => {
	tab.addEventListener('click', onTabClick);
});

document.querySelectorAll('.slider__dot').forEach((dotButton, index) => {
	dotButton.id = `slider_dot_${index}`;
	dotButton.addEventListener('click', onReviewSliderClick);
});
