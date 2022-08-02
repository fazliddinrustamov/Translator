var elFormItself = document.querySelector(".form-itself");
var elEnterDay = document.querySelector(".enter-day");

var elResultTranslation = document.querySelector(".result-translation");

elFormItself.addEventListener("submit", function(evt) {
  evt.preventDefault();

  if (elEnterDay.value == "Dushanba") {
    elResultTranslation.textContent = "Monday";
  } else if (elEnterDay.value == "dushanba") {
    elResultTranslation.textContent = "monday";
  } else if (elEnterDay.value == "Seshanba") {
    elResultTranslation.textContent = "Tuesday";
  } else if (elEnterDay.value == "seshanba") {
    elResultTranslation.textContent = "tuesday";
  } else if (elEnterDay.value == "Chorshanba") {
    elResultTranslation.textContent = "Wednesday";
  } else if (elEnterDay.value == "chorshanba") {
    elResultTranslation.textContent = "wednesday";
  } else if (elEnterDay.value == "Payshanba") {
    elResultTranslation.textContent = "Thursday";
  } else if (elEnterDay.value == "payshanba") {
    elResultTranslation.textContent = "thursday";
  } else if (elEnterDay.value == "Juma") {
    elResultTranslation.textContent = "Friday";
  } else if (elEnterDay.value == "juma") {
    elResultTranslation.textContent = "friday";
  } else if (elEnterDay.value == "Shanba") {
    elResultTranslation.textContent = "Saturday";
  } else if (elEnterDay.value == "shanba") {
    elResultTranslation.textContent = "saturday";
  } else if (elEnterDay.value == "Yakshanba") {
    elResultTranslation.textContent = "Sunday";
  } else if (elEnterDay.value == "yakshanba") {
    elResultTranslation.textContent = "sunday";
  } else {
    elResultTranslation.textContent = "Add week day only in Uzbek language!!!";
  }
});