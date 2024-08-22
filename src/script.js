// import Swiper from 'swiper';
// import 'swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
// import 'swiper/modules/navigation.min.css';
// import 'swiper/modules/pagination.min.css';

let main = document.querySelector('.main-block');
let review = document.querySelector('.review-block');
let product = document.querySelector('.product');
let info = document.querySelector('.about-block');
let mainLink = document.querySelector('.header-link');
let blockFirst = document.querySelector('.block-dash');
let blockSecond = document.querySelectorAll('.block-dash')[1];
let blockThird = document.querySelectorAll('.block-dash')[2];
let reviewLink = document.querySelectorAll('.header-link')[1];
let aboutLink = document.querySelectorAll('.header-link')[2];

console.log(product);

mainLink.addEventListener('click', () => {
  blockFirst.classList.add('active-link');
  blockSecond.classList.remove('active-link');
  blockThird.classList.remove('active-link');
  main.classList.remove('hide');
  product.classList.remove('hide');
  review.classList.add('hide');
  info.classList.add('hide');
});

reviewLink.addEventListener('click', () => {
  blockFirst.classList.remove('active-link');
  blockSecond.classList.add('active-link');
  blockThird.classList.remove('active-link');
  main.classList.add('hide');
  product.classList.add('hide');
  review.classList.remove('hide');
  info.classList.add('hide');
});

aboutLink.addEventListener('click', () => {
  blockFirst.classList.remove('active-link');
  blockSecond.classList.remove('active-link');
  blockThird.classList.add('active-link');
  main.classList.add('hide');
  product.classList.add('hide');
  review.classList.add('hide');
  info.classList.remove('hide');
});
