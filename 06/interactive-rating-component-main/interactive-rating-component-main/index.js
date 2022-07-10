let btnSubmit = document.getElementById("submit-btn");
let elRate = document.getElementById("rate");
let elRatingCard = document.getElementById("rating-card");
let elThkCard = document.getElementById("thk-card");
// console.log(btnSubmit);

// let formOne = document.forms[0];

let rating;

btnSubmit.addEventListener("click", function () {
  rating = document.querySelector(".inrating:checked").value;
  elRatingCard.style.display = "none";
  elRate.innerHTML = rating;
  elThkCard.style.display = "block";
});
