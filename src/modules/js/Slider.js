const slider = () => {
  const wrapper = document.querySelector('.accessories__wrapper'),
    left = document.querySelector('#img__left'),
    right = document.querySelector('#img__right');

  let index = 0;
  function leftSlider() {
    index -= 240;
    if (index === -240) {
      index = 1440;
    }
    wrapper.style.transform = `translateY(-${index}px)`;
  }
  function rightSlider() {
    index += 240;
    if (index === 1680) {
      index = 0;
    }
    wrapper.style.transform = `translateY(-${index}px)`;
  }

  if (window.innerWidth < 400) {
    left.addEventListener('click', leftSlider);
    right.addEventListener('click', rightSlider);
  }
  if (window.innerWidth > 400) {
    wrapper.style.transform = `translateY(0px)`;
    left.removeEventListener('click', leftSlider);
    right.removeEventListener('click', rightSlider);
  }
  window.addEventListener('resize', () => {
    if (window.innerWidth < 400) {
      left.addEventListener('click', leftSlider);
      right.addEventListener('click', rightSlider);
    } else {
      left.removeEventListener('click', leftSlider);
      right.removeEventListener('click', rightSlider);
      wrapper.style.transform = `translateY(0px)`;
    }
  });
};

export default slider;
