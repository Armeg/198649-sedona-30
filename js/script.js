
  const form_managment = document.querySelector(".search-hotels-form");
  let form = document.querySelector('.form-search-hotels');
  const date_arrive = form.querySelector('[name=hotel-date-arrive]');
  const date_leave = form.querySelector('[name=hotel-date-leave]')


  form_managment.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle('search-hotels-form-disabled');
    form.classList.toggle('form-search-hotels');
});

form.addEventListener('submit', function (evt) {
if (!date_arrive.value || !date_leave.value) {
  evt.preventDefault();
  form.classList.add('modal-error');
  console.log('write dates');
} else {
  form.classList.remove('modal-error');
}
});
