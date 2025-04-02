// restaurants.js
document.addEventListener("DOMContentLoaded", () => {
    const cuisineFilter = document.getElementById("cuisine");
    const restaurantCards = document.querySelectorAll(".restaurant-card");

    cuisineFilter.addEventListener("change", () => {
        const selectedCuisine = cuisineFilter.value.toLowerCase();

        restaurantCards.forEach((card) => {
            const cuisine = card.querySelector("p").textContent.split(":")[1].trim().toLowerCase();

            if (selectedCuisine === "all" || cuisine.includes(selectedCuisine)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
