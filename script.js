// ===== COMPLETE PRODUCT DATABASE =====
const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: 5500,
    category: "vegetables",
    subcategory: "Fruits",
    image: "Tomatoes.jpg",
    rating: 4.5,
    sold: 1234,
    unit: "kg",
  },
  {
    id: 2,
    name: "Red Onions",
    price: 3000,
    category: "vegetables",
    subcategory: "Bulbs",
    image: "onions.jpg",
    rating: 4.3,
    sold: 987,
    unit: "kg",
  },
  {
    id: 3,
    name: "Fresh Garlic",
    price: 9000,
    category: "vegetables",
    subcategory: "Bulbs",
    image: "Garlic.jpg",
    rating: 4.7,
    sold: 567,
    unit: "kg",
  },
  {
    id: 4,
    name: "Fresh Spinach",
    price: 3500,
    category: "vegetables",
    subcategory: "Leafy Greens",
    image: "Spinach.jpg",
    rating: 4.6,
    sold: 876,
    unit: "bunch",
  },
  {
    id: 5,
    name: "Fresh Kale",
    price: 3500,
    category: "vegetables",
    subcategory: "Leafy Greens",
    image: "Fresh Kale.jpg",
    rating: 4.4,
    sold: 654,
    unit: "bunch",
  },
  {
    id: 6,
    name: "Mushrooms",
    price: 10000,
    category: "vegetables",
    subcategory: "Fungi",
    image: "Mushrooms.jpg",
    rating: 4.8,
    sold: 432,
    unit: "kg",
  },
  {
    id: 7,
    name: "Zucchini",
    price: 4500,
    category: "vegetables",
    subcategory: "Squash",
    image: "Zucchini.jpg",
    rating: 4.2,
    sold: 321,
    unit: "kg",
  },
  {
    id: 8,
    name: "Squash",
    price: 4000,
    category: "vegetables",
    subcategory: "Squash",
    image: "Squash.jpg",
    rating: 4.1,
    sold: 234,
    unit: "kg",
  },
  {
    id: 9,
    name: "Green Peppers",
    price: 4500,
    category: "vegetables",
    subcategory: "Peppers",
    image: "Green Pepper.jpg",
    rating: 4.5,
    sold: 543,
    unit: "kg",
  },
  {
    id: 10,
    name: "Lettuce",
    price: 3500,
    category: "vegetables",
    subcategory: "Leafy Greens",
    image: "Lettuce.jpg",
    rating: 4.3,
    sold: 432,
    unit: "head",
  },
  {
    id: 11,
    name: "Green Beans",
    price: 4500,
    category: "vegetables",
    subcategory: "Legumes",
    image: "Green beans.jpg",
    rating: 4.4,
    sold: 321,
    unit: "kg",
  },
  {
    id: 12,
    name: "Cucumber",
    price: 4000,
    category: "vegetables",
    subcategory: "Fruits",
    image: "Cucumber.jpg",
    rating: 4.3,
    sold: 289,
    unit: "kg",
  },
  {
    id: 13,
    name: "Cabbage",
    price: 5000,
    category: "vegetables",
    subcategory: "Leafy Greens",
    image: "Cabbage.jpg",
    rating: 4.4,
    sold: 198,
    unit: "head",
  },
  {
    id: 14,
    name: "Irish Potatoes",
    price: 4500,
    category: "root",
    subcategory: "Tubers",
    image: "Potatoes.jpg",
    rating: 4.6,
    sold: 765,
    unit: "kg",
  },
  {
    id: 15,
    name: "Sweet Potatoes",
    price: 4000,
    category: "root",
    subcategory: "Tubers",
    image: "sweet potatoes.jpg",
    rating: 4.7,
    sold: 654,
    unit: "kg",
  },
  {
    id: 16,
    name: "Cassava",
    price: 3500,
    category: "root",
    subcategory: "Tubers",
    image: "cassava.jpg",
    rating: 4.3,
    sold: 432,
    unit: "kg",
  },
  {
    id: 17,
    name: "Yams",
    price: 6000,
    category: "root",
    subcategory: "Tubers",
    image: "yams.jpg",
    rating: 4.4,
    sold: 321,
    unit: "kg",
  },
  {
    id: 18,
    name: "Ginger",
    price: 7000,
    category: "root",
    subcategory: "Rhizomes",
    image: "ginger.jpg",
    rating: 4.8,
    sold: 567,
    unit: "kg",
  },
  {
    id: 19,
    name: "Apples",
    price: 12000,
    category: "fruits",
    subcategory: "Pome Fruits",
    image: "apples.jpg",
    rating: 4.7,
    sold: 987,
    unit: "kg",
  },
  {
    id: 20,
    name: "Oranges",
    price: 6000,
    category: "fruits",
    subcategory: "Citrus",
    image: "oranges.jpg",
    rating: 4.6,
    sold: 876,
    unit: "kg",
  },
  {
    id: 21,
    name: "Mangoes",
    price: 8000,
    category: "fruits",
    subcategory: "Tropical",
    image: "mangoes.jpg",
    rating: 4.9,
    sold: 1234,
    unit: "kg",
  },
  {
    id: 22,
    name: "Bananas",
    price: 5000,
    category: "fruits",
    subcategory: "Tropical",
    image: "bananas.jpg",
    rating: 4.5,
    sold: 2100,
    unit: "bunch",
  },
  {
    id: 23,
    name: "Plantains",
    price: 4500,
    category: "fruits",
    subcategory: "Tropical",
    image: "row bananas.jpg",
    rating: 4.4,
    sold: 1543,
    unit: "bunch",
  },
  {
    id: 24,
    name: "Avocado",
    price: 8000,
    category: "fruits",
    subcategory: "Tropical",
    image: "avocado.jpg",
    rating: 4.8,
    sold: 876,
    unit: "kg",
  },
  {
    id: 25,
    name: "Lemons",
    price: 5000,
    category: "fruits",
    subcategory: "Citrus",
    image: "lemon.jpg",
    rating: 4.5,
    sold: 543,
    unit: "kg",
  },
  {
    id: 26,
    name: "Tangerine",
    price: 4500,
    category: "fruits",
    subcategory: "Citrus",
    image: "tangerine.jpg",
    rating: 4.4,
    sold: 432,
    unit: "kg",
  },
  {
    id: 27,
    name: "Grapes",
    price: 18000,
    category: "fruits",
    subcategory: "Berries",
    image: "grapes.jpg",
    rating: 4.8,
    sold: 654,
    unit: "kg",
  },
  {
    id: 28,
    name: "Peaches",
    price: 10000,
    category: "fruits",
    subcategory: "Stone Fruits",
    image: "peaches.jpg",
    rating: 4.7,
    sold: 321,
    unit: "kg",
  },
  {
    id: 29,
    name: "Figs",
    price: 15000,
    category: "fruits",
    subcategory: "Other",
    image: "figs.jpg",
    rating: 4.6,
    sold: 234,
    unit: "kg",
  },
  {
    id: 30,
    name: "Kiwi",
    price: 9000,
    category: "fruits",
    subcategory: "Berries",
    image: "kiwi.jpg",
    rating: 4.5,
    sold: 198,
    unit: "kg",
  },
  {
    id: 31,
    name: "Pomegranate",
    price: 11000,
    category: "fruits",
    subcategory: "Berries",
    image: "pomegranate.jpg",
    rating: 4.7,
    sold: 176,
    unit: "kg",
  },
  {
    id: 32,
    name: "Watermelon",
    price: 8000,
    category: "fruits",
    subcategory: "Melon",
    image: "watermelon.jpg",
    rating: 4.6,
    sold: 765,
    unit: "kg",
  },
  {
    id: 33,
    name: "Pumpkin",
    price: 4000,
    category: "fruits",
    subcategory: "Squash",
    image: "pumpkin.jpg",
    rating: 4.2,
    sold: 198,
    unit: "kg",
  },
  {
    id: 34,
    name: "Peas",
    price: 4500,
    category: "fruits",
    subcategory: "Legumes",
    image: "peas.jpg",
    rating: 4.6,
    sold: 289,
    unit: "kg",
  },
  {
    id: 35,
    name: "Strawberries",
    price: 20000,
    category: "berries",
    subcategory: "Berries",
    image: "strawberries.jpg",
    rating: 4.9,
    sold: 543,
    unit: "punnet",
  },
  {
    id: 36,
    name: "Blueberries",
    price: 25000,
    category: "berries",
    subcategory: "Berries",
    image: "blueberries.jpg",
    rating: 4.8,
    sold: 432,
    unit: "punnet",
  },
  {
    id: 37,
    name: "Raspberries",
    price: 22000,
    category: "berries",
    subcategory: "Berries",
    image: "raspberries.jpg",
    rating: 4.8,
    sold: 321,
    unit: "punnet",
  },
  {
    id: 38,
    name: "Blackberries",
    price: 23000,
    category: "berries",
    subcategory: "Berries",
    image: "blackberries.jpg",
    rating: 4.7,
    sold: 289,
    unit: "punnet",
  },
  {
    id: 39,
    name: "Cranberries",
    price: 20000,
    category: "berries",
    subcategory: "Berries",
    image: "cranberries.jpg",
    rating: 4.6,
    sold: 234,
    unit: "kg",
  },
];

