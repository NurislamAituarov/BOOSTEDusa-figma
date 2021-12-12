const formPopUp = () => {
  const btnUser = document.getElementById('header__contact_user'),
    closePopUp = document.querySelector('.close__popup'),
    wrapper = document.querySelector('.wrapper__popUp');

  const timerPopUp = setTimeout(() => {
    wrapper.style.display = 'block';
    document.querySelector('html, body').style.overflowY = 'hidden';
  }, 5000);

  btnUser.addEventListener('click', () => {
    formWrapper.append(form);
    wrapper.style.display = 'block';
    document.querySelector('html, body').style.overflowY = 'hidden';
    clearTimeout(timerPopUp);
  });

  window.addEventListener('click', (e) => {
    if (e.target === wrapper) {
      wrapper.style.display = 'none';
      document.querySelector('html, body').style.overflowY = '';
    }
  });

  closePopUp.addEventListener('click', () => {
    wrapper.style.display = 'none';
    document.querySelector('html, body').style.overflowY = '';
  });

  //  form /////////////////////////
  const form = document.querySelector('.form'),
    formWrapper = document.querySelector('.form__wrapper'),
    btnSubmit = document.querySelector('[type="submit"]'),
    input = document.querySelectorAll('._req'),
    nameInput = document.querySelector('[name="name"]'),
    emailInput = document.querySelector('[name="email"]'),
    textarea = document.querySelector('[name="message"]'),
    checkbox = document.querySelector('#checkbox');

  input.forEach((el) => {
    el.addEventListener('input', (e) => {
      ///// validation email
      if (el === emailInput) {
        const req = /^[\w-\.\d*]+@[\w\d]+(\.\w{2,4})$/;
        if (el.value.search(req)) {
          el.style.border = '1px solid red';
        } else {
          el.style.border = '';
        }
      }
      ///// validation name/

      if (el === nameInput) {
        if (el.value.match(/\d/g) || el.value.length <= 3) {
          el.style.border = '1px solid red';
        } else {
          el.style.border = '';
        }
      }
      ///////////////textarea
      if (el === textarea) {
        if (el.value.length <= 3) {
          el.style.border = '1px solid red';
        } else {
          el.style.border = '';
        }
      }
    });
  });

  // Запрос

  form.addEventListener('submit', formSend);

  const request = async (object) => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object),
    });
    return await result.json();
  };

  function formSend(e) {
    e.preventDefault();

    if (
      nameInput.value !== '' &&
      emailInput.value !== '' &&
      checkbox.checked &&
      textarea.value !== ''
    ) {
      document.querySelectorAll('._error').forEach((el) => {
        el.remove();
      });

      const formData = new FormData(form);
      const obj = {};
      formData.forEach((item, i) => (obj[i] = item));
      request(obj)
        .then((response) => {
          input.forEach((el) => (el.value = ''));
          checkbox.checked = false;
          console.log(response);

          form.remove();
          const sent = document.createElement('div');
          sent.classList.add('sent');
          sent.innerHTML = '<h2>Успешно отправлено </h2>';
          formWrapper.append(sent);
        })
        .catch((err) => {
          console.log('Error');
        })
        .finally(() => {
          document.querySelector('body').style.overflowY = '';
          setTimeout(() => (wrapper.style.display = 'none'), 500);
        });
    } else {
      input.forEach((el) => {
        const div = document.createElement('div');
        div.classList.add('_error');
        div.innerHTML = 'Обязательное поля';

        if (el.value === '') {
          el.parentElement.append(div);
        } else {
          div.remove();
        }
      });
    }
  }
};

export default formPopUp;
