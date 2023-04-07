let ratingCard = document.getElementById("rating-card");
let thankYouCard = document.getElementById("thank-you-card");
let submit = document.getElementById("submit");
let selectedRating = document.getElementById("selected-rating");
let selectedNumber = "";
let rates = document.querySelectorAll(".number-button");

submit.addEventListener("click", () => {
    ratingCard.style.display = "none";
    selectedRating.innerText = selectedNumber;
    thankYouCard.style.display = "block";
});

rates.forEach(rate => {
    rate.addEventListener("click", () => {
        selectedNumber = rate.innerHTML;
    });
});