// ===== STORAGE =====
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
let currentCategory = "all";
let slideInterval;

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", function () {
  console.log("Fresh Wave loaded with " + products.length + " products!");
  const page = window.location.pathname.split("/").pop();

  if (page === "index.html" || page === "") {
    filterProducts();
    initFlashSaleTimer();
    initSlideshow();
    loadPricingTable();
    createDots();
    loadSaleProducts();
  } else if (page === "dashboard.html") {
    loadDashboardStats();
    loadOrderHistory();
    loadProfileDataLarge();
  } else if (page === "admin.html") {
    setupSupportForm();
  }

  updateCartUI();
  updateUserUI();
  updateWishlistUI();
  setupEventListeners();
  if (currentUser) loadProfileData();
});

function loadSaleProducts() {
  const saleItems = products.filter((p) => [1, 2, 4, 35].includes(p.id));
  const container = document.getElementById("saleProducts");
  if (container) {
    container.innerHTML = saleItems
      .map(
        (p) => `
            <div class="product-card" style="position:relative">
                <div class="sale-badge">-15%</div>
                <img src="${p.image}" onerror="this.src='https://placehold.co/200x200/2e8b57/white?text=${p.name}'">
                <h4>${p.name}</h4>
                <div class="old-price">UGX ${p.price.toLocaleString()}</div>
                <div class="sale-price">UGX ${Math.floor(p.price * 0.85).toLocaleString()}</div>
                <button onclick="addToCart('${p.name}', ${Math.floor(p.price * 0.85)})" class="add-to-cart-btn">Add to Cart</button>
            </div>
        `,
      )
      .join("");
  }
}

function filterByCategory(category) {
  currentCategory = category;
  document.querySelectorAll(".category-tab").forEach((tab) => {
    tab.classList.remove("active");
    if (
      tab.textContent.toLowerCase().includes(category) ||
      (category === "all" && tab.textContent.includes("All"))
    ) {
      tab.classList.add("active");
    }
  });
  filterProducts();
  if (document.getElementById("products"))
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

function filterProducts() {
  const maxPrice = parseInt(
    document.getElementById("priceFilter")?.value || 50000,
  );
  const sortBy = document.getElementById("sortFilter")?.value || "default";
  let filtered = [...products];
  if (currentCategory !== "all")
    filtered = filtered.filter((p) => p.category === currentCategory);
  filtered = filtered.filter((p) => p.price <= maxPrice);
  if (sortBy === "price-low") filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === "price-high") filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === "popular") filtered.sort((a, b) => b.sold - a.sold);

  const grouped = {};
  filtered.forEach((p) => {
    if (!grouped[p.subcategory]) grouped[p.subcategory] = [];
    grouped[p.subcategory].push(p);
  });

  const grid = document.getElementById("productsGrid");
  if (grid) {
    if (filtered.length === 0) {
      grid.innerHTML =
        '<div class="no-results"><i class="fas fa-search"></i><p>No products found. Try adjusting your filters!</p></div>';
    } else {
      let html = "";
      for (const [sub, items] of Object.entries(grouped)) {
        html += `<div class="subcategory-section"><h3 class="subcategory-title">${getSubIcon(sub)} ${sub}</h3><div class="subcategory-grid">`;
        items.forEach((p) => {
          const inWishlist = wishlist.some((w) => w.id === p.id);
          html += `<div class="product-card" style="position:relative">
                        <div class="wishlist-heart ${inWishlist ? "active" : ""}" onclick="toggleWishlist(${p.id}, '${p.name}', ${p.price}, '${p.image}', event)">
                            <i class="fas fa-heart"></i>
                        </div>
                        <img src="${p.image}" onerror="this.src='https://placehold.co/200x200/2e8b57/white?text=${p.name}'">
                        <h4>${p.name}</h4>
                        <div class="product-rating">${"★".repeat(Math.floor(p.rating))}${"☆".repeat(5 - Math.floor(p.rating))} (${p.sold}+)</div>
                        <div class="product-price">UGX ${p.price.toLocaleString()} <span style="font-size:12px">/${p.unit}</span></div>
                        <button onclick="addToCart('${p.name}', ${p.price})" class="add-to-cart-btn"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                    </div>`;
        });
        html += `</div></div>`;
      }
      grid.innerHTML = html;
    }
  }
}

function getSubIcon(sub) {
  const icons = {
    Fruits: "🍅",
    Bulbs: "🧅",
    "Leafy Greens": "🥬",
    Fungi: "🍄",
    Squash: "🎃",
    Peppers: "🫑",
    Legumes: "🫘",
    Tubers: "🥔",
    Rhizomes: "🫚",
    "Pome Fruits": "🍎",
    Citrus: "🍊",
    Tropical: "🥭",
    "Stone Fruits": "🍑",
    Berries: "🍓",
    Melon: "🍉",
    Other: "🍐",
  };
  return icons[sub] || "🥬";
}

function searchProducts() {
  const term = document
    .getElementById("searchInput")
    ?.value.toLowerCase()
    .trim();
  if (!term) {
    filterProducts();
    return;
  }
  const filtered = products.filter((p) => p.name.toLowerCase().includes(term));
  const grid = document.getElementById("productsGrid");
  if (grid) {
    if (filtered.length === 0) {
      grid.innerHTML =
        '<div class="no-results"><i class="fas fa-search"></i><p>No products found matching "' +
        term +
        '"</p></div>';
    } else {
      grid.innerHTML =
        `<div class="subcategory-section"><div class="subcategory-grid">` +
        filtered
          .map(
            (p) =>
              `<div class="product-card"><img src="${p.image}" onerror="this.src='https://placehold.co/200x200/2e8b57/white?text=${p.name}'"><h4>${p.name}</h4><div class="product-price">UGX ${p.price.toLocaleString()}</div><button onclick="addToCart('${p.name}', ${p.price})" class="add-to-cart-btn">Add to Cart</button></div>`,
          )
          .join("") +
        `</div></div>`;
    }
  }
}

function updatePriceValue() {
  const filter = document.getElementById("priceFilter");
  const value = document.getElementById("priceValue");
  if (filter && value) {
    value.textContent = `UGX ${parseInt(filter.value).toLocaleString()}`;
    filterProducts();
  }
}

function clearFilters() {
  const priceFilter = document.getElementById("priceFilter");
  const sortFilter = document.getElementById("sortFilter");
  if (priceFilter) priceFilter.value = "50000";
  if (sortFilter) sortFilter.value = "default";
  updatePriceValue();
}

// ===== WISHLIST =====
function toggleWishlist(id, name, price, image, event) {
  event.stopPropagation();
  if (!currentUser) {
    showNotification("Please login to add to wishlist", "error");
    showLoginModal();
    return;
  }

  const existingIndex = wishlist.findIndex((w) => w.id === id);
  if (existingIndex !== -1) {
    wishlist.splice(existingIndex, 1);
    showNotification(`${name} removed from wishlist`, "info");
  } else {
    wishlist.push({ id, name, price, image });
    showNotification(`${name} added to wishlist!`, "success");
  }
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistUI();
  filterProducts();
}

function updateWishlistUI() {
  const wishlistCount = document.getElementById("wishlistCount");
  if (wishlistCount) wishlistCount.textContent = wishlist.length;
}

