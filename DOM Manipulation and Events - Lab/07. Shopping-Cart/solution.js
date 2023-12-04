// Function to manage shopping cart functionality
function solve() {
  // Get all "Add to Cart" buttons and the checkout button
  let addButtons = Array.from(document.getElementsByClassName("add-product"));
  let checkoutBtn = document.querySelector(".checkout");
  
  // Get the textarea for displaying cart and purchase information
  let textarea = document.getElementsByTagName("textarea")[0];

  // Arrays to store bought products and calculate total price
  let boughtProducts = [];
  let totalPrice = 0;

  // Add click event listeners to all "Add to Cart" buttons
  addButtons.forEach((btn) => {
    btn.addEventListener("click", addToCart);
  });

  // Function to handle adding products to the cart
  function addToCart(e) {
    // Get the parent product element
    let product = e.currentTarget.parentNode.parentNode;

    // Extract product title and price from the product element
    let productTitle = product.querySelector(".product-title").textContent;
    let productPrice = product.querySelector(".product-line-price").textContent;

    // Check if the product is not already in the cart
    if (!boughtProducts.includes(productTitle)) {
      boughtProducts.push(productTitle);
    }

    // Add the product price to the total
    totalPrice += Number(productPrice);

    // Update the textarea with the added product information
    textarea.value += `Added ${productTitle} for ${productPrice} to the cart.\n`;
  }

  // Add click event listener to the checkout button
  checkoutBtn.addEventListener("click", checkout);

  // Function to handle the checkout process
  function checkout(e) {
    // Update the textarea with the final purchase information
    textarea.value += `You bought ${boughtProducts.join(
      ", "
    )} for ${totalPrice.toFixed(2)}.`;

    // Remove event listeners from all "Add to Cart" buttons
    addButtons.forEach((btn) => {
      btn.removeEventListener("click", addToCart);
    });

    // Remove the checkout button event listener
    checkoutBtn.removeEventListener("click", checkout);
  }
}
