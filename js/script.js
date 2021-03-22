

  const form_managment = document.querySelector(".search-hotels-form");
  let form = document.querySelector('.form-search-hotels');
  const date_arrive = form.querySelector('[name=hotel-date-arrive]');
  const date_leave = form.querySelector('[name=hotel-date-leave]');
  //localStorage.setItem('people', '2');
  //localStorage.setItem('children', '0');
  const inputPeople = form.querySelector('[name=hotel-number_of_people]');
  const inputChildren = form.querySelector('[name=hotel-number_of_children]');
  inputPeople.value = localStorage.getItem('people') || 2;
  inputChildren.value = localStorage.getItem('children') || 0;

  // hide form

form.classList.add("search-hotels-form-disabled");

  let isStorageSupport = true;
  let storage = '';

  try {
    storage = localStorage.getItem('people');
    console.log(storage);
  } catch (err) {
    isStorageSupport = false;
  }

  form_managment.addEventListener("click", function (evt) {
    evt.preventDefault();
    //form.classList.toggle('form-search-hotels');
    //form.classList.toggle('search-hotels-form-disabled');
    form.classList.remove('search-hotels-form-disabled');
    form.classList.add('form-search-hotels');

    if (storage) {
      inputPeople.value = storage;
    }
});

form.addEventListener('submit', function (evt) {
  if ( !inputPeople.value || !inputChildren.value) {
  evt.preventDefault();
  form.classList.add('modal-error');
  console.log('write number of people and children');
  }  else {
    if (isStorageSupport) {
    localStorage.setItem('people', inputPeople.value);
    localStorage.setItem('children', inputChildren.value);
  }

}
});

window.addEventListener('keydown', function(evt) {
  console.log(evt);
  if(evt.key === "Escape"){
    alert('esc!');
    if(form.classList.contains('form-search-hotels')) {
      evt.preventDefault();
      form.classList.add('search-hotels-form-disabled');
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
