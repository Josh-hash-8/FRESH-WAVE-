// ========== COMPLETE SCRIPT.JS WITH GUEST ACCESS ==========

// ========== PRODUCT DATABASE (39 PRODUCTS) ==========
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
    image: "bananas.jpg",
    unit: "bunch",
    onSale: false,
  },
  {
    id: 23,
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
    image: "plantains.jpg",
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

// ========== FAQ DATABASE ==========
const faqData = [
  {
    id: 1,
    category: "ordering",
    question: "How do I place an order?",
    answer:
      "Browse products, add to cart, proceed to checkout, enter delivery address, select payment method, and confirm your order.",
  },
  {
    id: 2,
    category: "ordering",
    question: "Can I cancel my order?",
    answer:
      "Yes, within 5 minutes of placing or before preparation begins. Contact us via WhatsApp with your order number.",
  },
  {
    id: 3,
    category: "ordering",
    question: "How do I track my order?",
    answer:
      "Click 'Track Order' in the navigation menu and enter your order number for live tracking with map, distance, and real-time updates.",
  },
  {
    id: 4,
    category: "payment",
    question: "What payment methods do you accept?",
    answer:
      "Airtel Money (Till: 7104763), MTN Mobile Money (Number: 61967992), and Cash on Delivery.",
  },
  {
    id: 5,
    category: "payment",
    question: "Is mobile money payment safe?",
    answer:
      "Yes! Your PIN is entered on YOUR phone. We never ask for your PIN.",
  },
  {
    id: 6,
    category: "delivery",
    question: "How long does delivery take?",
    answer: "1-2 hours within Kampala Metropolitan Area.",
  },
  {
    id: 7,
    category: "delivery",
    question: "Which areas do you deliver to?",
    answer:
      "Kampala Central, Nakawa, Makindye, Kawempe, Rubaga, Kalerwe, Bwaise, Ntinda, Kololo, Naguru.",
  },
  {
    id: 8,
    category: "delivery",
    question: "Is delivery free?",
    answer: "Free on orders above UGX 50,000. UGX 5,000 fee applies below.",
  },
  {
    id: 9,
    category: "products",
    question: "Are your products fresh?",
    answer: "100% fresh! Sourced daily from local farms.",
  },
  {
    id: 10,
    category: "products",
    question: "What if I receive damaged products?",
    answer: "Contact us within 2 hours with photos for replacement or refund.",
  },
  {
    id: 11,
    category: "account",
    question: "Do I need an account?",
    answer:
      "You can browse as guest, but you need to create an account to place orders and track them.",
  },
  {
    id: 12,
    category: "account",
    question: "How do I create an account?",
    answer:
      "Click on 'Account' in the top right corner and select 'Register'. Fill in your details and agree to terms.",
  },
  {
    id: 13,
    category: "general",
    question: "Business hours?",
    answer: "Monday-Saturday, 6AM-8PM. Closed Sundays.",
  },
  {
    id: 14,
    category: "general",
    question: "How to contact support?",
    answer: "WhatsApp: +256 764 496 110, Call: +256 745 942 209",
  },
];

// ========== GLOBAL VARIABLES ==========
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let currentUser = null;
let currentCategory = "all";
let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
let slideInterval;
let currentSlide = 0;
let currentFAQCategory = "all";

// ========== HELPER FUNCTIONS ==========
function getRiderByAddress(address) {
  const riderDatabase = {
    "Kampala Central": {
      name: "John Mukasa",
      phone: "0772345678",
      vehicle: "Motorcycle",
      plateNumber: "UBC 123M",
      rating: 4.8,
      lat: 0.3136,
      lng: 32.5811,
      deliveryCount: 1250,
    },
    Nakawa: {
      name: "Sarah Namirembe",
      phone: "0789456123",
      vehicle: "Bicycle",
      plateNumber: "UBG 456K",
      rating: 4.9,
      lat: 0.3398,
      lng: 32.6065,
      deliveryCount: 890,
    },
    Makindye: {
      name: "Peter Wasswa",
      phone: "0756123789",
      vehicle: "Motorcycle",
      plateNumber: "UBA 789L",
      rating: 4.7,
      lat: 0.2872,
      lng: 32.5928,
      deliveryCount: 2100,
    },
  };
  const defaultRider = {
    name: "Fresh Wave Rider",
    phone: "0764496110",
    vehicle: "Motorcycle",
    plateNumber: "FRSH 001",
    rating: 4.8,
    lat: 0.347596,
    lng: 32.58252,
    deliveryCount: 500,
  };
  if (!address) return defaultRider;
  for (const [area, rider] of Object.entries(riderDatabase)) {
    if (address.toLowerCase().includes(area.toLowerCase())) return rider;
  }
  return defaultRider;
}

function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return parseFloat((R * c).toFixed(1));
}

// ========== AUTHENTICATION FUNCTIONS ==========
function initializeUserDatabase() {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
  }
}

function getCurrentUser() {
  const storedUser =
    localStorage.getItem("currentUser") ||
    sessionStorage.getItem("currentUser");
  if (storedUser && storedUser !== "null") {
    return JSON.parse(storedUser);
  }
  return null;
}

function updateUserData(updatedUser) {
  currentUser = updatedUser;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  sessionStorage.setItem("currentUser", JSON.stringify(currentUser));

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  const userIndex = users.findIndex((u) => u.email === updatedUser.email);
  if (userIndex !== -1) {
    users[userIndex] = updatedUser;
    localStorage.setItem("users", JSON.stringify(users));
  }
}

function checkLoginStatus() {
  currentUser = getCurrentUser();
  updateUserUI();
  return currentUser !== null;
}

