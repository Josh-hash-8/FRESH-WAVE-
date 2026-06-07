// ========== PRODUCT DATABASE ==========
const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: 5500,
    salePrice: 4675,
    category: "vegetables",
    image: "Tomatoes.jpg",
    unit: "kg",
    onSale: true,
  },
  {
    id: 2,
    name: "Red Onions",
    price: 3000,
    salePrice: 2550,
    category: "vegetables",
    image: "Onions.jpg",
    unit: "kg",
    onSale: true,
  },
  {
    id: 3,
    name: "Fresh Garlic",
    price: 9000,
    salePrice: 7650,
    category: "vegetables",
    image: "Garlic.jpg",
    unit: "kg",
    onSale: true,
  },
  {
    id: 4,
    name: "Fresh Spinach",
    price: 3500,
    salePrice: 2975,
    category: "vegetables",
    image: "Spinach.jpg",
    unit: "bunch",
    onSale: true,
  },
  {
    id: 5,
    name: "Fresh Kale",
    price: 3500,
    salePrice: 2975,
    category: "vegetables",
    image: "Fresh Kale.jpg",
    unit: "bunch",
    onSale: false,
  },
  {
    id: 6,
    name: "Mushrooms",
    price: 10000,
    salePrice: 8500,
    category: "vegetables",
    image: "Mushrooms.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 7,
    name: "Zucchini",
    price: 4500,
    salePrice: 3825,
    category: "vegetables",
    image: "Zucchini.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 8,
    name: "Squash",
    price: 4000,
    salePrice: 3400,
    category: "vegetables",
    image: "Squash.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 9,
    name: "Green Peppers",
    price: 4500,
    salePrice: 3825,
    category: "vegetables",
    image: "Green Pepper.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 10,
    name: "Lettuce",
    price: 3500,
    salePrice: 2975,
    category: "vegetables",
    image: "Lettuce.jpg",
    unit: "head",
    onSale: false,
  },
  {
    id: 11,
    name: "Green Beans",
    price: 4500,
    salePrice: 3825,
    category: "vegetables",
    image: "Green beans.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 12,
    name: "Cucumber",
    price: 4000,
    salePrice: 3400,
    category: "vegetables",
    image: "Cucumber.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 13,
    name: "Cabbage",
    price: 5000,
    salePrice: 4250,
    category: "vegetables",
    image: "Cabbage.jpg",
    unit: "head",
    onSale: false,
  },
  {
    id: 14,
    name: "Irish Potatoes",
    price: 4500,
    salePrice: 3825,
    category: "root",
    image: "Potatoes.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 15,
    name: "Sweet Potatoes",
    price: 4000,
    salePrice: 3400,
    category: "root",
    image: "sweet potatoes.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 16,
    name: "Cassava",
    price: 3500,
    salePrice: 2975,
    category: "root",
    image: "cassava.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 17,
    name: "Yams",
    price: 6000,
    salePrice: 5100,
    category: "root",
    image: "yams.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 18,
    name: "Ginger",
    price: 7000,
    salePrice: 5950,
    category: "root",
    image: "ginger.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 19,
    name: "Apples",
    price: 12000,
    salePrice: 10200,
    category: "fruits",
    image: "apples.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 20,
    name: "Oranges",
    price: 6000,
    salePrice: 5100,
    category: "fruits",
    image: "oranges.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 21,
    name: "Mangoes",
    price: 8000,
    salePrice: 6800,
    category: "fruits",
    image: "mangoes.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 22,
    name: "Bananas",
    price: 5000,
    salePrice: 4250,
    category: "fruits",
    image: "row bananas.jpg",
    unit: "bunch",
    onSale: false,
  },
  {
    id: 23,
    name: "Plantains",
    price: 4500,
    salePrice: 3825,
    category: "fruits",
    image: "row bananas.jpg",
    unit: "bunch",
    onSale: false,
  },
  {
    id: 24,
    name: "Avocado",
    price: 8000,
    salePrice: 6800,
    category: "fruits",
    image: "avocado.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 25,
    name: "Lemons",
    price: 5000,
    salePrice: 4250,
    category: "fruits",
    image: "lemon.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 26,
    name: "Tangerine",
    price: 4500,
    salePrice: 3825,
    category: "fruits",
    image: "tangerine.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 27,
    name: "Grapes",
    price: 18000,
    salePrice: 15300,
    category: "fruits",
    image: "grapes.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 28,
    name: "Peaches",
    price: 10000,
    salePrice: 8500,
    category: "fruits",
    image: "peaches.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 29,
    name: "Figs",
    price: 15000,
    salePrice: 12750,
    category: "fruits",
    image: "figs.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 30,
    name: "Kiwi",
    price: 9000,
    salePrice: 7650,
    category: "fruits",
    image: "kiwi.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 31,
    name: "Pomegranate",
    price: 11000,
    salePrice: 9350,
    category: "fruits",
    image: "pomegranate.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 32,
    name: "Watermelon",
    price: 8000,
    salePrice: 6800,
    category: "fruits",
    image: "watermelon.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 33,
    name: "Pumpkin",
    price: 4000,
    salePrice: 3400,
    category: "fruits",
    image: "pumpkin.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 34,
    name: "Peas",
    price: 4500,
    salePrice: 3825,
    category: "fruits",
    image: "peas.jpg",
    unit: "kg",
    onSale: false,
  },
  {
    id: 35,
    name: "Strawberries",
    price: 20000,
    salePrice: 17000,
    category: "berries",
    image: "strawberries.jpg",
    unit: "punnet",
    onSale: true,
  },
  {
    id: 36,
    name: "Blueberries",
    price: 25000,
    salePrice: 21250,
    category: "berries",
    image: "blueberries.jpg",
    unit: "punnet",
    onSale: false,
  },
  {
    id: 37,
    name: "Raspberries",
    price: 22000,
    salePrice: 18700,
    category: "berries",
    image: "raspberries.jpg",
    unit: "punnet",
    onSale: false,
  },
  {
    id: 38,
    name: "Blackberries",
    price: 23000,
    salePrice: 19550,
    category: "berries",
    image: "blackberries.jpg",
    unit: "punnet",
    onSale: false,
  },
  {
    id: 39,
    name: "Cranberries",
    price: 20000,
    salePrice: 17000,
    category: "berries",
    image: "cranberries.jpg",
    unit: "kg",
    onSale: false,
  },
];

