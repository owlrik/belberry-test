import  {initPromoSlider} from "./modules/init-promo-slider";
import {toggleMenuItemDropdown, toggleSearchBar, headerScroll} from "./modules/header";
// import {polyfillObjectFit} from './utils/polyfill-object-fit';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // только если ie11
  // https://github.com/fregante/object-fit-images
  // polyfillObjectFit();

  // Modules
  // ---------------------------------
  // initSubmenu();
  toggleMenuItemDropdown();
  toggleSearchBar();
  headerScroll();
  initPromoSlider();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    // initModals();
  });
});

// ---------------------------------

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();
