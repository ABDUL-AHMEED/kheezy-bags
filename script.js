/* script.js */

// 1. Initialize the cart counter variable
let cartCount = 0;

// 2. Select the HTML element where the cart number is displayed
const cartCountElement = document.getElementById('cart-count');

// 3. Select all the "Buy Now" buttons on the page
const buyButtons = document.querySelectorAll('.buy-btn');

// 4. Loop through each button and add a click event listener
buyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Increase the cart count by 1
        cartCount++;
        
        // Update the number shown on the screen
        cartCountElement.textContent = cartCount;
        
        // Optional: Change button text temporarily to give feedback to the user
        const originalText = button.textContent;
        button.textContent = 'Added! ✓';
        button.style.backgroundColor = '#2ec4b6'; // Changes to a nice teal color
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = ''; // Resets back to your CSS red
        }, 1000);
    });
});