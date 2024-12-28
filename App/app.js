const Product = {
    Name: "Nike Air Max",
    ProductInfo: "Experience ultimate comfort and style with these iconic Nike Air Max sneakers.",
    price: 149.99,
};

function ProductInfo() {
    // Populate product details
    document.getElementsByClassName("product-card__title")[0].innerHTML = Product.Name;
    document.getElementsByClassName("product-card__description")[0].innerHTML = Product.ProductInfo;
    document.getElementsByClassName("product-card__price")[0].innerHTML = "$" + Product.price;

    // Add click event listener to button
    document.getElementById("product-card__btn").addEventListener("click", function () {
        const quantity = parseInt(document.getElementById("quantity").value, 10); // Get quantity from input
        if (!isNaN(quantity) && quantity > 0) {
            const total = Product.price * quantity;
            console.log("Total Price: $" + total.toFixed(2));
            document.getElementById("total-price").innerHTML = "Total Price: $" + total.toFixed(2);
        } else {
            console.log("Please enter a valid quantity.");
            document.getElementById("total-price").innerHTML = "Please enter a valid quantity.";
        }
    });
}

// Call the function to initialize
ProductInfo();