// Require login for specific actions
function requireLogin(actionName) {
  if (!currentUser) {
    showNotification(`Please login to ${actionName}`, "error");
    showLoginModal();
    return false;
  }
  return true;
}

function login() {
  const email = document.getElementById("loginEmail")?.value.trim();
  const password = document.getElementById("loginPassword")?.value;

  if (!email || !password) {
    showNotification("Enter email and password", "error");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    sessionStorage.setItem("currentUser", JSON.stringify(user));
    currentUser = user;
    updateUserUI();
    closeModal();
    showNotification(`Welcome back ${user.name}!`, "success");
    location.reload();
  } else {
    showNotification("Invalid email or password", "error");
  }
}

function register() {
  const name = document.getElementById("regName")?.value.trim();
  const email = document.getElementById("regEmail")?.value.trim();
  const phone = document.getElementById("regPhone")?.value.trim();
  const password = document.getElementById("regPassword")?.value;
  const confirmPassword = document.getElementById("regConfirmPassword")?.value;
  const acceptTerms = document.getElementById("acceptTerms")?.checked;

  if (!name || !email || !phone || !password) {
    showNotification("Please fill all fields", "error");
    return;
  }
  if (password !== confirmPassword) {
    showNotification("Passwords do not match", "error");
    return;
  }
  if (password.length < 6) {
    showNotification("Password must be at least 6 characters", "error");
    return;
  }
  if (!acceptTerms) {
    showNotification("You must accept the Terms and Conditions", "error");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.find((u) => u.email === email)) {
    showNotification("Email already registered", "error");
    return;
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    phone,
    password,
    address: "",
    profileImage: null,
    joinDate: new Date().toISOString(),
    themePref: "light",
    totalOrders: 0,
    totalSpent: 0,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  sessionStorage.setItem("currentUser", JSON.stringify(newUser));
  currentUser = newUser;
  updateUserUI();
  closeModal();
  showNotification(`Welcome ${name}!`, "success");
  location.reload();
}

function logout() {
  if (confirm("Are you sure you want to logout?")) {
    currentUser = null;
    localStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUser");
    updateUserUI();
    showNotification("Logged out successfully", "success");
  }
}

// ========== PROFILE FUNCTIONS ==========
function saveProfile() {
  if (!requireLogin("save profile")) return;
  if (!currentUser) return;
  currentUser.name = document.getElementById("profileName").value;
  currentUser.phone = document.getElementById("profilePhone").value;
  currentUser.address = document.getElementById("profileAddress").value;
  updateUserData(currentUser);
  updateUserUI();
  showNotification("Profile saved!", "success");
  closeProfileModal();
}

function saveSecuritySettings() {
  if (!requireLogin("save security settings")) return;
  if (!currentUser) return;
  const currentPassword = document.getElementById("currentPassword")?.value;
  const newPassword = document.getElementById("newPassword")?.value;
  const confirmPassword = document.getElementById("confirmPassword")?.value;

  if (currentPassword && currentPassword !== currentUser.password) {
    showNotification("Current password incorrect", "error");
    return;
  }
  if (newPassword) {
    if (newPassword.length < 6) {
      showNotification("Password must be at least 6 characters", "error");
      return;
    }
    if (newPassword !== confirmPassword) {
      showNotification("Passwords do not match", "error");
      return;
    }
    currentUser.password = newPassword;
    showNotification("Password changed!", "success");
  }
  updateUserData(currentUser);
  document.getElementById("currentPassword").value = "";
  document.getElementById("newPassword").value = "";
  document.getElementById("confirmPassword").value = "";
}

function savePreferences() {
  if (!requireLogin("save preferences")) return;
  if (!currentUser) return;
  const themePref = document.getElementById("userThemePref")?.value;
  if (themePref) currentUser.themePref = themePref;
  updateUserData(currentUser);
  if (themePref === "dark") document.body.classList.add("dark-theme");
  else document.body.classList.remove("dark-theme");
  showNotification("Preferences saved!", "success");
  closeProfileModal();
}

function loadProfileData() {
  if (!currentUser) return;
  document.getElementById("profileName").value = currentUser.name || "";
  document.getElementById("profileEmail").value = currentUser.email || "";
  document.getElementById("profilePhone").value = currentUser.phone || "";
  document.getElementById("profileAddress").value = currentUser.address || "";
  document.getElementById("profileImage").src =
    currentUser.profileImage ||
    "https://placehold.co/100x100/2e8b57/white?text=User";
  if (document.getElementById("userThemePref")) {
    document.getElementById("userThemePref").value =
      currentUser.themePref || "light";
  }
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

// ========== BACKGROUND SLIDESHOW ==========
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

// ========== NAVIGATION ==========
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
function showTracking() {
  hideAllSections();
  document.getElementById("trackingSection").style.display = "block";
  updateActiveNav("navTracking");
}
function showDashboard() {
  if (!requireLogin("view dashboard")) return;
  hideAllSections();
  document.getElementById("dashboardSection").style.display = "block";
  loadDashboard();
  updateActiveNav("navDashboard");
}
function showTerms() {
  hideAllSections();
  document.getElementById("termsSection").style.display = "block";
  updateActiveNav("navTerms");
}
function showFAQ() {
  hideAllSections();
  document.getElementById("faqSection").style.display = "block";
  loadFAQ();
  updateActiveNav("navFAQ");
}
function showSupport() {
  hideAllSections();
  document.getElementById("supportSection").style.display = "block";
  updateActiveNav("navSupport");
}
function showProfile() {
  if (!requireLogin("view profile")) return;
  loadProfileData();
  document.getElementById("profileModal").classList.add("active");
}
function closeProfileModal() {
  document.getElementById("profileModal").classList.remove("active");
}
function showLoginModal() {
  showModal("login");
}
function showRegisterModal() {
  showModal("register");
}
function closeModal() {
  document.getElementById("authModal").classList.remove("active");
}
function openAIChat() {
  document.getElementById("aiChatModal").classList.add("active");
}
function closeAIChat() {
  document.getElementById("aiChatModal").classList.remove("active");
}

function showModal(type) {
  const modal = document.getElementById("authModal");
  document.getElementById("loginForm").style.display =
    type === "login" ? "block" : "none";
  document.getElementById("registerForm").style.display =
    type === "register" ? "block" : "none";
  modal.classList.add("active");
}

function hideAllSections() {
  const sections = [
    "homeSection",
    "productsSection",
    "gallerySection",
    "pricesSection",
    "deliverySection",
    "trackingSection",
    "dashboardSection",
    "termsSection",
    "faqSection",
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
    "navTracking",
    "navDashboard",
    "navTerms",
    "navFAQ",
    "navSupport",
  ];
  navs.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("active");
  });
  const activeEl = document.getElementById(activeId);
  if (activeEl) activeEl.classList.add("active");
}

