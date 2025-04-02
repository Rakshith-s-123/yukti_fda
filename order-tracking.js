// order-tracking.js
document.addEventListener("DOMContentLoaded", () => {
    const statusElement = document.querySelector(".tracking-status p:nth-child(2)");
    const deliveryTimeElement = document.querySelector(".tracking-status p:nth-child(3)");

    let statuses = ["Preparing Order", "Out for Delivery", "Delivered"];
    let currentIndex = 0;

    function updateStatus() {
        if (currentIndex < statuses.length) {
            statusElement.textContent = `Status: ${statuses[currentIndex]}`;

            if (statuses[currentIndex] === "Delivered") {
                deliveryTimeElement.textContent = "Your order has been delivered!";
            } else {
                setTimeout(updateStatus, 5000); // Update every 5 seconds
            }

            currentIndex++;
        }
    }

    updateStatus(); // Start the status updates
});
