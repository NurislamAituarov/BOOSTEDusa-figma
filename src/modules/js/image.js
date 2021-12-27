import fon from '../../../image/RectangleFon.png';
import fon1 from '../../../image/item1.png';
import fon2 from '../../../image/item2.png';
import fon3 from '../../../image/electr.png';
import card1 from '../../../image/card1.png';
import card2 from '../../../image/card2.png';
import card3 from '../../../image/card3.png';
import card4 from '../../../image/card4.png';
import card5 from '../../../image/card5.png';
import slide1 from '../../../image/slide1.png';
import slide2 from '../../../image/slide2.png';
import slide3 from '../../../image/slide3.png';
import slide4 from '../../../image/slide4.png';
import slide5 from '../../../image/slide5.png';
import slide6 from '../../../image/slide6.png';
import slide7 from '../../../image/slide7.png';
import fast from '../../../image/fast.png';
import far from '../../../image/far.png';
import safe from '../../../image/safe.png';
import last from '../../../image/last.png';
import looking from '../../../image/looking.png';
import text1 from '../../../image/text1.png';
import text2 from '../../../image/text2.png';
import text3 from '../../../image/text3.png';
import text4 from '../../../image/text4.png';
import logo from '../../../image/Rectangle.png';
import usa from '../../../image/usa.png';
import v from '../../../image/v.png';
import footer__block_img1 from '../../../image/amex.png';
import footer__block_img3 from '../../../image/pay.png';
import footer__block_img4 from '../../../image/klarna.png';
import footer__block_img5 from '../../../image/card.png';
import footer__block_img6 from '../../../image/pay2.png';
import footer__block_img7 from '../../../image/v.png';
import footer__block_img8 from '../../../image/viza4.png';
import gif from '../../../image/gif.gif';

///////////////////////////////////////////////////////////////////////////////////

const windowHeight = document.documentElement.clientHeight;
let lazyImagePOsition = [];
let wrapperPosition = [];
const card = document.querySelectorAll('[alt="card" ]'),
  wrapper = document.querySelectorAll('.block__wrapper');

wrapper.forEach((item) => {
  wrapperPosition.push(parseInt(item.getBoundingClientRect().top + pageYOffset));
});

card.forEach((item) => {
  lazyImagePOsition.push(parseInt(item.getBoundingClientRect().top + pageYOffset));
});

function lazyWrapperPosition() {
  const page = wrapperPosition.filter((item) => {
    return pageYOffset > item - windowHeight;
  });

  wrapper.forEach((item, i) => {
    if (page.length >= i) {
      switch (i) {
        case 0:
          item.style.opacity = 1;
          item.style.display = '';

          break;
        case 1:
          item.style.opacity = 1;
          item.style.display = '';

          break;
        case 2:
          item.style.opacity = 1;
          item.style.display = '';

          break;
        case 3:
          item.style.opacity = 1;
          item.style.display = '';

          break;
        case 4:
          item.style.opacity = 1;
          item.style.display = '';

          break;
        case 5:
          item.style.opacity = 1;
          item.style.display = '';

          break;
        case 6:
          item.style.opacity = 1;
          item.style.display = '';

          break;
        default:
          item.style.opacity = 0;
          item.style.display = 'none';

          break;
      }
    } else {
      item.style.opacity = 0;
      item.style.display = 'none';
    }
  });
}

function lazyScrollCheck() {
  let index = lazyImagePOsition.findIndex((item) => {
    // console.log(item);
    return pageYOffset > item - windowHeight;
  });
  // console.log(index);
  card.forEach((item, i) => {
    if (index >= 0) {
      item.style.opacity = 1;
      switch (i) {
        case 0:
          item.setAttribute('src', card1);
          break;
        case 1:
          item.setAttribute('src', card2);
          break;
        case 2:
          item.setAttribute('src', card3);
          break;
        case 3:
          item.setAttribute('src', card4);
          break;
        case 4:
          item.setAttribute('src', card5);
          break;
      }
    } else {
      item.setAttribute('src', gif);
      item.style.opacity = 0;
    }
  });
}
window.addEventListener('scroll', lazyWrapperPosition);

window.addEventListener('scroll', lazyScrollCheck);

////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelector('#logo').setAttribute('src', logo);

document.querySelector('.main__block').style.backgroundImage = `url(${fon})`;
document.querySelector('.first__item').style.backgroundImage = `url(${fon1})`;
document.querySelector('.second__item').style.backgroundImage = `url(${fon2})`;
document.querySelector('.block__skateboards').style.backgroundImage = `url(${fon3})`;

// lazyImagePOsition.push(
//   parseInt(document.querySelector('#first__card').getBoundingClientRect().top + pageYOffset),
// );
// document.querySelector('#second__card').setAttribute('src', card2);
// document.querySelector('#three__card').setAttribute('src', card3);
// document.querySelector('#four__card').setAttribute('src', card4);
// document.querySelector('#five__card').setAttribute('src', card5);

document.querySelector('#slide1').setAttribute('src', slide1);
document.querySelector('#slide2').setAttribute('src', slide2);
document.querySelector('#slide3').setAttribute('src', slide3);
document.querySelector('#slide4').setAttribute('src', slide4);
document.querySelector('#slide5').setAttribute('src', slide5);
document.querySelector('#slide6').setAttribute('src', slide6);
document.querySelector('#slide7').setAttribute('src', slide7);

document.querySelector('#footer__block_img1').setAttribute('src', fast);
document.querySelector('#footer__block_img2').setAttribute('src', far);
document.querySelector('#footer__block_img3').setAttribute('src', safe);
document.querySelector('#footer__block_img4').setAttribute('src', last);

document.querySelector('#block__looking_img1').setAttribute('src', looking);
document.querySelector('#block__looking_img2').setAttribute('src', looking);

document.querySelector('#block__text1').setAttribute('src', text1);
document.querySelector('#block__text2').setAttribute('src', text2);
document.querySelector('#block__text3').setAttribute('src', text3);
document.querySelector('#block__text4').setAttribute('src', text4);

document.querySelector('#footer__block2_img').setAttribute('src', usa);

document.querySelector('#footer__block3_item-img1').setAttribute('src', footer__block_img1);
document.querySelector('#footer__block3_item-img3').setAttribute('src', footer__block_img3);
document.querySelector('#footer__block3_item-img4').setAttribute('src', footer__block_img4);
document.querySelector('#footer__block3_item-img5').setAttribute('src', footer__block_img5);
document.querySelector('#footer__block3_item-img6').setAttribute('src', footer__block_img6);
document.querySelector('#footer__block3_item-img7').setAttribute('src', footer__block_img7);
document.querySelector('#footer__block3_item-img8').setAttribute('src', footer__block_img8);