// ========== GLOBAL VARIABLES ==========
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
let currentCategory = "all";
let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
let slideInterval;
let currentSlide = 0;

// ========== GOOGLE SHEETS WEBHOOK ==========
const GOOGLE_SHEET_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzKOMvESxYw3ICBN6KUJxyMR-8tkWJUSM7e0w1usw3JVRJ-0qyCRPNV8hS_DdZ-Zh-4/exec";

// ========== BACKGROUND SLIDESHOW FUNCTIONS ==========
const heroImages = [
  "Tomatoes.jpg",
  "Spinach.jpg",
  "strawberries.jpg",
  "mangoes.jpg",
  "avocado.jpg",
  "oranges.jpg",
  "apples.jpg",
  "grapes.jpg",
  "Potatoes.jpg",
  "Onions.jpg",
];

function initHeroSlideshow() {
  const slideshowContainer = document.getElementById("heroSlideshow");
  if (!slideshowContainer) return;

  heroImages.forEach((img, index) => {
    const slide = document.createElement("div");
    slide.className = "hero-slide";
    if (index === 0) slide.classList.add("active");
    slide.style.backgroundImage = `url('${img}')`;
    slide.style.backgroundSize = "cover";
    slide.style.backgroundPosition = "center";
    slideshowContainer.appendChild(slide);
  });
  startSlideshow();
}

function startSlideshow() {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    const slides = document.querySelectorAll(".hero-slide");
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 4000);
}

// ========== WHATSAPP NOTIFICATION FUNCTIONS ==========
function sendWhatsAppNotification(order, type = "confirmation") {
  const merchantNumber = "256764496110";
  const customerPhone = currentUser?.phone || order.customerPhone;

  if (type === "confirmation") {
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

👤 CUSTOMER DETAILS:
━━━━━━━━━━━━━━━━━━━━━━
🔹 Name: ${currentUser?.name || "Guest"}
🔹 Email: ${currentUser?.email || "N/A"}
🔹 Phone: ${customerPhone || "N/A"}

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
📞 Contact customer: ${customerPhone || "N/A"}`;

    window.open(
      `https://wa.me/${merchantNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  }

  // Send confirmation to customer
  if (customerPhone && type === "confirmation") {
    const customerMessage = `🎉 *ORDER CONFIRMED!* 🎉

Thank you for shopping at Fresh Wave!

📦 *Order #${order.orderNumber}*
💰 Total: UGX ${order.total.toLocaleString()}
🚚 Delivery: 1-2 hours

Track your order in your Dashboard!

Thank you for choosing Fresh Wave! 🌱`;

    setTimeout(() => {
      window.open(
        `https://wa.me/${customerPhone.replace(/^0/, "256")}?text=${encodeURIComponent(customerMessage)}`,
        "_blank",
      );
    }, 1000);
  }
}

// ========== GOOGLE SHEETS LOGGING ==========
async function logOrderToGoogleSheet(order) {
  const orderData = {
    orderNumber: order.orderNumber,
    customerEmail: currentUser?.email || "Guest",
    customerName: currentUser?.name || "Guest",
    customerPhone: currentUser?.phone || order.customerPhone || "N/A",
    total: order.total,
    paymentMethod: order.paymentMethod,
    address: order.address,
    items: order.items.map((i) => `${i.name} x${i.quantity}`).join(" | "),
    itemsCount: order.items.reduce((sum, i) => sum + i.quantity, 0),
    status: order.status,
    timestamp: new Date().toISOString(),
    orderDate: order.date,
  };

  try {
    await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });
    console.log("✅ Order logged to Google Sheet!");
  } catch (error) {
    console.error("❌ Failed to log order:", error);
  }
}

