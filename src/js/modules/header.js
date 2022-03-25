const header = document.querySelector('.page-header');
const headerTop = header.querySelector('.page-header__top');
const menuItemDropdowns = header.querySelectorAll('.main-nav__item--dropdown');
const searchBar = header.querySelector('.search');
const searchOpen = header.querySelector('.search__link');
const searchClose = header.querySelector('.search__close');

const HEADER_TOP_HEIGHT = headerTop.clientHeight;

const toggleMenuItemDropdown = () => {
  if (menuItemDropdowns) {
    menuItemDropdowns.forEach((item) => {
      const link = item.querySelector('.main-nav__link');
      link.addEventListener('click', (evt) => {
        evt.preventDefault();
        item.classList.toggle('main-nav__item--show');
      });
    });
  }
};

const openSearchBar = () => {
  if (searchBar && searchOpen) {
    searchOpen.addEventListener('click', (evt) => {
      evt.preventDefault();
      searchBar.classList.add('search--show');
    });
  }
};

const closeSearchBar = () => {
  if (searchBar && searchClose) {
    searchClose.addEventListener('click', () => {
      searchBar.classList.remove('search--show');
    });
  }
};

const toggleSearchBar = () => {
  openSearchBar();
  closeSearchBar();
};

const fixHeader = () => {
  if (header && headerTop) {
    if (window.pageYOffset >= HEADER_TOP_HEIGHT) {
      header.classList.add('page-header--fixed');
    } else {
      header.classList.remove('page-header--fixed');
    }
  }
};

const headerScroll = () => {
  window.addEventListener('scroll', () => {
    fixHeader();
  });

  window.addEventListener('load', () => {
    fixHeader();
  });
};

export {toggleMenuItemDropdown, toggleSearchBar, headerScroll};
