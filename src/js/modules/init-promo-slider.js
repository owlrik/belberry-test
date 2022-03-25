import Swiper from 'swiper';

const promoSlider = document.querySelector('.promo .swiper-container');

const initSlider = (slider) => new Swiper(slider, {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

const initPromoSlider = () => {
  if (!promoSlider) {
    return;
  }

  initSlider(promoSlider);
};

export {initPromoSlider};
