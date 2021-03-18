
  const form_managment = document.querySelector(".search-hotels-form");
  let form = document.querySelector('.form-search-hotels');
  const date_arrive = form.querySelector('[name=hotel-date-arrive]');
  const date_leave = form.querySelector('[name=hotel-date-leave]');
  const numberOfPeople = form.querySelector('[name=hotel-number_of_people]');
  const numberOfChildren = form.querySelector('[name=hotel-number_of_children]');
  const people = localStorage.getItem('numberOfPeople');
  const children = localStorage.getItem('numberOfChildren');

  form_managment.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle('search-hotels-form-disabled');
    form.classList.toggle('form-search-hotels');
});

try {
  people = localStorage.getItem('numberOfPeople');
  children = localStorage.getItem('numberOfChildren');
} catch (err) {
  isStorageSupport = false;
}

form.addEventListener('submit', function (evt) {
if (!people.value || !children.value) {
  evt.preventDefault();
  form.classList.add('modal-error');
  console.log('write number of people and children');
} else {
  if (isStorageSupport) {
    localStorage.setItem('people', people.value);
    localStorage.setItem('children', children.value)
  }
}
});


form.addEventListener('submit', function (evt) {
  if (!date_arrive.value || !date_leave.value) {
    evt.preventDefault();
    form.classList.add('modal-error');
    console.log('write date');
  } else {
    form.classList.remove('modal-error');
  }
  });
