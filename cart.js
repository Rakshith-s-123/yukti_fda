// cart.js
document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalElement = document.querySelector(".checkout h2");
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCart() {
        cartItemsContainer.innerHTML = ""; // Clear existing items
        let total = 0;

        cartItems.forEach((itemName, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");

            // Example prices (you can replace this with dynamic pricing)
            const prices = {
                "Pasta Alfredo": 12.99,
                "Margherita Pizza": 15.99,
            };

            const price = prices[itemName] || 0;
            total += price;

            itemDiv.innerHTML = `
                <h3>${itemName}</h3>
                <p>$${price.toFixed(2)}</p>
                <button data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemDiv);

            // Add event listener to remove button
            itemDiv.querySelector("button").addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index");
                cartItems.splice(index, 1); // Remove item from array
                localStorage.setItem("cart", JSON.stringify(cartItems)); // Update localStorage
                updateCart(); // Refresh cart display
            });
        });

        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    updateCart(); // Initial rendering of cart
});
