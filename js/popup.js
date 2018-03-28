var link = document.querySelector(".search-btn");
var popup = document.querySelector(".modal");
var arrivalDate = popup.querySelector("[name=arrival]");
var leavingDate = popup.querySelector("[name=leaving]");
var form = popup.querySelector("form");

link.addEventListener("click", function (evt) {
evt.preventDefault();
if (!popup.classList.contains("animation")) {
  popup.classList.add("animation")
}
popup.classList.toggle("modal-hide");
arrivalDate.focus();
popup.classList.remove("js-booking-item");
popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
evt.preventDefault();
if(!arrivalDate.value && !leavingDate.value) {
  popup.classList.remove("js-booking-item");
  popup.classList.remove("modal-error");
  form.offsetWidth = form.offsetWidth;
  popup.classList.add("js-booking-item");
  popup.classList.add("modal-error");
}
});