function showWishlist() {
  if (!currentUser) {
    showNotification("Please login to view wishlist", "error");
    showLoginModal();
    return;
  }

  const modal = document.getElementById("wishlistModal");
  const container = document.getElementById("wishlistItems");

  if (wishlist.length === 0) {
    container.innerHTML =
      '<p style="text-align:center; padding: 40px;">Your wishlist is empty. Add items you love!</p>';
  } else {
    container.innerHTML = wishlist
      .map(
        (item) => `
            <div class="wishlist-item">
                <img src="${item.image}" onerror="this.src='https://placehold.co/200x200/2e8b57/white?text=${item.name}'">
                <h4>${item.name}</h4>
                <p>UGX ${item.price.toLocaleString()}</p>
                <button class="add-to-cart-wishlist" onclick="addToCart('${item.name}', ${item.price}); closeWishlistModal();">Add to Cart</button>
                <button onclick="removeFromWishlist(${item.id})">Remove</button>
            </div>
        `,
      )
      .join("");
  }
  modal.classList.add("active");
}

function removeFromWishlist(id) {
  wishlist = wishlist.filter((w) => w.id !== id);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistUI();
  showWishlist();
  filterProducts();
}

function closeWishlistModal() {
  document.getElementById("wishlistModal").classList.remove("active");
}

// ===== SHOPPING CART =====
function addToCart(name, price) {
  const existing = cart.find((i) => i.name === name);
  if (existing) existing.quantity += 1;
  else cart.push({ name, price, quantity: 1, image: getProductImage(name) });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
  showNotification(`${name} added to cart!`, "success");
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.quantity, 0);
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  document.getElementById("cartCount") &&
    (document.getElementById("cartCount").textContent = count);
  document.getElementById("cartTotal") &&
    (document.getElementById("cartTotal").textContent = total.toLocaleString());

  const minOrder = 10000;
  const progress = Math.min((total / minOrder) * 100, 100);
  const fill = document.getElementById("minOrderFill");
  const msg = document.getElementById("minOrderMessage");
  if (fill) fill.style.width = `${progress}%`;
  if (msg)
    msg.textContent =
      total >= minOrder
        ? "✓ Minimum order reached! Ready for delivery."
        : `Add UGX ${(minOrder - total).toLocaleString()} more for delivery`;

  const itemsDiv = document.getElementById("cartItems");
  if (itemsDiv) {
    if (cart.length === 0) {
      itemsDiv.innerHTML =
        '<div class="empty-cart"><p>Your cart is empty</p></div>';
    } else {
      itemsDiv.innerHTML = cart
        .map(
          (i) => `
                <div class="cart-item">
                    <img src="${i.image}" onerror="this.src='https://placehold.co/55x55/2e8b57/white?text='">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${i.name}</div>
                        <div class="cart-item-price">UGX ${i.price.toLocaleString()}</div>
                        <div class="cart-item-quantity">
                            <button onclick="updateQty('${i.name}', -1)">-</button>
                            <span>${i.quantity}</span>
                            <button onclick="updateQty('${i.name}', 1)">+</button>
                            <button onclick="removeFromCart('${i.name}')" style="background:#ff6b6b;">🗑</button>
                        </div>
                    </div>
                </div>
            `,
        )
        .join("");
    }
  }
}

function updateQty(name, delta) {
  const item = cart.find((i) => i.name === name);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) cart = cart.filter((i) => i.name !== name);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
  }
}

function removeFromCart(name) {
  cart = cart.filter((i) => i.name !== name);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
  showNotification(`${name} removed`, "info");
}

function toggleCart() {
  document.getElementById("cartDropdown")?.classList.toggle("active");
  document.getElementById("userMenu")?.classList.remove("active");
}

function goToCheckout() {
  if (cart.length === 0) {
    showNotification("Your cart is empty!", "error");
    return;
  }
  if (!currentUser) {
    showNotification("Please login to checkout", "error");
    showLoginModal();
    return;
  }

  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  if (total < 10000) {
    showNotification(
      `Minimum order UGX 10,000. Add UGX ${(10000 - total).toLocaleString()} more`,
      "error",
    );
    return;
  }

  const modal = document.getElementById("checkoutModal");
  const summaryDiv = document.getElementById("checkoutSummary");
  summaryDiv.innerHTML = `<h4>Order Summary</h4>${cart.map((i) => `<div class="checkout-item"><span>${i.name} x${i.quantity}</span><span>UGX ${(i.price * i.quantity).toLocaleString()}</span></div>`).join("")}<div class="checkout-total">Total: UGX ${total.toLocaleString()}</div>`;

  document.getElementById("airtelStepAmount") &&
    (document.getElementById("airtelStepAmount").textContent =
      `UGX ${total.toLocaleString()}`);
  document.getElementById("mtnStepAmount") &&
    (document.getElementById("mtnStepAmount").textContent =
      `UGX ${total.toLocaleString()}`);
  document.getElementById("airtelCartTotal") &&
    (document.getElementById("airtelCartTotal").textContent =
      total.toLocaleString());
  document.getElementById("mtnCartTotal") &&
    (document.getElementById("mtnCartTotal").textContent =
      total.toLocaleString());
  document.getElementById("codAmount") &&
    (document.getElementById("codAmount").textContent = total.toLocaleString());

  document.getElementById("airtelPhoneNumber") &&
    (document.getElementById("airtelPhoneNumber").value = "");
  document.getElementById("airtelTransactionReference") &&
    (document.getElementById("airtelTransactionReference").value = "");
  document.getElementById("airtelAmountPaid") &&
    (document.getElementById("airtelAmountPaid").value = "");
  document.getElementById("mtnPhoneNumber") &&
    (document.getElementById("mtnPhoneNumber").value = "");
  document.getElementById("mtnTransactionReference") &&
    (document.getElementById("mtnTransactionReference").value = "");
  document.getElementById("mtnAmountPaid") &&
    (document.getElementById("mtnAmountPaid").value = "");

  modal.classList.add("active");
}

function togglePaymentFields() {
  const selected = document.querySelector(
    'input[name="paymentMethod"]:checked',
  )?.value;
  document.getElementById("airtelPaymentSection").style.display =
    selected === "airtel" ? "block" : "none";
  document.getElementById("mtnPaymentSection").style.display =
    selected === "mtn" ? "block" : "none";
  document.getElementById("codPaymentSection").style.display =
    selected === "cod" ? "block" : "none";
}

function copyToClipboard(text, name) {
  navigator.clipboard.writeText(text);
  showNotification(`${name} copied!`, "success");
}
function getProductImage(name) {
  const p = products.find((p) => p.name === name);
  return p ? p.image : "placeholder.jpg";
}

