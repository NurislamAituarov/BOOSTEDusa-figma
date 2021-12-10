const header = () => {
  const nav = document.querySelector('.header__nav'),
    logo = document.querySelector('.header__logo'),
    ul = document.querySelector('ul');

  if (window.innerWidth > 500) {
    nav.style.height = 'auto';
    ul.style.transform = 'translateY(0)';
  }
  if (window.innerWidth < 500) {
    ul.style.transform = 'translateY(-100px)';
    nav.style.height = '0';
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 500) {
      nav.style.height = 'auto';
      ul.style.transform = 'translateY(0)';
    }
    if (window.innerWidth < 500) {
      ul.style.transform = 'translateY(-100px)';
      nav.style.height = '0';
    }
  });

  logo.addEventListener('click', () => {
    if (nav.clientHeight === 0) {
      nav.style.height = 'auto';
      ul.style.transform = 'translateY(0)';
    } else {
      ul.style.transform = 'translateY(-100px)';
      nav.style.height = '0';
    }
  });
};

export default header;
