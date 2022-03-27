const header = document.querySelector('.page-header');
const headerTop = header.querySelector('.page-header__top');
const submenuItems = header.querySelectorAll('.main-nav__item--dropdown');
const navLinks = header.querySelectorAll('.main-nav__link:not(.main-nav__link--with-icon)');
const searchBar = header.querySelector('.search');
const searchOpen = header.querySelector('.search__link');
const searchClose = header.querySelector('.search__close');
const headerToggle = header.querySelector('.page-header__toggle');

const breakpointMd = window.matchMedia('(max-width: 1023px)');

const openMenu = () => {
  headerToggle.ariaPressed = 'true';
  document.body.classList.add('no-scroll');
  header.classList.add('page-header--show-menu');
};

const closeMenu = () => {
  headerToggle.ariaPressed = 'false';
  document.body.classList.remove('no-scroll');
  header.classList.remove('page-header--show-menu');

  submenuItems.forEach((item) => {
    item.classList.remove('main-nav__item--show')
  });
};

const toggleMenu = () => {
  if (headerToggle) {
    headerToggle.addEventListener('click', () => {
      if (headerToggle.ariaPressed === 'true') {
        closeMenu();
      }
      else {
        openMenu();
      }
    });

    if (navLinks) {
      navLinks.forEach((menulink) => {
        menulink.addEventListener('click', () => {
          if (headerToggle.ariaPressed === 'true') {
            closeMenu();
          }
        });
      });
    }
  }

  try {
    breakpointMd.addEventListener('change', closeMenu);
  } catch (e1) {
    try {
      // Safari < 15
      breakpointMd.addListener(closeMenu);
    } catch (e2) {
      console.error(e2);
    }
  }
};

const toggleMenuItemDropdown = () => {
  if (submenuItems) {
    submenuItems.forEach((item) => {
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
  let headerTopHeight = headerTop.clientHeight;

  if (header && headerTop) {
    if (window.pageYOffset >= headerTopHeight) {
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

// const toggleHeaderFix = () => {
//   const checkBreakpoint = () => {
//     if (!breakpointMd.matches) {
//       window.addEventListener('scroll', fixHeader);
//       window.addEventListener('load', fixHeader);
//     } else {
//       window.removeEventListener('scroll', fixHeader);
//       window.removeEventListener('load', fixHeader);
//     }
//   }
//
//   checkBreakpoint();
//
//   try {
//     breakpointMd.addEventListener('change', checkBreakpoint);
//   } catch (evt1) {
//     try {
//       // Safari < 15
//       breakpointMd.addListener(checkBreakpoint);
//     } catch (evt2) {
//       console.error(evt2);
//     }
//   }
// };

export {toggleMenuItemDropdown, toggleSearchBar, headerScroll, toggleMenu};
