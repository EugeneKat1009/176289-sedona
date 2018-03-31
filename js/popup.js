var button = document.querySelector(".search-btn");
var popup = document.querySelector(".booking-form");
var arrivalDate = popup.querySelector("[name=arrival]");
var leavingDate = popup.querySelector("[name=leaving]");
var form = document.querySelector("form");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!popup.classList.contains("animation")) {
    popup.classList.add("animation")
  }
  popup.classList.toggle("modal-hide");
  arrivalDate.focus();
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if (!arrivalDate.value && !leavingDate.value) {
    popup.classList.remove("modal-error");
    form.offsetWidth = form.offsetWidth;
    popup.classList.add("modal-error");
  }
});