function toggleUserMenu() {
  const userMenu = document.getElementById("userMenu");
  const dropdown = document.getElementById("cartDropdown");
  if (userMenu) userMenu.classList.toggle("active");
  if (dropdown) dropdown.classList.remove("active");
}
function toggleCart() {
  const dropdown = document.getElementById("cartDropdown");
  const userMenu = document.getElementById("userMenu");
  if (dropdown) dropdown.classList.toggle("active");
  if (userMenu) userMenu.classList.remove("active");
}
function uploadProfileImage() {
  document.getElementById("profileImageInput")?.click();
}
function switchProfileTab(tab) {
  document.getElementById("profileInfoTab").style.display =
    tab === "info" ? "block" : "none";
  document.getElementById("profileSecurityTab").style.display =
    tab === "security" ? "block" : "none";
  document.getElementById("profilePrefsTab").style.display =
    tab === "preferences" ? "block" : "none";
  const tabs = document.querySelectorAll(".profile-tab");
  tabs.forEach((t) => t.classList.remove("active"));
  if (tab === "info") tabs[0]?.classList.add("active");
  else if (tab === "security") tabs[1]?.classList.add("active");
  else if (tab === "preferences") tabs[2]?.classList.add("active");
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

// ========== PRODUCT FUNCTIONS ==========
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
            <tr><td style="font-weight:500">${p.name}</td><td style="text-transform:capitalize">${p.category}</td>
            <td>UGX ${p.price.toLocaleString()}</td><td style="text-align:center">/${p.unit}</td>
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

// ========== CART FUNCTIONS (Require Login) ==========
function addToCart(name, price) {
  if (!requireLogin("add items to cart")) return;
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

function goToCheckout() {
  if (!requireLogin("checkout")) return;
  if (cart.length === 0) {
    showNotification("Cart is empty!", "error");
    return;
  }
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const summaryDiv = document.getElementById("checkoutSummary");
  if (summaryDiv) {
    summaryDiv.innerHTML = `
            <h4>Order Summary</h4>
            ${cart.map((i) => `<div class="checkout-item"><span>${i.name} x${i.quantity}</span><span>UGX ${(i.price * i.quantity).toLocaleString()}</span></div>`).join("")}
            <div class="checkout-item" style="font-weight:bold; border-top:2px solid #2e8b57; margin-top:10px; padding-top:10px;">
                <span>Total:</span><span>UGX ${total.toLocaleString()}</span>
            </div>
        `;
  }
  const airtelStepAmount = document.getElementById("airtelStepAmount");
  const mtnStepAmount = document.getElementById("mtnStepAmount");
  const airtelCartTotal = document.getElementById("airtelCartTotal");
  const mtnCartTotal = document.getElementById("mtnCartTotal");
  const codAmount = document.getElementById("codAmount");
  const finalTotal = document.getElementById("finalTotal");
  if (airtelStepAmount)
    airtelStepAmount.textContent = `UGX ${total.toLocaleString()}`;
  if (mtnStepAmount)
    mtnStepAmount.textContent = `UGX ${total.toLocaleString()}`;
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
  if (!requireLogin("place an order")) return;

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
  let transactionRef = "";
  let amountPaid = 0;

  if (paymentMethod === "airtel") {
    customerPhone = document.getElementById("airtelPhoneNumber")?.value.trim();
    transactionRef = document
      .getElementById("airtelTransactionReference")
      ?.value.trim();
    amountPaid =
      parseFloat(document.getElementById("airtelAmountPaid")?.value) || 0;
    if (!customerPhone) {
      showNotification("Enter Airtel number", "error");
      return;
    }
    if (!transactionRef) {
      showNotification("Enter transaction reference", "error");
      return;
    }
    if (amountPaid !== cartTotal) {
      showNotification(
        `Amount mismatch! Total is UGX ${cartTotal.toLocaleString()}`,
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
    if (!customerPhone) {
      showNotification("Enter MTN number", "error");
      return;
    }
    if (!transactionRef) {
      showNotification("Enter transaction reference", "error");
      return;
    }
    if (amountPaid !== cartTotal) {
      showNotification(
        `Amount mismatch! Total is UGX ${cartTotal.toLocaleString()}`,
        "error",
      );
      return;
    }
  } else if (paymentMethod === "cod") {
    customerPhone = currentUser?.phone || "";
    transactionRef = "COD-" + Date.now();
    amountPaid = cartTotal;
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
    amountPaid,
  };

  const userOrders = JSON.parse(
    localStorage.getItem(`orders_${currentUser.email}`) || "[]",
  );
  userOrders.push(order);
  localStorage.setItem(
    `orders_${currentUser.email}`,
    JSON.stringify(userOrders),
  );

  const allOrders = JSON.parse(localStorage.getItem("all_orders") || "[]");
  allOrders.push({
    ...order,
    customerEmail: currentUser.email,
    customerName: currentUser.name,
  });
  localStorage.setItem("all_orders", JSON.stringify(allOrders));

  if (currentUser) {
    currentUser.totalOrders = (currentUser.totalOrders || 0) + 1;
    currentUser.totalSpent = (currentUser.totalSpent || 0) + cartTotal;
    updateUserData(currentUser);
  }

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();

  showNotification(`Order #${orderNumber} confirmed!`, "success");
  closeCheckoutModal();

  const paymentModal = document.getElementById("paymentConfirmationModal");
  if (paymentModal) {
    const confirmTitle = document.getElementById("confirmationTitle");
    const confirmMsg = document.getElementById("confirmationMessage");
    if (confirmTitle) confirmTitle.textContent = "✅ ORDER CONFIRMED!";
    if (confirmMsg)
      confirmMsg.innerHTML = `Order #${orderNumber}<br>Total: UGX ${cartTotal.toLocaleString()}<br>Delivery: 1-2 hours`;
    paymentModal.classList.add("active");
    setTimeout(() => paymentModal.classList.remove("active"), 4000);
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  if (modal) modal.classList.remove("active");
}
function closePaymentConfirmationModal() {
  const modal = document.getElementById("paymentConfirmationModal");
  if (modal) modal.classList.remove("active");
}

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
                <div style="background: white; padding:25px; border-radius:15px; text-align:center;"><i class="fas fa-trophy" style="font-size:40px; color:#ff9800;"></i><h2>${currentUser.totalOrders || 0}</h2><p>Lifetime Orders</p></div>
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
  const trackInput = document.getElementById("trackOrderNumber");
  if (trackInput) trackInput.value = orderNumber;
  showTracking();
  setTimeout(() => trackOrderAdvanced(), 500);
}

function reorderOrder(orderNumber) {
  const orders = JSON.parse(
    localStorage.getItem(`orders_${currentUser.email}`) || "[]",
  );
  const order = orders.find((o) => o.orderNumber === orderNumber);
  if (order && order.items) {
    order.items.forEach((item) => {
      const product = products.find((p) => p.name === item.name);
      if (product) addToCart(item.name, product.price);
    });
    showNotification("Items added to cart!", "success");
    showProducts();
  }
}

// ========== TRACKING FUNCTIONS ==========
function trackOrderAdvanced() {
  const orderNumber = document
    .getElementById("trackOrderNumber")
    ?.value.trim()
    .toUpperCase();
  if (!orderNumber) {
    showNotification("Please enter an order number", "error");
    return;
  }
  let order = null;
  if (currentUser) {
    const userOrders = JSON.parse(
      localStorage.getItem(`orders_${currentUser.email}`) || "[]",
    );
    order = userOrders.find((o) => o.orderNumber === orderNumber);
  }
  if (!order) {
    const allOrders = JSON.parse(localStorage.getItem("all_orders") || "[]");
    order = allOrders.find((o) => o.orderNumber === orderNumber);
  }
  if (!order) {
    document.getElementById("trackResult").innerHTML = `
            <div style="background: var(--card-bg); border-radius: 20px; padding: 40px; text-align: center;">
                <i class="fas fa-search" style="font-size: 60px; color: #ff6b6b; margin-bottom: 20px;"></i>
                <h3>Order Not Found</h3>
                <p>Order #${orderNumber} could not be found.</p>
                <button onclick="document.getElementById('trackOrderNumber').focus()" style="margin-top: 20px; background: #2e8b57; color: white; border: none; padding: 10px 25px; border-radius: 25px; cursor: pointer;">Try Again</button>
            </div>
        `;
    return;
  }
  displayFullOrderTracking(order);
}

function displayFullOrderTracking(order) {
  const currentStatus = order.status || "confirmed";
  const statusInfo = {
    confirmed: {
      label: "Order Confirmed",
      icon: "fa-check-circle",
      color: "#2196F3",
      step: 2,
      description: "Your order has been confirmed and is being processed.",
    },
    preparing: {
      label: "Preparing Your Order",
      icon: "fa-box",
      color: "#ff9800",
      step: 3,
      description: "Your items are being carefully packed by our team.",
    },
    onway: {
      label: "On The Way",
      icon: "fa-truck",
      color: "#ff6b6b",
      step: 5,
      description: "Your order is on the way to your delivery address!",
    },
    delivered: {
      label: "Delivered",
      icon: "fa-home",
      color: "#2e8b57",
      step: 6,
      description: "Your order has been delivered successfully!",
    },
    cancelled: {
      label: "Cancelled",
      icon: "fa-times-circle",
      color: "#999",
      step: 0,
      description: "Your order has been cancelled.",
    },
  };
  const current = statusInfo[currentStatus] || statusInfo.confirmed;
  const rider = getRiderByAddress(order.address);
  const orderDate = new Date(order.date);
  const estimatedDelivery = new Date(orderDate);
  estimatedDelivery.setHours(orderDate.getHours() + 2);
  const warehouseLat = 0.347596;
  const warehouseLng = 32.58252;
  let distance = 2.5;
  let etaMinutes = 15;
  if (currentStatus === "onway" && rider.lat && rider.lng) {
    distance = calculateDistance(
      warehouseLat,
      warehouseLng,
      rider.lat,
      rider.lng,
    );
    etaMinutes = Math.max(5, Math.round(distance * 4));
  }
  const totalSteps = 6;
  const progressPercent = (current.step / totalSteps) * 100;
  const timelineSteps = [
    {
      label: "Order Placed",
      icon: "fa-shopping-cart",
      time: orderDate,
      step: 1,
    },
    {
      label: "Order Confirmed",
      icon: "fa-check-circle",
      time: new Date(orderDate.getTime() + 5 * 60000),
      step: 2,
    },
    {
      label: "Preparing",
      icon: "fa-box",
      time: new Date(orderDate.getTime() + 15 * 60000),
      step: 3,
    },
    {
      label: "Ready for Pickup",
      icon: "fa-store",
      time: new Date(orderDate.getTime() + 30 * 60000),
      step: 4,
    },
    {
      label: "On The Way",
      icon: "fa-truck",
      time: new Date(orderDate.getTime() + 45 * 60000),
      step: 5,
    },
    {
      label: "Delivered",
      icon: "fa-home",
      time: currentStatus === "delivered" ? new Date() : null,
      step: 6,
    },
  ];
  let timelineHtml = '<div class="tracking-timeline">';
  for (let i = 0; i < timelineSteps.length; i++) {
    const step = timelineSteps[i];
    const isCompleted = current.step >= step.step;
    const isActive = current.step === step.step;
    const stepTime = step.time
      ? step.time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      : "Pending";
    timelineHtml += `
            <div class="timeline-step ${isCompleted ? "completed" : ""} ${isActive ? "active" : ""}">
                <div class="timeline-icon">
                    <i class="fas ${step.icon}"></i>
                    ${isCompleted ? '<span class="checkmark"><i class="fas fa-check"></i></span>' : ""}
                </div>
                <div class="timeline-content">
                    <div class="timeline-title">${step.label}</div>
                    <div class="timeline-time">${stepTime}</div>
                </div>
            </div>
        `;
    if (i < timelineSteps.length - 1) {
      timelineHtml += `<div class="timeline-connector ${isCompleted ? "completed" : ""}"></div>`;
    }
  }
  timelineHtml += "</div>";
  const progressBarHtml = `
        <div class="tracking-progress-bar">
            <div class="progress-label"><span>Delivery Progress</span><span>${Math.round(progressPercent)}%</span></div>
            <div class="progress-bar-track"><div class="progress-bar-fill" style="width: ${progressPercent}%"></div></div>
            <div class="progress-steps"><span>📦 Placed</span><span>✅ Confirmed</span><span>📦 Preparing</span><span>📍 Pickup</span><span>🚚 On Way</span><span>🏠 Delivered</span></div>
        </div>
    `;
  const itemsHtml = order.items
    ? order.items
        .map(
          (i) => `
        <div class="tracking-order-item"><span>${i.name} x${i.quantity}</span><span>UGX ${(i.price * i.quantity).toLocaleString()}</span></div>
    `,
        )
        .join("")
    : "<div>No items found</div>";
  let mapUrl;
  if (currentStatus === "onway") {
    mapUrl = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&origin=${warehouseLat},${warehouseLng}&destination=${encodeURIComponent(order.address || "Kampala, Uganda")}&mode=driving`;
  } else if (currentStatus === "delivered") {
    mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(order.address || "Kampala, Uganda")}&zoom=15`;
  } else {
    mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Kalerwe+Market+Kampala&center=${warehouseLat},${warehouseLng}&zoom=14`;
  }
  const resultHtml = `
        <div class="tracking-result-card">
            <div class="tracking-header"><div><h2><i class="fas fa-receipt"></i> Order #${order.orderNumber}</h2><p class="order-date">Placed: ${order.date || new Date().toLocaleString()}</p></div><div class="order-status-badge ${currentStatus}"><i class="fas ${current.icon}"></i> ${current.label}</div></div>
            <div class="status-description"><i class="fas fa-info-circle"></i><p>${current.description}</p><span class="eta-badge"><i class="fas fa-clock"></i> Est: ${estimatedDelivery.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span></div>
            ${progressBarHtml}
            <div class="timeline-container"><h3><i class="fas fa-history"></i> Delivery Timeline</h3>${timelineHtml}</div>
            <div class="live-map-container"><h3><i class="fas fa-map-marked-alt"></i> Live Location</h3><div class="live-map"><iframe src="${mapUrl}" allowfullscreen loading="lazy"></iframe></div><div class="map-status"><div class="map-status-icon"><i class="fas ${currentStatus === "onway" ? "fa-truck-fast" : currentStatus === "delivered" ? "fa-check-circle" : "fa-clock"}"></i></div><div class="map-status-text">${currentStatus === "onway" ? `🛵 Rider is on the way! Estimated delivery: ${estimatedDelivery.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : currentStatus === "delivered" ? "✅ Order delivered successfully! Enjoy your fresh produce! 🌱" : "📍 Your order is being prepared at our warehouse"}</div>${currentStatus === "onway" ? `<div class="map-status-distance"><div class="distance-value">${distance} km</div><div class="distance-label">remaining</div><div class="eta-value">${etaMinutes} min</div><div class="distance-label">ETA</div></div>` : ""}</div></div>
            ${currentStatus === "onway" ? `<div class="rider-info-card"><h3><i class="fas fa-motorcycle"></i> Delivery Partner</h3><div class="rider-details"><div class="rider-avatar"><i class="fas fa-user-circle"></i></div><div class="rider-info"><div class="rider-name"><strong>${rider.name}</strong><div class="rider-rating">${"★".repeat(Math.floor(rider.rating))}${"☆".repeat(5 - Math.floor(rider.rating))} (${rider.rating})</div></div><p><i class="fas fa-phone"></i> ${rider.phone}</p><p><i class="fas fa-motorcycle"></i> ${rider.vehicle} - ${rider.plateNumber}</p><p><i class="fas fa-trophy"></i> ${rider.deliveryCount}+ deliveries</p></div><div class="rider-actions"><a href="tel:${rider.phone}" class="call-rider-btn"><i class="fas fa-phone"></i> Call</a><a href="https://wa.me/${rider.phone}" target="_blank" class="whatsapp-rider-btn"><i class="fab fa-whatsapp"></i> Chat</a></div></div></div>` : ""}
            <div class="tracking-order-summary"><h3><i class="fas fa-shopping-bag"></i> Order Summary</h3><div class="order-items-list">${itemsHtml}</div><div class="order-total"><span>Total</span><strong>UGX ${(order.total || 0).toLocaleString()}</strong></div></div>
            <div class="delivery-address-card"><h3><i class="fas fa-location-dot"></i> Delivery Address</h3><p>${order.address || "Not specified"}</p><p class="payment-method"><strong>Payment:</strong> ${order.paymentMethod || "Cash on Delivery"}</p></div>
            <div class="tracking-actions"><button onclick="shareOrderTracking('${order.orderNumber}')" class="share-btn"><i class="fas fa-share-alt"></i> Share</button><button onclick="refreshTracking()" class="refresh-btn"><i class="fas fa-sync-alt"></i> Refresh</button><a href="https://wa.me/256764496110" target="_blank" class="support-btn"><i class="fab fa-whatsapp"></i> Help</a>${currentStatus !== "delivered" && currentStatus !== "cancelled" && currentStatus !== "onway" ? `<button onclick="cancelOrderFromTracking('${order.orderNumber}')" class="cancel-btn"><i class="fas fa-times"></i> Cancel</button>` : ""}</div>
        </div>
    `;
  document.getElementById("trackResult").innerHTML = resultHtml;
}

function shareOrderTracking(orderNumber) {
  const url = `${window.location.origin}${window.location.pathname}?track=${orderNumber}`;
  navigator.clipboard.writeText(`🚚 Track order #${orderNumber}: ${url}`);
  showNotification("Tracking link copied!", "success");
}

function refreshTracking() {
  const orderNumber = document
    .getElementById("trackOrderNumber")
    ?.value.trim()
    .toUpperCase();
  if (orderNumber) trackOrderAdvanced();
  else showNotification("Please enter an order number", "error");
}

function cancelOrderFromTracking(orderNumber) {
  if (!confirm("⚠️ Cancel this order? Cannot be undone.")) return;
  if (!currentUser) {
    showNotification("Please login", "error");
    showLoginModal();
    return;
  }
  let orders = JSON.parse(
    localStorage.getItem(`orders_${currentUser.email}`) || "[]",
  );
  const orderIndex = orders.findIndex((o) => o.orderNumber === orderNumber);
  if (
    orderIndex !== -1 &&
    (orders[orderIndex].status === "confirmed" ||
      orders[orderIndex].status === "preparing")
  ) {
    orders[orderIndex].status = "cancelled";
    localStorage.setItem(`orders_${currentUser.email}`, JSON.stringify(orders));
    const allOrders = JSON.parse(localStorage.getItem("all_orders") || "[]");
    const globalIndex = allOrders.findIndex(
      (o) => o.orderNumber === orderNumber,
    );
    if (globalIndex !== -1) allOrders[globalIndex].status = "cancelled";
    localStorage.setItem("all_orders", JSON.stringify(allOrders));
    showNotification(`Order #${orderNumber} cancelled`, "success");
    refreshTracking();
  } else {
    showNotification("Cannot cancel at this stage", "error");
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
  if (wishlist.length === 0) {
    container.innerHTML =
      '<p style="text-align:center; padding:40px;">Your wishlist is empty</p>';
  } else {
    container.innerHTML = wishlist
      .map(
        (item) => `
            <div class="wishlist-item">
                <img src="${item.image}" onerror="this.src='https://placehold.co/200x120/2e8b57/white?text=${item.name}'">
                <h4>${item.name}</h4>
                <p>UGX ${item.price.toLocaleString()}</p>
                <button class="add-to-cart-btn" onclick="addToCart('${item.name}', ${item.price}); closeWishlistModal();">Add to Cart</button>
                <button onclick="removeFromWishlist(${item.id})" style="background:#ff6b6b; color:white; border:none; padding:5px 10px; border-radius:20px; margin-top:5px;">Remove</button>
            </div>
        `,
      )
      .join("");
  }
  document.getElementById("wishlistModal").classList.add("active");
}
function closeWishlistModal() {
  document.getElementById("wishlistModal").classList.remove("active");
}
function removeFromWishlist(id) {
  wishlist = wishlist.filter((w) => w.id !== id);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistUI();
  showWishlist();
  filterProducts();
}

// ========== FAQ FUNCTIONS ==========
function loadFAQ() {
  const faqGrid = document.getElementById("faqGrid");
  if (!faqGrid) return;
  let filteredFAQs = faqData;
  if (currentFAQCategory !== "all")
    filteredFAQs = faqData.filter((faq) => faq.category === currentFAQCategory);
  const searchTerm =
    document.getElementById("faqSearchInput")?.value.toLowerCase().trim() || "";
  if (searchTerm)
    filteredFAQs = filteredFAQs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm) ||
        faq.answer.toLowerCase().includes(searchTerm),
    );
  if (filteredFAQs.length === 0) {
    faqGrid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px;"><i class="fas fa-search" style="font-size:48px; color:#999;"></i><p>No questions found.</p></div>`;
    return;
  }
  faqGrid.innerHTML = filteredFAQs
    .map(
      (faq) => `
        <div class="faq-item" data-category="${faq.category}">
            <div class="faq-question" onclick="toggleFAQ(this)"><span>${faq.question}</span><i class="fas fa-chevron-down"></i></div>
            <div class="faq-answer"><p>${faq.answer}</p></div>
        </div>
    `,
    )
    .join("");
}

function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector("i");
  document.querySelectorAll(".faq-answer").forEach((item) => {
    if (item !== answer && item.classList.contains("active")) {
      item.classList.remove("active");
      const otherIcon = item.previousElementSibling.querySelector("i");
      if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
    }
  });
  answer.classList.toggle("active");
  icon.style.transform = answer.classList.contains("active")
    ? "rotate(180deg)"
    : "rotate(0deg)";
}

function filterFAQ(category) {
  currentFAQCategory = category;
  document
    .querySelectorAll(".faq-cat-btn")
    .forEach((btn) => btn.classList.remove("active"));
  if (event && event.target) event.target.classList.add("active");
  loadFAQ();
}
function searchFAQ() {
  loadFAQ();
}

// ========== FLASH SALE ==========
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
  const saleItems = products.filter((p) => p.onSale === true);
  const container = document.getElementById("saleProducts");
  if (container) {
    if (saleItems.length === 0) {
      container.innerHTML =
        '<p style="text-align:center; color:white; padding:20px;">No products on sale at the moment</p>';
      return;
    }
    container.innerHTML = saleItems
      .map(
        (p) => `
            <div class="product-card" style="background: white; border-radius: 15px; padding: 15px; text-align: center; position: relative;">
                <div class="sale-badge" style="position: absolute; top: 10px; left: 10px; background: #ff6b6b; color: white; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: bold;">-15%</div>
                <img src="${p.image}" onerror="this.src='https://placehold.co/200x150/2e8b57/white?text=${p.name}'" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px;">
                <h4 style="margin: 10px 0 5px;">${p.name}</h4>
                <div class="old-price" style="text-decoration: line-through; color: #999; font-size: 12px;">UGX ${p.price.toLocaleString()}</div>
                <div class="sale-price" style="color: #ff6b6b; font-weight: bold; font-size: 16px;">UGX ${p.salePrice.toLocaleString()}</div>
                <button class="add-to-cart-btn" onclick="addToCart('${p.name}', ${p.salePrice})" style="background: #2e8b57; color: white; border: none; padding: 10px; border-radius: 50px; cursor: pointer; width: 100%; margin-top: 8px;">Add to Cart</button>
            </div>
        `,
      )
      .join("");
  }
}

// ========== THEME TOGGLE ==========
function toggleTheme() {
  const themeText = document.getElementById("themeText");
  const themeIcon = document.querySelector(".theme-toggle i");
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
    if (themeText) themeText.textContent = "Dark";
    if (themeIcon) themeIcon.className = "fas fa-moon";
  } else {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
    if (themeText) themeText.textContent = "Light";
    if (themeIcon) themeIcon.className = "fas fa-sun";
  }
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  const themeText = document.getElementById("themeText");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    if (themeText) themeText.textContent = "Light";
  }
}

function applyUserThemePref() {
  const pref = document.getElementById("userThemePref")?.value;
  if (pref === "dark") document.body.classList.add("dark-theme");
  else if (pref === "light") document.body.classList.remove("dark-theme");
}

// ========== AI CHAT ==========
function sendChatMessage() {
  const input = document.getElementById("chatInput");
  const msg = input?.value.trim();
  if (!msg) return;
  const chatDiv = document.getElementById("chatMessages");
  chatDiv.innerHTML += `<div style="background:#2e8b57; color:white; padding:10px; border-radius:10px; margin:5px 0; text-align:right;">${msg}</div>`;
  input.value = "";
  setTimeout(() => {
    let response = "Thank you for your message! How can I help you today?";
    const lowerMsg = msg.toLowerCase();
    if (lowerMsg.includes("delivery"))
      response =
        "🚚 Delivery takes 1-2 hours in Kampala. Free delivery on orders over UGX 50,000!";
    else if (lowerMsg.includes("payment"))
      response =
        "💳 We accept Airtel Money (7104763), MTN MoMo (61967992), and Cash on Delivery.";
    else if (lowerMsg.includes("track"))
      response =
        "📍 Go to Track Order page and enter your order number to see live status with map, distance, and ETA.";
    else if (lowerMsg.includes("price"))
      response =
        "💰 Fresh Tomatoes: 5,500/kg, Onions: 3,000/kg, Strawberries: 20,000/punnet!";
    else
      response =
        "👋 I can help with: products 📦, delivery 🚚, payments 💳, order tracking 📍, and cancellations ❌!";
    chatDiv.innerHTML += `<div style="background:var(--card-bg); padding:10px; border-radius:10px; margin:5px 0;">${response}</div>`;
    chatDiv.scrollTop = chatDiv.scrollHeight;
  }, 500);
}

function transferToHuman() {
  window.open("https://wa.me/256764496110", "_blank");
}

function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.style.background =
    type === "success" ? "#2e8b57" : type === "error" ? "#ff6b6b" : "#2196F3";
  notification.innerHTML = `<i class="fas ${type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-info-circle"}"></i> ${message}`;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

// ========== INITIALIZATION ==========
document.addEventListener("DOMContentLoaded", function () {
  console.log("Fresh Wave website loaded - Guest browsing enabled!");
  initializeUserDatabase();
  checkLoginStatus();
  initHeroSlideshow();
  loadSavedTheme();
  updateCartUI();
  updateUserUI();
  updateWishlistUI();
  filterProducts();
  loadSaleProducts();
  initFlashSaleTimer();
  loadPricingTable();
  loadGallery();
  loadFAQ();

  const profileImageInput = document.getElementById("profileImageInput");
  if (profileImageInput) {
    profileImageInput.addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (file && currentUser) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          currentUser.profileImage = ev.target.result;
          updateUserData(currentUser);
          document.getElementById("profileImage").src = ev.target.result;
          showNotification("Profile picture updated!", "success");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showNotification("Message sent! We'll reply soon.", "success");
      contactForm.reset();
    });
  }

  window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      if (event.target === modal) modal.classList.remove("active");
    });
  };
});
let currentGalleryCategory = "all";