// ========== NAVIGATION FUNCTIONS ==========
function showHome() {
  hideAllSections();
  document.getElementById("homeSection").style.display = "block";
  updateActiveNav("navHome");
}
function showProducts() {
  hideAllSections();
  document.getElementById("productsSection").style.display = "block";
  filterProducts();
  updateActiveNav("navShop");
}
function showFlashSale() {
  hideAllSections();
  document.getElementById("homeSection").style.display = "block";
  document
    .getElementById("flashSaleSection")
    .scrollIntoView({ behavior: "smooth" });
  updateActiveNav("navFlashSale");
}
function showGallery() {
  hideAllSections();
  document.getElementById("gallerySection").style.display = "block";
  loadGallery();
  updateActiveNav("navGallery");
}
function showPrices() {
  hideAllSections();
  document.getElementById("pricesSection").style.display = "block";
  loadPricingTable();
  updateActiveNav("navPrices");
}
function showDelivery() {
  hideAllSections();
  document.getElementById("deliverySection").style.display = "block";
  updateActiveNav("navDelivery");
}
function showDashboard() {
  hideAllSections();
  document.getElementById("dashboardSection").style.display = "block";
  loadDashboard();
  updateActiveNav("navDashboard");
}
function showSupport() {
  hideAllSections();
  document.getElementById("supportSection").style.display = "block";
  updateActiveNav("navSupport");
}

function hideAllSections() {
  const sections = [
    "homeSection",
    "productsSection",
    "gallerySection",
    "pricesSection",
    "deliverySection",
    "dashboardSection",
    "supportSection",
  ];
  sections.forEach((s) => {
    const el = document.getElementById(s);
    if (el) el.style.display = "none";
  });
}

function updateActiveNav(activeId) {
  const navs = [
    "navHome",
    "navShop",
    "navFlashSale",
    "navGallery",
    "navPrices",
    "navDelivery",
    "navDashboard",
    "navSupport",
  ];
  navs.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("active");
  });
  const activeEl = document.getElementById(activeId);
  if (activeEl) activeEl.classList.add("active");
}

// ========== CATEGORY FILTER ==========
function filterByCategory(category) {
  currentCategory = category;
  document
    .querySelectorAll(".category-tab")
    .forEach((tab) => tab.classList.remove("active"));
  const tabs = document.querySelectorAll(".category-tab");
  for (let i = 0; i < tabs.length; i++) {
    const tabText = tabs[i].innerText.toLowerCase();
    if (
      (category === "all" && tabText.includes("all")) ||
      (category === "vegetables" &&
        (tabText.includes("vegetable") || tabText.includes("vegetables"))) ||
      (category === "fruits" && tabText.includes("fruit")) ||
      (category === "berries" && tabText.includes("berrie")) ||
      (category === "root" && tabText.includes("root"))
    ) {
      tabs[i].classList.add("active");
      break;
    }
  }
  showProducts();
}

// ========== PRODUCT DISPLAY ==========
function loadGallery() {
  const galleryProducts = products.filter((p) =>
    [1, 2, 4, 5, 6, 19, 20, 21, 24, 27, 35].includes(p.id),
  );
  const galleryHtml = galleryProducts
    .map(
      (p) => `
        <div class="gallery-item">
            <img src="${p.image}" onerror="this.src='https://placehold.co/400x250/2e8b57/white?text=${p.name}'">
            <div class="gallery-caption">${p.name}<br>UGX ${p.price.toLocaleString()}/${p.unit}</div>
        </div>
    `,
    )
    .join("");
  const galleryGrid = document.getElementById("galleryGrid");
  if (galleryGrid) galleryGrid.innerHTML = galleryHtml;
}

function loadPricingTable() {
  const tbody = document.getElementById("pricingTableBody");
  if (tbody) {
    tbody.innerHTML = products
      .map(
        (p) => `
            <tr><td style="font-weight:500">${p.name}</td><td>${p.category}</td><td>UGX ${p.price.toLocaleString()}</td><td>/${p.unit}</td>
            <td><button class="buy-now-btn" onclick="addToCart('${p.name}', ${p.price})">Buy</button></td>
        </tr>`,
      )
      .join("");
  }
}