// ===== CONFIRM ORDER FUNCTION =====
function confirmOrder() {
  const address = document.getElementById("deliveryAddressInput").value.trim();
  if (!address) {
    showNotification("Enter delivery address", "error");
    return;
  }

  const paymentMethod = document.querySelector(
    'input[name="paymentMethod"]:checked',
  )?.value;
  if (!paymentMethod) {
    showNotification("Select payment method", "error");
    return;
  }

  const cartTotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const orderNumber = "ORD-" + Math.floor(Math.random() * 90000 + 10000);
  const orderDate = new Date().toLocaleString();
  let customerPhone = "",
    transactionRef = "",
    amountPaid = 0,
    merchantNumber = "",
    network = "";

  if (paymentMethod === "airtel") {
    customerPhone = document.getElementById("airtelPhoneNumber")?.value.trim();
    transactionRef = document
      .getElementById("airtelTransactionReference")
      ?.value.trim();
    amountPaid =
      parseFloat(document.getElementById("airtelAmountPaid")?.value) || 0;
    merchantNumber = "7104763";
    network = "AIRTEL";
    if (!customerPhone || !transactionRef) {
      showNotification("Fill all payment fields", "error");
      return;
    }
    if (amountPaid !== cartTotal) {
      showNotification(
        `Amount mismatch! You paid UGX ${amountPaid.toLocaleString()} but total is UGX ${cartTotal.toLocaleString()}`,
        "error",
      );
      return;
    }
  } else if (paymentMethod === "mtn") {
    customerPhone = document.getElementById("mtnPhoneNumber")?.value.trim();
    transactionRef = document
      .getElementById("mtnTransactionReference")
      ?.value.trim();
    amountPaid =
      parseFloat(document.getElementById("mtnAmountPaid")?.value) || 0;
    merchantNumber = "61967992";
    network = "MTN";
    if (!customerPhone || !transactionRef) {
      showNotification("Fill all payment fields", "error");
      return;
    }
    if (amountPaid !== cartTotal) {
      showNotification(
        `Amount mismatch! You paid UGX ${amountPaid.toLocaleString()} but total is UGX ${cartTotal.toLocaleString()}`,
        "error",
      );
      return;
    }
  }

  const order = {
    orderNumber,
    total: cartTotal,
    address,
    paymentMethod:
      paymentMethod === "airtel"
        ? "Airtel Money"
        : paymentMethod === "mtn"
          ? "MTN Mobile Money"
          : "Cash on Delivery",
    items: [...cart],
    date: orderDate,
    status: "confirmed",
    deliveryStatus: "confirmed",
    customerPhone,
    transactionRef,
    merchantNumber,
    network,
  };

  const orders = JSON.parse(
    localStorage.getItem(`orders_${currentUser.email}`) || "[]",
  );
  orders.push(order);
  localStorage.setItem(`orders_${currentUser.email}`, JSON.stringify(orders));

  // Also save to global orders
  const allOrders = JSON.parse(localStorage.getItem("all_orders") || "[]");
  allOrders.push({ ...order, customerEmail: currentUser.email });
  localStorage.setItem("all_orders", JSON.stringify(allOrders));

  sendOrderNotification(order);

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();

  document.getElementById("confirmationTitle").textContent =
    "✅ ORDER CONFIRMED!";
  document.getElementById("confirmationMessage").innerHTML =
    `Order #${orderNumber}<br>Total: UGX ${cartTotal.toLocaleString()}<br>Delivery: 1-2 hours<br>A confirmation has been sent.`;
  document.getElementById("paymentConfirmationModal").classList.add("active");
  document.getElementById("checkoutModal").classList.remove("active");

  setTimeout(() => {
    document
      .getElementById("paymentConfirmationModal")
      .classList.remove("active");
  }, 4000);
}

// ===== SEND ORDER NOTIFICATION TO MERCHANT WHATSAPP =====
function sendOrderNotification(order) {
  const merchantWhatsApp = "256764496110";

  const itemsList = order.items
    .map(
      (i) =>
        `├─ ${i.name} x${i.quantity} = UGX ${(i.price * i.quantity).toLocaleString()}`,
    )
    .join("%0A");

  const message = `🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
🆕💰💰 NEW ORDER WITH PAYMENT! 💰💰🆕
🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢

📦 ORDER DETAILS:
━━━━━━━━━━━━━━━━━━━━━━
🔹 Order Number: ${order.orderNumber}
🔹 Order Date: ${order.date}
🔹 Payment Status: ✅ VERIFIED & CONFIRMED

💰 PAYMENT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━
🔹 Amount Paid: UGX ${order.total.toLocaleString()}
🔹 Payment Method: ${order.paymentMethod}
🔹 Merchant Number: ${order.merchantNumber}
🔹 Transaction Ref: ${order.transactionRef}
🔹 Customer Network: ${order.network}
🔹 Customer Phone: ${order.customerPhone}

👤 CUSTOMER DETAILS:
━━━━━━━━━━━━━━━━━━━━━━
🔹 Name: ${currentUser.name}
🔹 Email: ${currentUser.email}
🔹 Phone: ${currentUser.phone || order.customerPhone}

📍 DELIVERY ADDRESS:
━━━━━━━━━━━━━━━━━━━━━━
${order.address}

📋 ORDER ITEMS:
━━━━━━━━━━━━━━━━━━━━━━
${itemsList}
━━━━━━━━━━━━━━━━━━━━━━
📦 TOTAL ITEMS: ${order.items.reduce((s, i) => s + i.quantity, 0)} pcs
💰 GRAND TOTAL: UGX ${order.total.toLocaleString()}

✅✅✅ ORDER CONFIRMED - READY FOR DELIVERY ✅✅✅

🚚 Delivery within 1-2 hours.
📞 Contact customer: ${order.customerPhone}

🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢`;

  window.open(
    `https://wa.me/${merchantWhatsApp}?text=${encodeURIComponent(message)}`,
    "_blank",
  );
}

// ===== ORDER CANCELLATION =====
function cancelOrder(orderNumber) {
  if (
    !confirm(
      "Are you sure you want to cancel this order? This action cannot be undone.",
    )
  )
    return;

  let orders = JSON.parse(
    localStorage.getItem(`orders_${currentUser.email}`) || "[]",
  );
  const orderIndex = orders.findIndex((o) => o.orderNumber === orderNumber);

  if (orderIndex !== -1) {
    const order = orders[orderIndex];
    if (order.status === "confirmed" || order.status === "preparing") {
      orders[orderIndex] = {
        ...order,
        status: "cancelled",
        deliveryStatus: "cancelled",
      };
      localStorage.setItem(
        `orders_${currentUser.email}`,
        JSON.stringify(orders),
      );

      // Update global orders
      const allOrders = JSON.parse(localStorage.getItem("all_orders") || "[]");
      const globalIndex = allOrders.findIndex(
        (o) => o.orderNumber === orderNumber,
      );
      if (globalIndex !== -1)
        allOrders[globalIndex] = {
          ...allOrders[globalIndex],
          status: "cancelled",
        };
      localStorage.setItem("all_orders", JSON.stringify(allOrders));

      showNotification(
        `Order #${orderNumber} cancelled successfully`,
        "success",
      );

      if (typeof loadOrderHistory === "function") loadOrderHistory();
      if (typeof loadDashboardStats === "function") loadDashboardStats();

      const trackInput = document.getElementById("trackOrderNumber");
      if (trackInput && trackInput.value === orderNumber) {
        trackOrderWithMap();
      }
    } else if (order.status === "delivered") {
      showNotification(
        "Cannot cancel a delivered order. Contact support.",
        "error",
      );
    } else if (order.status === "cancelled") {
      showNotification("Order already cancelled", "info");
    }
  } else {
    showNotification("Order not found", "error");
  }
}

// ===== GOOGLE MAPS TRACKING - FIXED =====
function trackOrderWithMap() {
  const orderNum = document
    .getElementById("trackOrderNumber")
    ?.value.trim()
    .toUpperCase();
  if (!orderNum) {
    showNotification("Please enter an order number", "error");
    return;
  }

  const resultDiv = document.getElementById("trackResult");

  // First, check if user is logged in and has orders
  if (currentUser) {
    const orders = JSON.parse(
      localStorage.getItem(`orders_${currentUser.email}`) || "[]",
    );
    const order = orders.find((o) => o.orderNumber === orderNum);

    if (order) {
      displayTrackingWithMap(order);
      return;
    }
  }

  // Also check global orders
  const allOrders = JSON.parse(localStorage.getItem("all_orders") || "[]");
  const globalOrder = allOrders.find((o) => o.orderNumber === orderNum);

  if (globalOrder) {
    displayTrackingWithMap(globalOrder);
    return;
  }

  // If no order found
  resultDiv.innerHTML = `
        <div style="background:#ffebee; padding:30px; border-radius:15px; text-align:center;">
            <i class="fas fa-search" style="font-size:48px; color:#d32f2f; margin-bottom:15px;"></i>
            <h3 style="color:#d32f2f;">Order Not Found</h3>
            <p>Order #${orderNum} could not be found.</p>
            <p style="margin-top:10px; font-size:13px; color:#666;">Possible reasons:<br>
            • You entered the wrong order number<br>
            • The order was placed while you were logged out<br>
            • The order is from a different account</p>
            <button onclick="document.getElementById('trackOrderNumber').focus()" style="margin-top:15px; background:#2e8b57; color:white; border:none; padding:8px 20px; border-radius:25px; cursor:pointer;">Try Again</button>
        </div>
    `;
}

