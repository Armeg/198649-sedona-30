const form_managment=document.querySelector(".search-hotels-form");let form=document.querySelector(".form-search-hotels");const date_arrive=form.querySelector("[name=hotel-date-arrive]"),date_leave=form.querySelector("[name=hotel-date-leave]"),inputPeople=form.querySelector("[name=hotel-number_of_people]"),inputChildren=form.querySelector("[name=hotel-number_of_children]");inputPeople.value=localStorage.getItem("people")||2,inputChildren.value=localStorage.getItem("children")||0,form.classList.add("search-hotels-form-disabled");let isStorageSupport=!0,storage="";try{storage=localStorage.getItem("people"),console.log(storage)}catch(e){isStorageSupport=!1}form_managment.addEventListener("click",function(e){e.preventDefault(),form.classList.remove("search-hotels-form-disabled"),form.classList.add("form-search-hotels"),storage&&(inputPeople.value=storage)}),form.addEventListener("submit",function(e){inputPeople.value&&inputChildren.value?isStorageSupport&&(localStorage.setItem("people",inputPeople.value),localStorage.setItem("children",inputChildren.value)):(e.preventDefault(),form.classList.add("modal-error"),console.log("write number of people and children"))}),window.addEventListener("keydown",function(e){console.log(e),"Escape"===e.key&&(alert("esc!"),form.classList.contains("form-search-hotels")&&(e.preventDefault(),form.classList.add("search-hotels-form-disabled")))}),form.addEventListener("submit",function(e){date_arrive.value&&date_leave.value?form.classList.remove("modal-error"):(e.preventDefault(),form.classList.remove("modal-error"),form.offsetWidth=form.offsetWidth,form.classList.add("modal-error"),console.log("write date"))});