function filterProducts() {
  let filtered = [...products];
  if (currentCategory !== "all")
    filtered = filtered.filter((p) => p.category === currentCategory);
  const maxPrice = parseInt(
    document.getElementById("priceFilter")?.value || 50000,
  );
  filtered = filtered.filter((p) => p.price <= maxPrice);
  const sortBy = document.getElementById("sortFilter")?.value || "default";
  if (sortBy === "price-low") filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === "price-high") filtered.sort((a, b) => b.price - a.price);

  const grid = document.getElementById("productsGrid");
  if (grid) {
    if (filtered.length === 0) {
      grid.innerHTML =
        '<div style="text-align:center; padding:40px;">No products found</div>';
    } else {
      grid.innerHTML = filtered
        .map(
          (p) => `
                <div class="product-card">
                    ${p.onSale ? '<div class="sale-badge">-15%</div>' : ""}
                    <div class="wishlist-heart ${wishlist.some((w) => w.id === p.id) ? "active" : ""}" onclick="toggleWishlist(${p.id}, '${p.name}', ${p.price}, '${p.image}', event)">
                        <i class="fas fa-heart"></i>
                    </div>
                    <img src="${p.image}" onerror="this.src='https://placehold.co/200x150/2e8b57/white?text=${p.name}'">
                    <h4>${p.name}</h4>
                    ${p.onSale ? `<div class="old-price">UGX ${p.price.toLocaleString()}</div><div class="sale-price">UGX ${p.salePrice.toLocaleString()}</div>` : `<div class="product-price">UGX ${p.price.toLocaleString()}</div>`}
                    <button class="add-to-cart-btn" onclick="addToCart('${p.name}', ${p.onSale ? p.salePrice : p.price})">Add to Cart</button>
                </div>
            `,
        )
        .join("");
    }
  }
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
        '<div style="text-align:center; padding:40px;">No products found matching "' +
        term +
        '"</div>';
    } else {
      grid.innerHTML = filtered
        .map(
          (p) => `
                <div class="product-card">
                    <img src="${p.image}" onerror="this.src='https://placehold.co/200x150/2e8b57/white?text=${p.name}'">
                    <h4>${p.name}</h4>
                    <div class="product-price">UGX ${p.price.toLocaleString()}</div>
                    <button class="add-to-cart-btn" onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
                </div>
            `,
        )
        .join("");
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
  if (priceFilter) priceFilter.value = "50000";
  updatePriceValue();
}