function displayTrackingWithMap(order) {
  const resultDiv = document.getElementById("trackResult");

  const orderStatus = order.deliveryStatus || order.status || "confirmed";
  const statusMap = {
    confirmed: {
      text: "Order Confirmed",
      class: "confirmed",
      icon: "fa-check-circle",
      eta: "Preparing - 45-60 min",
    },
    preparing: {
      text: "Preparing Order",
      class: "preparing",
      icon: "fa-box",
      eta: "Packing - 30-45 min",
    },
    onway: {
      text: "On The Way",
      class: "onway",
      icon: "fa-truck",
      eta: "15-20 minutes",
    },
    delivered: {
      text: "Delivered",
      class: "delivered",
      icon: "fa-home",
      eta: "Delivered",
    },
    cancelled: {
      text: "Cancelled",
      class: "cancelled",
      icon: "fa-times-circle",
      eta: "Order Cancelled",
    },
  };
  const status = statusMap[orderStatus] || statusMap.confirmed;

  const steps = [
    { name: "Order Placed", icon: "fa-shopping-cart", completed: true },
    {
      name: "Confirmed",
      icon: "fa-check-circle",
      completed: orderStatus !== "confirmed",
    },
    {
      name: "Preparing",
      icon: "fa-box",
      completed: orderStatus === "onway" || orderStatus === "delivered",
    },
    {
      name: "On The Way",
      icon: "fa-truck",
      completed: orderStatus === "delivered",
    },
    {
      name: "Delivered",
      icon: "fa-home",
      completed: orderStatus === "delivered",
    },
  ];

  const itemsHtml = order.items
    ? order.items
        .map(
          (i) =>
            `<li style="padding:5px 0; border-bottom:1px solid #eee;">${i.name} x${i.quantity} = UGX ${(i.price * i.quantity).toLocaleString()}</li>`,
        )
        .join("")
    : "<li>Items loaded</li>";

  let mapUrl = "";
  if (orderStatus === "onway") {
    mapUrl = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&origin=Kampala,Uganda&destination=${encodeURIComponent(order.address || "Kampala")}&mode=driving`;
  } else if (orderStatus === "delivered") {
    mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(order.address || "Kampala")}&zoom=15`;
  } else {
    mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Kalerwe+Market+Kampala&center=0.347596,32.582520&zoom=14`;
  }

  resultDiv.innerHTML = `
        <div class="tracking-result-card" style="background:white; border-radius:15px; padding:20px; margin-top:20px; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:10px;">
                <div>
                    <h2 style="color:#2e8b57; margin:0;"><i class="fas fa-receipt"></i> Order #${order.orderNumber}</h2>
                    <p style="margin:5px 0 0; color:#666; font-size:13px;">Placed on: ${order.date || new Date().toLocaleString()}</p>
                </div>
                <span class="order-status-badge ${status.class}" style="padding:8px 16px; border-radius:25px; font-weight:bold; background:${status.class === "confirmed" ? "#2196F3" : status.class === "preparing" ? "#ff9800" : status.class === "onway" ? "#ff6b6b" : status.class === "delivered" ? "#2e8b57" : "#999"}; color:white;">
                    <i class="fas ${status.icon}"></i> ${status.text}
                </span>
            </div>
            
            <div style="background:#f8f9fa; padding:15px; border-radius:12px; margin-bottom:15px;">
                <h4 style="margin:0 0 10px 0;"><i class="fas fa-info-circle"></i> Order Details</h4>
                <p><strong>📍 Delivery Address:</strong> ${order.address || "Not specified"}</p>
                <p><strong>💰 Total Amount:</strong> UGX ${(order.total || 0).toLocaleString()}</p>
                <p><strong>💳 Payment Method:</strong> ${order.paymentMethod || "Cash on Delivery"}</p>
                <p><strong>📞 Contact Phone:</strong> ${order.customerPhone || currentUser?.phone || "Not provided"}</p>
                <p><strong>⏱️ Estimated Delivery:</strong> ${status.eta}</p>
            </div>
            
            <div style="background:#f8f9fa; padding:15px; border-radius:12px; margin-bottom:15px;">
                <h4 style="margin:0 0 10px 0;"><i class="fas fa-shopping-bag"></i> Order Items</h4>
                <ul style="margin:0; padding-left:20px;">${itemsHtml}</ul>
                <hr style="margin:10px 0;">
                <p style="margin:0; text-align:right; font-weight:bold;">Total Items: ${order.items ? order.items.reduce((s, i) => s + i.quantity, 0) : 0} pcs</p>
            </div>
            
            <div style="margin:20px 0;">
                <div style="display:flex; justify-content:space-between; position:relative; flex-wrap:wrap;">
                    ${steps
                      .map(
                        (step, idx) => `
                        <div style="text-align:center; flex:1; min-width:70px; position:relative; z-index:2;">
                            <div style="width:40px; height:40px; background:${step.completed ? "#2e8b57" : "#e0e0e0"}; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 8px; border:2px solid white; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
                                <i class="fas ${step.icon}" style="color:${step.completed ? "white" : "#999"}"></i>
                            </div>
                            <span style="font-size:11px; font-weight:${step.completed ? "bold" : "normal"}; color:${step.completed ? "#2e8b57" : "#666"}">${step.name}</span>
                        </div>
                        ${idx < steps.length - 1 ? `<div style="flex:1; height:2px; background:#e0e0e0; margin-top:20px;"></div>` : ""}
                    `,
                      )
                      .join("")}
                </div>
            </div>
            
            <div style="margin:15px 0; border-radius:12px; overflow:hidden;">
                <iframe src="${mapUrl}" width="100%" height="300" style="border:0;" allowfullscreen loading="lazy"></iframe>
            </div>
            
            <div style="background:#e8f5e9; padding:12px; border-radius:10px; margin:15px 0; display:flex; align-items:center; gap:10px;">
                <i class="fas fa-map-marker-alt" style="font-size:20px; color:#2e8b57;"></i>
                <span>📍 ${orderStatus === "onway" ? "Rider is on the way to your location!" : orderStatus === "delivered" ? "Order has been delivered successfully!" : "Your order is being prepared at our warehouse"}</span>
            </div>
            
            <div style="display:flex; gap:12px; margin-top:15px; flex-wrap:wrap;">
                <button onclick="shareTracking('${order.orderNumber}')" style="flex:1; background:#2196F3; color:white; border:none; padding:12px; border-radius:10px; cursor:pointer; font-weight:bold;">
                    <i class="fas fa-share-alt"></i> Share Location
                </button>
                <a href="https://wa.me/256764496110" target="_blank" style="flex:1; background:#25D366; color:white; text-decoration:none; text-align:center; padding:12px; border-radius:10px; font-weight:bold;">
                    <i class="fab fa-whatsapp"></i> Contact Support
                </a>
                ${
                  orderStatus !== "cancelled" && orderStatus !== "delivered"
                    ? `
                    <button onclick="cancelOrder('${order.orderNumber}')" style="flex:1; background:#ff6b6b; color:white; border:none; padding:12px; border-radius:10px; cursor:pointer; font-weight:bold;">
                        <i class="fas fa-times"></i> Cancel Order
                    </button>
                `
                    : ""
                }
            </div>
        </div>
    `;
}

function shareTracking(orderNumber) {
  const message = `🚚 My Fresh Wave order #${orderNumber} is on its way! Track here: ${window.location.href}`;
  if (navigator.share) {
    navigator.share({ title: "Fresh Wave Order Tracking", text: message });
  } else {
    navigator.clipboard.writeText(message);
    showNotification("Tracking link copied!", "success");
  }
}

function trackOrderFromHistory(orderNumber) {
  const trackInput = document.getElementById("trackOrderNumber");
  if (trackInput) {
    trackInput.value = orderNumber;
    trackOrderWithMap();
    const trackingSection = document.getElementById("tracking");
    if (trackingSection) trackingSection.scrollIntoView({ behavior: "smooth" });
  }
}

// ===== DASHBOARD FUNCTIONS =====
function loadDashboardStats() {
  if (!currentUser) return;
  const orders = JSON.parse(
    localStorage.getItem(`orders_${currentUser.email}`) || "[]",
  );
  document.getElementById("totalOrdersCount") &&
    (document.getElementById("totalOrdersCount").textContent = orders.length);
  document.getElementById("pendingOrdersCount") &&
    (document.getElementById("pendingOrdersCount").textContent = orders.filter(
      (o) => o.status === "confirmed" || o.status === "preparing",
    ).length);
  document.getElementById("deliveredOrdersCount") &&
    (document.getElementById("deliveredOrdersCount").textContent =
      orders.filter((o) => o.status === "delivered").length);
  document.getElementById("totalSpent") &&
    (document.getElementById("totalSpent").textContent =
      `UGX ${orders.reduce((s, o) => s + (o.total || 0), 0).toLocaleString()}`);
}

function loadOrderHistory() {
  if (!currentUser) return;
  const orders = JSON.parse(
    localStorage.getItem(`orders_${currentUser.email}`) || "[]",
  );
  const container = document.getElementById("orderHistoryList");
  if (container) {
    if (orders.length === 0) {
      container.innerHTML =
        '<p style="text-align:center;padding:40px">No orders yet. Start shopping!</p>';
    } else {
      container.innerHTML = orders
        .map(
          (order) => `
                <div class="order-history-item" style="background:#f8f9fa; padding:15px; border-radius:10px; margin-bottom:10px; border-left:4px solid ${order.status === "delivered" ? "#2e8b57" : order.status === "cancelled" ? "#ff6b6b" : "#2196F3"};">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                        <strong style="font-size:16px;">Order #${order.orderNumber}</strong>
                        <span class="order-status ${order.status}" style="padding:4px 12px; border-radius:20px; font-size:12px; font-weight:bold; background:${order.status === "delivered" ? "#2e8b57" : order.status === "cancelled" ? "#ff6b6b" : "#2196F3"}; color:white;">${order.status}</span>
                    </div>
                    <div style="margin-top:8px; color:#666; font-size:13px;">
                        <div>📅 Date: ${order.date}</div>
                        <div>💰 Total: UGX ${(order.total || 0).toLocaleString()}</div>
                        <div>💳 Payment: ${order.paymentMethod}</div>
                        <div>📍 Delivery: ${order.address ? order.address.substring(0, 50) + (order.address.length > 50 ? "..." : "") : "Not specified"}</div>
                    </div>
                    <div style="margin-top:12px; display:flex; gap:10px; flex-wrap:wrap;">
                        <button onclick="reorderOrder('${order.orderNumber}')" style="background:#2e8b57; color:white; border:none; padding:6px 15px; border-radius:20px; cursor:pointer;">
                            <i class="fas fa-redo"></i> Reorder
                        </button>
                        <button onclick="trackOrderFromHistory('${order.orderNumber}')" style="background:#2196F3; color:white; border:none; padding:6px 15px; border-radius:20px; cursor:pointer;">
                            <i class="fas fa-map-marker-alt"></i> Track
                        </button>
                        ${
                          order.status !== "cancelled" &&
                          order.status !== "delivered"
                            ? `
                            <button onclick="cancelOrder('${order.orderNumber}')" style="background:#ff6b6b; color:white; border:none; padding:6px 15px; border-radius:20px; cursor:pointer;">
                                <i class="fas fa-times"></i> Cancel
                            </button>
                        `
                            : ""
                        }
                    </div>
                </div>
            `,
        )
        .join("");
    }
  }
}

function filterOrders(status) {
  if (!currentUser) return;
  const orders = JSON.parse(
    localStorage.getItem(`orders_${currentUser.email}`) || "[]",
  );
  const filtered =
    status === "all" ? orders : orders.filter((o) => o.status === status);
  const container = document.getElementById("orderHistoryList");
  if (container) {
    if (filtered.length === 0) {
      container.innerHTML =
        '<p style="text-align:center;padding:40px">No orders found</p>';
    } else {
      container.innerHTML = filtered
        .map(
          (order) => `
                <div class="order-history-item" style="background:#f8f9fa; padding:15px; border-radius:10px; margin-bottom:10px;">
                    <strong>Order #${order.orderNumber}</strong>
                    <div>Date: ${order.date}</div>
                    <div>Total: UGX ${(order.total || 0).toLocaleString()}</div>
                    <div>Status: ${order.status}</div>
                    <button class="reorder-btn" onclick="reorderOrder('${order.orderNumber}')">🔄 Reorder</button>
                </div>
            `,
        )
        .join("");
    }
  }
  document
    .querySelectorAll(".filter-btn")
    .forEach((btn) => btn.classList.remove("active"));
  if (event && event.target) event.target.classList.add("active");
}

function reorderOrder(orderNumber) {
  const orders = JSON.parse(
    localStorage.getItem(`orders_${currentUser.email}`) || "[]",
  );
  const order = orders.find((o) => o.orderNumber === orderNumber);
  if (order && order.items) {
    order.items.forEach((item) => {
      addToCart(item.name, item.price / item.quantity);
    });
    showNotification("Items added to cart!", "success");
    window.location.href = "index.html";
  }
}

// ===== PROFILE FUNCTIONS =====
function loadProfileDataLarge() {
  if (!currentUser) return;
  document.getElementById("profileNameLarge") &&
    (document.getElementById("profileNameLarge").value =
      currentUser.name || "");
  document.getElementById("profileEmailLarge") &&
    (document.getElementById("profileEmailLarge").value =
      currentUser.email || "");
  document.getElementById("profilePhoneLarge") &&
    (document.getElementById("profilePhoneLarge").value =
      currentUser.phone || "");
  document.getElementById("profileAddressLarge") &&
    (document.getElementById("profileAddressLarge").value =
      currentUser.address || "");
  document.getElementById("profileAreaLarge") &&
    (document.getElementById("profileAreaLarge").value =
      currentUser.area || "Kampala Central");
  if (currentUser.profileImage && document.getElementById("profileImageLarge"))
    document.getElementById("profileImageLarge").src = currentUser.profileImage;
}

function saveProfileLarge() {
  if (!currentUser) return;
  currentUser.name = document.getElementById("profileNameLarge")?.value;
  currentUser.phone = document.getElementById("profilePhoneLarge")?.value;
  currentUser.address = document.getElementById("profileAddressLarge")?.value;
  currentUser.area = document.getElementById("profileAreaLarge")?.value;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  showNotification("Profile saved successfully!", "success");
}

function uploadProfileImageLarge() {
  document.getElementById("profileImageInputLarge").click();
}
function handleImageUploadLarge(event) {
  const file = event.target.files[0];
  if (file && currentUser) {
    const reader = new FileReader();
    reader.onload = (e) => {
      currentUser.profileImage = e.target.result;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      document.getElementById("profileImageLarge").src = e.target.result;
      showNotification("Profile picture updated!", "success");
    };
    reader.readAsDataURL(file);
  }
}

// ===== SUPPORT FUNCTIONS =====
function setupSupportForm() {
  const form = document.getElementById("supportForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("supportName")?.value;
      const email = document.getElementById("supportEmail")?.value;
      const msg = document.getElementById("supportMessage")?.value;
      const orderNum = document.getElementById("supportOrderNumber")?.value;
      const supportMsg = `Support Request from ${name} (${email})%0AOrder #: ${orderNum || "N/A"}%0AMessage: ${msg}`;
      window.open(
        `https://wa.me/256764496110?text=${encodeURIComponent(supportMsg)}`,
        "_blank",
      );
      showNotification("Message sent! We will respond shortly.", "success");
      form.reset();
    });
  }
}

