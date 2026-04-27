// Product data
const products = [
  { id: 1, name: "Bouquet 1", price: 25, image: "Flower.jpg" },
  { id: 2, name: "Bouquet 2", price: 30, image: "IMG_5764.JPG" },
  { id: 3, name: "Bouquet 3", price: 28, image: "IMG_5765.JPG" },
  { id: 4, name: "Bouquet 4", price: 31, image: "IMG_5768.JPG" }
];

// Cart
let cart = [];

// Show products
function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.price} $</p>
      <button onclick="addToCart(${product.id})">Add to cart</button>
    `;

    productList.appendChild(div);
  });
}

// Add to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

// Update cart UI
function updateCart() {
  const cartList = document.getElementById("cart-items");
  const total = document.getElementById("total");

  cartList.innerHTML = "";
  let sum = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} $`;
    cartList.appendChild(li);
    sum += item.price;
  });

  total.textContent = sum;
}

// Order function
function order() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if (!name || !phone) {
    alert("Please fill all fields!");
    return;
  }

  alert("Order placed successfully!");
  cart = [];
  updateCart();
}

// Run when page loads
displayProducts();
