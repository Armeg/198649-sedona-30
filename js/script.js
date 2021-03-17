
  const onclick = document.querySelector(".search-hotels-form");
  let form = document.querySelector('.form-search-hotels');

  onclick.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle('search-hotels-form-disabled')
});