// ===== USER AUTH =====
function toggleUserMenu() {
  document.getElementById("userMenu")?.classList.toggle("active");
  document.getElementById("cartDropdown")?.classList.remove("active");
}

function updateUserUI() {
  const nameSpan = document.getElementById("userNameDisplay");
  const infoSec = document.getElementById("userInfoSection");
  const linksSec = document.getElementById("userLinksSection");
  if (currentUser) {
    if (nameSpan) nameSpan.textContent = currentUser.name.split(" ")[0];
    if (infoSec) infoSec.style.display = "none";
    if (linksSec) linksSec.style.display = "block";
    loadProfileData();
  } else {
    if (nameSpan) nameSpan.textContent = "Account";
    if (infoSec) infoSec.style.display = "block";
    if (linksSec) linksSec.style.display = "none";
  }
}

function loadProfileData() {
  if (!currentUser) return;
  document.getElementById("profileName") &&
    (document.getElementById("profileName").value = currentUser.name || "");
  document.getElementById("profileEmail") &&
    (document.getElementById("profileEmail").value = currentUser.email || "");
  document.getElementById("profilePhone") &&
    (document.getElementById("profilePhone").value = currentUser.phone || "");
  document.getElementById("profileAddress") &&
    (document.getElementById("profileAddress").value =
      currentUser.address || "");
  if (currentUser.profileImage && document.getElementById("profileImage"))
    document.getElementById("profileImage").src = currentUser.profileImage;
}