// ========== CART FUNCTIONS ==========
function addToCart(name, price) {
  const existing = cart.find((i) => i.name === name);
  if (existing) existing.quantity += 1;
  else cart.push({ name, price, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
  showNotification(`${name} added to cart!`, "success");
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.quantity, 0);
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const cartCountEl = document.getElementById("cartCount");
  const cartTotalEl = document.getElementById("cartTotal");
  if (cartCountEl) cartCountEl.textContent = count;
  if (cartTotalEl) cartTotalEl.textContent = total.toLocaleString();

  const itemsDiv = document.getElementById("cartItems");
  if (itemsDiv) {
    if (cart.length === 0) {
      itemsDiv.innerHTML =
        '<p style="text-align:center; padding:20px;">Your cart is empty</p>';
    } else {
      itemsDiv.innerHTML = cart
        .map(
          (i) => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${i.name}</div>
                        <div class="cart-item-price">UGX ${i.price.toLocaleString()}</div>
                    </div>
                    <div class="cart-item-quantity">
                        <button onclick="updateQty('${i.name}', -1)">-</button>
                        <span>${i.quantity}</span>
                        <button onclick="updateQty('${i.name}', 1)">+</button>
                        <button onclick="removeFromCart('${i.name}')" style="background:#ff6b6b; color:white;">🗑</button>
                    </div>
                </div>
            `,
        )
        .join("");
    }
  }

  const minOrder = 10000;
  const fill = document.getElementById("minOrderFill");
  const msg = document.getElementById("minOrderMessage");
  if (fill) fill.style.width = `${Math.min((total / minOrder) * 100, 100)}%`;
  if (msg)
    msg.textContent =
      total >= minOrder
        ? "✓ Minimum order reached! Ready for delivery."
        : `Add UGX ${(minOrder - total).toLocaleString()} more for delivery`;
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
}

function toggleCart() {
  const dropdown = document.getElementById("cartDropdown");
  const userMenu = document.getElementById("userMenu");
  if (dropdown) dropdown.classList.toggle("active");
  if (userMenu) userMenu.classList.remove("active");
}

function toggleUserMenu() {
  const userMenu = document.getElementById("userMenu");
  const dropdown = document.getElementById("cartDropdown");
  if (userMenu) userMenu.classList.toggle("active");
  if (dropdown) dropdown.classList.remove("active");
}

// ========== CHECKOUT & ORDER ==========
function goToCheckout() {
  if (cart.length === 0) {
    showNotification("Cart is empty!", "error");
    return;
  }
  if (!currentUser) {
    showNotification("Please login first", "error");
    showLoginModal();
    return;
  }
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  const summaryDiv = document.getElementById("checkoutSummary");
  if (summaryDiv) {
    summaryDiv.innerHTML =
      cart
        .map(
          (i) =>
            `<div class="checkout-item"><span>${i.name} x${i.quantity}</span><span>UGX ${(i.price * i.quantity).toLocaleString()}</span></div>`,
        )
        .join("") +
      `<div class="checkout-item" style="font-weight:bold; border-top:2px solid #2e8b57; margin-top:10px; padding-top:10px;"><span>Total:</span><span>UGX ${total.toLocaleString()}</span></div>`;
  }

  const airtelStep = document.getElementById("airtelStepAmount");
  const mtnStep = document.getElementById("mtnStepAmount");
  const airtelCartTotal = document.getElementById("airtelCartTotal");
  const mtnCartTotal = document.getElementById("mtnCartTotal");
  const codAmount = document.getElementById("codAmount");
  const finalTotal = document.getElementById("finalTotal");

  if (airtelStep) airtelStep.textContent = `UGX ${total.toLocaleString()}`;
  if (mtnStep) mtnStep.textContent = `UGX ${total.toLocaleString()}`;
  if (airtelCartTotal) airtelCartTotal.textContent = total.toLocaleString();
  if (mtnCartTotal) mtnCartTotal.textContent = total.toLocaleString();
  if (codAmount) codAmount.textContent = total.toLocaleString();
  if (finalTotal) finalTotal.textContent = `UGX ${total.toLocaleString()}`;

  const modal = document.getElementById("checkoutModal");
  if (modal) modal.classList.add("active");
}

function togglePaymentFields() {
  const selected = document.querySelector(
    'input[name="paymentMethod"]:checked',
  )?.value;
  const airtelSection = document.getElementById("airtelPaymentSection");
  const mtnSection = document.getElementById("mtnPaymentSection");
  const codSection = document.getElementById("codPaymentSection");

  if (airtelSection)
    airtelSection.style.display = selected === "airtel" ? "block" : "none";
  if (mtnSection)
    mtnSection.style.display = selected === "mtn" ? "block" : "none";
  if (codSection)
    codSection.style.display = selected === "cod" ? "block" : "none";
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  showNotification("Copied!", "success");
}

function confirmOrder() {
  const address = document.getElementById("deliveryAddressInput")?.value.trim();
  if (!address) {
    showNotification("Enter delivery address", "error");
    return;
  }

  const paymentMethodRadio = document.querySelector(
    'input[name="paymentMethod"]:checked',
  );
  if (!paymentMethodRadio) {
    showNotification("Select payment method", "error");
    return;
  }
  const paymentMethod = paymentMethodRadio.value;

  const cartTotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const orderNumber = "ORD-" + Math.floor(Math.random() * 90000 + 10000);
  const orderDate = new Date().toLocaleString();

  let customerPhone = "";
  if (paymentMethod === "airtel") {
    customerPhone = document.getElementById("airtelPhoneNumber")?.value.trim();
    const transactionRef = document
      .getElementById("airtelTransactionReference")
      ?.value.trim();
    const amountPaid =
      parseFloat(document.getElementById("airtelAmountPaid")?.value) || 0;
    if (!customerPhone || !transactionRef) {
      showNotification("Fill all payment fields", "error");
      return;
    }
    if (amountPaid !== cartTotal) {
      showNotification(`Amount mismatch!`, "error");
      return;
    }
  } else if (paymentMethod === "mtn") {
    customerPhone = document.getElementById("mtnPhoneNumber")?.value.trim();
    const transactionRef = document
      .getElementById("mtnTransactionReference")
      ?.value.trim();
    const amountPaid =
      parseFloat(document.getElementById("mtnAmountPaid")?.value) || 0;
    if (!customerPhone || !transactionRef) {
      showNotification("Fill all payment fields", "error");
      return;
    }
    if (amountPaid !== cartTotal) {
      showNotification(`Amount mismatch!`, "error");
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
    customerPhone: customerPhone || currentUser?.phone,
  };

  // Save to localStorage
  const orders = JSON.parse(
    localStorage.getItem(`orders_${currentUser.email}`) || "[]",
  );
  orders.push(order);
  localStorage.setItem(`orders_${currentUser.email}`, JSON.stringify(orders));

  const allOrders = JSON.parse(localStorage.getItem("all_orders") || "[]");
  allOrders.push({ ...order, customerEmail: currentUser.email });
  localStorage.setItem("all_orders", JSON.stringify(allOrders));

  // Send to Google Sheets
  logOrderToGoogleSheet(order);

  // Send WhatsApp notifications
  sendWhatsAppNotification(order, "confirmation");

  // Clear cart
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();

  showNotification(
    `Order #${orderNumber} confirmed! Check WhatsApp for details.`,
    "success",
  );
  closeCheckoutModal();

  // Show payment confirmation modal
  const paymentModal = document.getElementById("paymentConfirmationModal");
  if (paymentModal) {
    const confirmTitle = document.getElementById("confirmationTitle");
    const confirmMsg = document.getElementById("confirmationMessage");
    if (confirmTitle) confirmTitle.textContent = "✅ ORDER CONFIRMED!";
    if (confirmMsg)
      confirmMsg.innerHTML = `Order #${orderNumber}<br>Total: UGX ${cartTotal.toLocaleString()}<br>Delivery: 1-2 hours<br>A confirmation has been sent to WhatsApp.`;
    paymentModal.classList.add("active");
    setTimeout(() => paymentModal.classList.remove("active"), 4000);
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  if (modal) modal.classList.remove("active");
}

// ========== DASHBOARD ==========
function loadDashboard() {
  if (!currentUser) {
    const dashboardContent = document.getElementById("dashboardContent");
    if (dashboardContent) {
      dashboardContent.innerHTML =
        '<p style="text-align:center; padding:40px;">Please login to view your dashboard</p><button onclick="showLoginModal()" style="background:#2e8b57; color:white; border:none; padding:12px 25px; border-radius:25px; cursor:pointer;">Login</button>';
    }
    return;
  }

  const orders = JSON.parse(
    localStorage.getItem(`orders_${currentUser.email}`) || "[]",
  );
  const totalSpent = orders.reduce((s, o) => s + (o.total || 0), 0);

  let ordersHtml = "";
  if (orders.length === 0) {
    ordersHtml = "<p>No orders yet. Start shopping!</p>";
  } else {
    ordersHtml = orders
      .map(
        (order) => `
            <div style="background: white; padding: 15px; border-radius: 10px; margin-bottom: 10px; border-left: 4px solid ${order.status === "delivered" ? "#2e8b57" : order.status === "cancelled" ? "#ff6b6b" : "#2196F3"};">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                    <strong>Order #${order.orderNumber}</strong>
                    <span style="background: ${order.status === "delivered" ? "#2e8b57" : order.status === "cancelled" ? "#ff6b6b" : "#2196F3"}; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px;">${order.status || "Confirmed"}</span>
                </div>
                <div style="margin-top: 8px; color: #666; font-size: 13px;">
                    <div>📅 Date: ${order.date}</div>
                    <div>💰 Total: UGX ${(order.total || 0).toLocaleString()}</div>
                    <div>💳 Payment: ${order.paymentMethod}</div>
                </div>
                <div style="margin-top: 12px; display: flex; gap: 10px; flex-wrap: wrap;">
                    <button onclick="trackOrder('${order.orderNumber}')" style="background: #2196F3; color: white; border: none; padding: 6px 15px; border-radius: 20px; cursor: pointer;">
                        <i class="fas fa-map-marker-alt"></i> Track Order
                    </button>
                    <button onclick="reorderOrder('${order.orderNumber}')" style="background: #2e8b57; color: white; border: none; padding: 6px 15px; border-radius: 20px; cursor: pointer;">
                        <i class="fas fa-redo"></i> Reorder
                    </button>
                </div>
            </div>
        `,
      )
      .join("");
  }

  const dashboardContent = document.getElementById("dashboardContent");
  if (dashboardContent) {
    dashboardContent.innerHTML = `
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px,1fr)); gap:20px; margin-bottom:30px;">
                <div style="background: white; padding:25px; border-radius:15px; text-align:center;"><i class="fas fa-shopping-bag" style="font-size:40px; color:#2e8b57;"></i><h2>${orders.length}</h2><p>Total Orders</p></div>
                <div style="background: white; padding:25px; border-radius:15px; text-align:center;"><i class="fas fa-check-circle" style="font-size:40px; color:#2e8b57;"></i><h2>${orders.filter((o) => o.status === "delivered").length}</h2><p>Delivered</p></div>
                <div style="background: white; padding:25px; border-radius:15px; text-align:center;"><i class="fas fa-gem" style="font-size:40px; color:#2e8b57;"></i><h2>UGX ${totalSpent.toLocaleString()}</h2><p>Total Spent</p></div>
            </div>
            <h3><i class="fas fa-history"></i> Order History</h3>
            ${ordersHtml}
            <div style="margin-top: 20px; text-align: center;">
                <button onclick="showProducts()" style="background: #2e8b57; color: white; border: none; padding: 12px 25px; border-radius: 25px; cursor: pointer;">
                    <i class="fas fa-shopping-cart"></i> Continue Shopping
                </button>
            </div>
        `;
  }
}

function trackOrder(orderNumber) {
  const orders = JSON.parse(
    localStorage.getItem(`orders_${currentUser.email}`) || "[]",
  );
  const order = orders.find((o) => o.orderNumber === orderNumber);
  if (!order) {
    showNotification("Order not found!", "error");
    return;
  }

  const status = order.status || "confirmed";
  const statusInfo = {
    confirmed: {
      text: "Order Confirmed",
      color: "#2196F3",
      eta: "Preparing - 45-60 min",
    },
    preparing: {
      text: "Preparing Order",
      color: "#ff9800",
      eta: "Packing - 30-45 min",
    },
    onway: { text: "On The Way", color: "#ff6b6b", eta: "15-20 minutes" },
    delivered: { text: "Delivered", color: "#2e8b57", eta: "Delivered" },
    cancelled: { text: "Cancelled", color: "#999", eta: "Order Cancelled" },
  };
  const current = statusInfo[status] || statusInfo.confirmed;

  alert(
    `📍 ORDER #${order.orderNumber}\nStatus: ${current.text}\nEstimated Delivery: ${current.eta}\nTotal: UGX ${(order.total || 0).toLocaleString()}`,
  );
}

function reorderOrder(orderNumber) {
  const orders = JSON.parse(
    localStorage.getItem(`orders_${currentUser.email}`) || "[]",
  );
  const order = orders.find((o) => o.orderNumber === orderNumber);
  if (order && order.items) {
    order.items.forEach((item) => {
      const product = products.find((p) => p.name === item.name);
      if (product) {
        addToCart(item.name, product.price);
      }
    });
    showNotification("Items added to cart!", "success");
    showProducts();
  }
}

// ========== WISHLIST ==========
function toggleWishlist(id, name, price, image, event) {
  if (event) event.stopPropagation();
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

  const container = document.getElementById("wishlistItems");
  const modal = document.getElementById("wishlistModal");

  if (wishlist.length === 0) {
    if (container)
      container.innerHTML =
        '<p style="text-align:center; padding: 40px;">Your wishlist is empty. Add items you love!</p>';
  } else {
    if (container) {
      container.innerHTML = wishlist
        .map(
          (item) => `
                <div class="wishlist-item">
                    <img src="${item.image}" onerror="this.src='https://placehold.co/200x120/2e8b57/white?text=${item.name}'">
                    <h4>${item.name}</h4>
                    <p>UGX ${item.price.toLocaleString()}</p>
                    <button class="add-to-cart-btn" onclick="addToCart('${item.name}', ${item.price}); closeWishlistModal();">Add to Cart</button>
                    <button onclick="removeFromWishlist(${item.id})" style="background:#ff6b6b; color:white; border:none; padding:5px 10px; border-radius:20px; margin-top:5px; cursor:pointer;">Remove</button>
                </div>
            `,
        )
        .join("");
    }
  }
  if (modal) modal.classList.add("active");
}

function closeWishlistModal() {
  const modal = document.getElementById("wishlistModal");
  if (modal) modal.classList.remove("active");
}

function removeFromWishlist(id) {
  wishlist = wishlist.filter((w) => w.id !== id);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistUI();
  showWishlist();
  filterProducts();
}

// ========== PROFILE FUNCTIONS ==========
function showProfile() {
  if (!currentUser) {
    showNotification("Please login first", "error");
    showLoginModal();
    return;
  }
  loadProfileData();
  const modal = document.getElementById("profileModal");
  if (modal) modal.classList.add("active");
}

function closeProfileModal() {
  const modal = document.getElementById("profileModal");
  if (modal) modal.classList.remove("active");
}

function loadProfileData() {
  if (!currentUser) return;
  const nameInput = document.getElementById("profileName");
  const emailInput = document.getElementById("profileEmail");
  const phoneInput = document.getElementById("profilePhone");
  const addressInput = document.getElementById("profileAddress");
  const profileImage = document.getElementById("profileImage");

  if (nameInput) nameInput.value = currentUser.name || "";
  if (emailInput) emailInput.value = currentUser.email || "";
  if (phoneInput) phoneInput.value = currentUser.phone || "";
  if (addressInput) addressInput.value = currentUser.address || "";
  if (profileImage && currentUser.profileImage)
    profileImage.src = currentUser.profileImage;
}

function saveProfile() {
  if (!currentUser) return;
  const nameInput = document.getElementById("profileName");
  const phoneInput = document.getElementById("profilePhone");
  const addressInput = document.getElementById("profileAddress");

  if (nameInput) currentUser.name = nameInput.value;
  if (phoneInput) currentUser.phone = phoneInput.value;
  if (addressInput) currentUser.address = addressInput.value;

  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  const userIndex = users.findIndex((u) => u.email === currentUser.email);
  if (userIndex !== -1) {
    users[userIndex] = currentUser;
    localStorage.setItem("users", JSON.stringify(users));
  }

  updateUserUI();
  showNotification("Profile saved successfully!", "success");
  closeProfileModal();
}

function uploadProfileImage() {
  document.getElementById("profileImageInput")?.click();
}

// ========== AUTHENTICATION ==========
function showLoginModal() {
  showModal("login");
}
function showRegisterModal() {
  showModal("register");
}

function showModal(type) {
  const modal = document.getElementById("authModal");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginForm) loginForm.style.display = type === "login" ? "block" : "none";
  if (registerForm)
    registerForm.style.display = type === "register" ? "block" : "none";
  if (modal) modal.classList.add("active");
}

function closeModal() {
  const modal = document.getElementById("authModal");
  if (modal) modal.classList.remove("active");
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
    currentUser = {
      name: email.split("@")[0],
      email,
      password: pwd,
      joinDate: new Date().toISOString(),
    };
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
    const newUser = {
      name,
      email,
      phone,
      password: pwd,
      joinDate: new Date().toISOString(),
    };
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

function updateUserUI() {
  const nameSpan = document.getElementById("userNameDisplay");
  const infoSec = document.getElementById("userInfoSection");
  const linksSec = document.getElementById("userLinksSection");

  if (currentUser) {
    if (nameSpan) nameSpan.textContent = currentUser.name.split(" ")[0];
    if (infoSec) infoSec.style.display = "none";
    if (linksSec) linksSec.style.display = "block";
  } else {
    if (nameSpan) nameSpan.textContent = "Account";
    if (infoSec) infoSec.style.display = "block";
    if (linksSec) linksSec.style.display = "none";
  }
}

// ========== AI CHAT ==========
function openAIChat() {
  const modal = document.getElementById("aiChatModal");
  if (modal) modal.classList.add("active");
}

function closeAIChat() {
  const modal = document.getElementById("aiChatModal");
  if (modal) modal.classList.remove("active");
}

function sendChatMessage() {
  const input = document.getElementById("chatInput");
  const msg = input?.value.trim();
  if (!msg) return;

  const chatDiv = document.getElementById("chatMessages");
  if (chatDiv) {
    chatDiv.innerHTML += `<div style="background:#2e8b57; color:white; padding:10px 15px; border-radius:18px; margin-bottom:10px; max-width:85%; margin-left:auto;">${escapeHtml(msg)}</div>`;
    input.value = "";
    chatDiv.scrollTop = chatDiv.scrollHeight;

    setTimeout(() => {
      let response = "";
      const q = msg.toLowerCase();
      if (q.includes("airtel"))
        response =
          "📱 Airtel Money Till: 7104763. Dial *185# and follow prompts.";
      else if (q.includes("mtn"))
        response = "📱 MTN MoMo: 61967992. Dial *165# and follow prompts.";
      else if (q.includes("price"))
        response =
          "💰 Fresh Tomatoes: 5,500/kg, Red Onions: 3,000/kg, Fresh Garlic: 9,000/kg, Strawberries: 20,000/punnet!";
      else if (q.includes("delivery"))
        response =
          "🚚 Delivery takes 1-2 hours in Kampala. Free delivery on orders over UGX 50,000!";
      else if (q.includes("track"))
        response =
          "📍 Go to Dashboard → Order History and click 'Track Order' to see real-time status.";
      else
        response =
          "👋 I can help with: products 📦, delivery 🚚, payments 💳, and order tracking 📍! What would you like to know?";

      chatDiv.innerHTML += `<div style="background:white; padding:10px 15px; border-radius:18px; margin-bottom:10px; max-width:85%;">${response}</div>`;
      chatDiv.scrollTop = chatDiv.scrollHeight;
    }, 500);
  }
}

function transferToHuman() {
  window.open("https://wa.me/256764496110", "_blank");
}
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ========== FLASH SALE TIMER ==========
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
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (hoursEl)
      hoursEl.textContent = Math.floor(dist / 3600000)
        .toString()
        .padStart(2, "0");
    if (minutesEl)
      minutesEl.textContent = Math.floor((dist % 3600000) / 60000)
        .toString()
        .padStart(2, "0");
    if (secondsEl)
      secondsEl.textContent = Math.floor((dist % 60000) / 1000)
        .toString()
        .padStart(2, "0");
  }
  update();
  setInterval(update, 1000);
}

function loadSaleProducts() {
  const saleItems = products.filter((p) => p.onSale);
  const container = document.getElementById("saleProducts");
  if (container) {
    container.innerHTML = saleItems
      .map(
        (p) => `
            <div class="product-card">
                <div class="sale-badge">-15%</div>
                <img src="${p.image}" onerror="this.src='https://placehold.co/200x150/2e8b57/white?text=${p.name}'">
                <h4>${p.name}</h4>
                <div class="old-price">UGX ${p.price.toLocaleString()}</div>
                <div class="sale-price">UGX ${p.salePrice.toLocaleString()}</div>
                <button class="add-to-cart-btn" onclick="addToCart('${p.name}', ${p.salePrice})">Add to Cart</button>
            </div>
        `,
      )
      .join("");
  }
}

// ========== NOTIFICATION ==========
function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === "success" ? "#2e8b57" : type === "error" ? "#ff6b6b" : "#2196F3"};
        color: white;
        padding: 12px 20px;
        border-radius: 10px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-size: 14px;
    `;
  notification.innerHTML = `<i class="fas ${type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-info-circle"}"></i> ${message}`;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

