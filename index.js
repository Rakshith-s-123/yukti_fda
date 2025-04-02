// index.js
document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector("form");
    const featuredRestaurants = document.querySelectorAll(".restaurant-card");

    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const searchTerm = searchForm.search.value.toLowerCase();

        featuredRestaurants.forEach((restaurant) => {
            const restaurantName = restaurant.querySelector("h3").textContent.toLowerCase();
            if (restaurantName.includes(searchTerm)) {
                restaurant.style.display = "block";
            } else {
                restaurant.style.display = "none";
            }
        });
    });
});