function filterGallery(category) {
  currentGalleryCategory = category;

  let filteredProducts = products;
  if (category !== "all") {
    filteredProducts = products.filter((p) => p.category === category);
  }

  const galleryHtml = filteredProducts
    .map(
      (p) => `
        <div class="gallery-item">
            <img src="${p.image}" onerror="this.src='https://placehold.co/400x250/2e8b57/white?text=${p.name}'">
            <div class="gallery-caption">
                <strong>${p.name}</strong><br>
                UGX ${p.price.toLocaleString()}/${p.unit}
            </div>
        </div>
    `,
    )
    .join("");

  document.getElementById("galleryGrid").innerHTML = galleryHtml;

  // Update active button
  document.querySelectorAll(".gallery-filter-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (
      btn.textContent.toLowerCase().includes(category) ||
      (category === "all" && btn.textContent === "All")
    ) {
      btn.classList.add("active");
    }
  });
}

// Update loadGallery to use current category
function loadGallery() {
  filterGallery(currentGalleryCategory);
}
// ========== WHATSAPP NOTIFICATION FUNCTION ==========
function sendWhatsAppNotification(order, type = "new_order") {
    // Format items list beautifully
    const itemsList = order.items.map((item, index) => {
        return `${index + 1}. ${item.name} x${item.quantity} = UGX ${(item.price * item.quantity).toLocaleString()}`;
    }).join("%0A");
    
    const totalItems = order.items.reduce((sum, item) => sum + item.quantity, 0);
    const orderDate = new Date(order.date).toLocaleString();
    
    // Complete WhatsApp message with all details for MERCHANT
    const merchantMessage = `🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
🆕🆕🆕🆕 NEW ORDER RECEIVED! 🆕🆕🆕🆕
🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 ORDER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔹 Order Number: ${order.orderNumber}
🔹 Order Date: ${orderDate}
🔹 Order Status: ${order.status || "CONFIRMED"}
🔹 Payment Status: ✅ VERIFIED

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 PAYMENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔹 Payment Method: ${order.paymentMethod}
🔹 Total Amount: UGX ${order.total.toLocaleString()}
🔹 Amount Paid: UGX ${(order.amountPaid || order.total).toLocaleString()}
🔹 Transaction Ref: ${order.transactionRef || "N/A"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 CUSTOMER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔹 Customer Name: ${currentUser?.name || "Guest User"}
🔹 Email Address: ${currentUser?.email || "Not provided"}
🔹 Phone Number: ${order.customerPhone || currentUser?.phone || "Not provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 DELIVERY INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔹 Delivery Address: ${order.address || "Not specified"}
🔹 Estimated Delivery: 1-2 hours
🔹 Delivery Zone: Kampala Metropolitan

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 ORDER ITEMS (${totalItems} items)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${itemsList}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 TOTAL ITEMS: ${totalItems} pcs
💰 GRAND TOTAL: UGX ${order.total.toLocaleString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅✅✅ ORDER CONFIRMED - READY FOR PROCESSING ✅✅✅

🚚 Delivery will be dispatched within 30 minutes.
📞 Contact customer: ${order.customerPhone || currentUser?.phone || "N/A"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Fresh Wave Uganda - Quality Produce Delivered Fresh!
🌱 www.freshwave.ug | 📞 +256 745 942 209
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

    // Send to Merchant WhatsApp (your business number)
    const merchantWhatsApp = "256764496110";
    window.open(`https://wa.me/${merchantWhatsApp}?text=${encodeURIComponent(merchantMessage)}`, "_blank");
    
    // Also send confirmation to customer if phone number exists
    if (order.customerPhone || currentUser?.phone) {
        const customerPhone = (order.customerPhone || currentUser?.phone).replace(/^0/, '256');
        const customerMessage = `🎉 *ORDER CONFIRMATION - Fresh Wave* 🎉

Thank you for shopping with Fresh Wave, ${currentUser?.name || "Valued Customer"}!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 *Order #${order.orderNumber}*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 *Total Amount:* UGX ${order.total.toLocaleString()}
💳 *Payment Method:* ${order.paymentMethod}
🚚 *Estimated Delivery:* 1-2 hours

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 *Items Ordered:*
${order.items.map(i => `• ${i.name} x${i.quantity} = UGX ${(i.price * i.quantity).toLocaleString()}`).join("%0A")}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 *Delivery Address:* ${order.address}

You can track your order status in your dashboard.

Thank you for choosing Fresh Wave! 🌱

Need help? Contact us on WhatsApp: +256 764 496 110`;
        
        setTimeout(() => {
            window.open(`https://wa.me/${customerPhone}?text=${encodeURIComponent(customerMessage)}`, "_blank");
        }, 1500);
    }
}