// ========== INITIALIZATION ==========
document.addEventListener("DOMContentLoaded", function () {
  console.log("Fresh Wave website loaded with all features!");

  // Initialize slideshow
  initHeroSlideshow();

  // Initialize UI
  updateCartUI();
  updateUserUI();
  updateWishlistUI();
  filterProducts();
  loadSaleProducts();
  initFlashSaleTimer();
  loadPricingTable();
  loadGallery();

  // Profile image upload handler
  const profileImageInput = document.getElementById("profileImageInput");
  if (profileImageInput) {
    profileImageInput.addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (file && currentUser) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          currentUser.profileImage = ev.target.result;
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
          const profileImg = document.getElementById("profileImage");
          if (profileImg) profileImg.src = ev.target.result;
          showNotification("Profile picture updated!", "success");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Contact form handler
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showNotification("Message sent! We'll reply soon.", "success");
      contactForm.reset();
    });
  }

  // Close modals when clicking outside
  window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.classList.remove("active");
      }
    });
  };
});

// Add animation style
const style = document.createElement("style");
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    .wishlist-heart {
        position: absolute;
        top: 10px;
        right: 10px;
        background: white;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        z-index: 10;
    }
    .wishlist-heart i {
        color: #ccc;
    }
    .wishlist-heart.active i {
        color: #ff6b6b;
    }
    .hero-slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }
    .hero-slide.active {
        opacity: 1;
    }
    .hero-slide::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.55);
        z-index: 1;
    }
    .hero .container {
        position: relative;
        z-index: 2;
    }
`;
document.head.appendChild(style);
