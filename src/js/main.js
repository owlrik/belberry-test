import  {initPromoSlider} from "./modules/init-promo-slider";
import {toggleMenuItemDropdown, toggleSearchBar, headerScroll, toggleMenu} from "./modules/header";
import {forEachPolyfill} from './utils/ie-foreach';
import svg4everybody from 'svg4everybody';
import picturefill from 'picturefill';
import polyfillObjectFit from 'object-fit-images';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // только если ie11
  // https://github.com/fregante/object-fit-images
  // polyfillObjectFit();
  forEachPolyfill();
  svg4everybody();
  picturefill();
  polyfillObjectFit();

  // Modules
  // ---------------------------------
  // initSubmenu();
  toggleMenu();
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
