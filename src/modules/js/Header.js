const header = () => {
  const nav = document.querySelector('.header__nav'),
    logo = document.querySelector('.header__logo'),
    ul = document.querySelector('ul');

  function logoTrigger() {
    if (nav.clientHeight === 0) {
      nav.style.height = 'auto';
      ul.style.transform = 'translateY(0)';
    } else {
      ul.style.transform = 'translateY(-100px)';
      nav.style.height = '0';
    }
  }
  function linkShow() {
    nav.style.height = 'auto';
    ul.style.transform = 'translateY(0)';
    logo.removeEventListener('click', logoTrigger);
  }
  function linkHidden() {
    ul.style.transform = 'translateY(-100px)';
    nav.style.height = '0';
    logo.addEventListener('click', logoTrigger);
  }

  if (window.innerWidth > 500) {
    linkShow();
  }
  if (window.innerWidth < 500) {
    linkHidden();
  }
  window.addEventListener('resize', () => {
    if (window.innerWidth > 500) {
      linkShow();
    }
    if (window.innerWidth < 500) {
      linkHidden();
    }
  });
};

export default header;
