let cartCount = 0;
let total = 0;

function addToCart(price) {
  cartCount++;
  total += price;

  document.getElementById("cartItems").textContent = "Items: " + cartCount;
  document.getElementById("totalPrice").textContent = "Total: ₹" + total;
}

function checkout() {
  if (cartCount === 0) {
    alert("Cart is empty!");
  } else {
    alert("Order placed! Total: ₹" + total);
    cartCount = 0;
    total = 0;

    document.getElementById("cartItems").textContent = "Items: 0";
    document.getElementById("totalPrice").textContent = "Total: ₹0";
  }
}
