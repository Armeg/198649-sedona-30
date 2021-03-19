
  const form_managment = document.querySelector(".search-hotels-form");
  let form = document.querySelector('.form-search-hotels');
  const date_arrive = form.querySelector('[name=hotel-date-arrive]');
  const date_leave = form.querySelector('[name=hotel-date-leave]');
  const people = form.querySelector('[name=hotel-number_of_people]');
  const children = form.querySelector('[name=hotel-number_of_children]');

  let numberPeople = localStorage.getItem('people');
  let numberChildren = localStorage.getItem('children');

  let isStorageSupport = true;
  let storage = '';

  try {
  storage = localStorage.getItem('numberPeople');
  children = localStorage.getItem('numberChildren');
} catch (err) {
  numberPeople = false;
}


  form_managment.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle('search-hotels-form-disabled');
    form.classList.toggle('form-search-hotels');
    people.focus();
    if (numberPeople) {
      localStorage.setItem('people', people.value);
      localStorage.setItem('children', children.value);
    }
});

  form.addEventListener('submit', function (evt) {
    if ( !numberPeople.value || !numberChildren.value) {
    evt.preventDefault();
    form.classList.add('modal-error');
    console.log('write number of people and children');
    }  else {
      if (isStorageSupport) {
      localStorage.setItem('people', numberPeople.value);
      localStorage.setItem('children', numberChildren.value);
    }

  }
  });


window.addEventListener('keydown', function(evt) {
  if (evt.keycode === 27) {
    if(form.classList.contains('form-search-hotels')) {
      evt.preventDefault();
      form.classList.remove('form-search-hotels');
    }
  }
});


form.addEventListener('submit', function (evt) {
  if (!date_arrive.value || !date_leave.value) {
    evt.preventDefault();
    form.classList.remove('modal-error');
    form.offsetWidth = form.offsetWidth;
    form.classList.add('modal-error');
    console.log('write date');
  } else {
    form.classList.remove('modal-error');
  }
  });
