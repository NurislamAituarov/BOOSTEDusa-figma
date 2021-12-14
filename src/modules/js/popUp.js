const formPopUp = () => {
  const btnUser = document.getElementById('header__contact_user'),
    closePopUp = document.querySelector('.close__popup'),
    wrapper = document.querySelector('.wrapper__popUp');

  function popUpShow() {
    wrapper.style.display = 'block';
    document.querySelector('html, body').style.overflowY = 'hidden';
  }
  function popUpHidden() {
    wrapper.style.display = 'none';
    document.querySelector('html, body').style.overflowY = '';
  }

  const timerPopUp = setTimeout(() => {
    popUpShow();
  }, 5000);
  btnUser.addEventListener('click', () => {
    formWrapper.append(form);
    popUpShow();
    clearTimeout(timerPopUp);
  });

  window.addEventListener('click', (e) => {
    if (e.target === wrapper) {
      popUpHidden();
    }
  });
  closePopUp.addEventListener('click', () => {
    popUpHidden();
  });

  //  form /////////////////////////
  const form = document.querySelector('.form'),
    formWrapper = document.querySelector('.form__wrapper'),
    input = document.querySelectorAll('._req'),
    nameInput = document.querySelector('[name="name"]'),
    emailInput = document.querySelector('[name="email"]'),
    textarea = document.querySelector('[name="message"]'),
    checkbox = document.querySelector('#checkbox'),
    checkboxLabel = document.querySelector('.item__checkbox'),
    loader = document.querySelector('.lds-spinner');

  checkbox.addEventListener('change', (el) => {
    if (checkbox.checked) {
      checkboxLabel.style.borderBottom = '';
    } else {
      checkboxLabel.style.borderBottom = '1px solid red';
    }
  });

  input.forEach((el) => {
    const div = document.createElement('div');
    div.classList.add('_error');
    div.innerHTML = 'Обязательное поля';

    el.addEventListener('input', (e) => {
      if (el.value === '') {
        el.parentElement.append(div);
      } else {
        div.remove();
      }

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
    const warning = document.createElement('div');
    warning.classList.add('warning');
    warning.innerHTML = 'Заполните все поля';

    if (
      nameInput.value !== '' &&
      emailInput.value !== '' &&
      checkbox.checked &&
      textarea.value !== ''
    ) {
      if (form.lastChild === document.querySelector('.warning')) {
        document.querySelector('.warning').remove();
      }

      const formData = new FormData(form);
      const obj = {};
      formData.forEach((item, i) => (obj[i] = item));

      form.remove();
      loader.style.display = 'block';

      request(obj)
        .then((response) => {
          input.forEach((el) => (el.value = ''));
          checkbox.checked = false;
          console.log(response);

          loader.style.display = 'none';
          const sent = document.createElement('div');
          sent.classList.add('sent');
          sent.innerHTML = '<h2>Успешно отправлено </h2>';
          formWrapper.append(sent);
        })
        .catch((err) => {
          console.log('Error');
        })
        .finally(() => {
          document.querySelector('html, body').style.overflowY = '';
          setTimeout(
            () => ((wrapper.style.display = 'none'), document.querySelector('.sent').remove()),
            500,
          );
        });
    } else {
      if (form.lastChild !== document.querySelector('.warning')) {
        form.appendChild(warning);
      }
      if (!checkbox.checked) {
        checkboxLabel.style.borderBottom = '1px solid red';
      } else {
        checkboxLabel.style.borderBottom = '';
      }
    }
  }
};

export default formPopUp;