function saveProfile() {
  if (!currentUser) return;
  currentUser.name = document.getElementById("profileName")?.value;
  currentUser.phone = document.getElementById("profilePhone")?.value;
  currentUser.address = document.getElementById("profileAddress")?.value;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  showNotification("Profile saved!", "success");
  closeProfileModal();
}

function showProfile() {
  if (!currentUser) {
    showNotification("Please login first", "error");
    showLoginModal();
    return;
  }
  loadProfileData();
  document.getElementById("profileModal").classList.add("active");
}

function uploadProfileImage() {
  document.getElementById("profileImageInput").click();
}
function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file && currentUser) {
    const reader = new FileReader();
    reader.onload = (e) => {
      currentUser.profileImage = e.target.result;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      document.getElementById("profileImage").src = e.target.result;
      showNotification("Photo updated!", "success");
    };
    reader.readAsDataURL(file);
  }
}

function closeProfileModal() {
  document.getElementById("profileModal")?.classList.remove("active");
}
function closeCheckoutModal() {
  document.getElementById("checkoutModal")?.classList.remove("active");
}
function closePaymentConfirmationModal() {
  document
    .getElementById("paymentConfirmationModal")
    ?.classList.remove("active");
}

// ===== AI CHAT =====
function openAIChat() {
  document.getElementById("aiChatModal")?.classList.add("active");
}
function closeAIChat() {
  document.getElementById("aiChatModal")?.classList.remove("active");
}

function sendChatMessage() {
  const input = document.getElementById("chatInput");
  const msg = input?.value.trim();
  if (!msg) return;
  const chatDiv = document.getElementById("chatMessages");
  chatDiv.innerHTML += `<div class="user-message">${escapeHtml(msg)}</div>`;
  input.value = "";
  chatDiv.scrollTop = chatDiv.scrollHeight;
  setTimeout(() => {
    let response = "";
    const q = msg.toLowerCase();
    if (q.includes("airtel"))
      response =
        "📱 Airtel Money Till: 7104763. Dial *185#, send money, enter till, amount, and PIN on your phone.";
    else if (q.includes("mtn"))
      response =
        "📱 MTN MoMo: 61967992. Dial *165#, send money, enter number, amount, and PIN.";
    else if (q.includes("price"))
      response =
        "💰 We have 39 fresh products! Tomatoes: 5,500/kg, Onions: 3,000/kg, Strawberries: 20,000/punnet.";
    else if (q.includes("delivery"))
      response =
        "🚚 Delivery takes 1-2 hours in Kampala. Free delivery on orders over UGX 50,000!";
    else if (q.includes("track"))
      response =
        "📍 Go to Dashboard → Track Order, enter your order number to see real-time status.";
    else if (q.includes("cancel"))
      response =
        "❌ You can cancel your order within 5 minutes or before dispatch. Go to Dashboard → Order History and click Cancel.";
    else
      response =
        "I can help with: products 📊, delivery 🚚, payments 💳, order tracking 📍, and cancellations ❌!";
    chatDiv.innerHTML += `<div class="bot-message">${response}</div>`;
    chatDiv.scrollTop = chatDiv.scrollHeight;
  }, 500);
}

function transferToHuman() {
  window.open("https://wa.me/256764496110", "_blank");
  showNotification("Redirecting to human support on WhatsApp...", "info");
}
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
function startVoiceSearch() {
  showNotification(
    "Voice search: Click the microphone icon in the search bar",
    "info",
  );
}

// ===== FLASH SALE TIMER =====
function initFlashSaleTimer() {
  let end = localStorage.getItem("flashSaleEnd");
  if (!end) {
    end = Date.now() + 24 * 3600000;
    localStorage.setItem("flashSaleEnd", end);
  }
  function update() {
    const dist = parseInt(end) - Date.now();
    if (dist < 0) {
      localStorage.removeItem("flashSaleEnd");
      initFlashSaleTimer();
      return;
    }
    document.getElementById("hours") &&
      (document.getElementById("hours").textContent = Math.floor(dist / 3600000)
        .toString()
        .padStart(2, "0"));
    document.getElementById("minutes") &&
      (document.getElementById("minutes").textContent = Math.floor(
        (dist % 3600000) / 60000,
      )
        .toString()
        .padStart(2, "0"));
    document.getElementById("seconds") &&
      (document.getElementById("seconds").textContent = Math.floor(
        (dist % 60000) / 1000,
      )
        .toString()
        .padStart(2, "0"));
  }
  update();
  setInterval(update, 1000);
}

// ===== SLIDESHOW =====
let slideIdx = 0;
function initSlideshow() {
  showSlide(slideIdx);
  startSlide();
}
function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  if (!slides.length) return;
  if (n >= slides.length) slideIdx = 0;
  if (n < 0) slideIdx = slides.length - 1;
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  for (let i = 0; i < dots.length; i++) dots[i].classList.remove("active");
  slides[slideIdx].style.display = "block";
  if (dots[slideIdx]) dots[slideIdx].classList.add("active");
}
function changeSlide(n) {
  showSlide((slideIdx += n));
  resetSlide();
}
function startSlide() {
  slideInterval = setInterval(() => showSlide((slideIdx += 1)), 4000);
}
function resetSlide() {
  clearInterval(slideInterval);
  startSlide();
}
function createDots() {
  const slides = document.getElementsByClassName("slide");
  const container = document.querySelector(".dots-container");
  if (!container || !slides.length) return;
  container.innerHTML = "";
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = () => {
      showSlide((slideIdx = i));
      resetSlide();
    };
    container.appendChild(dot);
  }
}

function loadPricingTable() {
  const body = document.getElementById("pricingTableBody");
  if (!body) return;
  body.innerHTML = products
    .slice(0, 20)
    .map(
      (p) =>
        `<tr><td style="font-weight:500">${p.name}</td><td style="text-transform:capitalize">${p.category}</td><td>UGX ${p.price.toLocaleString()}</td><td>/${p.unit}</td><td><button class="buy-now-btn" onclick="addToCart('${p.name}', ${p.price})">Buy</button></td></tr>`,
    )
    .join("");
}

// ===== UTILITIES =====
function showLoginModal() {
  showModal("login");
}
function showRegisterModal() {
  showModal("register");
}
function showModal(type) {
  const modal = document.getElementById("authModal");
  if (modal) {
    document.getElementById("loginForm").style.display =
      type === "login" ? "block" : "none";
    document.getElementById("registerForm").style.display =
      type === "register" ? "block" : "none";
    modal.classList.add("active");
  }
}
function closeModal() {
  document.getElementById("authModal")?.classList.remove("active");
}

function login() {
  const email = document.getElementById("loginEmail")?.value;
  const pwd = document.getElementById("loginPassword")?.value;
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find((u) => u.email === email && u.password === pwd);
  if (user) {
    currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    updateUserUI();
    closeModal();
    showNotification("Login successful!", "success");
    setTimeout(() => location.reload(), 500);
  } else if (email && pwd) {
    currentUser = { name: email.split("@")[0], email, password: pwd };
    const usersList = JSON.parse(localStorage.getItem("users") || "[]");
    usersList.push(currentUser);
    localStorage.setItem("users", JSON.stringify(usersList));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    updateUserUI();
    closeModal();
    showNotification("Account created! Welcome to Fresh Wave!", "success");
    setTimeout(() => location.reload(), 500);
  } else {
    showNotification("Enter email and password", "error");
  }
}

function register() {
  const name = document.getElementById("regName")?.value;
  const email = document.getElementById("regEmail")?.value;
  const phone = document.getElementById("regPhone")?.value;
  const pwd = document.getElementById("regPassword")?.value;
  if (name && email && phone && pwd) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === email)) {
      showNotification("Email already registered", "error");
      return;
    }
    const newUser = { name, email, phone, password: pwd };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    currentUser = newUser;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    updateUserUI();
    closeModal();
    showNotification("Registration successful!", "success");
    setTimeout(() => location.reload(), 500);
  } else {
    showNotification("Fill all fields", "error");
  }
}

