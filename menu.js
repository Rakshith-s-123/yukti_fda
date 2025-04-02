// menu.js
document.addEventListener("DOMContentLoaded", () => {
    function addToCart(itemName) {
        let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        cartItems.push(itemName);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        alert(`${itemName} has been added to your cart!`);
    }

    // Attach event listeners to all "Add to Cart" buttons
    document.querySelectorAll(".menu-item button").forEach((button) => {
        button.addEventListener("click", () => {
            const itemName = button.parentElement.querySelector("h3").textContent;
            addToCart(itemName);
        });
    });
});
