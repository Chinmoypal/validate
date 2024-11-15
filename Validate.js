const calculatePrice = function(price, discount = 10) {
    // Validate the price and discount inputs
    if (isNaN(price) || price <= 0) {
        alert("Please enter a valid positive price.");
        return;
    }
    if (isNaN(discount) || discount < 0 || discount > 100) {
        alert("Please enter a valid discount between 0 and 100.");
        return;
    }

    // Calculate the discounted price
    const discountedPrice = price - (price * (discount / 100));

    // Display the final price
    return discountedPrice;
};

// Function to prompt for user inputs
function promptUser() {
    let price = parseFloat(prompt("Enter the price of the product:"));
    let discount = prompt("Enter the discount percentage (leave blank for 10%):");

    // If the user leaves the discount blank, default to 10%
    if (discount === "") {
        discount = 10;
    } else {
        discount = parseFloat(discount);
    }

    const finalPrice = calculatePrice(price, discount);

    if (finalPrice !== undefined) {
        alert(`The final price after applying the discount is: $${finalPrice.toFixed(2)}`);
    }
}

// Invoke the function to prompt the user
promptUser();