function logout() {
  currentUser = null;
  localStorage.removeItem("currentUser");
  updateUserUI();
  showNotification("Logged out successfully", "info");
  setTimeout(() => location.reload(), 500);
}

function showNotification(msg, type = "info") {
  const n = document.createElement("div");
  n.className = "notification";
  n.style.background =
    type === "success" ? "#2e8b57" : type === "error" ? "#ff6b6b" : "#2196F3";
  n.style.color = "white";
  n.innerHTML = `<i class="fas ${type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-info-circle"}"></i> ${msg}`;
  document.body.appendChild(n);
  setTimeout(() => {
    n.style.animation = "fadeOut 0.3s ease";
    setTimeout(() => n.remove(), 300);
  }, 3000);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
window.addEventListener("scroll", () => {
  const btn = document.getElementById("backToTop");
  if (btn) btn.classList.toggle("show", window.scrollY > 300);
});

function setupEventListeners() {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showNotification(
        "Message sent! We will reply within 24 hours.",
        "success",
      );
      contactForm.reset();
    });
  }

  document.addEventListener("click", (e) => {
    const cartC = document.querySelector(".cart-icon-container"),
      userC = document.querySelector(".user-dropdown-container");
    const cartD = document.getElementById("cartDropdown"),
      userM = document.getElementById("userMenu");
    if (cartC && cartD && !cartC.contains(e.target))
      cartD.classList.remove("active");
    if (userC && userM && !userC.contains(e.target))
      userM.classList.remove("active");
  });

  document
    .getElementById("profileImageInput")
    ?.addEventListener("change", handleImageUpload);
  document
    .getElementById("profileImageInputLarge")
    ?.addEventListener("change", handleImageUploadLarge);
  document
    .querySelector(".upload-photo-btn")
    ?.addEventListener("click", () =>
      document.getElementById("profileImageInputLarge").click(),
    );
}

function toggleFaq(element) {
  const answer = element.nextElementSibling;
  answer.classList.toggle("show");
  element.querySelector("i").style.transform = answer.classList.contains("show")
    ? "rotate(180deg)"
    : "";
}
// ===== ADMIN FUNCTIONS - VIEW ALL ORDERS =====
function loadAdminOrders() {
    const allOrders = JSON.parse(localStorage.getItem('all_orders') || '[]');
    const container = document.getElementById('adminOrdersList');
    
    if (!container) return;
    
    if (allOrders.length === 0) {
        container.innerHTML = '<p style="text-align:center;padding:40px">No orders yet.</p>';
    } else {
        container.innerHTML = allOrders.map(order => `
            <div class="admin-order-card">
                <div class="admin-order-header">
                    <strong><i class="fas fa-receipt"></i> Order #${order.orderNumber}</strong>
                    <span class="admin-order-status ${order.status}">${order.status}</span>
                </div>
                <div class="admin-order-details">
                    <div><i class="fas fa-user"></i> ${order.customerEmail || 'Unknown'}</div>
                    <div><i class="fas fa-calendar"></i> ${order.date}</div>
                    <div><i class="fas fa-money-bill"></i> UGX ${(order.total || 0).toLocaleString()}</div>
                    <div><i class="fas fa-credit-card"></i> ${order.paymentMethod}</div>
                    <div><i class="fas fa-phone"></i> ${order.customerPhone || 'N/A'}</div>
                    <div><i class="fas fa-map-marker-alt"></i> ${order.address ? order.address.substring(0, 30) + '...' : 'N/A'}</div>
                </div>
                <div class="admin-order-items">
                    <strong>Items:</strong><br>
                    ${order.items ? order.items.map(i => `${i.name} x${i.quantity} = UGX ${(i.price * i.quantity).toLocaleString()}`).join('<br>') : 'No items'}
                </div>
                <div class="admin-order-actions">
                    <select onchange="updateOrderStatus('${order.orderNumber}', this.value)" class="update-status-select" style="padding:8px; border-radius:20px; border:1px solid #ddd;">
                        <option value="confirmed" ${order.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
                        <option value="preparing" ${order.status === 'preparing' ? 'selected' : ''}>Preparing</option>
                        <option value="onway" ${order.status === 'onway' ? 'selected' : ''}>On The Way</option>
                        <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                        <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                    </select>
                    <a href="https://wa.me/${order.customerPhone || '256764496110'}" target="_blank" class="whatsapp-customer-btn"><i class="fab fa-whatsapp"></i> Contact Customer</a>
                </div>
            </div>
        `).join('');
    }
    
    // Update summary stats
    const totalOrders = allOrders.length;
    const totalRevenue = allOrders.filter(o => o.status !== 'cancelled').reduce((sum, o) => sum + (o.total || 0), 0);
    const pendingOrders = allOrders.filter(o => o.status === 'confirmed' || o.status === 'preparing').length;
    
    document.getElementById('adminTotalOrders') && (document.getElementById('adminTotalOrders').textContent = totalOrders);
    document.getElementById('adminTotalRevenue') && (document.getElementById('adminTotalRevenue').textContent = `UGX ${totalRevenue.toLocaleString()}`);
    document.getElementById('adminPendingOrders') && (document.getElementById('adminPendingOrders').textContent = pendingOrders);
}

function filterAdminOrders(status) {
    const allOrders = JSON.parse(localStorage.getItem('all_orders') || '[]');
    const filtered = status === 'all' ? allOrders : allOrders.filter(o => o.status === status);
    const container = document.getElementById('adminOrdersList');
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align:center;padding:40px">No orders found.</p>';
    } else {
        container.innerHTML = filtered.map(order => `
            <div class="admin-order-card">
                <div class="admin-order-header">
                    <strong>Order #${order.orderNumber}</strong>
                    <span class="admin-order-status ${order.status}">${order.status}</span>
                </div>
                <div class="admin-order-details">
                    <div>Customer: ${order.customerEmail || 'Unknown'}</div>
                    <div>Date: ${order.date}</div>
                    <div>Amount: UGX ${(order.total || 0).toLocaleString()}</div>
                    <div>Payment: ${order.paymentMethod}</div>
                </div>
                <div class="admin-order-actions">
                    <select onchange="updateOrderStatus('${order.orderNumber}', this.value)">
                        <option value="confirmed" ${order.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
                        <option value="preparing" ${order.status === 'preparing' ? 'selected' : ''}>Preparing</option>
                        <option value="onway" ${order.status === 'onway' ? 'selected' : ''}>On The Way</option>
                        <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                    </select>
                </div>
            </div>
        `).join('');
    }
    
    document.querySelectorAll('.admin-filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function updateOrderStatus(orderNumber, newStatus) {
    const allOrders = JSON.parse(localStorage.getItem('all_orders') || '[]');
    const orderIndex = allOrders.findIndex(o => o.orderNumber === orderNumber);
    
    if (orderIndex !== -1) {
        allOrders[orderIndex].status = newStatus;
        allOrders[orderIndex].deliveryStatus = newStatus;
        localStorage.setItem('all_orders', JSON.stringify(allOrders));
        
        // Also update customer's order
        const customerEmail = allOrders[orderIndex].customerEmail;
        if (customerEmail) {
            const customerOrders = JSON.parse(localStorage.getItem(`orders_${customerEmail}`) || '[]');
            const customerOrderIndex = customerOrders.findIndex(o => o.orderNumber === orderNumber);
            if (customerOrderIndex !== -1) {
                customerOrders[customerOrderIndex].status = newStatus;
                customerOrders[customerOrderIndex].deliveryStatus = newStatus;
                localStorage.setItem(`orders_${customerEmail}`, JSON.stringify(customerOrders));
            }
        }
        
        showNotification(`Order #${orderNumber} status updated to ${newStatus}`, 'success');
        loadAdminOrders();
    }
}
// Request notification permission on page load
function requestNotificationPermission() {
    if ("Notification" in window) {
        Notification.requestPermission();
    }
}

// Send notification when new order arrives
function sendAdminNotification(order) {
    if ("Notification" in window && Notification.permission === "granted") {
        new Notification("🆕 NEW ORDER!", {
            body: `Order #${order.orderNumber} - UGX ${order.total.toLocaleString()} - ${order.items.length} items`,
            icon: "/Fresh logo.jpg",
            tag: order.orderNumber
        });
    }
}

// Call this in confirmOrder after saving order
// sendAdminNotification(order);